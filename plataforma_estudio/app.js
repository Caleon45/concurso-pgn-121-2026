// LÓGICA DE LA PLATAFORMA DE ESTUDIO INTERACTIVA - PROCURADURÍA 3PU-15
// MODALIDAD SECUENCIAL: DESBLOQUEO PROGRESIVO CONDICIONADO A DOMINIO DEL 100% EN CADA UNIDAD

const app = {
  currentView: "dashboard",
  activeUnit: null,
  activeUnitTab: "modules",

  // Estado del Examen de la Unidad (Evaluación Parcial Continua)
  unitExamState: {
    currentIdx: 0,
    answers: {}, // { [questionIdx]: selectedOptionIdx }
    isSubmitted: false
  },
  
  // Estado del Simulacro General de Conocimientos (70%)
  mockState: {
    inProgress: false,
    currentIdx: 0,
    answers: {},
    timerSeconds: 45 * 60,
    timerInterval: null
  },

  // Estado del Simulacro Comportamental (20%)
  behavioralState: {
    currentIdx: 0,
    answers: {}
  },

  init() {
    this.ensureUnlockIntegrity();
    this.bindEvents();
    this.renderUnits();
    this.updateGlobalProgress();
    this.updateDashboardStats();
  },

  // Asegurar que la Unidad 1 siempre esté desbloqueada inicialmente
  ensureUnlockIntegrity() {
    let unlocked = this.getUnlockedUnits();
    if (!unlocked.includes(1)) {
      unlocked.push(1);
      localStorage.setItem("pgn_unlocked_units", JSON.stringify(unlocked));
    }
  },

  getUnlockedUnits() {
    const raw = localStorage.getItem("pgn_unlocked_units");
    return raw ? JSON.parse(raw) : [1];
  },

  getCompletedUnits() {
    const raw = localStorage.getItem("pgn_completed_units");
    return raw ? JSON.parse(raw) : [];
  },

  bindEvents() {
    document.querySelectorAll(".sidebar-nav .nav-item").forEach(item => {
      item.addEventListener("click", () => {
        const view = item.getAttribute("data-view");
        this.navigateTo(view);
      });
    });

    const filterElem = document.getElementById("filter-level");
    if (filterElem) {
      filterElem.addEventListener("change", (e) => {
        this.renderUnits(e.target.value);
      });
    }

    document.getElementById("btn-reset-progress").addEventListener("click", () => {
      if (confirm("¿Estás seguro de reiniciar todo tu historial de estudio? Todas las unidades volverán a bloquearse secuencialmente excepto la Unidad 01.")) {
        localStorage.removeItem("pgn_completed_units");
        localStorage.removeItem("pgn_unlocked_units");
        localStorage.removeItem("pgn_best_score");
        localStorage.removeItem("pgn_unit_scores");
        this.ensureUnlockIntegrity();
        this.updateGlobalProgress();
        this.renderUnits();
        this.updateDashboardStats();
        alert("El progreso se ha reiniciado. Comienzas de nuevo con la Unidad 01.");
      }
    });

    document.getElementById("btn-quick-exam").addEventListener("click", () => {
      this.navigateTo("mock-knowledge");
      this.startMockKnowledge();
    });

    // Controles del Examen de Unidad
    document.getElementById("btn-next-quiz-q").addEventListener("click", () => {
      const total = this.activeUnit.quiz.length;
      if (this.unitExamState.currentIdx < total - 1) {
        this.unitExamState.currentIdx++;
        this.renderUnitExamQuestion();
      } else {
        this.submitUnitExam();
      }
    });

    document.getElementById("btn-prev-quiz-q").addEventListener("click", () => {
      if (this.unitExamState.currentIdx > 0) {
        this.unitExamState.currentIdx--;
        this.renderUnitExamQuestion();
      }
    });

    // Controles del Simulacro General de Conocimientos
    document.getElementById("btn-mock-next").addEventListener("click", () => {
      if (this.mockState.currentIdx < STUDY_DATA.mockExamKnowledge.length - 1) {
        this.mockState.currentIdx++;
        this.renderMockQuestion();
      } else {
        this.finishMockKnowledge();
      }
    });

    document.getElementById("btn-mock-prev").addEventListener("click", () => {
      if (this.mockState.currentIdx > 0) {
        this.mockState.currentIdx--;
        this.renderMockQuestion();
      }
    });

    // Controles del Simulacro Comportamental
    document.getElementById("btn-behavioral-next").addEventListener("click", () => {
      if (this.behavioralState.currentIdx < STUDY_DATA.mockExamBehavioral.length - 1) {
        this.behavioralState.currentIdx++;
        this.renderBehavioralQuestion();
      } else {
        this.finishMockBehavioral();
      }
    });

    document.getElementById("btn-behavioral-prev").addEventListener("click", () => {
      if (this.behavioralState.currentIdx > 0) {
        this.behavioralState.currentIdx--;
        this.renderBehavioralQuestion();
      }
    });
  },

  navigateTo(viewId) {
    this.currentView = viewId;
    document.querySelectorAll(".view-panel").forEach(p => p.classList.remove("active"));
    document.querySelectorAll(".sidebar-nav .nav-item").forEach(n => n.classList.remove("active"));

    const targetPanel = document.getElementById(`view-${viewId}`);
    if (targetPanel) targetPanel.classList.add("active");

    const navItem = document.querySelector(`.sidebar-nav .nav-item[data-view="${viewId}"]`);
    if (navItem) navItem.classList.add("active");

    const topbarTitle = document.getElementById("topbar-title");
    const topbarSub = document.getElementById("topbar-subtitle");

    if (viewId === "dashboard") {
      topbarTitle.textContent = "Panel de Control de Preparación";
      topbarSub.textContent = "Concurso Abierto de Méritos PGN No. 121-2026 (DAEADI)";
      this.updateDashboardStats();
    } else if (viewId === "units") {
      topbarTitle.textContent = "Unidades Didácticas de Aprendizaje Secuencial";
      topbarSub.textContent = "Avanza superando la evaluación con el 100% de dominio para desbloquear el siguiente módulo";
      this.renderUnits();
    } else if (viewId === "mock-knowledge") {
      topbarTitle.textContent = "Simulador Oficial de Conocimientos (70%)";
      topbarSub.textContent = "Prueba Presencial de Juicio Situacional • Carácter Eliminatorio (Mín. 65 / 100 pts)";
      if (!this.mockState.inProgress) this.startMockKnowledge();
    } else if (viewId === "mock-behavioral") {
      topbarTitle.textContent = "Simulador de Competencias Comportamentales (20%)";
      topbarSub.textContent = "Evaluación de Criterio Conductual del Perfil Profesional Universitario 3PU-15";
      this.startMockBehavioral();
    } else if (viewId === "guide") {
      topbarTitle.textContent = "Técnicas de Descarte en Juicio Situacional (SJT)";
      topbarSub.textContent = "Metodología Oficial de Respuesta para Concursos de la Procuraduría";
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  },

  // Control de pestañas dentro de la unidad abierta
  switchUnitTab(tabKey) {
    this.activeUnitTab = tabKey;
    document.querySelectorAll(".unit-tab-btn").forEach(btn => btn.classList.remove("active"));
    document.querySelectorAll(".unit-tab-content").forEach(c => c.classList.remove("active"));

    const btn = document.getElementById(`tab-btn-${tabKey}`);
    if (btn) btn.classList.add("active");

    const content = document.getElementById(`unit-tab-${tabKey}`);
    if (content) content.classList.add("active");

    window.scrollTo({ top: 220, behavior: "smooth" });
  },

  // Renderizar la lista de 16 unidades con el candado secuencial
  renderUnits(levelFilter = "all") {
    const container = document.getElementById("units-container");
    if (!container) return;
    container.innerHTML = "";

    const unlockedUnits = this.getUnlockedUnits();
    const completedUnits = this.getCompletedUnits();

    STUDY_DATA.units.forEach((u, index) => {
      if (levelFilter !== "all" && u.level !== levelFilter) return;

      const isUnlocked = unlockedUnits.includes(u.id);
      const isCompleted = completedUnits.includes(u.id);

      const card = document.createElement("div");
      card.className = `unit-card ${isUnlocked ? '' : 'locked'}`;

      if (isUnlocked) {
        card.onclick = () => this.openUnitDetail(u.id);
      } else {
        card.onclick = () => {
          const prevUnit = STUDY_DATA.units[index - 1];
          alert(`🔒 UNIDAD BLOQUEADA\n\nPara desbloquear la "Unidad ${u.number}: ${u.title}", debes estudiar y aprobar la evaluación de la "Unidad ${prevUnit ? prevUnit.number : ''}" alcanzando el 100% de dominio.`);
        };
      }

      const levelClass = u.level.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

      card.innerHTML = `
        <div class="unit-header">
          <span class="unit-num">Unidad ${u.number}</span>
          ${isUnlocked ? `<span class="unit-level level-${levelClass}">${u.level}</span>` : `<span class="locked-badge">🔒 Bloqueada</span>`}
        </div>
        <div class="unit-category">${u.category}</div>
        <h3>${u.title}</h3>
        <p>${u.summary}</p>
        <div class="unit-card-footer">
          <span style="color: var(--text-muted);">⏱️ ${u.duration}</span>
          <div class="quiz-status ${isCompleted ? 'status-completed' : (isUnlocked ? 'status-pending' : '')}">
            ${isCompleted ? '✓ Aprobada (100% Dominado)' : (isUnlocked ? '○ Desbloqueada • En Estudio' : '🔒 Requiere Unidad ' + (index > 0 ? STUDY_DATA.units[index-1].number : ''))}
          </div>
        </div>
      `;
      container.appendChild(card);
    });
  },

  // Abrir y poblar el detalle exhaustivo de una unidad
  openUnitDetail(unitId) {
    const unlockedUnits = this.getUnlockedUnits();
    if (!unlockedUnits.includes(unitId)) {
      alert("Esta unidad está bloqueada. Debes aprobar la unidad previa con el 100%.");
      return;
    }

    const unit = STUDY_DATA.units.find(u => u.id === unitId);
    if (!unit) return;

    this.activeUnit = unit;
    this.unitExamState.currentIdx = 0;
    this.unitExamState.answers = {};
    this.unitExamState.isSubmitted = false;

    // Encabezado
    document.getElementById("detail-unit-num").textContent = `Unidad ${unit.number}`;
    document.getElementById("detail-unit-level").textContent = unit.level;
    document.getElementById("detail-unit-level").className = `unit-level level-${unit.level.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`;
    document.getElementById("detail-unit-duration").textContent = `⏱️ ${unit.duration}`;
    document.getElementById("detail-unit-title").textContent = unit.title;
    document.getElementById("detail-unit-summary").textContent = unit.summary;

    // Pestaña 1: Marco Normativo Primario
    const normList = document.getElementById("detail-unit-normativa");
    normList.innerHTML = unit.normativa.map(n => `<li>${n}</li>`).join("");

    // Pestaña 1: Módulos Teóricos Profundos
    const modulesContainer = document.getElementById("detail-unit-deep-modules");
    if (unit.deepModules && unit.deepModules.length > 0) {
      modulesContainer.innerHTML = unit.deepModules.map((m, idx) => `
        <div class="deep-module-box">
          <h3><span>📌 Módulo ${idx+1}:</span> ${m.title}</h3>
          <p>${m.content}</p>
          ${m.legalQuote ? `<div class="legal-quote">⚖️ <strong>Cita Normativa / Jurisprudencial:</strong> "${m.legalQuote}"</div>` : ''}
          ${m.bulletPoints && m.bulletPoints.length > 0 ? `
            <ul>
              ${m.bulletPoints.map(bp => `<li>${bp}</li>`).join("")}
            </ul>
          ` : ''}
        </div>
      `).join("");
    } else {
      // Fallback a keyPoints tradicionales
      modulesContainer.innerHTML = (unit.keyPoints || []).map((kp, idx) => `
        <div class="deep-module-box">
          <h3><span>💡 Concepto ${idx+1}:</span> ${kp.concept}</h3>
          <p>${kp.detail}</p>
        </div>
      `).join("");
    }

    // Pestaña 1: Caso Práctico DAEADI y Tip de Examen
    document.getElementById("detail-unit-example").textContent = unit.practicalExample;
    document.getElementById("detail-unit-tip").textContent = unit.examTip;

    // Pestaña 2: Fuentes e Investigaciones Oficiales (10+)
    const sourcesContainer = document.getElementById("detail-unit-sources-container");
    if (unit.officialInvestigations && unit.officialInvestigations.length > 0) {
      sourcesContainer.innerHTML = unit.officialInvestigations.map(s => `
        <div class="research-source-card">
          <span class="source-badge">${s.type}</span>
          <h4>${s.title}</h4>
          <p>${s.description}</p>
          ${s.relevance ? `<p style="margin-top: 6px; font-size: 0.82rem; color: var(--accent-gold);">🎯 <strong>Aplicación al examen:</strong> ${s.relevance}</p>` : ''}
        </div>
      `).join("");
    } else {
      sourcesContainer.innerHTML = "<p style='color: var(--text-secondary);'>Investigaciones oficiales en consolidación.</p>";
    }

    // Pestaña 3: Glosario Técnico y Jurídico
    const glossaryContainer = document.getElementById("detail-unit-glossary-container");
    if (unit.glossary && unit.glossary.length > 0) {
      glossaryContainer.innerHTML = unit.glossary.map(g => `
        <div class="glossary-card">
          <h4>📖 ${g.term}</h4>
          <p>${g.definition}</p>
        </div>
      `).join("");
    } else {
      glossaryContainer.innerHTML = "<p style='color: var(--text-secondary);'>Glosario en consolidación.</p>";
    }

    // Pestaña 4: Inicializar Examen de Juicio Situacional
    document.getElementById("unit-exam-title").textContent = `Evaluación de Juicio Situacional - Unidad ${unit.number}`;
    document.getElementById("unit-exam-active-card").style.display = "block";
    document.getElementById("unit-exam-diagnostic-card").style.display = "none";
    this.renderUnitExamQuestion();

    // Activar primera pestaña por defecto
    this.switchUnitTab("modules");

    this.currentView = "unit-detail";
    document.querySelectorAll(".view-panel").forEach(p => p.classList.remove("active"));
    document.getElementById("view-unit-detail").classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  },

  // Renderizar la pregunta actual del Examen de Unidad (Flujo Continuo sin spoilers)
  renderUnitExamQuestion() {
    const unit = this.activeUnit;
    const qIdx = this.unitExamState.currentIdx;
    const total = unit.quiz.length;
    const q = unit.quiz[qIdx];

    document.getElementById("quiz-q-index").textContent = qIdx + 1;
    document.getElementById("quiz-q-total").textContent = total;

    // Actualizar Badges de Dificultad y Tipología
    const diffBadge = document.getElementById("quiz-q-diff-badge");
    const typeBadge = document.getElementById("quiz-q-type-badge");
    const difficulty = q.difficulty || "Media";
    const qType = q.type || "Juicio Situacional (SJT)";

    if (diffBadge) {
      diffBadge.className = "badge-difficulty";
      if (difficulty.toLowerCase().includes("facil") || difficulty.toLowerCase().includes("fácil")) {
        diffBadge.classList.add("badge-diff-facil");
        diffBadge.innerHTML = `🟢 Dificultad: Fácil`;
      } else if (difficulty.toLowerCase().includes("dificil") || difficulty.toLowerCase().includes("difícil")) {
        diffBadge.classList.add("badge-diff-dificil");
        diffBadge.innerHTML = `🔴 Dificultad: Difícil`;
      } else {
        diffBadge.classList.add("badge-diff-media");
        diffBadge.innerHTML = `🟡 Dificultad: Media`;
      }
    }

    if (typeBadge) {
      typeBadge.className = "badge-qtype";
      if (qType.toLowerCase().includes("conceptual") || qType.toLowerCase().includes("normativ")) {
        typeBadge.innerHTML = `📐 ${qType}`;
      } else {
        typeBadge.innerHTML = `⚖️ ${qType}`;
      }
    }

    document.getElementById("quiz-case-text").textContent = q.case;
    document.getElementById("quiz-question-text").textContent = q.question;

    document.getElementById("btn-prev-quiz-q").disabled = qIdx === 0;
    const nextBtn = document.getElementById("btn-next-quiz-q");
    nextBtn.textContent = (qIdx === total - 1) ? "Finalizar y Calificar Evaluación 🏁" : "Siguiente Pregunta →";

    const optList = document.getElementById("quiz-options-list");
    optList.innerHTML = "";
    const letters = ["A", "B", "C"];

    q.options.forEach((optText, optIdx) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      if (this.unitExamState.answers[qIdx] === optIdx) {
        btn.classList.add("selected");
      }
      btn.innerHTML = `<span class="letter">${letters[optIdx]}</span> <span>${optText}</span>`;
      btn.onclick = () => {
        this.unitExamState.answers[qIdx] = optIdx;
        this.renderUnitExamQuestion();
      };
      optList.appendChild(btn);
    });
  },

  // Calificar el Examen de Unidad al culminar todas las preguntas
  submitUnitExam() {
    const unit = this.activeUnit;
    const total = unit.quiz.length;

    // Verificar si contestó todas
    let unanswered = 0;
    for (let i = 0; i < total; i++) {
      if (this.unitExamState.answers[i] === undefined) unanswered++;
    }

    if (unanswered > 0) {
      if (!confirm(`Tienes ${unanswered} pregunta(s) sin responder. ¿Deseas entregar la evaluación de todos modos?`)) {
        return;
      }
    }

    let correctCount = 0;
    let diffStats = {
      facil: { total: 0, correct: 0 },
      media: { total: 0, correct: 0 },
      dificil: { total: 0, correct: 0 }
    };

    unit.quiz.forEach((q, idx) => {
      const isCorrect = (this.unitExamState.answers[idx] === q.correct);
      if (isCorrect) correctCount++;

      const d = (q.difficulty || "Media").toLowerCase();
      if (d.includes("facil") || d.includes("fácil")) {
        diffStats.facil.total++;
        if (isCorrect) diffStats.facil.correct++;
      } else if (d.includes("dificil") || d.includes("difícil")) {
        diffStats.dificil.total++;
        if (isCorrect) diffStats.dificil.correct++;
      } else {
        diffStats.media.total++;
        if (isCorrect) diffStats.media.correct++;
      }
    });

    const percentage = Math.round((correctCount / total) * 100);
    const isPerfect = (correctCount === total); // 100% de dominio exigido

    // Ocultar preguntas y mostrar diagnóstico
    document.getElementById("unit-exam-active-card").style.display = "none";
    const diagCard = document.getElementById("unit-exam-diagnostic-card");
    diagCard.style.display = "block";

    const banner = document.getElementById("unit-exam-score-banner");
    const diagTitle = document.getElementById("unit-diagnostic-title");
    const diagMsg = document.getElementById("unit-diagnostic-message");

    const diffBreakdownHtml = `
      <div style="display: flex; justify-content: center; gap: 12px; margin: 14px 0; flex-wrap: wrap;">
        ${diffStats.facil.total > 0 ? `<span class="badge-difficulty badge-diff-facil">🟢 Fáciles: ${diffStats.facil.correct}/${diffStats.facil.total}</span>` : ''}
        ${diffStats.media.total > 0 ? `<span class="badge-difficulty badge-diff-media">🟡 Medias: ${diffStats.media.correct}/${diffStats.media.total}</span>` : ''}
        ${diffStats.dificil.total > 0 ? `<span class="badge-difficulty badge-diff-dificil">🔴 Difíciles: ${diffStats.dificil.correct}/${diffStats.dificil.total}</span>` : ''}
      </div>
    `;

    if (isPerfect) {
      banner.className = "score-banner-100 success";
      diagTitle.textContent = `🎉 ¡DOMINIO TOTAL! 100% (${correctCount}/${total} Aciertos)`;
      diagTitle.style.color = "var(--accent-green)";

      // Registrar unidad aprobada
      let completed = this.getCompletedUnits();
      if (!completed.includes(unit.id)) {
        completed.push(unit.id);
        localStorage.setItem("pgn_completed_units", JSON.stringify(completed));
      }

      // Desbloquear la siguiente unidad
      let unlocked = this.getUnlockedUnits();
      const currentUnitIndex = STUDY_DATA.units.findIndex(u => u.id === unit.id);
      let nextUnitTitle = "";

      if (currentUnitIndex < STUDY_DATA.units.length - 1) {
        const nextUnit = STUDY_DATA.units[currentUnitIndex + 1];
        if (!unlocked.includes(nextUnit.id)) {
          unlocked.push(nextUnit.id);
          localStorage.setItem("pgn_unlocked_units", JSON.stringify(unlocked));
        }
        nextUnitTitle = `<br><br>🔓 <strong>¡Has desbloqueado con éxito la Unidad ${nextUnit.number}: ${nextUnit.title}!</strong> Ya puedes avanzar a ella desde el menú de unidades.`;
      }

      diagMsg.innerHTML = `Has respondido acertadamente todas las situaciones de juicio situacional e inferenciación jurídica de esta unidad, demostrando solvencia teórica y competencia aplicada en el contexto de la DAEADI.${diffBreakdownHtml}${nextUnitTitle}`;
      this.updateGlobalProgress();
      this.updateDashboardStats();
    } else {
      banner.className = "score-banner-100 failed";
      diagTitle.textContent = `⚠️ PUNTAJE OBTENIDO: ${percentage}% (${correctCount} de ${total} Aciertos)`;
      diagTitle.style.color = "var(--accent-red)";
      diagMsg.innerHTML = `Para desbloquear la siguiente unidad se exige alcanzar el <strong>100% de aciertos</strong>.<br>A continuación encuentras el desglose de tus fallos y aciertos con la fundamentación legal y técnica. Estúdialos a fondo y pulsa el botón de reintento hasta dominarla por completo.${diffBreakdownHtml}`;
    }

    // Renderizar desglose de cada pregunta con su justificación
    const itemsContainer = document.getElementById("unit-diagnostic-items-container");
    itemsContainer.innerHTML = "";
    const letters = ["A", "B", "C"];

    unit.quiz.forEach((q, idx) => {
      const userChoice = this.unitExamState.answers[idx];
      const isCorrect = (userChoice === q.correct);
      const difficulty = q.difficulty || "Media";
      const qType = q.type || "Juicio Situacional (SJT)";

      let diffClass = "badge-diff-media";
      let diffIcon = "🟡";
      if (difficulty.toLowerCase().includes("facil") || difficulty.toLowerCase().includes("fácil")) {
        diffClass = "badge-diff-facil";
        diffIcon = "🟢";
      } else if (difficulty.toLowerCase().includes("dificil") || difficulty.toLowerCase().includes("difícil")) {
        diffClass = "badge-diff-dificil";
        diffIcon = "🔴";
      }

      const div = document.createElement("div");
      div.className = `diagnostic-item ${isCorrect ? 'is-correct' : 'is-wrong'}`;
      div.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; flex-wrap: wrap; gap: 8px;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <strong style="color: #fff; font-size: 0.95rem;">Pregunta #${idx+1}</strong>
            <span class="badge-difficulty ${diffClass}">${diffIcon} ${difficulty}</span>
            <span class="badge-qtype">${qType}</span>
          </div>
          <span style="color: ${isCorrect ? 'var(--accent-green)' : 'var(--accent-red)'}; font-weight: 700; font-size: 0.85rem;">
            ${isCorrect ? '✓ Correcta (Acierto)' : '✗ Incorrecta (Requiere Refuerzo)'}
          </span>
        </div>
        <p style="font-size: 0.88rem; color: #94a3b8; margin-bottom: 8px; line-height: 1.5;">${q.case}</p>
        <p style="font-size: 0.92rem; color: #ffffff; font-weight: 600; margin-bottom: 12px; line-height: 1.5;">${q.question}</p>
        
        <div style="font-size: 0.88rem; margin-bottom: 6px; color: ${isCorrect ? 'var(--accent-green)' : 'var(--accent-red)'};">
          <strong>Tu elección:</strong> ${userChoice !== undefined ? `${letters[userChoice]}. ${q.options[userChoice]}` : '<em>Sin responder</em>'}
        </div>
        
        ${!isCorrect ? `
          <div style="font-size: 0.88rem; color: var(--accent-green); margin-bottom: 10px;">
            <strong>Opción Correcta Legal:</strong> ${letters[q.correct]}. ${q.options[q.correct]}
          </div>
        ` : ''}

        <div style="font-size: 0.88rem; background: rgba(30, 41, 59, 0.7); padding: 12px 16px; border-radius: 6px; color: #e2e8f0; line-height: 1.6; border-left: 3px solid var(--accent-gold);">
          ⚖️ <strong>Fundamentación Jurídico-Técnica y Análisis del Descarte:</strong><br>${q.explanation}
        </div>
      `;
      itemsContainer.appendChild(div);
    });

    window.scrollTo({ top: 400, behavior: "smooth" });
  },

  // Reintentar el examen de la unidad
  retryUnitExam() {
    this.unitExamState.currentIdx = 0;
    this.unitExamState.answers = {};
    document.getElementById("unit-exam-active-card").style.display = "block";
    document.getElementById("unit-exam-diagnostic-card").style.display = "none";
    this.renderUnitExamQuestion();
    window.scrollTo({ top: 300, behavior: "smooth" });
  },

  // --- SIMULACRO OFICIAL DE CONOCIMIENTOS (70% ELIMINATORIO) ---
  startMockKnowledge() {
    this.mockState.inProgress = true;
    this.mockState.currentIdx = 0;
    this.mockState.answers = {};
    this.mockState.timerSeconds = 45 * 60;

    document.getElementById("mock-question-container").style.display = "block";
    document.getElementById("mock-results-container").style.display = "none";

    clearInterval(this.mockState.timerInterval);
    this.mockState.timerInterval = setInterval(() => {
      this.mockState.timerSeconds--;
      if (this.mockState.timerSeconds <= 0) {
        clearInterval(this.mockState.timerInterval);
        alert("¡Tiempo cumplido en el simulacro oficial!");
        this.finishMockKnowledge();
      }
      this.updateTimerDisplay();
    }, 1000);

    this.renderMockQuestion();
  },

  updateTimerDisplay() {
    const m = Math.floor(this.mockState.timerSeconds / 60);
    const s = this.mockState.timerSeconds % 60;
    const formatted = `⏱️ ${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    const timerElem = document.getElementById("mock-timer");
    if (timerElem) timerElem.textContent = formatted;
  },

  renderMockQuestion() {
    const idx = this.mockState.currentIdx;
    const total = STUDY_DATA.mockExamKnowledge.length;
    const q = STUDY_DATA.mockExamKnowledge[idx];

    document.getElementById("mock-counter").textContent = `Pregunta ${idx + 1} de ${total}`;
    document.getElementById("mock-case-text").textContent = q.case;
    document.getElementById("mock-question-text").textContent = q.question;

    document.getElementById("btn-mock-prev").disabled = idx === 0;
    const nextBtn = document.getElementById("btn-mock-next");
    nextBtn.textContent = (idx === total - 1) ? "Finalizar Simulacro 🏁" : "Siguiente →";

    const optList = document.getElementById("mock-options-list");
    optList.innerHTML = "";
    const letters = ["A", "B", "C"];

    q.options.forEach((optText, optIdx) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      if (this.mockState.answers[idx] === optIdx) {
        btn.classList.add("selected");
      }
      btn.innerHTML = `<span class="letter">${letters[optIdx]}</span> <span>${optText}</span>`;
      btn.onclick = () => {
        this.mockState.answers[idx] = optIdx;
        this.renderMockQuestion();
      };
      optList.appendChild(btn);
    });
  },

  finishMockKnowledge() {
    clearInterval(this.mockState.timerInterval);
    this.mockState.inProgress = false;

    let correctCount = 0;
    const total = STUDY_DATA.mockExamKnowledge.length;

    STUDY_DATA.mockExamKnowledge.forEach((q, idx) => {
      if (this.mockState.answers[idx] === q.correct) correctCount++;
    });

    const score = Math.round((correctCount / total) * 100);

    const currentBest = parseInt(localStorage.getItem("pgn_best_score") || "0");
    if (score > currentBest) {
      localStorage.setItem("pgn_best_score", score.toString());
    }

    document.getElementById("mock-question-container").style.display = "none";
    const resBox = document.getElementById("mock-results-container");
    resBox.style.display = "block";

    const badge = document.getElementById("mock-result-badge");
    const title = document.getElementById("mock-result-title");
    const desc = document.getElementById("mock-result-desc");

    badge.textContent = score;

    if (score >= 65) {
      badge.className = "result-badge-large passed";
      title.textContent = "¡APROBADO! Superaste el Umbral Eliminatorio";
      title.style.color = "var(--accent-green)";
      desc.textContent = `Has obtenido ${score}/100 puntos (${correctCount} de ${total} aciertos). Recuerda que la prueba de conocimientos tiene un peso del 70% y exige como mínimo 65 puntos para continuar en la convocatoria.`;
    } else {
      badge.className = "result-badge-large failed";
      title.textContent = "NO APROBADO (Puntaje Menor a 65 Puntos)";
      title.style.color = "var(--accent-red)";
      desc.textContent = `Has obtenido ${score}/100 puntos (${correctCount} de ${total} aciertos). En el concurso real, este resultado causa la eliminación del aspirante. Te sugerimos repasar las unidades y volver a simular.`;
    }

    this.updateDashboardStats();
    this.updateGlobalProgress();
  },

  reviewMockAnswers() {
    let reviewHtml = "<div style='text-align: left; margin-top: 24px;'>";
    STUDY_DATA.mockExamKnowledge.forEach((q, idx) => {
      const userChoice = this.mockState.answers[idx];
      const isCorrect = userChoice === q.correct;
      const letters = ["A", "B", "C"];

      reviewHtml += `
        <div style="background: var(--bg-card); border: 1px solid ${isCorrect ? 'rgba(16, 185, 129, 0.4)' : 'rgba(239, 68, 68, 0.4)'}; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
            <strong style="color: #fff;">Pregunta #${idx+1}</strong>
            <span style="color: ${isCorrect ? 'var(--accent-green)' : 'var(--accent-red)'}; font-weight: 700;">
              ${isCorrect ? '✓ Correcta' : '✗ Incorrecta'}
            </span>
          </div>
          <p style="font-size: 0.85rem; color: #94a3b8; margin-bottom: 8px;">${q.case}</p>
          <p style="font-size: 0.9rem; color: #fff; font-weight: 600; margin-bottom: 10px;">${q.question}</p>
          <div style="font-size: 0.85rem; margin-bottom: 6px;">
            <strong>Tu respuesta:</strong> ${userChoice !== undefined ? `${letters[userChoice]}. ${q.options[userChoice]}` : 'Sin responder'}
          </div>
          <div style="font-size: 0.85rem; color: var(--accent-green); margin-bottom: 8px;">
            <strong>Respuesta correcta:</strong> ${letters[q.correct]}. ${q.options[q.correct]}
          </div>
          <div style="font-size: 0.85rem; background: rgba(15, 23, 42, 0.6); padding: 10px; border-radius: 6px; color: #e2e8f0;">
            💡 <strong>Justificación legal/técnica:</strong> ${q.explanation}
          </div>
        </div>
      `;
    });
    reviewHtml += "</div>";

    const desc = document.getElementById("mock-result-desc");
    desc.innerHTML = reviewHtml;
  },

  // --- SIMULACRO COMPORTAMENTAL (20%) ---
  startMockBehavioral() {
    this.behavioralState.currentIdx = 0;
    this.behavioralState.answers = {};

    document.getElementById("behavioral-question-container").style.display = "block";
    document.getElementById("behavioral-results-container").style.display = "none";
    this.renderBehavioralQuestion();
  },

  renderBehavioralQuestion() {
    const idx = this.behavioralState.currentIdx;
    const total = STUDY_DATA.mockExamBehavioral.length;
    const q = STUDY_DATA.mockExamBehavioral[idx];

    document.getElementById("behavioral-counter").textContent = `Caso ${idx + 1} de ${total}`;
    document.getElementById("behavioral-competency-pill").textContent = `Competencia: ${q.competencia}`;
    document.getElementById("behavioral-case-text").textContent = q.case;
    document.getElementById("behavioral-question-text").textContent = q.question;

    document.getElementById("btn-behavioral-prev").disabled = idx === 0;
    const nextBtn = document.getElementById("btn-behavioral-next");
    nextBtn.textContent = (idx === total - 1) ? "Finalizar Prueba Comportamental 🏁" : "Siguiente →";

    const optList = document.getElementById("behavioral-options-list");
    optList.innerHTML = "";
    const letters = ["A", "B", "C"];

    q.options.forEach((optText, optIdx) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      if (this.behavioralState.answers[idx] === optIdx) {
        btn.classList.add("selected");
      }
      btn.innerHTML = `<span class="letter">${letters[optIdx]}</span> <span>${optText}</span>`;
      btn.onclick = () => {
        this.behavioralState.answers[idx] = optIdx;
        this.renderBehavioralQuestion();
      };
      optList.appendChild(btn);
    });
  },

  finishMockBehavioral() {
    let correctCount = 0;
    const total = STUDY_DATA.mockExamBehavioral.length;

    STUDY_DATA.mockExamBehavioral.forEach((q, idx) => {
      if (this.behavioralState.answers[idx] === q.correct) correctCount++;
    });

    const score = Math.round((correctCount / total) * 100);

    document.getElementById("behavioral-question-container").style.display = "none";
    document.getElementById("behavioral-results-container").style.display = "block";
    document.getElementById("behavioral-score-badge").textContent = score;

    document.getElementById("behavioral-result-desc").textContent = 
      `Obtuviste ${score}/100 puntos (${correctCount} de ${total} decisiones óptimas). Esta prueba aporta el 20% al puntaje final en la lista de elegibles.`;
  },

  updateGlobalProgress() {
    const completed = this.getCompletedUnits().length;
    const total = STUDY_DATA.units.length;
    const pct = Math.round((completed / total) * 100);

    const badge = document.getElementById("units-progress-badge");
    if (badge) badge.textContent = `${completed}/${total}`;

    const txt = document.getElementById("overall-progress-text");
    if (txt) txt.textContent = `${pct}%`;

    const bar = document.getElementById("overall-progress-bar");
    if (bar) bar.style.width = `${pct}%`;
  },

  updateDashboardStats() {
    const completed = this.getCompletedUnits().length;
    const total = STUDY_DATA.units.length;
    const statUnits = document.getElementById("stat-completed-units");
    if (statUnits) statUnits.textContent = `${completed} / ${total}`;

    const bestScore = localStorage.getItem("pgn_best_score");
    const statScore = document.getElementById("stat-best-score");
    if (statScore) {
      statScore.textContent = bestScore ? `${bestScore} / 100` : "-- / 100";
    }
  }
};

// Inicialización de la aplicación
document.addEventListener("DOMContentLoaded", () => {
  app.init();
});
