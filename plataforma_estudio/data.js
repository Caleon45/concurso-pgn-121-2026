// BANCO DE DATOS MAESTRO Y EXHAUSTIVO - CONCURSO PGN 121-2026
// CARGO: PROFESIONAL UNIVERSITARIO (3PU-15) - ASIGNACIÓN BÁSICA: $6.889.867
// DEPENDENCIA: DIRECCIÓN DE APOYO ESTRATÉGICO, ANÁLISIS DE DATOS DE INFORMACIÓN (DAEADI)
// PROCESO: CONOCIMIENTO E INNOVACIÓN
// LAS 16 UNIDADES TEMÁTICAS AUDITADAS Y ENRIQUECIDAS AL 100% CON FUENTES OFICIALES, MÓDULOS PROFUNDOS, GLOSARIO Y EVALUACIONES SJT GRADUADAS POR DIFICULTAD

const STUDY_DATA = {
  "units": [
    {
      "id": 1,
      "number": "01",
      "title": "Estructura del Estado Colombiano y Ramas del Poder Público",
      "category": "Conocimientos Esenciales Comunes",
      "level": "Básico - Intermedio",
      "duration": "45 a 60 min",
      "summary": "Estudio exhaustivo de la organización del Estado Social de Derecho en Colombia: tridivisión del poder, órganos de control, órganos autónomos independientes, formas de organización administrativa (descentralización, desconcentración y delegación - Ley 489/98) y los límites jurisprudenciales del principio de colaboración armónica frente a la Procuraduría General de la Nación.",
      "normativa": [
        "Constitución Política de 1991: Preámbulo, Artículos 1, 2, 113, 114, 115, 116, 117, 118, 119, 120 y 121.",
        "Ley 489 de 1998: Estatuto Básico de Organización y Funcionamiento de la Administración Pública (Artículos 7 al 14).",
        "Sentencias de la Corte Constitucional: C-037 de 1996, C-977 de 2002, C-246 de 2004 y C-1017 de 2012."
      ],
      "officialInvestigations": [
        {
          "type": "Constitución Política",
          "title": "Constitución Política de Colombia (1991) - Título V: De la Organización del Estado",
          "description": "Fundamento dogmático del poder público. El Art. 113 consagra las tres ramas clásicas y establece la existencia de órganos autónomos e independientes con funciones separadas y colaboración armónica.",
          "relevance": "Base constitucional obligatoria para diferenciar órganos de control de las ramas tradicionales."
        },
        {
          "type": "Ley de la República",
          "title": "Ley 489 de 1998 - Estatuto Básico de la Administración Pública",
          "description": "Regula el ejercicio de la función administrativa. Define los principios rectores y delimita con precisión técnica la descentralización, la desconcentración y la delegación administrativa.",
          "relevance": "Regula cómo se transfiere la competencia y la responsabilidad en entidades estatales."
        },
        {
          "type": "Jurisprudencia Constitucional",
          "title": "Sentencia C-037 de 1996 - Autonomía de los Órganos de Control",
          "description": "Revisión previa del Estatuto de la Administración de Justicia. Aclara que el Ministerio Público no ejerce función jurisdiccional típica ni hace parte de la Rama Judicial, sino que es un órgano de control autónomo.",
          "relevance": "Distingue la función de vigilancia preventiva y disciplinaria de la función de juzgar de los jueces."
        },
        {
          "type": "Jurisprudencia Constitucional",
          "title": "Sentencia C-977 de 2002 - Alcance de la Colaboración Armónica",
          "description": "Fija los límites constitucionales de la colaboración armónica entre ramas y órganos de control, advirtiendo que cooperar no puede implicar coadministración, subordinación ni invasión de competencias.",
          "relevance": "Impide que la Procuraduría dé órdenes vinculantes o tome decisiones de gasto en entidades vigiladas."
        },
        {
          "type": "Jurisprudencia Constitucional",
          "title": "Sentencia C-246 de 2004 - Alcance y Responsabilidad en la Delegación",
          "description": "Examina la delegación de funciones presidenciales y administrativas. Reitera que el delegante conserva la facultad de reasumir la competencia en cualquier momento y mantiene el deber de vigilancia.",
          "relevance": "Clave para preguntas sobre responsabilidades de directores y profesionales delegados en la PGN."
        },
        {
          "type": "Jurisprudencia Constitucional",
          "title": "Sentencia C-1017 de 2012 - Desconcentración vs. Descentralización",
          "description": "Establece la frontera entre desconcentración territorial/funcional y descentralización administrativa por servicios y territorial, enfatizando la personería jurídica independiente de los entes territoriales.",
          "relevance": "Fundamento para no confundir procuradurías provinciales/regionales con entes autónomos."
        },
        {
          "type": "Doctrina Oficial",
          "title": "Manual de Estructura del Estado Colombiano (DAFP)",
          "description": "Publicación pedagógica del Departamento Administrativo de la Función Pública que detalla los sectores administrativos, entidades descentralizadas indirectas y el sector central.",
          "relevance": "Es el marco de referencia exacto que utilizan las universidades evaluadoras en los concursos."
        },
        {
          "type": "Concepto Sala de Consulta",
          "title": "Concepto Sala de Consulta y Servicio Civil del Consejo de Estado No. 2244",
          "description": "Fija la naturaleza de los actos de advertencia emitidos por órganos de control y su carácter no vinculante frente a la discrecionalidad técnica de la administración activa.",
          "relevance": "Vital para diferenciar la advertencia preventiva de la coadministración indebida."
        },
        {
          "type": "Norma Orgánica",
          "title": "Decreto Ley 1421 de 1993 - Régimen Especial de Bogotá D.C.",
          "description": "Estatuto orgánico del Distrito Capital que ilustra el régimen descentralizado especial frente a la Nación y la vigilancia del Ministerio Público a nivel territorial.",
          "relevance": "Aclara la distribución de competencias en la sede central de la PGN."
        },
        {
          "type": "Jurisprudencia Constitucional",
          "title": "Sentencia C-429 de 2001 - Autonomía Presupuestal y Administrativa del Ministerio Público",
          "description": "Declara la exequibilidad de preceptos del Decreto Ley 262 de 2000, ratificando que el Procurador General posee autonomía de ordenación del gasto y manejo de planta sin injerencia del Ejecutivo.",
          "relevance": "Protege la imparcialidad del Ministerio Público frente a cualquier presión del gobierno de turno."
        }
      ],
      "deepModules": [
        {
          "title": "1. Tridivisión del Poder, Órganos de Control y Colaboración Armónica",
          "content": "La Constitución de 1991 superó la clásica tridivisión montesquiana al reconocer que, junto a las Ramas Ejecutiva, Legislativa y Judicial, existen órganos autónomos e independientes con rango constitucional: los Órganos de Control (Ministerio Público y Contraloría General) y la Organización Electoral. El Artículo 113 de la Carta Política consagra que los diferentes órganos del Estado tienen funciones separadas pero colaboran armónicamente para la realización de sus fines. Para la Procuraduría General de la Nación (cabeza del Ministerio Público), esta colaboración armónica tiene una barrera infranqueable: jamás puede convertirse en coadministración ni subordinación. La PGN vigila la conducta oficial, interviene en defensa de las garantías fundamentales y ejerce control disciplinario, pero no puede ordenar la suspensión de licitaciones de manera directa ni decirle a un ordenador del gasto a qué contratista adjudicar.",
          "keyRule": "La PGN vigila, advierte y sanciona disciplinariamente; jamás coadministra ni sustituye la voluntad de la administración activa."
        },
        {
          "title": "2. Formas de Organización Administrativa: Descentralización, Desconcentración y Delegación",
          "content": "La Ley 489 de 1998 codifica las tres figuras axiales de la gestión pública:\n\n• Descentralización (Art. 7): Transferencia de competencias y recursos desde el nivel central a entidades con personería jurídica propia, autonomía financiera y administrativa (territorial como municipios/departamentos, o por servicios como empresas industriales y comerciales del Estado).\n\n• Desconcentración (Art. 8): Radicación de competencias y funciones en dependencias ubicadas fuera de la sede principal de la entidad u organismo, sin crear una nueva persona jurídica (ejemplo: las Procuradurías Regionales y Provinciales son desconcentradas territorialmente, pero forman parte de la misma persona jurídica 'Nación - Procuraduría General').\n\n• Delegación (Art. 9 al 14): Acto administrativo motivado mediante el cual una autoridad (delegante) transfiere temporalmente el ejercicio de funciones a sus colaboradores o a otras autoridades (delegatario). Requiere acto formal escrito y no se pueden delegar: la expedición de decretos de carácter general, atribuciones ya recibidas por delegación, ni materias expresamente prohibidas por la ley.",
          "keyRule": "En la delegación, el delegante responde si incurre en culpa grave o dolo en la vigilancia de la gestión del delegatario, pudiendo reasumir el asunto en cualquier momento."
        },
        {
          "title": "3. Estructura del Ministerio Público y Órganos Autónomos",
          "content": "El Ministerio Público es ejercido por el Procurador General de la Nación, el Defensor del Pueblo, los procuradores delegados y los agentes del ministerio público, así como por los personeros municipales (Art. 118 C.P.). No pertenece a la Rama Judicial, a pesar de que el Procurador y los Delegados tienen la misma categoría salarial y requisitos que los Magistrados de las Altas Cortes. Otros entes autónomos son el Banco de la República (banca central con personería jurídica pública y autonomía técnica), la Comisión Nacional del Servicio Civil - CNSC (responsable de la carrera administrativa), las Corporaciones Autónomas Regionales - CAR y los Entes Universitarios Autónomos.",
          "keyRule": "Los personeros municipales forman parte del Ministerio Público a nivel local y vigilan la conducta oficial en los municipios, pero no son subordinados jerárquicos laborales del Procurador General."
        },
        {
          "title": "4. Mecánica Operativa y Analítica en la DAEADI (Sistemas y Datos Misionales)",
          "content": "En la Dirección de Apoyo Estratégico, Análisis de Datos de Información (DAEADI), el Profesional Universitario (3PU-15) debe articular la comprensión de la estructura estatal con el flujo de datos. La DAEADI cruza información del Sistema de Registro de Sanciones e Inhabilidades (SIRI) con las bases de datos de la Registraduría Nacional del Estado Civil, el Consejo Superior de la Judicatura y entidades del orden territorial para detectar inhabilidades sobrevinientes en aspirantes a cargos de elección popular o directivos del Estado. Comprender la personería jurídica y la naturaleza de cada órgano vigilado es indispensable para emitir conceptos y estructurar pipelines de datos sin incurrir en fallas de competencia.",
          "keyRule": "El análisis de datos en la DAEADI debe respetar los límites de competencia del órgano vigilado y garantizar la validez probatoria de las alertas preventivas generadas."
        }
      ],
      "scenarioExample": "Un Profesional 3PU-15 en la DAEADI recibe un requerimiento urgente de una Procuraduría Provincial solicitando cruzar datos del SIRI con el sistema de nómina de una Alcaldía para verificar si un servidor sancionado sigue cobrando sueldo. El profesional debe identificar que la Alcaldía es un ente descentralizado territorialmente y la Procuraduría Provincial es un órgano desconcentrado del orden central; en consecuencia, debe aplicar los protocolos de interoperabilidad respetando la reserva legal y la competencia funcional del peticionario.",
      "examTip": "DISTRACTOR TÍPICO DE EXAMEN: Afirmar que el Ministerio Público pertenece a la Rama Judicial porque el Procurador tiene rango de Magistrado de la Corte Suprema, o que en la delegación el delegante queda 100% exonerado de responsabilidad de forma automática. Ambas afirmaciones son falsas.",
      "glossary": [
        {
          "term": "Colaboración Armónica",
          "definition": "Principio constitucional (Art. 113 C.P.) según el cual los órganos del Estado cooperan recíprocamente para el logro de sus fines sin invadir órbitas ajenas ni coadministrar."
        },
        {
          "term": "Desconcentración",
          "definition": "Mecanismo administrativo mediante el cual se radican funciones en dependencias territoriales o funcionales sin crear una persona jurídica independiente."
        },
        {
          "term": "Descentralización",
          "definition": "Transferencia de competencias, funciones y recursos desde el Estado central a entidades territoriales o por servicios con personería jurídica, autonomía y presupuesto propio."
        },
        {
          "term": "Delegación",
          "definition": "Acto administrativo formal por el cual una autoridad transfiere el ejercicio de una función específica a sus colaboradores, conservando la facultad de reasumirla."
        },
        {
          "term": "Órganos Autónomos",
          "definition": "Entidades del Estado con personería jurídica de derecho público y autonomía constitucional que no hacen parte de ninguna de las tres ramas tradicionales (Banco de la República, CNSC, CAR)."
        },
        {
          "term": "Ministerio Público",
          "definition": "Órgano de control integrado por la Procuraduría General, la Defensoría del Pueblo y las Personerías, encargado de defender el orden jurídico, los derechos humanos y vigilar la conducta oficial."
        },
        {
          "term": "Ilicitud Sustancial",
          "definition": "Afectación sustancial del deber funcional sin justificación legalmente admisible, principio nuclear del derecho disciplinario moderno."
        },
        {
          "term": "Coadministración Indebida",
          "definition": "Extralimitación de funciones en la que un órgano de control impone decisiones vinculantes sobre la gestión u ordenación del gasto de una entidad vigilada."
        }
      ],
      "quiz": [
        {
          "id": "u1_q1",
          "difficulty": "Fácil",
          "type": "Conceptual / Normativa",
          "case": "En el marco de un proyecto de interoperabilidad liderado por la DAEADI, se discute la naturaleza jurídica del Ministerio Público frente a las Ramas del Poder Público consagradas en la Constitución Política de 1991.",
          "question": "¿Cuál es la ubicación constitucional exacta de la Procuraduría General de la Nación dentro de la estructura del Estado Colombiano?",
          "options": [
            "Hace parte integral de la Rama Judicial, dado que ejerce facultades sancionatorias y sus delegados tienen rango de magistrados.",
            "Es un Órgano de Control autónomo e independiente, con personería jurídica propia y autonomía funcional, que no pertenece a ninguna de las tres ramas del poder público.",
            "Está adscrita a la Rama Ejecutiva en el sector administrativo de justicia, pero goza de autonomía financiera y desconcentración territorial."
          ],
          "correct": 1,
          "justification": "De conformidad con los Artículos 113 y 117 de la Constitución Política de 1991 y la Sentencia C-037 de 1996, el Ministerio Público es un Órgano de Control con autonomía constitucional, administrativa y presupuestal, completamente independiente de las tres ramas tradicionales del poder público."
        },
        {
          "id": "u1_q2",
          "difficulty": "Fácil",
          "type": "Conceptual / Normativa",
          "case": "El Procurador General decide descentralizar territorialmente la atención de solicitudes de certificados de antecedentes disciplinarios creando sedes con personería jurídica propia en cada departamento.",
          "question": "Conforme a la Ley 489 de 1998, ¿es legalmente viable la figura invocada?",
          "options": [
            "Sí, porque todo funcionario con rango directivo tiene la potestad de crear entidades descentralizadas mediante resolución interna.",
            "No, porque la desconcentración es la figura que permite ubicar dependencias territoriales sin personería jurídica; la descentralización crea entidades autónomas y exige ley u ordenanza.",
            "Sí, siempre y cuando se cuente con la aprobación previa del Consejo de Estado mediante concepto vinculante."
          ],
          "correct": 1,
          "justification": "La Ley 489 de 1998 (Arts. 7 y 8) distingue claramente la descentralización (que requiere norma con fuerza de ley y crea personería jurídica propia) de la desconcentración territorial (radicación de funciones en dependencias de la misma persona jurídica, como ocurre con las procuradurías territoriales)."
        },
        {
          "id": "u1_q3",
          "difficulty": "Media",
          "type": "Inferenciación / Criterio Técnico",
          "case": "Durante una auditoría preventiva a un megaproyecto de infraestructura, un Procurador Delegado emite un oficio donde le ordena al Director de una Agencia Nacional suspender inmediatamente la adjudicación de la licitación y declarar desierto el proceso, bajo advertencia de iniciar proceso disciplinario si no cumple.",
          "question": "¿Se ajusta esta actuación al principio constitucional de colaboración armónica (Art. 113 C.P.) y a la jurisprudencia de la Corte Constitucional?",
          "options": [
            "Sí, porque la función preventiva de la Procuraduría le otorga poderes vinculantes de coadministración para salvaguardar el patrimonio público.",
            "No, porque la función preventiva permite advertir riesgos y exigir explicaciones, pero ordenar suspender o declarar desierta una licitación constituye una coadministración indebida que invade la órbita de la administración activa.",
            "Sí, siempre que el Procurador Delegado cuente con un informe pericial previo avalado por la DAEADI."
          ],
          "correct": 1,
          "justification": "La Corte Constitucional (Sentencias C-977 de 2002 y C-1017 de 2012) ha reiterado que la función preventiva de la PGN no permite impartir órdenes vinculantes a los ordenadores del gasto ni suspender procedimientos contractuales de forma directa, pues ello invadiría la gestión pública convirtiéndose en coadministración indebida."
        },
        {
          "id": "u1_q4",
          "difficulty": "Media",
          "type": "Inferenciación / Criterio Técnico",
          "case": "El Director de la DAEADI expide una resolución delegando en un Profesional Universitario Grado 15 la suscripción de conceptos técnicos de analítica sobre datos misionales. Tiempo después, el profesional emite un informe con yerros evidentes que causan un perjuicio institucional grave.",
          "question": "¿Cuál es la responsabilidad administrativa del Director delegante según el Artículo 211 de la Carta Política y la Ley 489 de 1998?",
          "options": [
            "El Director delegante queda completamente exonerado de toda responsabilidad civil, penal o disciplinaria por el solo hecho de haber firmado el acto de delegación.",
            "El Director delegante responde solidariamente en todos los casos de manera automática, sin importar si supervisó o no la función encomendada.",
            "El Director delegante no responde automáticamente por las actuaciones del delegatario, salvo que haya incurrido en dolo o culpa grave en el ejercicio de sus deberes de vigilancia, control y seguimiento."
          ],
          "correct": 2,
          "justification": "El Art. 211 de la C.P. y la jurisprudencia de la Corte Constitucional (Sentencia C-246 de 2004) disponen que la delegación exime de responsabilidad al delegante, la cual se radicará en cabeza del delegatario, sin perjuicio de que, en caso de dolo o culpa grave en la vigilancia o selección, el delegante deba responder."
        },
        {
          "id": "u1_q5",
          "difficulty": "Media",
          "type": "Inferenciación / Criterio Técnico",
          "case": "Una entidad territorial (Gobernación) se niega a suministrar a la DAEADI acceso a su base de datos de contratación, argumentando que goza de autonomía constitucional territorial (Art. 287 C.P.) y que la Procuraduría no puede solicitar información sin orden de un juez de la República.",
          "question": "¿Es jurídicamente válida la negativa de la entidad territorial frente a las facultades del Ministerio Público?",
          "options": [
            "Sí, porque la autonomía territorial prima sobre las funciones de inspección de los órganos del orden nacional.",
            "No, porque la autonomía de las entidades territoriales se ejerce dentro de los límites de la Constitución y la ley, y el Procurador General y sus delegados tienen la facultad constitucional expresa (Art. 277 numerales 5 y 6 C.P.) de requerir a las autoridades los informes necesarios para el ejercicio de sus funciones sin reserva alguna.",
            "Sí, a menos que el requerimiento sea firmado directamente por el Ministro del Interior."
          ],
          "correct": 1,
          "justification": "La autonomía territorial no es absoluta; está subordinada al orden constitucional. El Art. 277 num. 5 y 6 de la C.P. faculta a la PGN para vigilar el cumplimiento de la ley y requerir de los servidores públicos los informes pertinentes para sus investigaciones sin que proceda oponibilidad de reserva territorial."
        },
        {
          "id": "u1_q6",
          "difficulty": "Difícil",
          "type": "Juicio Situacional (SJT)",
          "case": "Usted es Profesional Universitario en la DAEADI y su jefe inmediato le solicita proyectar un concepto técnico recomendándole al Despacho de un Procurador Delegado anular de plano un contrato administrativo suscrito por una Alcaldía por presentar inconsistencias en los cruces de bases de datos del SECOP.",
          "question": "Teniendo en cuenta los principios de separación de poderes, legalidad y competencias de la PGN, ¿cuál debe ser su proceder profesional?",
          "options": [
            "Redactar el concepto solicitando la anulación administrativa directa, ya que la Procuraduría tiene facultades judiciales universales de anulación contractual.",
            "Negarse rotundamente a redactar el documento y presentar una denuncia disciplinaria inmediata contra su superior por extralimitación de funciones.",
            "Elaborar el informe técnico señalando objetivamente los hallazgos del cruce de datos, advirtiendo con precisión jurídica que la PGN no tiene la potestad constitucional de anular contratos de forma directa, correspondiendo a la Procuraduría incoar una acción de controversias contractuales o demanda de nulidad ante la Jurisdicción Contencioso Administrativa."
          ],
          "correct": 2,
          "justification": "La PGN no puede anular actos o contratos de la administración activa; dicha facultad es exclusiva de los jueces del orden contencioso administrativo. La actuación correcta y profesional en la DAEADI es reportar la evidencia analítica y encauzarla hacia la vía procesal idónea (demanda judicial o apertura de investigación disciplinaria)."
        },
        {
          "id": "u1_q7",
          "difficulty": "Difícil",
          "type": "Juicio Situacional (SJT)",
          "case": "En un cruce masivo de información entre el SIRI y las listas electorales, la DAEADI identifica que un candidato con fallo de primera instancia de suspensión temporal no ejecutoriado (con recurso de apelación pendiente) aspira a una curul de asamblea departamental. Un asesor solicita enviar de inmediato una circular pública señalándolo como 'inhabilitado'.",
          "question": "¿Cómo debe proceder usted como Profesional de analítica de la DAEADI frente al principio constitucional de debido proceso y presunción de inocencia (Art. 29 C.P.)?",
          "options": [
            "Emitir la alerta pública de inmediato para salvaguardar la moralidad pública antes de las elecciones.",
            "Informar que una sanción no ejecutoriada carece de fuerza de cosa juzgada formal y material, por lo cual el registro en el SIRI no genera inhabilidad vigente hasta tanto no se resuelva el recurso de apelación; por ende, publicar la lista vulneraría el debido proceso y generaría responsabilidad para la entidad.",
            "Borrar el registro del sistema misional para evitar demandas contra la entidad."
          ],
          "correct": 1,
          "justification": "La inhabilidad solo opera a partir de la ejecutoria material del acto sancionatorio. Publicar una sanción no ejecutoriada viola la presunción de inocencia y el debido proceso (Art. 29 C.P.), lo que constituye una grave irregularidad administrativa y técnica en el manejo de registros públicos de control."
        },
        {
          "id": "u1_q8",
          "difficulty": "Difícil",
          "type": "Juicio Situacional (SJT)",
          "case": "Una entidad autónoma del Estado (el Banco de la República) contrata una solución en la nube y el equipo auditor de la Procuraduría solicita que la DAEADI audite sus servidores centrales. Los ingenieros del Banco indican que, por su régimen de autonomía constitucional reforzada (Art. 371 C.P.), sus sistemas no pueden ser auditados por la PGN.",
          "question": "¿Cuál es el criterio técnico-jurídico que debe regir la respuesta de la DAEADI?",
          "options": [
            "Aceptar la objeción del Banco, dado que los órganos autónomos independientes están totalmente excluidos de la vigilancia de la Procuraduría General.",
            "Aclarar que, si bien el Banco de la República goza de autonomía constitucional técnica y administrativa en política monetaria, sus servidores siguen siendo servidores públicos sometidos al control disciplinario y preventivo de la PGN frente al cumplimiento de la Constitución, la ley y la custodia de recursos públicos.",
            "Solicitar a la Rama Ejecutiva un decreto extraordinario que ordene el ingreso a los servidores del Banco."
          ],
          "correct": 1,
          "justification": "La autonomía constitucional de entes como el Banco de la República se refiere a la fijación técnica de políticas macroeconómicas y manejo cambiario, pero no los convierte en islas inmunes al control del Estado. Todos sus miembros son servidores públicos sujetos a la vigilancia disciplinaria de la PGN conforme a los Arts. 118 y 277 de la C.P."
        }
      ]
    },
    {
      "id": 2,
      "number": "02",
      "title": "Estructura Orgánica y Funciones de la Procuraduría General de la Nación",
      "category": "Conocimientos Esenciales Comunes",
      "level": "Básico - Intermedio",
      "duration": "50 a 65 min",
      "summary": "Estudio integral de la estructura orgánica y funcional de la PGN bajo el Decreto Ley 262 de 2000 y sus modificaciones (Ley 2094 de 2021). Desglose exhaustivo de los tres ejes misionales (Preventivo, Intervención Judicial y Disciplinario), la separación orgánica entre instrucción y juzgamiento, el rol estratégico de la DAEADI y la administración del SIRI.",
      "normativa": [
        "Constitución Política de 1991: Artículos 275 al 284 (Régimen Constitucional del Ministerio Público).",
        "Decreto Ley 262 de 2000: Estructura Orgánica y Funcional de la PGN (Títulos I, II y III).",
        "Ley 2094 de 2021: Reestructuración de dependencias disciplinarias y separación de roles.",
        "Resoluciones Internas de la PGN que reglamentan la DAEADI adscrita a la Viceprocuraduría General.",
        "Sentencias C-429 de 2001, C-095 de 2003 y C-111 de 2022 de la Corte Constitucional."
      ],
      "officialInvestigations": [
        {
          "type": "Decreto Ley Orgánico",
          "title": "Decreto Ley 262 de 2000 - Estructura Orgánica y Planta de Personal de la PGN",
          "description": "Estatuto fundacional moderno de la entidad. Fija la organización en niveles directivo, asesor, ejecutivo y operativo, detallando las funciones de cada dependencia, desde el Despacho del Procurador hasta las personerías y delegadas.",
          "relevance": "Es la norma marco indispensable para comprender la jerarquía, funciones y competencias internas."
        },
        {
          "type": "Ley Modificatoria",
          "title": "Ley 2094 de 2021 - Reorganización Funcional e Independencia Interna",
          "description": "Modificó el régimen disciplinario y la estructura de la PGN creando la división funcional estricta entre funcionarios instructores e investigadores frente a funcionarios juzgadores en primera y segunda instancia.",
          "relevance": "Obligatorio para entender por qué la misma dependencia no puede instruir y fallar a la vez."
        },
        {
          "type": "Constitución Política",
          "title": "Artículos 277 y 278 de la Constitución Política de Colombia",
          "description": "Consagran el decálogo de funciones primordiales del Procurador General: vigilar la conducta oficial, defender los derechos humanos, intervenir en procesos judiciales y requerir informes.",
          "relevance": "Constituye la base dogmática inamovible de las competencias misionales."
        },
        {
          "type": "Resolución Interna PGN",
          "title": "Resolución de Creación y Asignación de Funciones a la DAEADI",
          "description": "Estructura la Dirección de Apoyo Estratégico, Análisis de Datos de Información adscrita al Despacho del Viceprocurador, otorgándole la gestión de analítica, minería de datos, apoyo pericial y administración del SIRI.",
          "relevance": "Define el marco operativo directo del cargo Profesional Universitario 3PU-15."
        },
        {
          "type": "Jurisprudencia Constitucional",
          "title": "Sentencia C-429 de 2001 - Autonomía Funcional de la Procuraduría",
          "description": "Analiza las facultades del Procurador General como suprema autoridad directiva del Ministerio Público y la validez de la carrera especial de la entidad.",
          "relevance": "Confirma la autonomía técnica en la expedición de directivas y alertas preventivas."
        },
        {
          "type": "Jurisprudencia Constitucional",
          "title": "Sentencia C-111 de 2022 - Garantía de Imparcialidad en la Estructura Orgánica",
          "description": "Valida la creación de salas independientes de instrucción y salas de juzgamiento para garantizar el debido proceso y la imparcialidad objetiva.",
          "relevance": "Determina cómo deben interactuar los sistemas de información para no contaminar a los juzgadores."
        },
        {
          "type": "Directiva Institucional",
          "title": "Directiva General de la PGN sobre Ejercicio de la Función Preventiva",
          "description": "Fija las directrices operativas del modelo preventivo: vigilancia a políticas públicas, mesas de trabajo institucionales, emisión de alertas tempranas y prohibición de coadministración.",
          "relevance": "Guía práctica para entender el alcance de las solicitudes de datos preventivas."
        },
        {
          "type": "Manual de Funciones",
          "title": "Manual Específico de Funciones y Competencias Laborales de la PGN",
          "description": "Describe las responsabilidades del nivel Profesional Universitario (3PU-15) en el proceso de Conocimiento e Innovación en la DAEADI.",
          "relevance": "Establece los deberes evaluados directamente en la Convocatoria 121-2026."
        },
        {
          "type": "Reglamentación del SIRI",
          "title": "Guía Técnica de Operación del Sistema de Información de Registro de Sanciones e Inhabilidades",
          "description": "Reglamenta el registro, actualización, expedición de certificados de antecedentes ordinarios y especiales y rectificación de datos por homonimia o cumplimiento de sanciones.",
          "relevance": "Es el sistema misional neurálgico administrado por la DAEADI."
        },
        {
          "type": "Concepto del Consejo de Estado",
          "title": "Concepto Sala de Consulta No. 2412 - Alcance de la Intervención Judicial de la PGN",
          "description": "Delimita la participación del Ministerio Público en los procesos judiciales como sujeto procesal especial que no es parte interesada sino garante de la legalidad y los derechos humanos.",
          "relevance": "Explica la diferencia entre ser demandante y actuar en defensa del interés general."
        }
      ],
      "deepModules": [
        {
          "title": "1. Los Tres Grandes Ejes Misionales de la Procuraduría General de la Nación",
          "content": "La Procuraduría cumple su misión a través de tres dimensiones complementarias pero formalmente diferenciadas:\n\n1. Función Preventiva y de Control de Gestión: Considerada la más importante por su impacto proactivo. Vigila el cumplimiento de las normas y decisiones judiciales, detecta riesgos de corrupción o vulneración de derechos y formula alertas tempranas mediante mesas de trabajo y recomendaciones técnicas. Carece de poder coercitivo directo; no puede revocar licitaciones ni impartir órdenes de gasto a los mandatarios.\n\n2. Función de Intervención Judicial y Administrativa: Se ejerce a través de Procuradores Judiciales que actúan ante la jurisdicción ordinaria, contencioso administrativa, penal, de restitución de tierras y constitucional. Su función es defender el orden jurídico, los derechos humanos, el medio ambiente y el patrimonio público como sujeto procesal especial (no es demandante ni defensor de oficio).\n\n3. Función Disciplinaria: Es la potestad sancionatoria del Estado respecto de los servidores públicos (y particulares que ejerzan funciones públicas). Investiga y juzga faltas tipificadas en el Código General Disciplinario, imponiendo sanciones que van desde amonestación hasta destitución e inhabilidad.",
          "keyRule": "Las tres funciones misionales son autónomas; los hallazgos de una mesa preventiva pueden dar origen a una queja disciplinaria, pero el funcionario preventivo no puede dictar auto de cargos."
        },
        {
          "title": "2. Estructura del Nivel Central: Despachos, Delegadas y Dependencias de Apoyo",
          "content": "La cúspide de la entidad está integrada por:\n• Despacho del Procurador General de la Nación: Suprema dirección, fijación de políticas institucionales y juzgamiento de altos dignatarios del Estado (congresistas, ministros, magistrados).\n• Despacho del Viceprocurador General: Ejerce funciones disciplinarias delegadas y de coordinación institucional. De su despacho dependen unidades clave como la Dirección de Apoyo Estratégico, Análisis de Datos de Información (DAEADI) y la Dirección Nacional de Investigaciones Especiales (DNIE).\n• Procuradurías Delegadas: Especializadas temáticamente (contratación, medio ambiente, salud, fuerza pública, derechos humanos) que actúan tanto en función preventiva como de instrucción o juzgamiento disciplinario.\n• Secretarías y Direcciones Administrativas: Soporte de talento humano, financiero y tecnológico.",
          "keyRule": "La DAEADI no es una procuraduría delegada con funciones sancionatorias; es una dirección de apoyo estratégico adscrita a la Viceprocuraduría con competencias analíticas y técnicas."
        },
        {
          "title": "3. Misión y Competencias de la DAEADI en el Proceso de Conocimiento e Innovación",
          "content": "La Dirección de Apoyo Estratégico, Análisis de Datos de Información (DAEADI) es el cerebro analítico de la Procuraduría. Sus responsabilidades principales incluyen:\n• Administración, aseguramiento y actualización del Sistema de Información de Registro de Sanciones e Inhabilidades (SIRI).\n• Explotación y minería de datos a partir de sistemas misionales como el SIM (Sistema de Información Misional) y el GED (Gestor Electrónico de Documentos).\n• Cruces masivos de bases de datos para verificación de inhabilidades de candidatos a elecciones populares en coordinación con la Registraduría Nacional.\n• Generación de modelos predictivos y tableros analíticos para sustentar alertas preventivas y apoyar peritajes técnicos requeridos por las salas disciplinarias.",
          "keyRule": "El Profesional Universitario (3PU-15) en la DAEADI transforma datos brutos transaccionales en inteligencia estratégica para la toma de decisiones institucionales."
        },
        {
          "title": "4. El Sistema SIRI: Registro de Sanciones, Inhabilidades y Habeas Data Disciplinario",
          "content": "El SIRI registra todas las providencias ejecutoriadas provenientes de fallos disciplinarios de la PGN, personerías, oficinas de control disciplinario interno, fallos con responsabilidad fiscal de la Contraloría, sanciones de la Comisión Nacional de Disciplina Judicial y decisiones penales con inhabilidades accesorias. Su gestión exige máximo celo con el derecho de Habeas Data: cuando una sanción prescribe o se cumple el periodo de inhabilidad, el registro debe desactivarse del certificado ordinario de antecedentes públicos, conservándose únicamente en el registro reservado especial para fines judiciales.",
          "keyRule": "Un error en el SIRI puede inhabilitar injustamente a un ciudadano para contratar con el Estado o posesionarse, acarreando demandas de reparación directa contra la Nación - Procuraduría."
        }
      ],
      "scenarioExample": "La Sala de Instrucción Disciplinaria solicita a la DAEADI un reporte pericial sobre los logs de auditoría de un sistema transaccional municipal para comprobar si un alcalde manipuló la fecha de radicación de un pliego de condiciones. El Profesional 3PU-15 analiza los metadatos y redacta un informe pericial técnico objetivo, preservando la cadena de custodia digital y absteniéndose de calificar si la conducta es dolosa o culposa, ya que dicha calificación jurídica corresponde exclusivamente a la autoridad disciplinaria.",
      "examTip": "TRAMPA COMÚN EN EL EXAMEN: Afirmar que la DAEADI puede iniciar de oficio investigaciones disciplinarias o que la función preventiva puede suspender a un funcionario público. Ambas son falsas: la DAEADI aporta insumos de datos técnicos y la suspensión provisional es una medida cautelar exclusiva de las salas disciplinarias.",
      "glossary": [
        {
          "term": "SIRI",
          "definition": "Sistema de Información de Registro de Sanciones e Inhabilidades, repositorio oficial administrado por la DAEADI donde se inscriben las sanciones penales, disciplinarias y fiscales."
        },
        {
          "term": "DAEADI",
          "definition": "Dirección de Apoyo Estratégico, Análisis de Datos de Información, dependencia del Despacho del Viceprocurador encargada de la gobernanza de datos y analítica institucional."
        },
        {
          "term": "SIM",
          "definition": "Sistema de Información Misional de la PGN, plataforma interna para la gestión y seguimiento integral de los procesos disciplinarios, preventivos y de intervención."
        },
        {
          "term": "Alerta Preventiva",
          "definition": "Instrumento técnico mediante el cual la PGN advierte formalmente a un sujeto vigilado sobre un riesgo inminente de vulneración normativa o patrimonial."
        },
        {
          "term": "Certificado Especial de Antecedentes",
          "definition": "Documento expedido a autoridades judiciales o de seguridad del Estado que incluye sanciones que ya no figuran en el certificado ordinario por cumplimiento de término."
        },
        {
          "term": "Suspensión Provisional",
          "definition": "Medida cautelar disciplinaria (Art. 217 Ley 1952/19) para apartar temporalmente a un servidor público de su cargo durante la investigación para evitar que interfiera en el proceso o reitere la falta."
        },
        {
          "term": "DNIE",
          "definition": "Dirección Nacional de Investigaciones Especiales, cuerpo pericial y de policía judicial adscrito a la PGN para recaudar pruebas técnicas complejas."
        },
        {
          "term": "Separación de Roles",
          "definition": "Garantía procesal de la Ley 2094 de 2021 que prohíbe que el mismo funcionario u oficina que formula el pliego de cargos dicte la sentencia o fallo de primera instancia."
        }
      ],
      "quiz": [
        {
          "id": "u2_q1",
          "difficulty": "Fácil",
          "type": "Conceptual / Normativa",
          "case": "En una sesión de inducción institucional en la PGN, se evalúan las dependencias orgánicas de la entidad de acuerdo con el Decreto Ley 262 de 2000.",
          "question": "¿De cuál de las siguientes dependencias del nivel directivo depende jerárquicamente la DAEADI?",
          "options": [
            "De la Secretaría General de la Procuraduría.",
            "Del Despacho del Viceprocurador General de la Nación.",
            "De la Procuraduría Delegada para la Vigilancia Preventiva de la Función Pública."
          ],
          "correct": 1,
          "justification": "Conforme a la estructura orgánica del Decreto Ley 262 de 2000 y sus resoluciones reglamentarias, la Dirección de Apoyo Estratégico, Análisis de Datos de Información (DAEADI) se encuentra adscrita y subordinada funcionalmente al Despacho del Viceprocurador General de la Nación."
        },
        {
          "id": "u2_q2",
          "difficulty": "Fácil",
          "type": "Conceptual / Normativa",
          "case": "Un ciudadano consulta a la línea de atención si la Procuraduría puede dictar una sentencia penal de prisión contra un gobernador que desvió recursos públicos.",
          "question": "¿Qué función misional de la PGN se aplica en este caso y cuál es su alcance real?",
          "options": [
            "La PGN no condena penalmente ni impone penas privativas de la libertad; ejerce función disciplinaria (sancionando con destitución/inhabilidad) e interviene como sujeto procesal ante la Fiscalía y la Corte Suprema en el juicio penal ordinario.",
            "La PGN condena penalmente a los altos mandatarios mediante sus Procuradurías Delegadas de Juzgamiento.",
            "La PGN carece de competencia y remite el caso exclusivamente a las personerías municipales."
          ],
          "correct": 0,
          "justification": "La imposición de penas de prisión es exclusiva de la Jurisdicción Penal Ordinaria (Jueces y Corte Suprema). La PGN ejerce potestad disciplinaria (sanciones administrativas) e interviene en el proceso penal como garante del orden jurídico y los derechos de las víctimas."
        },
        {
          "id": "u2_q3",
          "difficulty": "Media",
          "type": "Inferenciación / Criterio Técnico",
          "case": "Durante la etapa precontractual de una licitación de software, un equipo de la Procuraduría Delegada Preventiva detecta que los pliegos exigen marcas comerciales específicas sin justificación técnica.",
          "question": "¿Cuál es la actuación legítima que puede realizar el equipo preventivo frente a la entidad licitante?",
          "options": [
            "Expedir un acto administrativo suspendiendo de plano el proceso licitatorio en el SECOP II.",
            "Formular una advertencia preventiva fundamentada técnicamente para que la entidad ajuste los pliegos conforme al estatuto contractual, sin ordenar la declaratoria de desierta ni imponer cláusulas específicas.",
            "Sustituir al comité evaluador y redactar los pliegos definitivos de la contratación."
          ],
          "correct": 1,
          "justification": "La función preventiva advierte riesgos y exhorta al cumplimiento del principio de selección objetiva; no tiene facultades de veto ni de suspensión directa del proceso, pues ello violaría el límite constitucional contra la coadministración indebida."
        },
        {
          "id": "u2_q4",
          "difficulty": "Media",
          "type": "Inferenciación / Criterio Técnico",
          "case": "Un ciudadano acude a la DAEADI solicitando que se elimine inmediatamente de su certificado de antecedentes disciplinarios una sanción de suspensión de tres meses que le fue impuesta hace cuatro años y que ya cumplió en su totalidad.",
          "question": "Conforme a las normas que regulan el SIRI y el régimen de inhabilidades, ¿cómo debe tramitarse esta solicitud?",
          "options": [
            "Eliminar definitivamente todo registro de la base de datos central sin dejar respaldo documental.",
            "Verificar el cumplimiento efectivo del término de la sanción; al haberse extinguido la inhabilidad, el registro no debe figurar en el Certificado Ordinario de libre consulta ciudadana, pero debe conservarse en el Certificado Especial reservado para autoridades judiciales y administrativas competentes.",
            "Negar la solicitud debido a que las sanciones disciplinarias en el SIRI son imprescriptibles y deben mostrarse permanentemente a cualquier ciudadano."
          ],
          "correct": 1,
          "justification": "De acuerdo con la reglamentación del SIRI y la Ley 1952 de 2019, cumplida la sanción de suspensión, el antecedente cesa en el certificado ordinario para no vulnerar el derecho al trabajo y la reintegración, pero se mantiene en el registro histórico especial para fines judiciales y verificación de reincidencia."
        },
        {
          "id": "u2_q5",
          "difficulty": "Media",
          "type": "Inferenciación / Criterio Técnico",
          "case": "A raíz de las reformas introducidas por la Ley 2094 de 2021, un Profesional 3PU-15 de la DAEADI debe diseñar el flujo de permisos de un nuevo módulo en el Sistema de Información Misional (SIM).",
          "question": "¿Qué restricción técnica de perfiles de usuario debe garantizar obligatoriamente el sistema para cumplir con las garantías del debido proceso?",
          "options": [
            "Que los funcionarios de las Salas de Juzgamiento tengan acceso irrestricto de edición a las pruebas antes de que se profiera el pliego de cargos.",
            "Garantizar la separación estricta de roles: los usuarios asignados a dependencias de Instrucción no pueden tener roles de calificación ni de fallo en juzgamiento respecto del mismo expediente disciplinario.",
            "Permitir que el quejoso pueda redactar directamente el auto de apertura de investigación en la plataforma."
          ],
          "correct": 1,
          "justification": "La Ley 2094 de 2021 y la jurisprudencia de la Corte Constitucional (Sentencia C-111 de 2022) consagran la garantía de imparcialidad a través de la separación absoluta entre la autoridad instructora y la autoridad juzgadora; por ende, los sistemas informáticos misionales deben reflejar esta segregación de funciones en su control de acceso."
        },
        {
          "id": "u2_q6",
          "difficulty": "Difícil",
          "type": "Juicio Situacional (SJT)",
          "case": "En vísperas de elecciones legislativas, un medio de comunicación solicita a la DAEADI una base de datos en Excel que contenga el listado de todos los candidatos inscritos con indicación de si tienen indagaciones disciplinarias preliminares en curso, alegando el principio de máxima publicidad (Ley 1712 de 2014).",
          "question": "Usted como Profesional Universitario de la DAEADI es consultado para estructurar la respuesta. ¿Cuál es el dictamen legal y técnico correcto?",
          "options": [
            "Entregar la base de datos completa inmediatamente, pues los candidatos son figuras públicas y prima el derecho de acceso a la información.",
            "Negar la entrega de las indagaciones preliminares activas, señalando que la etapa de indagación e investigación previa tiene reserva legal expresa hasta la notificación del pliego de cargos (Art. 115 Ley 1952/19) para proteger la presunción de inocencia y el buen nombre; solo pueden certificarse las sanciones debidamente ejecutoriadas que consten en el SIRI.",
            "Publicar únicamente los datos de los candidatos de partidos de oposición."
          ],
          "correct": 1,
          "justification": "El Art. 115 de la Ley 1952 de 2019 establece que las diligencias disciplinarias son reservadas hasta que se formule el pliego de cargos o se profiera decisión que ponga fin a la actuación. El SIRI solo certifica sanciones en firme y ejecutoriadas; divulgar indagaciones en curso viola el régimen de reserva y la presunción de inocencia."
        },
        {
          "id": "u2_q7",
          "difficulty": "Difícil",
          "type": "Juicio Situacional (SJT)",
          "case": "Un Procurador Provincial solicita a la DAEADI que altere de forma retroactiva la fecha de registro en el sistema misional de un auto de suspensión provisional contra un concejal municipal, alegando que por problemas de conectividad no se pudo subir el día de su firma y se venció el plazo.",
          "question": "Como funcionario responsable del registro y trazabilidad de datos misionales, ¿cuál debe ser su determinación?",
          "options": [
            "Modificar manualmente el campo de fecha en la base de datos mediante un script SQL directo, atendiendo a la solicitud de una autoridad superior.",
            "Rechazar categóricamente la alteración de logs o fechas de radicación, registrar la actuación con la fecha y hora reales del sistema e indicar al solicitante que cualquier desfase temporal debe ser sustentado y convalidado jurídicamente dentro del propio expediente procesal mediante constancia de secretaría.",
            "Eliminar el expediente para que el funcionario pueda volver a radicarlo desde cero sin inconsistencias."
          ],
          "correct": 1,
          "justification": "La inalterabilidad de los logs de auditoría y la fecha cierta del sistema son principios no negociables de la seguridad de la información y la fe pública (Ley 527 de 1999 y Ley 1952 de 2019). Alterar fechas en una base de datos pública constituye delito de falsedad ideológica en documento público y falta disciplinaria gravísima."
        },
        {
          "id": "u2_q8",
          "difficulty": "Difícil",
          "type": "Juicio Situacional (SJT)",
          "case": "La Registraduría Nacional remite un archivo plano masivo con 80.000 inscripciones de candidatos para ser cruzado contra el SIRI. Durante el proceso ETL automatizado, el sistema arroja 450 coincidencias exactas por nombre y apellido, pero con cédulas de ciudadanía totalmente diferentes a las de las personas sancionadas.",
          "question": "¿Cuál es la decisión técnica correcta que debe adoptar el Profesional 3PU-15 antes de emitir el reporte de inhabilidades electorales?",
          "options": [
            "Reportar a todos los 450 candidatos como inhabilitados para que sea el Consejo Nacional Electoral el que resuelva las diferencias.",
            "Identificar que se trata de casos de homonimia y aplicar un filtro estricto de cruce por clave primaria unívoca (Cédula de Ciudadanía / NUIP), certificando como inhabilitados únicamente aquellos donde exista identidad plena de documento de identidad y registro sancionatorio en firme.",
            "Descartar todo el archivo plano y no emitir ningún reporte para evitar reclamaciones ciudadanas."
          ],
          "correct": 1,
          "justification": "La homonimia es uno de los mayores riesgos en bases de datos públicas de control. Las inhabilidades son personalísimas y restrictivas; un cruce de datos debe basarse rigurosamente en la clave unívoca oficial (Cédula de Ciudadanía o NUIP validado con la Registraduría). Reportar por nombre causaría daños irreparables a derechos fundamentales de participación política."
        }
      ]
    },
    {
      "id": 3,
      "number": "03",
      "title": "Derecho Constitucional y Principios de la Función Administrativa",
      "category": "Conocimientos Esenciales Específicos",
      "level": "Intermedio",
      "duration": "50 a 65 min",
      "summary": "Estudio profundo del Artículo 209 de la Constitución Política y los principios rectores de la administración pública (igualdad, moralidad, eficacia, economía, celeridad, imparcialidad y publicidad). Debido proceso administrativo (Art. 29 C.P.), presunción de inocencia, reserva legal, acceso a documentos públicos y jurisprudencia unificada de la Corte Constitucional.",
      "normativa": [
        "Constitución Política de 1991: Artículos 1, 2, 6, 29, 74, 83, 122, 123 y 209.",
        "Ley 1437 de 2011 (CPACA): Artículo 3 (Principios del Procedimiento Administrativo).",
        "Ley Estatutaria 1712 de 2014: Ley de Transparencia y Acceso a la Información Pública Nacional.",
        "Sentencias de la Corte Constitucional: C-030 de 2012, C-826 de 2013, SU-355 de 2020 y C-038 de 2020."
      ],
      "officialInvestigations": [
        {
          "type": "Constitución Política",
          "title": "Constitución Política de 1991 - Artículos 29 y 209",
          "description": "El Art. 29 consagra el debido proceso aplicable a toda clase de actuaciones judiciales y administrativas. El Art. 209 erige los principios rectores de la función administrativa: igualdad, moralidad, eficacia, economía, celeridad, imparcialidad y publicidad.",
          "relevance": "Son los mandatos axiológicos supremos que condicionan la validez de cualquier actuación de la PGN."
        },
        {
          "type": "Ley de Procedimiento",
          "title": "Ley 1437 de 2011 - Artículo 3: Principios Rectores del CPACA",
          "description": "Desarrolla los principios constitucionales añadiendo la buena fe, participación, responsabilidad, transparencia y coordinación como deberes de cumplimiento inexcusable para todo servidor público.",
          "relevance": "Define el estándar operativo que rige los trámites y conceptos de la DAEADI."
        },
        {
          "type": "Ley Estatutaria",
          "title": "Ley 1712 de 2014 - Ley de Transparencia y Acceso a la Información Pública",
          "description": "Regula el principio de máxima publicidad y fija el régimen de excepciones: información reservada (protección de derechos fundamentales/seguridad) e información clasificada.",
          "relevance": "Permite resolver controversias cuando particulares exigen bases de datos misionales de la PGN."
        },
        {
          "type": "Jurisprudencia Constitucional",
          "title": "Sentencia C-030 de 2012 - El Principio de Moralidad Administrativa",
          "description": "Precisa que la moralidad administrativa no es un concepto ético subjetivo del funcionario, sino un estándar objetivo de rectitud, honestidad, apego irrestricto a la ley y defensa del interés general.",
          "relevance": "Fundamento para sancionar conductas desleales en el manejo de información estatal."
        },
        {
          "type": "Jurisprudencia Constitucional",
          "title": "Sentencia C-826 de 2013 - Debido Proceso Probatorio en Materia Disciplinaria",
          "description": "Examina la validez de las pruebas recaudadas en medios electrónicos y la obligatoriedad de permitir la contradicción probatoria antes de adoptar decisiones sancionatorias.",
          "relevance": "Directamente aplicable a la custodia y validez de informes técnicos y peritajes de la DAEADI."
        },
        {
          "type": "Jurisprudencia Constitucional",
          "title": "Sentencia SU-355 de 2020 - Alcance del Derecho Fundamental de Acceso a Documentos Públicos",
          "description": "Unifica la jurisprudencia sobre el deber del Estado de entregar información pública salvo reserva constitucional o legal expresa, motivada y proporcionada.",
          "relevance": "Marca los límites de la reserva en expedientes y bases de datos institucionales."
        },
        {
          "type": "Jurisprudencia Constitucional",
          "title": "Sentencia C-038 de 2020 - Principio de Responsabilidad de los Servidores Públicos",
          "description": "Reitera que los servidores públicos responden no solo por infringir la Constitución y las leyes, sino también por omisión o extralimitación en el ejercicio de sus funciones (Art. 6 C.P.).",
          "relevance": "Fija la pauta de responsabilidad estricta para el Profesional Universitario 3PU-15."
        },
        {
          "type": "Doctrina de la Función Pública",
          "title": "Guía de Aplicación de los Principios de la Función Pública (DAFP)",
          "description": "Instrumento del DAFP que ilustra la aplicación del principio de celeridad frente a la economía y cómo equilibrar la rapidez procesal con el rigor técnico.",
          "relevance": "Referencia pedagógica en preguntas de juicio situacional sobre tiempos de respuesta."
        },
        {
          "type": "Jurisprudencia Constitucional",
          "title": "Sentencia C-540 de 2012 - Protección de Datos de Inteligencia y Control",
          "description": "Declara la constitucionalidad de las reservas legales de información estratégica y bases de datos destinadas a investigaciones contra la corrupción y el crimen organizado.",
          "relevance": "Ampara la reserva técnica de ciertos modelos de analítica avanzada de la DAEADI."
        },
        {
          "type": "Concepto Sala de Consulta",
          "title": "Concepto Consejo de Estado No. 2320 - Prohibición de Exigir Requisitos no Previstos en la Ley",
          "description": "Desarrolla el principio de economía y el principio de legalidad (Art. 84 C.P.), prohibiendo a las autoridades exigir documentos o trámites no autorizados legalmente.",
          "relevance": "Clave en la simplificación de trámites de PQRS y certificados en la PGN."
        }
      ],
      "deepModules": [
        {
          "title": "1. Los Principios del Artículo 209 Constitucional y su Aplicación en el Trabajo Diario",
          "content": "El Artículo 209 no contiene meras declaraciones retóricas; consagra mandatos jurídicos vinculantes para toda la actividad administrativa:\n• Igualdad: Trato imparcial e idéntico a todos los ciudadanos y peticionarios sin privilegios ni sesgos partidistas o personales.\n• Moralidad: Compromiso activo con la verdad, la pulcritud y el uso transparente de los recursos del Estado.\n• Eficacia: Orientación a la consecución real de los fines estatales, no al simple cumplimiento formal de trámites vacíos.\n• Economía: Optimización del tiempo, esfuerzo y recursos públicos, eliminando trámites innecesarios y garantizando austeridad.\n• Celeridad: Impulso oportuno de los procedimientos evitando la dilación injustificada y el vencimiento de términos.\n• Imparcialidad: Decidir con base exclusiva en las pruebas y el ordenamiento jurídico, sin favorecer a ninguna de las partes.\n• Publicidad: Deber de dar a conocer las decisiones y actos administrativos a los interesados y a la comunidad, garantizando el control social.",
          "keyRule": "La inobservancia de los principios del Art. 209 C.P. invalida los actos administrativos y puede acarrear responsabilidad disciplinaria por falta grave."
        },
        {
          "title": "2. El Debido Proceso Administrativo (Artículo 29 C.P.) y el Régimen Probatorio",
          "content": "El debido proceso se aplica a todas las actuaciones administrativas. Sus garantías fundamentales incluyen:\n1. Principio de Legalidad: Nadie puede ser investigado ni sancionado sino conforme a leyes preexistentes al acto que se le imputa.\n2. Juez Natural y Competencia: La decisión debe ser adoptada por la autoridad que la Constitución o la ley haya designado previamente.\n3. Presunción de Inocencia: Toda persona se presume inocente mientras no se haya declarado legalmente culpable mediante fallo en firme.\n4. Derecho de Defensa y Contradicción: Posibilidad de conocer las pruebas en su contra, controvertirlas, presentar pruebas de descargo y contar con asesoría técnica o jurídica.\n5. Non Bis in Idem: Nadie puede ser juzgado dos veces por el mismo hecho bajo la misma naturaleza jurídica.",
          "keyRule": "En la DAEADI, cualquier informe técnico, análisis de logs o peritaje que sirva de sustento a un auto de cargos debe recaudarse con estricta observancia del debido proceso probatorio."
        },
        {
          "title": "3. Tensión Constitucional: Publicidad vs. Reserva Legal en Datos Misionales",
          "content": "La Ley 1712 de 2014 consagra el principio de máxima publicidad: toda información en poder del Estado se presume pública. No obstante, el ordenamiento reconoce dos categorías de excepción:\n• Información Clasificada: Protege derechos individuales como la intimidad personal, la privacidad, los datos biométricos y la historia crediticia (Habeas Data).\n• Información Reservada: Protege intereses públicos superiores como la defensa y seguridad nacional, la salud pública y el éxito de investigaciones disciplinarias o penales en etapa preliminar (Art. 19 Ley 1712/14).\nPara negar una solicitud de información, la Procuraduría debe emitir una respuesta motivada, invocando el artículo de reserva específico y aplicando un test de daño que justifique la restricción.",
          "keyRule": "La reserva no se presume; si no existe ley estatutaria u orgánica expresa que declare la reserva, el documento o dato es de libre acceso público."
        },
        {
          "title": "4. El Principio de Buena Fe y la Responsabilidad del Servidor Público (Arts. 6 y 83 C.P.)",
          "content": "El Artículo 83 de la Carta impone que las actuaciones de los particulares y de las autoridades públicas deberán ceñirse a los postulados de la buena fe, la cual se presumirá en todas las gestiones que aquellos adelanten ante estas. A su vez, el Artículo 6 consagra una regla de oro de la función pública: los particulares solo son responsables ante las autoridades por infringir la Constitución y las leyes; los servidores públicos lo son por la misma causa y, además, por omisión o extralimitación en el ejercicio de sus funciones. En el área disciplinar de Ingeniería y Datos (DAEADI), una omisión (no actualizar el SIRI a tiempo permitiendo que se posesione un inhabilitado) genera responsabilidad idéntica a una extralimitación (alterar un registro sin facultades).",
          "keyRule": "El servidor público solo puede hacer aquello que la ley le autoriza expresamente; todo lo no atribuido por ley está prohibido."
        }
      ],
      "scenarioExample": "Un peticionario solicita a la DAEADI copia íntegra de un modelo de inteligencia artificial desarrollado internamente para la detección de carteles en contratación pública, alegando derecho de petición de información pública. El Profesional Universitario analiza la petición y proyecta una respuesta formal: suministra la documentación metodológica y conceptual general (principio de publicidad), pero restringe el acceso al código fuente y parámetros criptográficos exactos, motivando la reserva legal en la protección de la efectividad de las investigaciones de control y la propiedad intelectual del Estado.",
      "examTip": "DISTRACTOR FRECUENTE: Creer que los principios constitucionales son 'guías morales' sin peso punitivo. En los exámenes de la Procuraduría, violar el principio de imparcialidad o de debido proceso es una causal recurrente de nulidad procesal y falta gravísima.",
      "glossary": [
        {
          "term": "Debido Proceso",
          "definition": "Garantía constitucional (Art. 29 C.P.) que asegura el respeto a las formas propias de cada juicio, presunción de inocencia, defensa y contradicción en sede administrativa y judicial."
        },
        {
          "term": "Moralidad Administrativa",
          "definition": "Principio rector objetivo de la gestión pública que prohíbe el uso torticero de las facultades estatales para fines particulares o deshonestos."
        },
        {
          "term": "Principio de Publicidad",
          "definition": "Deber del Estado de poner a disposición de los ciudadanos todos sus actos y decisiones, haciendo de la transparencia la regla y de la reserva la excepción legal motivada."
        },
        {
          "term": "Extralimitación de Funciones",
          "definition": "Actuación de un servidor público más allá de los límites y facultades expresamente otorgados por la ley o el manual específico de funciones."
        },
        {
          "term": "Información Reservada",
          "definition": "Aquella información pública cuyo acceso está restringido por ley por comprometer la seguridad nacional, el orden público o la reserva de indagaciones judiciales y disciplinarias."
        },
        {
          "term": "Información Clasificada",
          "definition": "Aquella que, perteneciendo a una entidad pública, está restringida por involucrar derechos fundamentales a la intimidad, habeas data o secretos comerciales legítimos."
        },
        {
          "term": "Principio de Celeridad",
          "definition": "Mandato que exige que los procedimientos se surtan con prontitud, diligencia y dentro de los plazos legales, suprimiendo formalismos inútiles."
        },
        {
          "term": "Non Bis in Idem",
          "definition": "Principio de justicia que prohíbe que una persona sea juzgada o sancionada dos veces por los mismos hechos constitutivos de una misma infracción jurídica."
        }
      ],
      "quiz": [
        {
          "id": "u3_q1",
          "difficulty": "Fácil",
          "type": "Conceptual / Normativa",
          "case": "En el análisis de un expediente, un funcionario afirma que los principios constitucionales del Artículo 209 son solo orientaciones éticas optativas que no invalidan un acto administrativo.",
          "question": "¿Cuál es el valor vinculante real de los principios de la función administrativa en el ordenamiento colombiano?",
          "options": [
            "Tienen carácter de pautas morales no vinculantes, por lo que su inobservancia no genera ninguna consecuencia procesal ni disciplinaria.",
            "Son normas constitucionales de aplicación directa e imperativa; su vulneración vicia de nulidad los actos administrativos y puede estructurar faltas disciplinarias por extralimitación u omisión.",
            "Solo aplican obligatoriamente a los ministros del despacho y magistrados de altas cortes, pero no a los profesionales de carrera o provisionales."
          ],
          "correct": 1,
          "justification": "La jurisprudencia unificada de la Corte Constitucional y del Consejo de Estado ha ratificado que los principios del Art. 209 C.P. tienen fuerza normativa vinculante directa. Desconocer la moralidad, imparcialidad o celeridad vulnera el orden constitucional y acarrea la nulidad del acto."
        },
        {
          "id": "u3_q2",
          "difficulty": "Fácil",
          "type": "Conceptual / Normativa",
          "case": "Un servidor público de la DAEADI se entera de una irregularidad contractual y decide no reportarla porque su jefe de despacho le dice que 'no se meta en problemas ajenos'.",
          "question": "Frente al Artículo 6 de la Constitución Política, ¿cuál es el régimen de responsabilidad que le asiste al servidor público?",
          "options": [
            "El servidor público solo responde por violar directamente la ley de forma activa, pero nunca por abstenerse de actuar u omitir deberes.",
            "El servidor público responde no solo por infringir la Constitución y la ley, sino también por omisión o extralimitación en el ejercicio de sus funciones públicas.",
            "El servidor queda exento de toda culpa si demuestra que recibió una sugerencia verbal de un superior jerárquico."
          ],
          "correct": 1,
          "justification": "El Art. 6 de la Carta Política es explícito: 'Los servidores públicos son responsables por infringir la Constitución y las leyes, y por omisión o extralimitación en el ejercicio de sus funciones'. Omitir denunciar un hecho irregular del que tenga conocimiento es una omisión sancionable."
        },
        {
          "id": "u3_q3",
          "difficulty": "Media",
          "type": "Inferenciación / Criterio Técnico",
          "case": "Un ciudadano solicita copias de todas las peticiones ciudadanas y denuncias radicadas por sus vecinos contra un establecimiento de comercio, incluyendo los nombres, teléfonos y direcciones de los quejosos.",
          "question": "¿Cómo debe ponderar la entidad la solicitud frente a la Ley 1712 de 2014 y el derecho constitucional a la intimidad (Art. 15 C.P.)?",
          "options": [
            "Entregar todo de manera íntegra, porque el principio de máxima publicidad obliga a revelar cualquier dato sin excepción.",
            "Entregar copia de las denuncias pero elaborando una tabla de anonimización (testando o tachando nombres, teléfonos y datos biométricos de los denunciantes), por tratarse de información clasificada que ampara la seguridad y privacidad de los ciudadanos.",
            "Negar rotundamente la entrega de cualquier documento aduciendo secreto de Estado absoluto."
          ],
          "correct": 1,
          "justification": "Conforme a la Ley 1712 de 2014 y la jurisprudencia constitucional (Sentencia SU-355 de 2020), cuando un documento público contiene datos personales sensibles o semiprivados que ponen en riesgo la seguridad de los denunciantes, la autoridad debe entregar una versión pública anonimizada (principio de divisibilidad)."
        },
        {
          "id": "u3_q4",
          "difficulty": "Media",
          "type": "Inferenciación / Criterio Técnico",
          "case": "Durante la tramitación de una solicitud ciudadana de expedición de certificado de antecedentes especiales, el funcionario a cargo exige al ciudadano presentar una declaración juramentada ante notario donde explique para qué trámite necesita el certificado.",
          "question": "¿Qué principio constitucional y administrativo vulnera la exigencia de este requisito?",
          "options": [
            "El principio de economía y el Artículo 84 de la Carta Política, que prohíbe exigir requisitos o permisos adicionales no reglamentados de manera general en la ley para el ejercicio de un derecho.",
            "El principio de publicidad, pues la exigencia hace público un trámite notarial.",
            "El principio de moralidad administrativa, porque el notario se enriquece ilícitamente."
          ],
          "correct": 0,
          "justification": "El Art. 84 de la Constitución establece que 'cuando un derecho o una actividad hayan sido reglamentados de manera general, las autoridades públicas no podrán establecer ni exigir permisos, licencias o requisitos adicionales para su ejercicio'. Exigir declaraciones extra-legales viola flagrantemente la economía y legalidad."
        },
        {
          "id": "u3_q5",
          "difficulty": "Media",
          "type": "Inferenciación / Criterio Técnico",
          "case": "En un proceso disciplinario contra un contratista, el funcionario instructor incorpora al expediente un informe de analítica de datos elaborado por la DAEADI, pero se niega a darle traslado al investigado para que pueda revisar los datos brutos con los que se construyó el informe.",
          "question": "¿Qué garantía del debido proceso (Art. 29 C.P.) se está conculcando directamente en este caso?",
          "options": [
            "El principio de cosa juzgada constitucional.",
            "El derecho fundamental a la contradicción y defensa probatoria, que exige que toda prueba allegada a una actuación administrativa pueda ser controvertida técnica y jurídicamente por la persona investigada.",
            "El principio de gratuidad de la función administrativa."
          ],
          "correct": 1,
          "justification": "La Sentencia C-826 de 2013 de la Corte Constitucional recalca que las pruebas técnicas y periciales no pueden ser secretas ni incontrastables. El debido proceso exige ponerlas en conocimiento del investigado con tiempo suficiente para que pueda ejercer el derecho de contradicción técnica."
        },
        {
          "id": "u3_q6",
          "difficulty": "Difícil",
          "type": "Juicio Situacional (SJT)",
          "case": "Un Profesional 3PU-15 de la DAEADI es designado para emitir un informe técnico sobre presuntos sobrecostos en la compra de licencias de bases de datos de una entidad. Durante la recolección de información, se da cuenta de que uno de los directivos que avaló la compra es su tío carnal.",
          "question": "Frente al principio constitucional de imparcialidad (Art. 209 C.P.) y el régimen legal de inhabilidades y conflictos de interés, ¿cuál es la conducta que debe adoptar de forma inmediata?",
          "options": [
            "Continuar con la pericia esforzándose por ser lo más objetivo posible y presentar el informe sin comentar el vínculo familiar para no demorar la entrega.",
            "Declararse impedido por escrito de forma inmediata ante su superior jerárquico, manifestando la causal de parentesco dentro del tercer grado de consanguinidad para que se le separe del asunto y se designe a otro profesional.",
            "Renunciar al empleo público para evitar ser sancionado disciplinariamente."
          ],
          "correct": 1,
          "justification": "El Art. 11 de la Ley 1437 de 2011 (CPACA) y el Código General Disciplinario consagran como deber inexcusable manifestar de inmediato los impedimentos cuando exista parentesco hasta el cuarto grado de consanguinidad. No hacerlo vulnera la imparcialidad y vicia de nulidad absoluta el dictamen pericial."
        },
        {
          "id": "u3_q7",
          "difficulty": "Difícil",
          "type": "Juicio Situacional (SJT)",
          "case": "Una ONG solicita los registros en formato abierto de todas las quejas y sanciones tramitadas contra servidores públicos de un municipio durante los últimos cinco años. El Director de la dependencia ordena negar la petición alegando que la consolidación de los datos requiere 'demasiado esfuerzo de cómputo y horas de personal' (principio de economía interna).",
          "question": "Usted debe revisar jurídicamente la viabilidad de esa negativa. ¿Cuál es la postura correcta que debe asumir conforme a la Ley 1712 de 2014?",
          "options": [
            "Avalar la negativa, ya que la carga operativa de las entidades públicas prevalece sobre el derecho de acceso a la información.",
            "Explicar que la carga de trabajo administrativo no es una causal legítima de reserva legal prevista en la Constitución ni en la Ley 1712 de 2014; la entidad debe entregar la información existente en sus bases de datos en los formatos disponibles, orientando al peticionario si requiere consulta directa en sistemas abiertos.",
            "Sugerir cobrar una tarifa de $500.000 por concepto de honorarios técnicos para desincentivar la petición."
          ],
          "correct": 1,
          "justification": "La jurisprudencia unificada de la Corte Constitucional (Sentencia SU-355 de 2020) señala que la reserva es taxativa y de orden legal estricto. La dificultad operativa o el volumen de información no constituyen causal legal de reserva; la entidad debe suministrar los datos en el estado en que se encuentren."
        },
        {
          "id": "u3_q8",
          "difficulty": "Difícil",
          "type": "Juicio Situacional (SJT)",
          "case": "En un sistema automatizado de analítica preventiva de la DAEADI, se implementa un algoritmo de clasificación que marca automáticamente a ciertos funcionarios como 'con alto riesgo de soborno' basándose únicamente en su procedencia regional y tiempo en el cargo, publicando estas listas en un portal interno de acceso general.",
          "question": "¿Qué mandato constitucional fundamental se vulnera con este proceder y cuál debe ser la corrección técnica inmediata?",
          "options": [
            "No se vulnera nada, porque el Estado tiene la potestad de utilizar algoritmos experimentales para la prevención del delito.",
            "Se vulnera el principio de presunción de inocencia, igualdad y el derecho al buen nombre (Arts. 13, 15 y 29 C.P.), debiendo restringirse el acceso al modelo a fines estrictamente de investigación interna sin juicios de valor apriorísticos ni sesgos discriminatorios.",
            "El modelo es legal siempre que cuente con licencia de software libre."
          ],
          "correct": 1,
          "justification": "La analítica de datos en el sector público no puede vulnerar garantías fundamentales consagradas en la Constitución. Clasificar a servidores como 'sospechosos de soborno' por origen geográfico viola la igualdad (Art. 13), el buen nombre (Art. 15) y la presunción de inocencia (Art. 29). Los modelos deben basarse en evidencia fáctica objetiva."
        }
      ]
    },
    {
      "id": 4,
      "number": "04",
      "title": "Régimen Disciplinario General (Ley 1952 de 2019 y Ley 2094 de 2021)",
      "category": "Conocimientos Esenciales Específicos",
      "level": "Intermedio - Avanzado",
      "duration": "55 a 70 min",
      "summary": "Estudio integral del Código General Disciplinario (Ley 1952 de 2019) modificado por la Ley 2094 de 2021. Principio de ilicitud sustancial, formas de culpabilidad (dolo y culpa gravísima/grave), catálogo de faltas gravísimas (con énfasis en delitos informáticos y custodia de bases de datos misionales), etapas procesales (instrucción vs juzgamiento), medidas cautelares y el impacto vinculante de la Sentencia C-030 de 2023.",
      "normativa": [
        "Ley 1952 de 2019: Código General Disciplinario (Libros I y II).",
        "Ley 2094 de 2021: Reforma a las funciones disciplinarias y separación de roles procesales.",
        "Sentencia C-030 de 2023 de la Corte Constitucional (Control judicial de sanciones a servidores de elección popular).",
        "Sentencia C-111 de 2022 de la Corte Constitucional (Garantía de doble instancia e imparcialidad objetiva).",
        "Sentencia C-429 de 2001 (Autonomía de la acción disciplinaria)."
      ],
      "officialInvestigations": [
        {
          "type": "Código Sustantivo",
          "title": "Ley 1952 de 2019 - Código General Disciplinario (CGD)",
          "description": "Cuerpo normativo que compila el derecho sustancial y procesal disciplinario colombiano, reemplazando a la Ley 734 de 2002. Consagra los principios de dignidad humana, legalidad, ilicitud sustancial y proporcionalidad.",
          "relevance": "Estatuto sancionatorio primario aplicable a todos los servidores públicos en Colombia."
        },
        {
          "type": "Ley de Reforma Procesal",
          "title": "Ley 2094 de 2021 - Atribución de Funciones Jurisdiccionales y Separación de Fases",
          "description": "Reorganizó el trámite procesal disciplinario estableciendo una separación tajante entre la fase de investigación/instrucción y la fase de juzgamiento, además de regular la doble conformidad.",
          "relevance": "Define cómo se tramitan los procesos dentro de la Procuraduría."
        },
        {
          "type": "Jurisprudencia Constitucional Clave",
          "title": "Sentencia C-030 de 2023 - Alcance de Sanciones a Servidores de Elección Popular",
          "description": "Modula las facultades sancionatorias de la PGN frente a mandatarios elegidos por voto popular, exigiendo que las sanciones de destitución e inhabilidad queden suspendidas hasta que el Consejo de Estado ejerza control jurisdiccional automático.",
          "relevance": "Tema de máxima actualidad jurídica y pregunta fija en los concursos de la PGN."
        },
        {
          "type": "Jurisprudencia Constitucional",
          "title": "Sentencia C-111 de 2022 - Imparcialidad y Separación Orgánica de Dependencias",
          "description": "Ratifica que la instrucción y el juzgamiento deben radicarse en dependencias funcional y orgánicamente distintas e independientes para preservar la neutralidad del fallador.",
          "relevance": "Determina la estructura interna de las salas disciplinarias."
        },
        {
          "type": "Doctrina de la PGN",
          "title": "Guía Práctica del Procedimiento Ordinario Disciplinario (PGN)",
          "description": "Manual operativo interno que desglosa las etapas: indagación previa, investigación disciplinaria, evaluación (archivo o pliego de cargos) y juzgamiento.",
          "relevance": "Guía los trámites en el Sistema Misional (SIM)."
        },
        {
          "type": "Doctrina Jurisprudencial",
          "title": "Sentencia C-818 de 2005 - Tipificación de Faltas y Régimen de Remisión en Blanco",
          "description": "Analiza las faltas disciplinarias y los tipos abiertos, exigiendo que para sancionar a un funcionario se demuestre con claridad qué norma del deber funcional fue conculcada.",
          "relevance": "Impide sanciones arbitrarias sin fundamento en deberes normativos concretos."
        },
        {
          "type": "Jurisprudencia Consejo de Estado",
          "title": "Sentencia de Unificación Sección Segunda No. 00092 de 2021 - Ilicitud Sustancial",
          "description": "Fija que la ilicitud sustancial no se configura por el mero quebrantamiento formal de una norma, sino cuando se causa una afectación injustificada y material al deber funcional y al servicio público.",
          "relevance": "Criterio determinante para diferenciar un error formal excusable de una falta disciplinaria."
        },
        {
          "type": "Normativa Técnica Especial",
          "title": "Código General Disciplinario - Faltas Relacionadas con la Custodia de Información",
          "description": "Artículos 54 y 55 del CGD que tipifican como faltas gravísimas la alteración, destrucción, ocultamiento, indebida utilización o fuga de información reservada o bases de datos oficiales.",
          "relevance": "Régimen directamente aplicable a la custodia y manipulación de datos en la DAEADI."
        },
        {
          "type": "Jurisprudencia Corte IDH",
          "title": "Caso Petro Urrego vs. Colombia (Sentencia de 8 de julio de 2020)",
          "description": "Fallo de la Corte Interamericana sobre el Art. 23 de la Convención Americana de DDHH respecto de la restricción de derechos políticos de elegidos por voto popular por entes administrativos.",
          "relevance": "Origen de la reforma procesal de la Ley 2094 de 2021 y de la Sentencia C-030/23."
        },
        {
          "type": "Resolución PGN",
          "title": "Resolución General sobre Competencia de las Procuradurías Delegadas de Instrucción y Juzgamiento",
          "description": "Fija el mapa de competencias territoriales y por factor de conexidad de las salas disciplinarias en el nivel central y desconcentrado.",
          "relevance": "Aclara a qué despacho remitir expedientes según la jerarquía del servidor."
        }
      ],
      "deepModules": [
        {
          "title": "1. El Principio de Ilicitud Sustancial y las Formas de Culpabilidad",
          "content": "A diferencia del derecho penal (donde rige la tipicidad cerrada y la antijuridicidad estricta), el derecho disciplinario sanciona el incumplimiento de los deberes funcionales. El principio medular es la Ilicitud Sustancial (Art. 9 Ley 1952/19): 'La conducta del sujeto disciplinable será ilícita cuando afecte sustancialmente el deber funcional y sin justificación alguna'. No cualquier error formal intrascendente constituye falta disciplinaria; se exige que la conducta lesione los principios de la función pública o ponga en riesgo la prestación del servicio.\n\nEn cuanto a la culpabilidad (Art. 10), en Colombia está prohibida toda forma de responsabilidad objetiva en materia disciplinaria. Las conductas solo pueden ser sancionadas a título de:\n• Dolo: Conocimiento de los hechos constitutivos de la falta y voluntad deliberada de realizarla.\n• Culpa Gravísima: Desatención elemental de deberes mínimos o ignorancia supina que cualquier persona sensata habría evitado.\n• Culpa Grave: Inobservancia del cuidado necesario que una persona prudente suele imprimir a sus actuaciones.",
          "keyRule": "Sin dolo o culpa debidamente probada en el expediente, no puede haber sanción disciplinaria válida."
        },
        {
          "title": "2. Catálogo de Faltas: Gravísimas, Graves y Leves (Énfasis en TIC y Datos Misionales)",
          "content": "Las faltas se clasifican en gravísimas, graves y leves (Art. 46):\n• Faltas Gravísimas: Están taxativamente descritas en la ley (Arts. 52 a 65). Incluyen actos de corrupción, violación del régimen de inhabilidades y faltas contra la custodia de información pública.\n\nPara el Profesional en la DAEADI (3PU-15), son de estudio obligatorio las faltas gravísimas sobre sistemas de información:\n1. Destruir, inutilizar, modificar, sustraer u ocultar documentos, bases de datos o sistemas de información de la entidad.\n2. Proporcionar información reservada o confidencial a personas no autorizadas.\n3. Alterar registros de sanciones en el SIRI para favorecer o perjudicar a un tercero.\n4. Utilizar indebidamente los recursos informáticos de la entidad para beneficio personal o actividades partidistas.\n\n• Sanciones aplicables: Para faltas gravísimas dolosas: Destitución e inhabilidad general de 10 a 20 años. Para faltas gravísimas culposas: Suspensión e inhabilidad especial.",
          "keyRule": "Cualquier alteración ilegítima de un registro del SIRI o SIM constituye falta gravísima dolosa sancionable con destitución e inhabilidad general de hasta 20 años."
        },
        {
          "title": "3. Estructura Procesal: Indagación Previa, Investigación y Separación de Roles",
          "content": "La Ley 2094 de 2021 implementó el sistema acusatorio disciplinario:\n1. Indagación Previa: Cuando existe duda sobre la ocurrencia de los hechos o la individualización del presunto autor. Plazo: 6 meses prorrogables.\n2. Investigación Disciplinaria: Cuando está plenamente identificado el presunto autor y existen pruebas de la falta. Plazo: 6 meses (o 18 meses si involucra varias personas o faltas graves). Culmina con: Auto de Cierre y posterior Archivo Definitivo o Pliego de Cargos.\n3. Juzgamiento: Una vez notificado el pliego de cargos, el funcionario instructor remite el expediente a la Sala de Juzgamiento correspondiente. El funcionario que instruye NUNCA juzga. En juzgamiento se celebra audiencia, se presentan descargos, se practican pruebas complementarias, se presentan alegatos de conclusión y se emite el fallo de primera instancia.",
          "keyRule": "La fase de instrucción busca esclarecer los hechos e imputar cargos; la fase de juzgamiento valora las pruebas con total autonomía e independencia funcional."
        },
        {
          "title": "4. Medidas Cautelares Disciplinarias y la Sentencia C-030 de 2023",
          "content": "La medida cautelar por excelencia es la Suspensión Provisional (Art. 217 Ley 1952/19). Puede ser decretada por el funcionario de instrucción o juzgamiento hasta por 3 meses (prorrogables por otros 3 meses) cuando existan serios elementos de juicio que permitan establecer que la permanencia en el cargo del investigado facilita la reiteración de la falta o interfiere en la investigación. Esta medida no es sancionatoria y tiene consulta obligatoria ante el superior.\n\nEn cuanto a la Sentencia C-030 de 2023 de la Corte Constitucional: Las decisiones sancionatorias de la PGN que impongan destitución, suspensión o inhabilidad a funcionarios elegidos por voto popular (alcaldes, gobernadores, concejales) NO quedan en firme automáticamente; se suspende su ejecución y deben ser remitidas obligatoriamente al Consejo de Estado para un control jurisdiccional automático e integral antes de cobrar ejecutoriedad.",
          "keyRule": "Una sanción de la PGN a un alcalde elegido popularmente solo adquiere fuerza ejecutoria una vez surtido el control automático ante el Consejo de Estado."
        }
      ],
      "scenarioExample": "Un desarrollador externo solicita a un Profesional de la DAEADI un volcado (dump) de la base de datos de producción del SIRI bajo el argumento de que necesita 'hacer pruebas de rendimiento en su equipo personal'. El Profesional se niega terminantemente, explica que extraer datos reales con información sensible de ciudadanos constituye una violación de seguridad de la información y una falta gravísima disciplinaria (Arts. 54 y 55 Ley 1952/19), y procede a generar un set de datos anonimizado y sintético en un entorno de pruebas controlado dentro de la infraestructura institucional.",
      "examTip": "DISTRACTOR CRÍTICO: Una pregunta puede plantear si la Procuraduría puede suspender provisionalmente a un servidor público sin consulta al superior jerárquico, o si la destitución de un alcalde opera de inmediato sin control judicial. Recuerda: la suspensión provisional siempre tiene consulta y la sanción a elegidos por voto popular requiere control previo del Consejo de Estado.",
      "glossary": [
        {
          "term": "Ilicitud Sustancial",
          "definition": "Afectación real y sustancial del deber funcional sin causal de justificación legalmente admisible."
        },
        {
          "term": "Dolo Disciplinario",
          "definition": "Conocimiento deliberado de los elementos de la falta disciplinaria y voluntad inequívoca de cometerla."
        },
        {
          "term": "Culpa Gravísima",
          "definition": "Incurrir en falta por desatención elemental de deberes mínimos que cualquier servidor público en su posición debía prever y evitar."
        },
        {
          "term": "Separación de Roles",
          "definition": "Mandato procesal que asigna a autoridades orgánicamente independientes las funciones de instrucción y de juzgamiento dentro del proceso disciplinario."
        },
        {
          "term": "Suspensión Provisional",
          "definition": "Medida cautelar transitoria (hasta 3 meses) para apartar al funcionario del cargo con el fin de evitar interferencia probatoria o reiteración de la falta."
        },
        {
          "term": "Control Automático de Legalidad",
          "definition": "Revisión judicial obligatoria que surte el Consejo de Estado sobre las sanciones de la PGN contra servidores de elección popular (Sentencia C-030/23)."
        },
        {
          "term": "Pliego de Cargos",
          "definition": "Acto administrativo procesal mediante el cual la autoridad de instrucción formaliza la imputación fáctica y jurídica contra el servidor investigado."
        },
        {
          "term": "Falta Gravísima",
          "definition": "Infracción disciplinaria de máxima lesividad social o institucional, taxativamente consagrada en la ley, sancionable con destitución e inhabilidad general."
        }
      ],
      "quiz": [
        {
          "id": "u4_q1",
          "difficulty": "Fácil",
          "type": "Conceptual / Normativa",
          "case": "En un curso de inducción, se debate sobre la exigencia de culpabilidad para imponer una sanción disciplinaria en el marco de la Ley 1952 de 2019.",
          "question": "¿Es legalmente admisible en el derecho disciplinario colombiano sancionar a un servidor público bajo la figura de la 'responsabilidad objetiva'?",
          "options": [
            "Sí, porque basta con que se produzca el resultado lesivo en la administración para presumir la culpabilidad del servidor público.",
            "No, en materia disciplinaria queda proscrita toda forma de responsabilidad objetiva; las faltas solo son sancionables a título de dolo o culpa debidamente probada.",
            "Sí, pero únicamente en los casos que involucren contratación estatal y software misional."
          ],
          "correct": 1,
          "justification": "El Artículo 10 de la Ley 1952 de 2019 prohíbe taxativamente la responsabilidad objetiva en materia disciplinaria. Para que una conducta sea sancionable, debe acreditarse de manera fehaciente el dolo o la culpa (gravísima o grave)."
        },
        {
          "id": "u4_q2",
          "difficulty": "Fácil",
          "type": "Conceptual / Normativa",
          "case": "Un servidor de la PGN comete un error mecanográfico menor en el número de radicado de un oficio de trámite interno, el cual fue corregido el mismo día sin alterar el curso del proceso ni generar daño.",
          "question": "Frente al principio de ilicitud sustancial (Art. 9 de la Ley 1952 de 2019), ¿esta conducta constituye falta disciplinaria?",
          "options": [
            "Sí, porque cualquier error formal en un documento oficial constituye falta disciplinaria gravísima por desatención.",
            "No, porque la ilicitud sustancial exige que la conducta afecte de manera sustancial y material el deber funcional sin justificación, lo cual no ocurre ante una simple falla formal inocua.",
            "Sí, y debe sancionarse inmediatamente con suspensión e inhabilidad especial."
          ],
          "correct": 1,
          "justification": "La ilicitud sustancial supera el formalismo ciego. Si el error no vulnera principios constitucionales, no perjudica el servicio ni causa agravio material al deber funcional, carece de antijuridicidad disciplinaria y no amerita sanción."
        },
        {
          "id": "u4_q3",
          "difficulty": "Media",
          "type": "Inferenciación / Criterio Técnico",
          "case": "Un Procurador Delegado de Instrucción dicta pliego de cargos contra un servidor público y, en el mismo proveído, convoca a la audiencia para dictar el fallo definitivo de primera instancia, argumentando que él conoce el expediente desde el principio y así garantiza la celeridad.",
          "question": "Conforme a las reformas introducidas por la Ley 2094 de 2021 y la Sentencia C-111 de 2022, ¿qué consecuencia jurídica acarrea este procedimiento?",
          "options": [
            "El procedimiento es válido porque el principio de celeridad prima sobre cualquier otra consideración procesal.",
            "Se incurre en una violación flagrante de las garantías del debido proceso y del juez natural, acarreando la nulidad absoluta de lo actuado por falta de competencia funcional, ya que la fase de juzgamiento debe surtirse ante un funcionario u órgano distinto e independiente del que adelantó la instrucción.",
            "Es legal siempre y cuando el investigado no presente recurso de reposición en los tres días siguientes."
          ],
          "correct": 1,
          "justification": "La Ley 2094 de 2021 impone la separación orgánica y funcional estricta entre la fase de instrucción y la de juzgamiento. Si el mismo funcionario que acusó (pliego de cargos) pretende juzgar y dictar sentencia, vulnera la garantía de imparcialidad objetiva y vicia el proceso de nulidad insubsanable."
        },
        {
          "id": "u4_q4",
          "difficulty": "Media",
          "type": "Inferenciación / Criterio Técnico",
          "case": "La Sala de Juzgamiento Disciplinario de la PGN emite un fallo destituyendo e inhabilitando por 10 años a un Alcalde Municipal en ejercicio por irregularidades gravísimas en contratación pública.",
          "question": "Conforme a la Sentencia C-030 de 2023 de la Corte Constitucional, ¿cuándo cobra plena ejecutoria material esta sanción?",
          "options": [
            "Cobra ejecutoria inmediata al día siguiente de la notificación personal del fallo de segunda instancia por la PGN.",
            "No adquiere ejecutoria de forma inmediata; la ejecución de la sanción queda en suspenso hasta tanto el Consejo de Estado surta el recurso extraordinario de revisión o control judicial automático e integral.",
            "Nunca cobra firmeza porque la Procuraduría no puede investigar disciplinariamente a ningún alcalde."
          ],
          "correct": 1,
          "justification": "La Sentencia C-030 de 2023 determinó que, para cumplir los estándares de la Convención Americana sobre Derechos Humanos, las sanciones de destitución e inhabilidad impuestas por la PGN a mandatarios elegidos por voto popular están sometidas a un control judicial obligatorio ante el Consejo de Estado, quedando suspendida su eficacia hasta dicho pronunciamiento."
        },
        {
          "id": "u4_q5",
          "difficulty": "Media",
          "type": "Inferenciación / Criterio Técnico",
          "case": "Un funcionario del área de infraestructura tecnológica de la PGN apaga intencionalmente los servidores del SIM para impedir que se radique a tiempo una queja disciplinaria contra un allegado suyo, logrando que prescriba la acción disciplinaria.",
          "question": "¿Cómo se clasifica jurídicamente esta falta disciplinaria en el Código General Disciplinario?",
          "options": [
            "Falta leve culposa, sancionable con amonestación verbal en hoja de vida.",
            "Falta grave sancionable únicamente con multa pecuniaria de quince días de salario.",
            "Falta gravísima a título de dolo, sancionable con destitución del cargo e inhabilidad general para ejercer funciones públicas por un término de diez a veinte años."
          ],
          "correct": 2,
          "justification": "Inutilizar o sabotear deliberadamente los sistemas informáticos de la entidad para propiciar la prescripción de una acción disciplinaria encaja en el catálogo de faltas gravísimas contra la administración de justicia y custodia de sistemas públicos (Arts. 54 y 55 Ley 1952/19), con sanción de destitución e inhabilidad general."
        },
        {
          "id": "u4_q6",
          "difficulty": "Difícil",
          "type": "Juicio Situacional (SJT)",
          "case": "Un Profesional 3PU-15 de la DAEADI descubre que un contratista de soporte tecnológico instaló un script oculto en la base de datos del SIRI que borraba silenciosamente las anotaciones de inhabilidad de determinados contratistas cada medianoche y las reinsertaba en la mañana. El contratista le ofrece una dádiva económica para que 'ignore el hallazgo'.",
          "question": "¿Cuál es la obligación jurídica y funcional inmediata del servidor de la Procuraduría?",
          "options": [
            "Aceptar la propuesta pero exigir que el script sea eliminado en las próximas semanas.",
            "Rechazar la dádiva, preservar de inmediato las evidencias digitales y logs de base de datos bajo estricta cadena de custodia, y formular la denuncia penal y queja disciplinaria respectiva ante la Dirección Nacional de Investigaciones Especiales (DNIE) y la Sala Disciplinaria de Instrucción.",
            "Apagar la base de datos de producción sin avisar a nadie para evitar que el script se vuelva a ejecutar."
          ],
          "correct": 1,
          "justification": "Frente a conductas de corrupción y sabotaje informático, el servidor público tiene el deber funcional y legal (Art. 67 CPP y Ley 1952/19) de denunciar de inmediato los hechos y asegurar el material probatorio técnico (logs y scripts) para sustentar la investigación penal y disciplinaria."
        },
        {
          "id": "u4_q7",
          "difficulty": "Difícil",
          "type": "Juicio Situacional (SJT)",
          "case": "En un proceso disciplinario por corrupción, la Sala de Instrucción solicita la suspensión provisional de un Director Territorial de la PGN que presuntamente está borrando expedientes en el sistema. El funcionario argumenta que la suspensión viola su presunción de inocencia y que debe esperar a que culmine todo el juicio.",
          "question": "¿Es jurídicamente procedente decretar la suspensión provisional en este caso según la Ley 1952 de 2019?",
          "options": [
            "No, porque ninguna persona puede ser suspendida de su empleo sin que exista una sentencia condenatoria definitiva ejecutoriada.",
            "Sí, porque la suspensión provisional es una medida cautelar transitoria (Art. 217 CGD) que busca precisamente evitar que el investigado interfiera en el trámite probatorio o reitere la falta, debiendo surtirse consulta inmediata ante el superior jerárquico.",
            "Solo es procedente si el sindicato de la entidad autoriza por escrito la medida."
          ],
          "correct": 1,
          "justification": "La suspensión provisional (Art. 217 Ley 1952/19) no es una sanción anticipada sino una medida cautelar legítima destinada a proteger la integridad de las pruebas y el servicio público ante indicios serios de interferencia procesal, sujeta siempre a consulta obligatoria."
        },
        {
          "id": "u4_q8",
          "difficulty": "Difícil",
          "type": "Juicio Situacional (SJT)",
          "case": "Usted es Profesional 3PU-15 en la DAEADI y un Procurador Delegado le solicita un informe analítico sobre las llamadas telefónicas personales y chats privados de WhatsApp de un servidor investigado, los cuales fueron obtenidos por un hacker anónimo y radicados en la queja.",
          "question": "Teniendo en cuenta las reglas de licitud probatoria del debido proceso disciplinario (Art. 29 C.P. y Art. 147 Ley 1952/19), ¿cómo debe actuar?",
          "options": [
            "Procesar toda la información y armar el grafo de relaciones en el software analítico, pues en materia disciplinaria toda prueba es válida sin importar su origen.",
            "Advertir formalmente en el informe técnico que los datos suministrados provienen de una interceptación ilegítima de comunicaciones privadas sin orden judicial previa, constituyendo prueba ilícita que no puede ser objeto de valoración pericial técnica por expresa prohibición constitucional de la regla de exclusión.",
            "Entregar los chats filtrados a los medios de comunicación para que la presión social obligue al funcionario a renunciar."
          ],
          "correct": 1,
          "justification": "El Art. 29 C.P. y el Art. 147 de la Ley 1952 de 2019 consagran la regla de exclusión: 'Es nula, de pleno derecho, la prueba obtenida con violación del debido proceso'. Interceptar comunicaciones privadas sin orden judicial es un delito penal; procesar esa prueba como insumo técnico viciaría de nulidad insubsanable todo el proceso disciplinario."
        }
      ]
    },
    {
      "id": 5,
      "number": "05",
      "title": "Teoría de la Administración Pública y Gestión Organizacional",
      "category": "Conocimientos Esenciales Específicos",
      "level": "Intermedio",
      "duration": "45 a 60 min",
      "summary": "Estudio de las teorías de gestión pública moderna: del modelo burocrático weberiano a la Nueva Gestión Pública (NGP) y la Gobernanza Pública en Red. Gestión por procesos (BPMN), ciclo PHVA, gestión del cambio y eliminación de silos funcionales en la analítica de la PGN.",
      "normativa": [
        "Ley 489 de 1998: Estatuto Básico de la Administración Pública.",
        "Decreto 1499 de 2017: Sistema de Gestión Institucional.",
        "Guía de Gestión por Procesos del DAFP (Versión 2023).",
        "Documentos CONPES 3654 (Rendición de Cuentas) y 3881 (Desarrollo y Gestión de TIC).",
        "Manual del Sistema de Gestión de Calidad de la PGN."
      ],
      "officialInvestigations": [
        {
          "type": "Guía Oficial DAFP",
          "title": "Guía para la Gestión por Procesos en Entidades Públicas (DAFP)",
          "description": "Metodología oficial del Departamento Administrativo de la Función Pública para la caracterización de macroprocesos, procesos y procedimientos institucionales, mapa de riesgos operativos y eliminación de cuellos de botella.",
          "relevance": "Estatuto metodológico base para las preguntas de diseño organizacional en concursos públicos."
        },
        {
          "type": "Estándar Internacional",
          "title": "Notación para el Modelado de Procesos de Negocio (BPMN 2.0)",
          "description": "Estándar de modelado de procesos que define compuertas lógicas, eventos, actividades y carriles (swimlanes) para optimizar la interacción entre dependencias estatales.",
          "relevance": "Permite esquematizar los flujos de trámites y quejas en la DAEADI."
        },
        {
          "type": "Doctrina de Gestión Pública",
          "title": "De la Burocracia Tradicional a la Nueva Gestión Pública y Gobernanza en Red",
          "description": "Texto doctrinal de la ESAP sobre la evolución de la administración pública: del cumplimiento ciego de normas a la generación de valor público, eficiencia, interoperabilidad y rendición de cuentas.",
          "relevance": "Marco conceptual clave para el enfoque del proceso de Conocimiento e Innovación."
        },
        {
          "type": "Manual Interno PGN",
          "title": "Mapa de Macroprocesos y Cadena de Valor de la Procuraduría General",
          "description": "Estructura institucional que divide la entidad en Procesos Estratégicos, Misionales (Preventivo, Disciplinario e Intervención), de Apoyo y de Evaluación/Control.",
          "relevance": "Ubica a la DAEADI dentro de la cadena de valor institucional."
        },
        {
          "type": "Metodología de Gestión",
          "title": "El Ciclo PHVA (Planear, Hacer, Verificar, Actuar) en la Gestión Institucional",
          "description": "Marco de mejora continua adoptado por la administración pública colombiana para asegurar la calidad y eficacia operativa en cada vigencia fiscal.",
          "relevance": "Fundamento para diseñar planes de mejora continua en la DAEADI."
        },
        {
          "type": "Documento CONPES",
          "title": "CONPES 3654 - Política Nacional de Rendición de Cuentas",
          "description": "Establece los lineamientos para que las entidades del Estado abran sus datos y expliquen sus resultados misionales ante la ciudadanía.",
          "relevance": "Orienta la generación de tableros y estadísticas de la DAEADI hacia la transparencia."
        },
        {
          "type": "Guía de Gestión del Cambio",
          "title": "Guía de Gestión del Cambio Organizacional para la Transformación Digital (MinTIC)",
          "description": "Metodología para vencer la resistencia cultural al cambio en funcionarios al implementar nuevos sistemas de información o flujos electrónicos.",
          "relevance": "Evalúa el criterio del profesional al capacitar usuarios en sistemas como SIRI o SIM."
        },
        {
          "type": "Jurisprudencia Consejo de Estado",
          "title": "Sentencia Consejo de Estado Sección Primera (Rad. 2018-00214) - Principio de Eficiencia",
          "description": "Reitera que los procedimientos administrativos deben estructurarse de tal forma que garanticen el resultado sin sobrecargar indebidamente al administrado.",
          "relevance": "Sustento jurisprudencial para la simplificación de trámites en la PGN."
        },
        {
          "type": "Doctrina Administrativa",
          "title": "Gestión del Conocimiento en el Sector Público (Banco Interamericano de Desarrollo - BID)",
          "description": "Principios para capturar el conocimiento tácito de los funcionarios y convertirlo en conocimiento explícito e institucional en bases de datos compartidas.",
          "relevance": "Corazón del proceso de Conocimiento e Innovación al que pertenece el cargo 3PU-15."
        },
        {
          "type": "Manual de Indicadores",
          "title": "Guía Metodológica para la Formulación de Indicadores de Desempeño (DNP)",
          "description": "Criterios para construir indicadores de Eficacia, Eficiencia, Efectividad y Economía en la gestión pública.",
          "relevance": "Aplicable al seguimiento del plan estratégico de la DAEADI."
        }
      ],
      "deepModules": [
        {
          "title": "1. Paradigmas de la Administración Pública: Burocracia, NGP y Valor Público",
          "content": "La administración pública ha transitado por tres grandes hitos:\n1. Burocracia Tradicional (Weber): Enfoque legalista estricto, apego ciego al procedimiento formal, jerarquía vertical rígida y resistencia a la innovación. Si bien asegura el principio de legalidad, suele degenerar en tramitomanía e ineficiencia.\n2. Nueva Gestión Pública (NGP): Introduce conceptos del sector privado como la orientación a resultados, la medición por indicadores de desempeño (KPIs), la descentralización operativa y la satisfacción del ciudadano como cliente o usuario del servicio público.\n3. Nueva Gobernanza Pública y Creación de Valor Público: Enfoque actual donde el Estado no actúa como un ente aislado, sino en red y colaborativo. El objetivo supremo no es solo ahorrar costos o cumplir la ley, sino generar impactos medibles que resuelvan problemas sociales reales y fortalezcan la confianza institucional.",
          "keyRule": "El Profesional Universitario en la DAEADI debe superar la mentalidad del mero 'trámite' para enfocarse en la generación de valor público mediante datos confiables."
        },
        {
          "title": "2. Gestión por Procesos vs. Estructura Silo en la Procuraduría",
          "content": "Tradicionalmente, las entidades operaban en 'silos funcionales' donde cada oficina trabajaba como un compartimento estanco, sin comunicarse con las demás y reteniendo la información. La Gestión por Procesos (implementada en el marco del MIPG y la ISO 9001) concibe a la entidad como un flujo horizontal integrado orientado al destinatario final (la ciudadanía y el ordenamiento jurídico). Se compone de:\n• Procesos Estratégicos: Definen las políticas institucionales (Direccionamiento Estratégico).\n• Procesos Misionales: La razón de ser del ente (Vigilancia Preventiva, Intervención y Régimen Disciplinario).\n• Procesos de Apoyo: Suministran insumos indispensables (Gestión Tecnológica, Gestión Documental, Talento Humano).\n• Procesos de Evaluación y Control: Auditoría y seguimiento (Control Interno).",
          "keyRule": "La DAEADI articula procesos de apoyo analítico y tecnológico con los procesos misionales, rompiendo los silos de información entre delegadas."
        },
        {
          "title": "3. Metodología BPMN y Optimización de Procedimientos",
          "content": "El Business Process Model and Notation (BPMN) es la notación gráfica universalmente adoptada para modelar y estandarizar procedimientos en el Estado. Permite identificar:\n• Actividades operativas y tareas manuales susceptibles de automatización.\n• Compuertas lógicas exclusivas (XOR) o paralelas (AND) que definen bifurcaciones según el cumplimiento de requisitos legales.\n• Carriles o pistas (swimlanes) que delimitan con exactitud qué cargo o dependencia es responsable de cada paso.\n• Cuellos de botella y actividades redundantes que duplican esfuerzos o dilatan injustificadamente los términos procesales.",
          "keyRule": "El modelado de procesos en la DAEADI busca simplificar trámites, reducir tiempos de respuesta y asegurar la trazabilidad del dato en cada etapa."
        },
        {
          "title": "4. Estrategia de Uso y Apropiación Tecnológica y Gestión del Cambio",
          "content": "Una de las funciones esenciales del cargo 3PU-15 en la DAEADI es 'Realizar actividades relacionadas con la estrategia de uso y apropiación de los sistemas de información misional'. La implementación de un sistema (como el SIRI o SIM) no fracasa por fallas de programación, sino por la resistencia cultural al cambio de los funcionarios de planta. Una estrategia efectiva exige:\n1. Sensibilización y comunicación empática del valor de la herramienta.\n2. Capacitación práctica por roles, evitando manuales teóricos densos e incomprensibles.\n3. Acompañamiento en el puesto de trabajo (mentoring) y soporte técnico oportuno.\n4. Monitoreo del índice de adopción digital y retroalimentación activa para mejoras evolutivas.",
          "keyRule": "La tecnología sin apropiación cultural se convierte en un costo improductivo; el éxito del sistema se mide por la tasa de uso efectivo y la calidad del dato ingresado."
        }
      ],
      "scenarioExample": "En la Procuraduría Regional de Santander se detecta que los abogados de instrucción continúan llevando el control de sus expedientes en cuadernos físicos en lugar de registrarlos en el sistema SIM, alegando que el sistema es complejo. El Profesional 3PU-15 asignado no impone amenazas sancionatorias, sino que diseña un plan de apropiación: elabora cápsulas de video breves de 2 minutos, configura una plantilla simplificada de cargue rápido y realiza sesiones de acompañamiento en vivo, logrando en un mes el 98% de adopción del sistema digital.",
      "examTip": "DISTRACTOR DE EXAMEN: Considerar que la solución ante la baja utilización de un sistema informático en el Estado es siempre emitir una circular conminatoria de despido o sanción. En pruebas comportamentales y funcionales de juicio situacional, la opción correcta siempre prioriza el diagnóstico de la causa raíz, la capacitación y la gestión del cambio.",
      "glossary": [
        {
          "term": "BPMN",
          "definition": "Business Process Model and Notation, estándar gráfico internacional para modelar de forma clara los flujos de trabajo institucionales."
        },
        {
          "term": "Valor Público",
          "definition": "Beneficio real, medible y perceptible que la administración genera para los ciudadanos a través de servicios eficaces y decisiones justas."
        },
        {
          "term": "Silo Funcional",
          "definition": "Aislamiento operativo de una oficina o dependencia que retiene información y no coopera fluidamente con el resto de la entidad."
        },
        {
          "term": "Ciclo PHVA",
          "definition": "Metodología de mejora continua que comprende las etapas de Planear objetivos, Hacer tareas, Verificar resultados y Actuar para corregir."
        },
        {
          "term": "Gestión del Cambio",
          "definition": "Conjunto de estrategias planificadas para preparar, apoyar y ayudar a los servidores públicos en la adopción exitosa de nuevas herramientas o procesos."
        },
        {
          "term": "Caracterización de Proceso",
          "definition": "Ficha técnica que documenta el objetivo, alcance, líder, entradas, salidas, proveedores, clientes y riesgos de un proceso institucional."
        },
        {
          "term": "Cuello de Botella",
          "definition": "Fase de un proceso que limita la capacidad global de atención debido a sobrecarga de trabajo, falta de personal o duplicidad de aprobaciones."
        },
        {
          "term": "Apropiación Digital",
          "definition": "Nivel de dominio, confianza y uso habitual de las herramientas tecnológicas por parte de los funcionarios públicos en sus tareas cotidianas."
        }
      ],
      "quiz": [
        {
          "id": "u5_q1",
          "difficulty": "Fácil",
          "type": "Conceptual / Normativa",
          "case": "La Dirección de la DAEADI busca actualizar el catálogo de procedimientos misionales para alinear la entidad con los estándares modernos de la función pública.",
          "question": "¿Cuál es la metodología o estándar internacional adoptado formalmente por el Estado colombiano para la modelación gráfica de flujos de procesos administrativos?",
          "options": [
            "Diagramas de flujo circulares informales sin especificación de roles.",
            "BPMN (Business Process Model and Notation), en el marco de la gestión por procesos del MIPG.",
            "El modelo Waterfall de desarrollo en cascada exclusivo de programación."
          ],
          "correct": 1,
          "justification": "El Departamento Administrativo de la Función Pública (DAFP) y el MinTIC han estandarizado la notación BPMN 2.0 como el lenguaje oficial de modelado de procesos para las entidades públicas de la administración colombiana."
        },
        {
          "id": "u5_q2",
          "difficulty": "Fácil",
          "type": "Conceptual / Normativa",
          "case": "En una reunión de planeación, se discute el concepto de 'Nueva Gestión Pública' (NGP) frente a la administración burocrática tradicional.",
          "question": "¿Cuál es el postulado central que diferencia a la Nueva Gestión Pública en el Estado moderno?",
          "options": [
            "Eliminar todos los controles legales y constitucionales para actuar como una corporación privada sin fiscalización.",
            "Orientar la administración pública hacia los resultados medibles, la eficiencia en el uso de recursos y la satisfacción del ciudadano, superando el mero apego ciego al formalismo del procedimiento.",
            "Aumentar el número de trámites en papel para garantizar que todo quede firmado físicamente."
          ],
          "correct": 1,
          "justification": "La NGP introduce principios de eficiencia, orientación a resultados, satisfacción ciudadana y medición objetiva por indicadores, superando la lentitud y rigidez del modelo burocrático clásico."
        },
        {
          "id": "u5_q3",
          "difficulty": "Media",
          "type": "Inferenciación / Criterio Técnico",
          "case": "Al analizar el mapa de procesos de la PGN, se evalúa la clasificación que le corresponde a la Dirección de Apoyo Estratégico, Análisis de Datos de Información (DAEADI) en la cadena de valor.",
          "question": "¿Cómo se clasifica el rol de la DAEADI frente a los macroprocesos de la Procuraduría?",
          "options": [
            "Es un proceso misional directo porque sus profesionales dictan sentencias disciplinarias de destitución.",
            "Es una dependencia de apoyo transversal y estratégico en analítica y sistemas que alimenta y potencia la efectividad de los procesos misionales (Preventivo, Disciplinario e Intervención).",
            "Es un proceso de evaluación externa contratado por fuera de la planta de personal."
          ],
          "correct": 1,
          "justification": "La DAEADI no es un órgano sancionador directo, sino una dirección adscrita a la Viceprocuraduría que provee soporte estratégico, tecnológico, pericial y analítico indispensable a los tres grandes procesos misionales de la PGN."
        },
        {
          "id": "u5_q4",
          "difficulty": "Media",
          "type": "Inferenciación / Criterio Técnico",
          "case": "Un análisis estadístico revela que el trámite de solicitudes de antecedentes especiales en la DAEADI se retrasa en un promedio de 8 días en la oficina de correspondencia debido a que cada oficio debe ser firmado a mano y foliado físicamente tres veces.",
          "question": "En el marco del ciclo de mejora continua PHVA y el principio de celeridad, ¿cuál es la acción organizacional correctiva prioritaria?",
          "options": [
            "Aumentar el horario de trabajo obligatorio de los funcionarios de correspondencia a 12 horas diarias.",
            "Identificar la actividad redundante como un cuello de botella formalista e implementar la firma electrónica y radicación digital automatizada para agilizar el flujo sin perder seguridad.",
            "Cerrar la recepción de solicitudes especiales para descongestionar la oficina."
          ],
          "correct": 1,
          "justification": "El ciclo PHVA orienta a la optimización de procesos eliminando pasos manuales redundantes que no agregan valor. La transición a la firma electrónica y trámite digital es la solución técnica eficaz en la gestión pública moderna."
        },
        {
          "id": "u5_q5",
          "difficulty": "Media",
          "type": "Inferenciación / Criterio Técnico",
          "case": "Tras el lanzamiento de un nuevo aplicativo analítico para alertas tempranas, el 80% de los funcionarios de las delegadas territoriales prefiere seguir utilizando hojas de cálculo desactualizadas y no ingresa al sistema nuevo.",
          "question": "¿Qué falla de gestión organizacional explica principalmente este fenómeno y cómo debe intervenirse?",
          "options": [
            "Falla técnica en la velocidad de los servidores de internet únicamente.",
            "Falta de una estrategia planificada de Gestión del Cambio y Apropiación Tecnológica; debe implementarse un plan de acompañamiento, demostración de beneficios prácticos y simplificación de la interfaz.",
            "Insubordinación generalizada que amerita la apertura de proceso disciplinario a todos los funcionarios territoriales."
          ],
          "correct": 1,
          "justification": "La resistencia al cambio es un reto natural de la gestión organizacional. La literatura y guías de Función Pública y MinTIC señalan que la adopción tecnológica requiere comunicación de valor, capacitación empática y acompañamiento cercano, no medidas coercitivas."
        },
        {
          "id": "u5_q6",
          "difficulty": "Difícil",
          "type": "Juicio Situacional (SJT)",
          "case": "Usted es Profesional 3PU-15 en la DAEADI y nota que dos grupos de trabajo internos procesan exactamente las mismas solicitudes de cruces de bases de datos por separado: un grupo para la Procuraduría Delegada de Contratación y otro para la Dirección Nacional de Investigaciones Especiales, duplicando el consumo de servidores y generando métricas contradictorias.",
          "question": "Conforme a la teoría de gestión por procesos y eliminación de estructuras silo, ¿cuál es su propuesta de mejora profesional?",
          "options": [
            "Permitir que sigan trabajando por separado para fomentar la competencia laboral entre compañeros.",
            "Presentar a la Dirección un informe técnico de caracterización de proceso que demuestre la duplicidad funcional y proponga centralizar la tubería de cruce en un único servicio web o API interna compartida, garantizando una única fuente de la verdad de los datos.",
            "Bloquear el acceso a la base de datos de uno de los grupos para forzarlos a detenerse."
          ],
          "correct": 1,
          "justification": "La gestión por procesos busca consolidar la 'única fuente de la verdad' y suprimir redundancias. La propuesta técnica idónea es unificar la ingesta y cruce de datos a través de una arquitectura de servicios compartidos, optimizando recursos y evitando cifras dispares."
        },
        {
          "id": "u5_q7",
          "difficulty": "Difícil",
          "type": "Juicio Situacional (SJT)",
          "case": "Al estructurar el plan operativo anual de la DAEADI, un consultor sugiere medir la efectividad de los ingenieros evaluando exclusivamente la cantidad de líneas de código SQL escritas al día, sin importar si los reportes fueron útiles para los procuradores delegados.",
          "question": "Frente a la metodología de indicadores de desempeño del DNP y el enfoque de valor público, ¿cómo califica usted esta propuesta?",
          "options": [
            "Es excelente, porque las líneas de código son un indicador cuantitativo matemático indiscutible.",
            "Es errada e ineficaz, pues mide un simple esfuerzo o volumen de actividad operativa (output intrascendente) en lugar de medir indicadores de resultado e impacto, tales como el tiempo de entrega oportuna de peritajes o la tasa de precisión en la detección de inhabilidades reales.",
            "Es válida pero solo si se exige un mínimo de 1.000 líneas diarias a cada profesional."
          ],
          "correct": 1,
          "justification": "La guía del DNP prohíbe el uso de indicadores de vanidad o mero esfuerzo que no reflejan resultados. Medir líneas de código incentiva código ineficiente y redundante. Lo que genera valor público es la oportunidad, calidad y utilidad real del análisis para las decisiones misionales."
        },
        {
          "id": "u5_q8",
          "difficulty": "Difícil",
          "type": "Juicio Situacional (SJT)",
          "case": "En una procuraduría delegada se presenta un severo conflicto interno entre el equipo jurídico y el equipo de ingenieros de la DAEADI: los abogados exigen que los reportes de analítica se entreguen en 24 horas, mientras que los ingenieros afirman que validar la consistencia de 500.000 registros requiere al menos 72 horas para garantizar que no haya falsos positivos.",
          "question": "Como Profesional 3PU-15 encargado de la mesa de articulación, ¿cuál es la solución organizativa más adecuada?",
          "options": [
            "Obligar a los ingenieros a entregar el reporte en 24 horas sin limpiar los datos, advirtiéndoles que si hay errores será culpa exclusiva de los abogados por exigir rapidez.",
            "Establecer un Acuerdo de Nivel de Servicio (SLA) institucional concertado, donde se diferencien consultas estándar automatizadas (con entrega en 24 horas) de peritajes forenses complejos (con cronograma técnico formal de 72 horas para validación cruzada), preservando el rigor probatorio sin dilatar los trámites.",
            "Cancelar el soporte técnico a esa procuraduría delegada de forma indefinida."
          ],
          "correct": 1,
          "justification": "En gestión organizacional pública, las diferencias operativas entre dependencias se resuelven mediante Acuerdos de Nivel de Servicio (SLA) y estandarización de tipos de trámite. Entregar datos no validados arruina investigaciones disciplinarias; la solución es clasificar los requerimientos y pactar tiempos realistas."
        }
      ]
    },
    {
      "id": 6,
      "number": "06",
      "title": "Atención al Ciudadano, PQRS y Derecho de Petición (CPACA y Ley 1755)",
      "category": "Conocimientos Esenciales Comunes",
      "level": "Básico - Intermedio",
      "duration": "45 a 60 min",
      "summary": "Estudio exhaustivo del Derecho Fundamental de Petición (Art. 23 C.P.) regulado por la Ley Estatutaria 1755 de 2015 y el CPACA (Ley 1437 de 2011). Tabla de términos legales perentorios de respuesta (10, 15, 30 días y 1 mes), causales de prórroga motivada, desistimiento tácito, trámite de peticiones irrespetuosas u oscuras, y el silencio administrativo positivo en copias.",
      "normativa": [
        "Constitución Política de 1991: Artículo 23 (Derecho Fundamental de Petición).",
        "Ley Estatutaria 1755 de 2015: Por medio de la cual se regula el Derecho Fundamental de Petición y se sustituye un título del CPACA.",
        "Ley 1437 de 2011: Código de Procedimiento Administrativo y de lo Contencioso Administrativo (CPACA).",
        "Sentencias de la Corte Constitucional: C-951 de 2014 (Control Previo Ley 1755), T-230 de 2020 y SU-139 de 2021.",
        "Directivas de la PGN sobre Vigilancia Preventiva al Cumplimiento de PQRS."
      ],
      "officialInvestigations": [
        {
          "type": "Ley Estatutaria",
          "title": "Ley Estatutaria 1755 de 2015 - Estatuto del Derecho de Petición",
          "description": "Regula de manera uniforme todas las modalidades de petición: interés general, interés particular, solicitudes de información y documentos, consultas y peticiones entre autoridades.",
          "relevance": "Es el marco jurídico vinculante y obligatorio para responder cualquier PQRS en la PGN."
        },
        {
          "type": "Jurisprudencia Constitucional Clave",
          "title": "Sentencia C-951 de 2014 - Revisión Constitucional de la Ley de Petición",
          "description": "Estudio de constitucionalidad del proyecto de Ley 1755. Define los núcleos esenciales: pronta resolución, respuesta de fondo (clara, precisa, congruente) y debida notificación.",
          "relevance": "Define los estándares que debe cumplir cada respuesta proyectada en la DAEADI."
        },
        {
          "type": "Jurisprudencia Unificada",
          "title": "Sentencia SU-139 de 2021 - Los Elementos Estructurales de la Respuesta de Fondo",
          "description": "La Corte unifica doctrina: responder oportunamente no significa dar la razón al peticionario, sino explicar con fundamentos fácticos y jurídicos inteligibles la decisión adoptada.",
          "relevance": "Evita que las respuestas sean evasivas o se limiten a acusar recibo."
        },
        {
          "type": "Jurisprudencia Constitucional",
          "title": "Sentencia T-230 de 2020 - Peticiones Reiterativas e Irrespetuosas",
          "description": "Reitera que la entidad puede remitirse a la respuesta inicial si la petición es idéntica a una anterior resuelta, pero no puede negarse a responder por el solo hecho de usar un lenguaje tosco salvo insulto manifiesto.",
          "relevance": "Pauta para tramitar quejas ciudadanas complejas o agresivas en el canal web."
        },
        {
          "type": "Guía Oficial de Servicio",
          "title": "Guía para la Gestión de PQRS en la Administración Pública (DAFP)",
          "description": "Manual operativo del DAFP sobre canales presenciales, telefónicos y virtuales, accesibilidad para personas en condición de discapacidad y registro unificado en ventanilla única.",
          "relevance": "Estatuto estándar evaluado en los concursos de méritos nacionales."
        },
        {
          "type": "Código Sustantivo",
          "title": "Código General Disciplinario - Falta por Desatención del Derecho de Petición",
          "description": "Artículo 54 de la Ley 1952 de 2019 que tipifica como falta disciplinaria grave la no resolución oportuna y sin justificación de peticiones ciudadanas o desacato a términos.",
          "relevance": "Régimen sancionatorio aplicable directamente al funcionario que engaveta peticiones."
        },
        {
          "type": "Jurisprudencia Constitucional",
          "title": "Sentencia C-818 de 2011 - Reserva de Ley Estatutaria en Petición",
          "description": "Declara inexequibles apartes normativos que pretendían regular el derecho de petición mediante decretos ordinarios, ratificando la primacía de la ley estatutaria.",
          "relevance": "Aclara por qué las circulares internas no pueden modificar los plazos de ley."
        },
        {
          "type": "Doctrina PGN",
          "title": "Manual del Sistema de Gestión de Quejas y Reclamos de la Procuraduría",
          "description": "Flujo de trabajo interno para el escalamiento de quejas recibidas en la Sede Electrónica de la PGN hacia las direcciones técnicas como la DAEADI.",
          "relevance": "Regula el uso del sistema de correspondencia oficial."
        },
        {
          "type": "Concepto Sala de Consulta",
          "title": "Concepto Consejo de Estado No. 2356 - Silencio Administrativo Positivo en Copias",
          "description": "Analiza las consecuencias jurídicas del vencimiento del término de 10 días para peticiones de copias y documentos conforme al Art. 14 de la Ley 1755.",
          "relevance": "Explica la obligación de entrega gratuita forzosa por vencimiento de plazo."
        },
        {
          "type": "Normativa Técnica Accesibilidad",
          "title": "Resolución MinTIC 1519 de 2020 - Canales Digitales Accesibles para PQRS",
          "description": "Estándares técnicos para que los formularios de petición en línea de las entidades públicas cumplan con las directrices de accesibilidad WCAG 2.1 nivel AA.",
          "relevance": "Vinculado a la administración técnica de los portales web misionales."
        }
      ],
      "deepModules": [
        {
          "title": "1. El Núcleo Esencial del Derecho Fundamental de Petición (Art. 23 C.P.)",
          "content": "La jurisprudencia constitucional ha estructurado el derecho de petición en tres componentes inderogables:\n1. Pronta Resolución: La autoridad debe responder dentro de los estrictos términos de ley, sin dilaciones injustificadas.\n2. Respuesta de Fondo: La contestación debe ser:\n   • Clara: Comprensible para un ciudadano del común, sin enredos técnicos ni jurídicos artificiales.\n   • Precisa: Puntual sobre lo pedido, sin divagaciones abstractas.\n   • Congruente: Que resuelva de manera lógica lo pedido, ya sea accediendo, negando o informando.\n   • Consecuente: Que se derive lógicamente de las competencias de la entidad.\n3. Notificación Eficaz: La respuesta debe ponerse en conocimiento real del interesado en la dirección física o correo electrónico aportado. Guardar la respuesta en un cajón o archivarla sin notificarla vulnera el derecho fundamental.",
          "keyRule": "Responder 'su trámite se encuentra en estudio' NO es respuesta de fondo y no interrumpe los términos legales de la Ley 1755 de 2015."
        },
        {
          "title": "2. Tabla Maestra de Términos Legales de Respuesta (Artículo 14 Ley 1755 de 2015)",
          "content": "Los plazos legales para contestar peticiones son de orden público y perentorios:\n\n• 10 días hábiles: Peticiones de documentos y de información pública. Exige entrega o expedición de copias.\n• 15 días hábiles: Término general supletorio aplicable a peticiones de interés general, interés particular, quejas, reclamos y sugerencias.\n• 30 días hábiles: Peticiones mediante las cuales se formula una consulta técnica o jurídica a las autoridades en relación con las materias a su cargo.\n• 1 mes calendario: Peticiones presentadas entre autoridades públicas (Art. 30 Ley 1755).\n\nPrórroga de Términos (Art. 14 Parágrafo):\nCuando excepcionalmente no sea posible resolver la petición en el plazo legal, la entidad debe:\n1. Informar al peticionario por escrito ANTES de que expire el término original.\n2. Expresar los motivos justificados de la demora.\n3. Fijar el plazo razonable en que se responderá, el cual NO podrá exceder del doble del término inicial.",
          "keyRule": "La prórroga comunicada DESPUÉS de vencido el plazo legal es extemporánea, ineficaz y constituye falta disciplinaria para el servidor responsable."
        },
        {
          "title": "3. Silencio Administrativo Positivo en Peticiones de Copias y Documentos",
          "content": "El parágrafo del Artículo 14 de la Ley 1755 consagra una sanción jurídica contundente frente a la negligencia de la administración: si la entidad no contesta una solicitud de documentos o copias dentro de los 10 días hábiles siguientes a su radicación, opera de pleno derecho el SILENCIO ADMINISTRATIVO POSITIVO. Esto acarrea dos consecuencias automáticas:\n1. Se entiende para todos los efectos legales que la solicitud ha sido aceptada.\n2. La entidad pierde la facultad de negar las copias y está en la obligación de ponerlas a disposición del solicitante dentro de los 3 días hábiles siguientes, sin costo alguno (gratuitas).\nEsta figura no aplica si la información solicitada goza de reserva constitucional o legal expresa.",
          "keyRule": "Si la PGN no responde en 10 días una petición de documentos no reservados, debe entregarlos en 3 días de forma totalmente gratuita."
        },
        {
          "title": "4. Trámite de Peticiones Oscuras, Incompletas, Irrespetuosas y Desistimiento Tácito",
          "content": "• Peticiones Oscuras o Ininteligibles (Art. 19 Ley 1755): La entidad debe requerir al interesado en los 10 días siguientes para que aclare la solicitud. Si no subsana en el término de 1 mes, se archiva por desistimiento tácito.\n• Peticiones Incompletas (Art. 17): Si falta un documento indispensable, se requiere al ciudadano concediéndole 1 mes para completarlo (prorrogable por otro mes a solicitud suya). Si vence el plazo sin respuesta, opera el Desistimiento Tácito mediante acto motivado contra el que procede recurso de reposición.\n• Peticiones Irrespetuosas: Solo pueden rechazarse si contienen injurias o ultrajes evidentes; el uso de tono enérgico o de reclamo vehemente no autoriza su inadmisión.\n• Peticiones Reiterativas: La entidad puede remitirse a las respuestas anteriores si no hay hechos nuevos.",
          "keyRule": "El desistimiento tácito exige el vencimiento del plazo de 1 mes y la expedición de un acto administrativo motivado debidamente notificado."
        }
      ],
      "scenarioExample": "Un ciudadano radica una solicitud ante la DAEADI pidiendo un consolidado en formato CSV de todas las inhabilidades vigentes de contratistas de su departamento. Al día 8, el Profesional 3PU-15 advierte que los servidores de bases de datos están en migración y el reporte tardará 4 días más. En lugar de guardar silencio, el profesional proyecta de inmediato un oficio motivando la situación técnica, notificando al ciudadano antes del vencimiento del día 10 y fijando como fecha cierta de entrega el día hábil 15 (dentro del límite de la prórroga legal), evitando el silencio administrativo positivo.",
      "examTip": "DISTRACTOR TÍPICO DE EXAMEN: Afirmar que el término para contestar una petición de documentos es de 15 días (error: es de 10 días), o que ante una petición incompleta la entidad puede archivar el caso al día siguiente sin dar el mes de subsanación. La norma exige conceder un mes al peticionario.",
      "glossary": [
        {
          "term": "Respuesta de Fondo",
          "definition": "Contestación oportuna que resuelve materialmente lo solicitado con claridad, precisión, congruencia y fundamentación fáctica y jurídica."
        },
        {
          "term": "Término Perentorio",
          "definition": "Plazo legal estricto cuyo vencimiento extingue la oportunidad procesal y genera consecuencias jurídicas adversas o disciplinarias."
        },
        {
          "term": "Silencio Positivo en Copias",
          "definition": "Presunción legal según la cual, vencidos los 10 días sin respuesta, la petición de documentos se entiende aceptada y deben entregarse gratis en 3 días."
        },
        {
          "term": "Prórroga Motivada",
          "definition": "Ampliación excepcional del plazo legal de respuesta hasta por el doble del término inicial, justificada por escrito antes de vencerse el plazo."
        },
        {
          "term": "Desistimiento Tácito",
          "definition": "Archivo formal de una petición cuando el interesado no atiende el requerimiento de completar requisitos o aclarar su solicitud en el término de 1 mes."
        },
        {
          "term": "Petición de Consulta",
          "definition": "Solicitud donde se pide a una autoridad un concepto u opinión técnica o jurídica sobre materias de su competencia (término: 30 días)."
        },
        {
          "term": "Petición entre Autoridades",
          "definition": "Requerimiento de información o colaboración entre entidades públicas estatales (término legal de respuesta: 1 mes)."
        },
        {
          "term": "Ventanilla Única",
          "definition": "Punto centralizado de radicación institucional que garantiza el número único de radicado, fecha y hora cierta de entrada de las PQRS."
        }
      ],
      "quiz": [
        {
          "id": "u6_q1",
          "difficulty": "Fácil",
          "type": "Conceptual / Normativa",
          "case": "Un ciudadano radica una solicitud ante la DAEADI requiriendo copias de un manual técnico de procedimientos y expedición de copias de antecedentes disciplinarios ordinarios.",
          "question": "De acuerdo con el Artículo 14 de la Ley Estatutaria 1755 de 2015, ¿cuál es el término legal perentorio que tiene la entidad para responder esta solicitud de documentos y copias?",
          "options": [
            "15 días hábiles a partir de su recepción.",
            "10 días hábiles siguientes a su recepción.",
            "30 días hábiles por tratarse de un sistema informático de la entidad."
          ],
          "correct": 1,
          "justification": "El Art. 14 num. 1 de la Ley Estatutaria 1755 de 2015 establece taxativamente que las peticiones de documentos y de información pública deberán resolverse dentro de los diez (10) días hábiles siguientes a su recepción."
        },
        {
          "id": "u6_q2",
          "difficulty": "Fácil",
          "type": "Conceptual / Normativa",
          "case": "Una entidad pública consulta a la Procuraduría pidiendo un concepto técnico-jurídico sobre la aplicación de la inteligencia artificial en la contratación estatal.",
          "question": "¿Cuál es el término legal con el que cuenta la Procuraduría para absolver dicha petición de consulta según el CPACA?",
          "options": [
            "10 días hábiles.",
            "15 días hábiles.",
            "30 días hábiles siguientes a su recepción."
          ],
          "correct": 2,
          "justification": "Conforme al Art. 14 num. 2 de la Ley 1755 de 2015, las peticiones mediante las cuales se eleva una consulta a las autoridades en relación con las materias a su cargo deberán resolverse dentro de los treinta (30) días siguientes a su recepción."
        },
        {
          "id": "u6_q3",
          "difficulty": "Media",
          "type": "Inferenciación / Criterio Técnico",
          "case": "Un aspirante a un cargo público solicita a la DAEADI copia de la resolución de levantamiento de una inhabilidad disciplinaria. Han transcurrido 12 días hábiles sin que la oficina le haya dado respuesta ni informado los motivos de la demora.",
          "question": "¿Qué fenómeno jurídico opera en este caso conforme al Parágrafo del Artículo 14 de la Ley 1755 de 2015?",
          "options": [
            "Opera el silencio administrativo negativo, por lo que el ciudadano debe entender que su petición fue negada e interponer demanda de tutela.",
            "Opera el silencio administrativo positivo: se entiende que la petición fue aceptada y la entidad está obligada a poner los documentos a su disposición dentro de los 3 días siguientes de manera gratuita.",
            "El trámite caduca automáticamente y el ciudadano debe radicar una nueva solicitud desde cero."
          ],
          "correct": 1,
          "justification": "El parágrafo del Art. 14 de la Ley 1755 dispone que, si la autoridad no contesta la petición de documentos en los 10 días hábiles, opera el silencio positivo: la solicitud se entiende aceptada y no se podrán negar las copias, debiendo entregarse en los 3 días hábiles siguientes sin costo."
        },
        {
          "id": "u6_q4",
          "difficulty": "Media",
          "type": "Inferenciación / Criterio Técnico",
          "case": "En el día 14 hábil de una petición general de 15 días, el profesional advierte que la información técnica solicitada es compleja y no alcanzará a contestar a tiempo. El día 18 hábil (ya vencido el término) emite un oficio informando que se tomará 15 días adicionales.",
          "question": "¿Es válida la prórroga notificada al peticionario y qué implicación disciplinaria tiene?",
          "options": [
            "Es válida porque cualquier funcionario puede prorrogar un término cuando lo considere necesario sin importar la fecha.",
            "Es ineficaz y extemporánea, pues la ley exige imperativamente que la comunicación de prórroga se envíe al ciudadano ANTES de que venza el plazo legal ordinario; hacerlo extemporáneamente vicia el procedimiento y estructura falta disciplinaria.",
            "Es legal siempre y cuando la firma del oficio se haga con certificado digital."
          ],
          "correct": 1,
          "justification": "La Ley 1755 de 2015 exige que la imposibilidad de resolver en el plazo legal y los motivos de la prórroga deben informarse 'antes de que se venza el término'. Comunicarlo extemporáneamente constituye incumplimiento de deberes funcionales y desatención del derecho de petición."
        },
        {
          "id": "u6_q5",
          "difficulty": "Media",
          "type": "Inferenciación / Criterio Técnico",
          "case": "Un ciudadano radica una petición en tono enérgico y molesto, señalando que los funcionarios de la PGN 'son negligentes y no hacen su trabajo', exigiendo explicaciones inmediatas sobre por qué su queja no ha avanzado.",
          "question": "Frente a la jurisprudencia de la Corte Constitucional (Sentencia T-230 de 2020), ¿cómo debe proceder la dependencia receptora?",
          "options": [
            "Rechazar de plano la petición aduciendo falta de respeto y prohibirle al ciudadano volver a radicar solicitudes.",
            "Dar trámite oportuno y brindar respuesta clara, precisa y de fondo sobre el estado real de la queja, toda vez que el tono enfático, enérgico o de molestia ciudadana no equivale a injuria o falta de respeto descalificadora.",
            "Romper la solicitud y archivarla de inmediato."
          ],
          "correct": 1,
          "justification": "La Corte Constitucional ha establecido que la administración no puede escudarse en el tono severo, inconforme o vehemente de un peticionario para desatender su derecho fundamental; el rechazo por irrespeto solo procede ante ultrajes o injurias manifiestas."
        },
        {
          "id": "u6_q6",
          "difficulty": "Difícil",
          "type": "Juicio Situacional (SJT)",
          "case": "Usted es Profesional 3PU-15 en la DAEADI y recibe una petición ciudadana oscura e ininteligible, donde se mezclan recortes de periódico con reclamos inconexos sobre ovnis y una solicitud confusa de 'eliminar el código binario de la Procuraduría'. Su jefe le dice: 'Bórrale la radicación y deséchala'.",
          "question": "Conforme al Artículo 19 de la Ley 1755 de 2015, ¿cuál es el único trámite legal y reglado aplicable?",
          "options": [
            "Hacer caso al jefe y eliminar el radicado del sistema de gestión documental.",
            "Oficiar al peticionario dentro de los 10 días hábiles siguientes indicándole de manera respetuosa las razones de oscuridad de la petición para que la aclare o subsane dentro del término de un (1) mes; si transcurrido dicho mes no subsana, se declarará el desistimiento tácito mediante auto motivado.",
            "Responderle una burla formal a vuelta de correo."
          ],
          "correct": 1,
          "justification": "El Art. 19 de la Ley 1755 prohíbe desechar arbitrariamente peticiones oscuras. La administración tiene el deber de requerir al peticionario dentro de los 10 días para que aclare la solicitud en el término de un mes. Solo si este no subsana, opera el desistimiento tácito reglado."
        },
        {
          "id": "u6_q7",
          "difficulty": "Difícil",
          "type": "Juicio Situacional (SJT)",
          "case": "Una entidad descentralizada territorial (Empresa de Acueducto) solicita a la DAEADI información técnica sobre los perfiles de riesgo contractual en su departamento. El profesional de la DAEADI proyecta la respuesta al día hábil 25 pensando que por ser entre entidades públicas el término es de 15 días y ya está vencido.",
          "question": "Conforme al Artículo 30 de la Ley 1755 de 2015, ¿cuál es el plazo legal aplicable a las peticiones de información entre entidades públicas?",
          "options": [
            "10 días hábiles en todos los casos sin excepción.",
            "El término legal es de un (1) mes calendario, por lo que la respuesta proyectada al día hábil 25 se encuentra dentro del plazo legal oportuno.",
            "No existe plazo legal entre entidades públicas y pueden responder cuando tengan disponibilidad."
          ],
          "correct": 1,
          "justification": "El Art. 30 de la Ley 1755 de 2015 fija con total claridad que las peticiones entre autoridades públicas deberán resolverse en un término no mayor a un (1) mes, plazo especial preferente que ampara la colaboración interinstitucional."
        },
        {
          "id": "u6_q8",
          "difficulty": "Difícil",
          "type": "Juicio Situacional (SJT)",
          "case": "Un veedor ciudadano radica por quinta vez consecutiva en menos de dos meses exactamente la misma solicitud de acceso a una base de datos de peritajes que ya le fue respondida de fondo, de forma clara, precisa y congruente en dos ocasiones previas.",
          "question": "Frente a las peticiones reiterativas, ¿cuál es la conducta jurídicamente válida que debe adoptar la DAEADI según la Ley 1755 de 2015?",
          "options": [
            "Ignorar la petición y no enviar ninguna comunicación al ciudadano.",
            "Emitir una respuesta oportuna en la que se le informe al ciudadano que su solicitud ya fue resuelta de fondo en los oficios previos con números de radicado específicos, remitiéndose a las respuestas anteriores por tratarse de una petición reiterativa sobre los mismos hechos.",
            "Iniciar una acción penal contra el veedor ciudadano por acoso laboral a la entidad."
          ],
          "correct": 1,
          "justification": "El Art. 19 de la Ley 1755 faculta a la autoridad ante peticiones reiterativas ya resueltas a remitirse a las respuestas anteriores. Lo que no puede hacer la entidad es guardar silencio absoluto; debe expedir la contestación oportuna remitiendo al peticionario a los radicados precedentes."
        }
      ]
    },
    {
      "id": 7,
      "number": "07",
      "title": "Gestión Documental, Archivo y Expediente Electrónico (Ley 594 de 2000)",
      "category": "Conocimientos Esenciales Comunes",
      "level": "Intermedio",
      "duration": "50 a 65 min",
      "summary": "Estudio de la Ley General de Archivos (Ley 594 de 2000) y Acuerdos del Archivo General de la Nación (AGN). Ciclo vital del documento (archivo de gestión, central e histórico), Tablas de Retención Documental (TRD), expediente electrónico auténtico (Acuerdo 003 de 2015), metadatos, foliado digital y equivalencia probatoria de la firma digital (Ley 527 de 1999).",
      "normativa": [
        "Ley 594 de 2000: Ley General de Archivos.",
        "Ley 527 de 1999: Mensajes de Datos, Comercio Electrónico y Firmas Digitales.",
        "Acuerdo 002 de 2014 del AGN: Criterios para la gestión de documentos electrónicos.",
        "Acuerdo 003 de 2015 del AGN: Lineamientos para la conformación y gestión del expediente electrónico.",
        "Acuerdo 004 de 2019 del AGN: Tablas de Retención Documental (TRD) y Tablas de Valoración Documental (TVD)."
      ],
      "officialInvestigations": [
        {
          "type": "Ley General",
          "title": "Ley 594 de 2000 - Ley General de Archivos",
          "description": "Estatuto fundamental de la función archivística en Colombia. Establece los principios de finalidad, responsabilidad, orden original, procedencia e integridad documental en el sector público.",
          "relevance": "Estatuto obligatorio para organizar archivos físicos y digitales en la PGN."
        },
        {
          "type": "Ley Especial Tecnológica",
          "title": "Ley 527 de 1999 - Régimen de Mensajes de Datos y Firmas Digitales",
          "description": "Consagra el principio de equivalencia funcional: un mensaje de datos tiene la misma validez jurídica y probatoria que un escrito físico si permite comprobar su autenticidad e inalterabilidad.",
          "relevance": "Fundamento legal de las firmas y expedientes digitales en la DAEADI."
        },
        {
          "type": "Reglamento AGN",
          "title": "Acuerdo 003 de 2015 del Archivo General de la Nación (AGN)",
          "description": "Fija las directrices para la conformación, foliado electrónico, índice digital estructurado y cierre del Expediente Electrónico en las entidades públicas.",
          "relevance": "Define los estándares que deben cumplir los sistemas GED y SIM de la PGN."
        },
        {
          "type": "Reglamento AGN",
          "title": "Acuerdo 004 de 2019 del AGN - Tablas de Retención Documental",
          "description": "Regula la elaboración, aprobación, convalidación e implementación de las TRD y TVD, determinando los tiempos de permanencia en cada fase del ciclo vital.",
          "relevance": "Regula cuánto tiempo deben custodiarse los datos y reportes de la DAEADI."
        },
        {
          "type": "Jurisprudencia Consejo de Estado",
          "title": "Sentencia Consejo de Estado Sección Tercera (Rad. 2017-00432) - Valor Probatorio del Documento Electrónico",
          "description": "Fija que los documentos electrónicos emanados de entidades públicas gozan de presunción de autenticidad siempre que se mantenga su integridad y firma digital válida.",
          "relevance": "Garantiza la eficacia procesal de las pruebas técnicas en formato digital."
        },
        {
          "type": "Normativa Técnica Internacional",
          "title": "Norma ISO 15489-1:2016 - Información y Documentación: Gestión de Documentos",
          "description": "Estándar internacional sobre las características de los documentos auténticos: autenticidad, fiabilidad, integridad y disponibilidad.",
          "relevance": "Marco técnico incorporado en las directrices de gestión documental de la PGN."
        },
        {
          "type": "Reglamento AGN",
          "title": "Acuerdo 002 de 2014 del AGN - Preservación Digital a Largo Plazo",
          "description": "Directrices para evitar la obsolescencia tecnológica de formatos digitales, promoviendo el uso de PDF/A y metadatos estándar Dublin Core.",
          "relevance": "Aplica a la custodia histórica de fallos disciplinarios en el SIRI."
        },
        {
          "type": "Manual Interno PGN",
          "title": "Manual de Gestión Documental y Correspondencia de la PGN",
          "description": "Protocolos internos de la entidad para radicación, distribución, archivo de gestión, foliado y transferencias documentales al archivo central.",
          "relevance": "Manual operativo directo que rige las labores del cargo 3PU-15."
        },
        {
          "type": "Doctrina Archivística",
          "title": "El Principio de Procedencia y Orden Original en Entornos Electrónicos (AGN)",
          "description": "Pautas para estructurar series documentales respetando la dependencia generadora sin mezclar expedientes de diferentes materias.",
          "relevance": "Clave para el diseño de bases de datos documentales en la DAEADI."
        },
        {
          "type": "Concepto Sala de Consulta",
          "title": "Concepto Consejo de Estado No. 2210 - Responsabilidad en la Custodia Documental",
          "description": "Precisa que el servidor público saliente está obligado a hacer entrega formal mediante acta de todos los archivos y bases de datos a su cargo.",
          "relevance": "Deber inexcusable al recibir o entregar el puesto de trabajo en la PGN."
        }
      ],
      "deepModules": [
        {
          "title": "1. Los Principios Archivísticos Fundamentales y el Ciclo Vital del Documento",
          "content": "La gestión documental en Colombia se rige por dos principios rectores supremos:\n• Principio de Procedencia: Los documentos producidos por una entidad o dependencia no deben mezclarse con los de otras entidades o áreas.\n• Principio de Orden Original: Los documentos deben mantenerse en el orden exacto en que fueron tramitados a lo largo del proceso.\n\nEl Ciclo Vital del Documento comprende tres edades o fases:\n1. Archivo de Gestión (Fase Activa): Documentos en trámite constante o de consulta permanente por la dependencia generadora (DAEADI).\n2. Archivo Central (Fase Semiactiva): Documentos transferidos desde los archivos de gestión que han culminado su trámite pero mantienen vigencia administrativa, legal o fiscal según las TRD.\n3. Archivo Histórico (Fase Inactiva / Conservación Permanente): Documentos que poseen valor histórico, cultural o científico y jamás pueden ser destruidos (ejemplo: fallos disciplinarios de trascendencia nacional).",
          "keyRule": "Ningún documento público puede ser eliminado o destruido sin estar autorizado en las Tablas de Retención Documental (TRD) y con acta del Comité de Archivo."
        },
        {
          "title": "2. Estructura del Expediente Electrónico Auténtico (Acuerdo 003 de 2015 AGN)",
          "content": "Un expediente electrónico no es una simple carpeta de Windows con archivos PDF sueltos. Conforme al AGN, debe cumplir obligatoriamente con:\n1. Índice Electrónico: Tabla estructurada que lista en orden cronológico ascendente cada uno de los documentos que componen el expediente, con su huella digital criptográfica (hash SHA-256) y fecha de incorporación.\n2. Foliado Electrónico: Asociación numérica continua de cada documento o mensaje de datos dentro del índice, garantizando que no se inserten ni eliminen fojas sin dejar rastro.\n3. Metadatos Mínimos Obligatorios: Identificador único, tipo documental, fecha de creación, autor, dependencia, clasificación de seguridad y formato técnico.\n4. Firma Digital o Electrónica: Mecanismo de autenticación que sella el índice y el expediente al momento de su cierre procesal.",
          "keyRule": "El expediente electrónico auténtico garantiza integridad e inalterabilidad; cualquier alteración de un documento corrompe el hash del índice electrónico."
        },
        {
          "title": "3. Equivalencia Funcional y Tipos de Firma (Ley 527 de 1999)",
          "content": "La Ley 527 de 1999 establece que los mensajes de datos son admisibles como medios de prueba. Existen diferencias críticas entre tipos de firma:\n• Firma Digital Certificada: Se genera mediante un certificado digital emitido por una entidad de certificación acreditada por el ONAC. Utiliza criptografía asimétrica y goza de presunción legal de autenticidad, integridad y no repudio.\n• Firma Electrónica: Códigos, contraseñas o datos biométricos que permiten identificar al firmante pero no cuentan necesariamente con certificado PKI público.\n• Firma Escaneada / Mecánica: Es una simple imagen gráfica (JPG/PNG) de una firma física manuscrita. Carece de mecanismos de seguridad propios; cualquiera puede copiarla y pegarla, por lo que es la de menor valor probatorio en litigios.",
          "keyRule": "Las providencias disciplinarias y actos administrativos de la PGN en plataformas digitales deben suscribirse preferentemente con firma digital certificada."
        },
        {
          "title": "4. Tablas de Retención Documental (TRD) y Disposición Final",
          "content": "Las TRD son el listado de series y subseries documentales producidas por cada oficina en cumplimiento de sus funciones, a las cuales se les asigna el tiempo de permanencia en el archivo de gestión y central, así como su disposición final:\n• Conservación Total (CT): Pasan al Archivo Histórico.\n• Eliminación (E): Destrucción física o borrado digital seguro mediante acta del Comité Interno de Archivo cuando pierden valor legal y administrativo.\n• Medio Técnico / Digitalización (MD): Migración a formato electrónico para facilitar consulta, conservando o eliminando el soporte físico según la valoración.\n• Selección (S): Conservación de una muestra representativa.",
          "keyRule": "Borrar bases de datos o destruir expedientes sin agotar el procedimiento de TRD constituye falta gravísima disciplinaria y delito contra la custodia documental (Art. 292 C.P.)."
        }
      ],
      "scenarioExample": "En la DAEADI se cierra una investigación preliminar y el Profesional 3PU-15 debe consolidar el expediente electrónico en el Gestor Documental (GED). El profesional no se limita a guardar los PDF; genera el índice electrónico estructurado con las huellas hash SHA-256 de cada anexo pericial, aplica el foliado digital correlativo del 1 al 145, asocia los metadatos de clasificación archivística conforme a la TRD y sella el expediente con la firma digital del despacho, garantizando la cadena de custodia digital ante cualquier requerimiento judicial.",
      "examTip": "DISTRACTOR CLÁSICO DE EXAMEN: Afirmar que pegar una foto de la firma manuscrita en un documento de Word equivale a una 'Firma Digital Certificada' con presunción de no repudio. La firma escaneada es una simple firma electrónica débil sin certificación PKI.",
      "glossary": [
        {
          "term": "TRD",
          "definition": "Tablas de Retención Documental, instrumento archivístico que fija series, tiempos de retención y disposición final de los documentos de cada dependencia."
        },
        {
          "term": "Índice Electrónico",
          "definition": "Documento estructurado firmado digitalmente que contiene la relación cronológica y el hash criptográfico de cada archivo de un expediente digital."
        },
        {
          "term": "Foliado Electrónico",
          "definition": "Numeración correlativa de las piezas documentales en el índice electrónico para garantizar la integridad de las actuaciones."
        },
        {
          "term": "Firma Digital",
          "definition": "Valor numérico criptográfico asociado a un mensaje de datos mediante un certificado digital acreditado, con presunción de autenticidad y no repudio."
        },
        {
          "term": "Principio de Orden Original",
          "definition": "Regla archivística que manda organizar los documentos siguiendo la secuencia natural y cronológica de las etapas del procedimiento que les dio origen."
        },
        {
          "term": "Principio de Procedencia",
          "definition": "Regla que exige agrupar los fondos documentales según la institución y la dependencia específica que los generó, sin mezclarlos."
        },
        {
          "term": "Archivo Central",
          "definition": "Unidad de archivo que custodia y administra los documentos transferidos desde los archivos de gestión que han finalizado su trámite inmediato."
        },
        {
          "term": "Hash Criptográfico",
          "definition": "Algoritmo matemático (ej. SHA-256) que genera una huella alfanumérica única para un archivo; si el archivo cambia un solo bit, el hash se altera."
        }
      ],
      "quiz": [
        {
          "id": "u7_q1",
          "difficulty": "Fácil",
          "type": "Conceptual / Normativa",
          "case": "En el marco de la modernización tecnológica de la PGN, se revisa la validez legal de las providencias suscritas electrónicamente conforme a la Ley 527 de 1999.",
          "question": "¿Qué principio consagra la Ley 527 de 1999 según el cual la información en forma de mensaje de datos tiene la misma validez y eficacia probatoria que un documento en papel?",
          "options": [
            "Principio de neutralidad financiera.",
            "Principio de equivalencia funcional.",
            "Principio de preclusión informática."
          ],
          "correct": 1,
          "justification": "El principio de equivalencia funcional consagrado en la Ley 527 de 1999 y refrendado por la jurisprudencia constitucional reconoce a los mensajes de datos la misma fuerza obligatoria y valor probatorio que a los documentos físicos escritos."
        },
        {
          "id": "u7_q2",
          "difficulty": "Fácil",
          "type": "Conceptual / Normativa",
          "case": "Un funcionario archiva documentos de una investigación mezclando memoriales de una queja disciplinaria de 2024 con oficios de contratación de 2020 para 'ahorrar espacio en el disco duro'.",
          "question": "¿Qué principio archivístico fundamental consagrado en la Ley General de Archivos (Ley 594 de 2000) se está quebrantando?",
          "options": [
            "El principio de gratuidad.",
            "El principio de procedencia y orden original.",
            "El principio de celeridad digital."
          ],
          "correct": 1,
          "justification": "La Ley 594 de 2000 erige los principios de procedencia (no mezclar documentos de distintas fuentes o dependencias) y orden original (conservar la secuencia temporal de las actuaciones) como pilares inviolables del archivo público."
        },
        {
          "id": "u7_q3",
          "difficulty": "Media",
          "type": "Inferenciación / Criterio Técnico",
          "case": "La DAEADI debe estructurar un expediente digital de analítica forense. El equipo técnico debate cómo conformar el expediente electrónico para que cumpla con el Acuerdo 003 de 2015 del Archivo General de la Nación (AGN).",
          "question": "¿Cuál de los siguientes elementos es un componente técnico obligatorio para que el expediente electrónico sea auténtico según el AGN?",
          "options": [
            "Guardar todos los archivos en formato comprimido ZIP sin clave ni índice.",
            "Generar un Índice Electrónico firmado digitalmente que incluya la relación cronológica de los documentos y la huella digital criptográfica (hash) de cada uno.",
            "Imprimir todos los correos electrónicos y escanearlos en una sola imagen JPG."
          ],
          "correct": 1,
          "justification": "El Acuerdo 003 de 2015 del AGN dispone que el expediente electrónico auténtico debe contar obligatoriamente con un Índice Electrónico firmado digitalmente que asocie los metadatos y el valor hash de cada componente para blindar su inalterabilidad."
        },
        {
          "id": "u7_q4",
          "difficulty": "Media",
          "type": "Inferenciación / Criterio Técnico",
          "case": "Un Profesional 3PU-15 debe emitir un concepto técnico sobre la validez jurídica de un contrato aportado por una entidad territorial, el cual fue suscrito pegando una imagen JPG de la firma del alcalde en un documento Word guardado como PDF.",
          "question": "Frente a la Ley 527 de 1999, ¿cuál es la condición jurídica probatoria de esa firma escaneada frente a una Firma Digital Certificada?",
          "options": [
            "La firma escaneada tiene mayor valor legal que la digital porque refleja el trazo biométrico de puño y letra del servidor.",
            "La firma escaneada es una firma electrónica simple de bajo valor probatorio que carece de presunción de autenticidad e integridad, mientras que la firma digital con certificado acreditado goza de presunción legal de no repudio y plena autenticidad.",
            "Ambas firmas tienen exactamente las mismas garantías criptográficas ante la ley."
          ],
          "correct": 1,
          "justification": "La firma escaneada es una imagen gráfica fácilmente falsificable. En cambio, la Firma Digital Certificada (Ley 527/99) utiliza criptografía asimétrica y certificación acreditada por el ONAC, gozando de amparo legal de integridad y presunción de no repudio."
        },
        {
          "id": "u7_q5",
          "difficulty": "Media",
          "type": "Inferenciación / Criterio Técnico",
          "case": "En una auditoría a los servidores de la PGN, se encuentra que una serie de backups de bases de datos con fallos disciplinarios del año 2010 fue eliminada por un administrador de sistemas sin consultar a nadie para liberar espacio.",
          "question": "¿Cuál es la falta disciplinaria y administrativa cometida según el régimen de archivo y el Código General Disciplinario?",
          "options": [
            "No hay falta porque los ingenieros de sistemas tienen la facultad discrecional de borrar lo que consideren viejo.",
            "Constituye falta gravísima disciplinaria (Art. 55 Ley 1952/19) y presunto delito de destrucción de documento público (Art. 292 C.P.), pues la eliminación de series documentales solo procede si está autorizada en las TRD y aprobada por el Comité Interno de Archivo.",
            "Es una falta leve si el funcionario promete volver a instalar el software."
          ],
          "correct": 1,
          "justification": "La eliminación de documentos públicos y bases de datos está rígidamente regulada. Destruir información pública sin agotar el procedimiento de las TRD y sin acta de aprobación del Comité de Archivo constituye falta gravísima y delito contra la fe pública."
        },
        {
          "id": "u7_q6",
          "difficulty": "Difícil",
          "type": "Juicio Situacional (SJT)",
          "case": "Durante la migración de expedientes del sistema físico al Gestor Electrónico de Documentos (GED), el contratista de digitalización propone alterar el orden de las pruebas periciales de un proceso para agruparlas por tipo de archivo (todos los audios juntos, todos los PDF juntos, todas las fotos juntas).",
          "question": "Como supervisor técnico del proceso en la DAEADI, ¿cuál debe ser su determinación?",
          "options": [
            "Aceptar la propuesta porque ordenar por extensión de archivo facilita la compresión en disco.",
            "Rechazar terminantemente la propuesta del contratista y exigir que la digitalización y el foliado electrónico respeten rigurosamente el principio archivístico de Orden Original, manteniendo la secuencia cronológica y procesal exacta en que fueron incorporadas las pruebas al expediente.",
            "Dejar que el contratista decida según su criterio comercial."
          ],
          "correct": 1,
          "justification": "El principio de Orden Original (Ley 594 de 2000 y Acuerdo 003 de 2015 del AGN) prohíbe reorganizar las piezas procesales por criterios artificiales como la extensión del archivo informático; la secuencia temporal y jurídica del expediente debe mantenerse idéntica para no viciar el debido proceso."
        },
        {
          "id": "u7_q7",
          "difficulty": "Difícil",
          "type": "Juicio Situacional (SJT)",
          "case": "Un juzgado solicita con carácter urgente la remisión de un expediente disciplinario digitalizado por la DAEADI. Al verificar el archivo PDF resultante de 400 folios, el Profesional 3PU-15 nota que 5 páginas de pruebas técnicas quedaron borrosas e ilegibles por una falla del escáner.",
          "question": "¿Qué actuación debe realizar el Profesional antes de enviar el expediente a la autoridad judicial?",
          "options": [
            "Enviar el archivo como está y esperar a que el juzgado solicite una aclaración si lo considera necesario.",
            "Detener la remisión, ordenar la re-digitalización inmediata de las páginas defectuosas a la resolución técnica adecuada (mínimo 300 ppp) con cotejo físico contra el original, regenerar el índice electrónico con su hash correspondiente y certificar la autenticidad e integridad de la copia digital antes de radicarlo en el juzgado.",
            "Borrar del expediente las 5 páginas borrosas para que nadie note el error del escaneo."
          ],
          "correct": 1,
          "justification": "Conforme a los estándares del AGN y el CPACA, una copia digital solo es válida como reproducción auténtica del original si es 100% legible y fidedigna. Remitir documentos ilegibles viola la fe pública judicial y puede acarrear nulidades procesales en el juicio."
        },
        {
          "id": "u7_q8",
          "difficulty": "Difícil",
          "type": "Juicio Situacional (SJT)",
          "case": "En el diseño del repositorio documental para los fallos del SIRI, un analista propone almacenar los documentos finales en formato ejecutable (.EXE) o en formatos propietarios de procesadores de texto antiguos (.DOC de 1997).",
          "question": "Frente a las normas de preservación digital a largo plazo del AGN (Acuerdo 002 de 2014), ¿cuál es el estándar técnico obligatorio que debe exigirse?",
          "options": [
            "Aceptar formatos propietarios comerciales porque todo el mundo tiene instalados esos programas.",
            "Exigir el estándar internacional abierto para preservación digital a largo plazo PDF/A (ISO 19005), el cual garantiza que el documento podrá ser leído e interpretado en el futuro de manera idéntica e independiente del software o sistema operativo.",
            "Guardar la información únicamente en memorias USB distribuidas a los funcionarios."
          ],
          "correct": 1,
          "justification": "El AGN y la política de Gobierno Digital exigen el uso de estándares abiertos de preservación digital a largo plazo como PDF/A (PDF for Archiving). Los formatos propietarios sufren obsolescencia tecnológica rápida, impidiendo la lectura de fallos históricos en el futuro."
        }
      ]
    },
    {
      "id": 8,
      "number": "08",
      "title": "Sistemas Integrados de Gestión, MIPG y Control Interno MECI",
      "category": "Conocimientos Esenciales Comunes",
      "level": "Intermedio - Avanzado",
      "duration": "50 a 65 min",
      "summary": "Estudio integral del Modelo Integrado de Planeación y Gestión (MIPG) regulado por el Decreto 1499 de 2017. Las 7 dimensiones operativas y sus 19 políticas institucionales, con énfasis en la Dimensión 5 (Información y Comunicación) y Dimensión 6 (Gestión del Conocimiento y la Innovación). El Modelo Estándar de Control Interno (MECI) actualizado bajo el esquema de las Tres Líneas de Defensa y la gestión de riesgos de corrupción.",
      "normativa": [
        "Decreto 1499 de 2017: Por medio del cual se modifica el Decreto 1083 de 2015 en lo relativo al MIPG.",
        "Ley 87 de 1993: Ley de Control Interno en las Entidades y Organismos del Estado.",
        "Manual Operativo del MIPG (Versión 5.0 - DAFP).",
        "Circular Conjunta DAFP - DNP sobre la actualización del MECI en el marco de las Tres Líneas de Defensa.",
        "Norma Técnica de Calidad NTC-ISO 9001:2015 aplicada a la gestión pública."
      ],
      "officialInvestigations": [
        {
          "type": "Decreto Reglamentario",
          "title": "Decreto 1499 de 2017 - Sistema de Gestión y Modelo MIPG",
          "description": "Articula el Sistema de Gestión con el Sistema de Control Interno en un único modelo de gestión (MIPG), derogando los antiguos sistemas aislados como el NTCGP 1000.",
          "relevance": "Marco institucional supremo de planeación y control para todas las entidades estatales."
        },
        {
          "type": "Manual Operativo Oficial",
          "title": "Manual Operativo del MIPG (Versión 5.0 - DAFP)",
          "description": "Documento rector del DAFP que define las 7 dimensiones operativas: Talento Humano, Direccionamiento Estratégico, Gestión para el Resultado, Evaluación de Resultados, Información y Comunicación, Gestión del Conocimiento e Innovación y Control Interno.",
          "relevance": "Fuente obligatoria para comprender los indicadores y políticas evaluadas."
        },
        {
          "type": "Marco Metodológico de Control",
          "title": "El Esquema de las Tres Líneas de Defensa del MECI Actualizado",
          "description": "Estructura de gestión de riesgos: 1ª Línea (Líderes de proceso y servidores operativos), 2ª Línea (Oficinas de Planeación y Supervisores) y 3ª Línea (Oficina de Control Interno / Auditoría Interna).",
          "relevance": "Define el rol exacto de control de riesgos del Profesional 3PU-15 en la DAEADI."
        },
        {
          "type": "Política MIPG Específica",
          "title": "Dimensión 6: Política de Gestión del Conocimiento y la Innovación",
          "description": "Lineamientos para generar valor público mediante la captura de lecciones aprendidas, analítica de datos, investigación aplicada y digitalización de saberes misionales.",
          "relevance": "Corresponde exactamente al proceso misional al que está adscrito el cargo 3PU-15."
        },
        {
          "type": "Política MIPG Específica",
          "title": "Dimensión 5: Política de Información y Comunicación",
          "description": "Garantiza la disponibilidad de información veraz, oportuna y segura para la toma de decisiones internas y la rendición de cuentas a la ciudadanía.",
          "relevance": "Rige la administración de bases de datos y portales en la DAEADI."
        },
        {
          "type": "Guía de Gestión del Riesgo",
          "title": "Guía para la Administración del Riesgo y el Diseño de Controles (DAFP)",
          "description": "Metodología para elaborar mapas de riesgos de gestión y de corrupción: identificación de causas, valoración de impacto y probabilidad y controles preventivos/detectivos.",
          "relevance": "Vital en la prevención de manipulación de registros en bases de datos."
        },
        {
          "type": "Ley Marco",
          "title": "Ley 87 de 1993 - Estatuto General de Control Interno",
          "description": "Consagra los principios rectores del control interno: autocontrol (cada funcionario), autorregulación (la entidad) y autogestión (cumplimiento de metas).",
          "relevance": "Base dogmática del control en el sector público."
        },
        {
          "type": "Estándar de Calidad",
          "title": "Norma NTC-ISO 9001:2015 en el Marco del MIPG",
          "description": "Enfoque basado en riesgos, liderazgo directivo y satisfacción de las partes interesadas aplicable a los procesos de soporte y analítica.",
          "relevance": "Garantiza la estandarización y calidad de los entregables de la DAEADI."
        },
        {
          "type": "Resolución Interna PGN",
          "title": "Resolución del Sistema Integrado de Gestión Institucional de la PGN",
          "description": "Adopta e implementa el MIPG y el MECI al interior de la Procuraduría General de la Nación, fijando responsabilidades por dependencias.",
          "relevance": "Norma interna de cumplimiento obligatorio para los servidores de la entidad."
        },
        {
          "type": "Doctrina del DAFP",
          "title": "El Formulario Único de Reporte y Avance de Gestión (FURAG)",
          "description": "Herramienta en línea para medir el nivel de madurez e implementación de las políticas del MIPG en cada vigencia institucional.",
          "relevance": "Evalúa el desempeño de los procesos en los rankings públicos del Estado."
        }
      ],
      "deepModules": [
        {
          "title": "1. Estructura y Funcionamiento de las 7 Dimensiones Operativas del MIPG",
          "content": "El Decreto 1499 de 2017 articuló el Sistema de Gestión en torno al Modelo Integrado de Planeación y Gestión (MIPG), que opera a través de 7 dimensiones articuladas:\n1. Talento Humano: Corazón del modelo. El servidor público como agente transformador.\n2. Direccionamiento Estratégico y Planeación: Visión de largo plazo y planes operativos anuales.\n3. Gestión con Valores para el Resultado: Ejecución eficiente de los procesos misionales y de soporte.\n4. Evaluación de Resultados: Monitoreo de metas institucionales y rendición de cuentas.\n5. Información y Comunicación: Transparencia, gobierno digital y datos abiertos para la toma de decisiones.\n6. Gestión del Conocimiento y la Innovación: Creación, retención y transferencia del saber institucional.\n7. Control Interno (MECI transversal): Aseguramiento razonable de la gestión institucional.",
          "keyRule": "El MIPG no es una suma de normas aisladas, sino un marco articulado que busca generar valor público y resultados con integridad."
        },
        {
          "title": "2. Dimensión 6: Gestión del Conocimiento e Innovación (Proceso del Cargo 3PU-15)",
          "content": "El cargo Profesional Universitario en la DAEADI pertenece formalmente al proceso de Conocimiento e Innovación. Esta dimensión comprende cuatro ejes esenciales:\n• Generación y Producción: Desarrollo de investigaciones analíticas, modelos de datos, minería de texto y algoritmos para alertas disciplinarias.\n• Almacenamiento y Custodia: Repositorios institucionales que preservan el conocimiento técnico para evitar que se pierda con la rotación de personal.\n• Uso y Transferencia: Talleres prácticos, guías metodológicas y tableros interactivos para que los procuradores apliquen los hallazgos analíticos en sus providencias.\n• Cultura del Conocimiento e Innovación: Fomento de la experimentación controlada y mejora continua de procesos mediante el uso intensivo de tecnologías digitales.",
          "keyRule": "En la DAEADI, el conocimiento analítico debe documentarse y compartirse; un análisis que queda encerrado en el computador del analista no genera valor institucional."
        },
        {
          "title": "3. El MECI Actualizado y el Modelo de las Tres Líneas de Defensa",
          "content": "El Modelo Estándar de Control Interno (MECI) opera transversalmente bajo el esquema internacional de las Tres Líneas de Defensa:\n• 1ª Línea de Defensa (Línea Operativa): Integrada por todos los servidores públicos y jefes de área en su labor diaria (incluido el Profesional 3PU-15). Son los dueños directos de los procesos y tienen la responsabilidad primaria de aplicar controles preventivos y mitigar riesgos en tiempo real.\n• 2ª Línea de Defensa (Línea Estratégica y Supervisión): Conformada por la Oficina de Planeación, la Oficina de Seguridad de la Información y comités de supervisión. Diseñan políticas, monitorean matrices de riesgos y asesoran a la 1ª línea.\n• 3ª Línea de Defensa (Aseguramiento Independiente): La Oficina de Control Interno / Auditoría Interna. No coadministra; evalúa de manera independiente la eficacia de los controles de la 1ª y 2ª línea y reporta directamente al Procurador General.",
          "keyRule": "El control interno NO es responsabilidad exclusiva de los auditores; la 1ª línea (cada funcionario operativo) es la primera llamada a evitar fraudes y errores."
        },
        {
          "title": "4. Administración del Riesgo y Mapas de Riesgo de Corrupción en Sistemas de Datos",
          "content": "En la DAEADI, la gestión del riesgo es vital debido a la sensibilidad del SIRI y SIM. La metodología del DAFP exige:\n1. Identificación del Riesgo: 'Modificación no autorizada de registros sancionatorios en el SIRI para habilitar a un candidato inhabilitado'.\n2. Análisis y Valoración: Probabilidad (ej. Media) x Impacto (ej. Catastrófico por pérdida de legitimidad institucional) = Riesgo Inherente Extremo.\n3. Diseño de Controles: Implementación de controles automáticos (doble factor de autenticación, segregación de funciones, logs inmutables con tecnología blockchain o firmas hash y alertas por anomalías nocturnas).\n4. Riesgo Residual: Nivel de riesgo que permanece tras la aplicación efectiva de los controles.",
          "keyRule": "Los controles de riesgo en bases de datos misionales deben ser preferentemente preventivos y automatizados, evitando depender únicamente de revisiones manuales."
        }
      ],
      "scenarioExample": "En el marco del plan de gestión de riesgos del MIPG, un Profesional 3PU-15 de la DAEADI identifica que un grupo de usuarios de dependencias territoriales comparte la misma contraseña para acceder al sistema SIRI. En lugar de limitarse a una advertencia verbal, el profesional formula la propuesta técnica de mitigación: activa el control preventivo de sesión única con doble factor de autenticación (2FA) y proyecta una alerta formal al Oficial de Seguridad de la Información, mitigando el riesgo de fraude y elevando el indicador de control de la 1ª Línea de Defensa.",
      "examTip": "TRAMPA TÍPICA EN PREGUNTAS DE MECI: Afirmar que la Oficina de Control Interno (3ª Línea) es la encargada de diseñar los controles operativos de las bases de datos o de corregir los errores de los expedientes. Eso es falso: la 3ª línea solo audita y evalúa con independencia; el diseño y aplicación de controles corresponde a la 1ª y 2ª línea.",
      "glossary": [
        {
          "term": "MIPG",
          "definition": "Modelo Integrado de Planeación y Gestión, marco que articula la gestión institucional del Estado en 7 dimensiones y 19 políticas públicas."
        },
        {
          "term": "MECI",
          "definition": "Modelo Estándar de Control Interno, componente transversal del MIPG que proporciona aseguramiento razonable para el logro de objetivos estatales."
        },
        {
          "term": "1ª Línea de Defensa",
          "definition": "Servidores y líderes operativos responsables directos del autocontrol y la gestión de riesgos en sus actividades cotidianas."
        },
        {
          "term": "2ª Línea de Defensa",
          "definition": "Áreas de planeación, calidad y seguridad que definen metodologías, monitorean riesgos y supervisan el cumplimiento de controles."
        },
        {
          "term": "3ª Línea de Defensa",
          "definition": "Oficina de Control Interno que evalúa con total independencia y objetividad la eficacia del sistema de control institucional."
        },
        {
          "term": "Riesgo de Corrupción",
          "definition": "Posibilidad de que por acción u omisión se use el poder delegado para beneficio propio o de terceros en detrimento del Estado."
        },
        {
          "term": "Riesgo Residual",
          "definition": "Nivel de riesgo remanente que subsiste después de haber aplicado los controles preventivos o detectivos institucionales."
        },
        {
          "term": "FURAG",
          "definition": "Formulario Único de Reporte de Avance a la Gestión, instrumento digital del DAFP para evaluar el desempeño y madurez del MIPG en las entidades."
        }
      ],
      "quiz": [
        {
          "id": "u8_q1",
          "difficulty": "Fácil",
          "type": "Conceptual / Normativa",
          "case": "En la inducción al cargo de Profesional Universitario en la Procuraduría, se explican las políticas del Modelo Integrado de Planeación y Gestión (MIPG).",
          "question": "¿Cuál es el decreto reglamentario que adoptó y estructuró el MIPG en el ordenamiento jurídico colombiano?",
          "options": [
            "El Decreto Ley 262 de 2000.",
            "El Decreto 1499 de 2017.",
            "La Ley 80 de 1993."
          ],
          "correct": 1,
          "justification": "El Decreto 1499 de 2017 es la norma que modificó el Decreto 1083 de 2015 reglamentando el Sistema de Gestión y adoptando el Modelo Integrado de Planeación y Gestión (MIPG) para el Estado Colombiano."
        },
        {
          "id": "u8_q2",
          "difficulty": "Fácil",
          "type": "Conceptual / Normativa",
          "case": "Un Profesional 3PU-15 es vinculado a la DAEADI en el proceso denominado 'Conocimiento e Innovación'.",
          "question": "¿A cuál de las 7 dimensiones operativas del MIPG corresponde de forma directa este proceso institucional?",
          "options": [
            "Dimensión 1: Talento Humano.",
            "Dimensión 6: Gestión del Conocimiento y la Innovación.",
            "Dimensión 2: Direccionamiento Estratégico."
          ],
          "correct": 1,
          "justification": "La Dimensión 6 del MIPG es precisamente 'Gestión del Conocimiento y la Innovación', la cual orienta el desarrollo de analítica, minería de datos, lecciones aprendidas y soluciones inteligentes en dependencias como la DAEADI."
        },
        {
          "id": "u8_q3",
          "difficulty": "Media",
          "type": "Inferenciación / Criterio Técnico",
          "case": "Un jefe de área en la Procuraduría sostiene que él no tiene por qué revisar los riesgos de corrupción de su base de datos, argumentando que 'el control de riesgos es un deber exclusivo de la Oficina de Control Interno'.",
          "question": "Frente al esquema de las Tres Líneas de Defensa del MECI actualizado, ¿es correcta la postura del funcionario?",
          "options": [
            "Es totalmente correcta, porque solo los auditores certificados tienen facultades legales para prevenir riesgos.",
            "Es totalmente incorrecta, ya que los líderes operativos y servidores en sus puestos de trabajo conforman la Primera Línea de Defensa, siendo los responsables directos del autocontrol y la mitigación inmediata de los riesgos de su proceso.",
            "Es válida pero únicamente para cargos del nivel asistencial."
          ],
          "correct": 1,
          "justification": "En el modelo de Tres Líneas de Defensa del MECI, la 1ª Línea (los propios servidores que ejecutan los procesos) es la responsable directa y primaria del autocontrol y de la gestión operativa de los riesgos. La Oficina de Control Interno (3ª Línea) realiza auditoría posterior independiente, no control operativo previo."
        },
        {
          "id": "u8_q4",
          "difficulty": "Media",
          "type": "Inferenciación / Criterio Técnico",
          "case": "En el análisis de riesgos de la DAEADI, se determina que la probabilidad de que un usuario intente alterar un registro en el SIRI es Media (3/5) y el impacto institucional si ocurre es Catastrófico (5/5). Para mitigar este riesgo extremo, se propone implementar un log criptográfico inmutable.",
          "question": "¿Cómo se denominan técnicamente el riesgo antes y después de aplicar este control de seguridad?",
          "options": [
            "Riesgo Absoluto y Riesgo Nulo.",
            "Riesgo Inherente y Riesgo Residual.",
            "Riesgo Pasivo y Riesgo Activo."
          ],
          "correct": 1,
          "justification": "En la metodología de administración de riesgos del DAFP, el riesgo inherente es el nivel de riesgo en estado puro antes de considerar los controles, mientras que el riesgo residual es el riesgo que subsiste tras la implementación efectiva de los controles de mitigación."
        },
        {
          "id": "u8_q5",
          "difficulty": "Media",
          "type": "Inferenciación / Criterio Técnico",
          "case": "El Comité Institucional de Gestión de la PGN revisa los resultados anuales arrojados por el Formulario Único de Reporte y Avance de Gestión (FURAG).",
          "question": "¿Cuál es el propósito principal de las evaluaciones del FURAG en las entidades públicas?",
          "options": [
            "Imponer sanciones penales automáticas a los servidores que no contesten las preguntas.",
            "Medir el nivel de madurez, avance y eficacia en la implementación de las políticas de gestión y control del MIPG para formular planes de mejora institucional continuos.",
            "Calcular el valor de los impuestos que la entidad debe pagar a la DIAN."
          ],
          "correct": 1,
          "justification": "El FURAG es el instrumento oficial del DAFP para capturar datos y medir el desempeño de cada entidad en las 19 políticas del MIPG, sirviendo de diagnóstico cuantitativo para orientar planes de mejoramiento continuo y buenas prácticas públicas."
        },
        {
          "id": "u8_q6",
          "difficulty": "Difícil",
          "type": "Juicio Situacional (SJT)",
          "case": "Usted como Profesional 3PU-15 en la DAEADI recibe un correo de un auditor de la Oficina de Control Interno (3ª Línea de Defensa) exigiéndole que usted le envíe de inmediato las contraseñas maestras de root de la base de datos del SIRI para 'hacer una auditoría en vivo'.",
          "question": "Conforme a las directrices de seguridad de la información (ISO 27001) y la separación de roles del MECI, ¿cómo debe responder?",
          "options": [
            "Entregarle las contraseñas maestras de inmediato, ya que la Oficina de Control Interno tiene jerarquía suprema sobre cualquier sistema.",
            "Negar la entrega de credenciales administrativas privilegiadas de producción, explicando que viola la política de control de acceso y el principio de no repudio de la 1ª Línea; en su lugar, ofrecerle la generación de un extracto de datos anonimizado o programar una sesión de auditoría supervisada de solo lectura.",
            "Cambiar la contraseña y no volver a contestar ningún requerimiento de auditoría."
          ],
          "correct": 1,
          "justification": "En seguridad de la información y en el MECI, las credenciales de administración son personalísimas e intransferibles. Los auditores de la 3ª línea nunca deben acceder a producción con cuentas privilegiadas de modificación de datos; su labor se realiza mediante perfiles de solo lectura o extractos de auditoría bajo estricta trazabilidad."
        },
        {
          "id": "u8_q7",
          "difficulty": "Difícil",
          "type": "Juicio Situacional (SJT)",
          "case": "En un equipo de analítica de la DAEADI, los científicos de datos generan un modelo predictivo altamente exitoso para detectar sobrecostos en contratos de obra, pero el código fuente y las variables utilizadas solo las conoce el contratista externo en su portátil personal, sin documentación en el repositorio institucional de la PGN.",
          "question": "Frente a la Dimensión 6 del MIPG (Gestión del Conocimiento y la Innovación), ¿qué riesgo institucional crítico se está materializando y cuál es la directriz que debe imponerse?",
          "options": [
            "No existe riesgo alguno porque el contratista tiene derecho a la exclusividad de su invento.",
            "Se presenta un riesgo grave de fuga y pérdida de memoria institucional; se debe exigir la entrega formal de la documentación técnica, repositorio de código fuente en Git institucional y transferencia de conocimiento mediante capacitación documentada como requisito indispensable para la liquidación del contrato.",
            "Contratar al profesional externo de manera vitalicia sin concurso de méritos."
          ],
          "correct": 1,
          "justification": "La Dimensión 6 del MIPG busca asegurar que el conocimiento estratégico resida en la entidad y no en personas individuales. Dejar modelos analíticos sin documentación ni repositorio público institucional expone a la entidad a la parálisis operativa cuando el profesional o contratista se retira."
        },
        {
          "id": "u8_q8",
          "difficulty": "Difícil",
          "type": "Juicio Situacional (SJT)",
          "case": "Durante el cierre de la vigencia, la Oficina de Planeación (2ª Línea de Defensa) advierte que los indicadores de gestión de la DAEADI muestran un 100% de cumplimiento en metas, pero las procuradurías territoriales reportan que el sistema SIRI estuvo fuera de servicio durante 3 semanas en época electoral.",
          "question": "Como Profesional 3PU-15 encargado de la revisión de calidad en el SIG, ¿cuál es su dictamen técnico frente a los principios de integridad y evaluación de resultados del MIPG?",
          "options": [
            "Mantener el 100% reportado para que la entidad obtenga una buena calificación en el FURAG del DAFP.",
            "Reportar objetivamente la inconsistencia, ajustar la fórmula de cálculo del indicador de disponibilidad del servicio para reflejar las horas reales de indisponibilidad y presentar un plan de contingencia arquitectónica para que la evaluación represente la realidad del servicio.",
            "Culpar a la empresa de energía eléctrica para eludir la responsabilidad institucional."
          ],
          "correct": 1,
          "justification": "La Dimensión 4 del MIPG (Evaluación para el Resultado) y el principio de veracidad prohíben el maquillaje de indicadores. Un sistema integrado de gestión solo es útil si refleja objetivamente las fallas para poder corregirlas. La integridad y la transparencia son mandatos inderogables en el servicio público."
        }
      ]
    },
    {
      "id": 9,
      "number": "09",
      "title": "Elaboración de Documentos y Herramientas Ofimáticas de Oficina",
      "category": "Conocimientos Esenciales Comunes",
      "level": "Básico - Intermedio",
      "duration": "45 a 60 min",
      "summary": "Estudio de las normas técnicas para la redacción y elaboración de documentos administrativos oficiales (Guía Técnica Colombiana GTC 185 de ICONTEC y manuales PGN). Estructura formal de conceptos técnicos, memorandos, informes periciales y oficios. Manejo avanzado de herramientas ofimáticas: funciones avanzadas de hojas de cálculo (XLOOKUP, INDEX/MATCH, tablas dinámicas, validaciones, condicionales) para auditoría de bases de datos masivas.",
      "normativa": [
        "Guía Técnica Colombiana GTC 185 (ICONTEC): Documentación Organizacional.",
        "Manual de Correspondencia y Comunicaciones Oficiales de la PGN.",
        "Decreto 2150 de 1995: Supresión de trámites y autenticaciones innecesarias.",
        "Estándar Internacional ISO/IEC 29500 / ODF (Formatos abiertos de documentos de oficina).",
        "Guía de Lenguaje Claro para el Estado Colombiano (DAFP / DNP)."
      ],
      "officialInvestigations": [
        {
          "type": "Norma Técnica Colombiana",
          "title": "Guía Técnica Colombiana GTC 185 - Documentación Organizacional (ICONTEC)",
          "description": "Establece las pautas formales para la elaboración de cartas, memorandos, circulares, actas, informes y certificados: zonas del documento, márgenes, interlineados, fórmulas de cortesía y tratamiento protocolario.",
          "relevance": "Marco normativo primario que evalúan las universidades en pruebas de ofimática oficial."
        },
        {
          "type": "Manual Interno PGN",
          "title": "Manual de Correspondencia y Comunicaciones Oficiales de la Procuraduría",
          "description": "Fija las reglas para la radicación única, numeración consecutiva anual, asignación de códigos de dependencia y firmas autorizadas en la entidad.",
          "relevance": "Define el estándar que debe cumplir el Profesional 3PU-15 al elaborar oficios y conceptos."
        },
        {
          "type": "Estándar Internacional Ofimática",
          "title": "Especificaciones Técnicas para Hojas de Cálculo Avanzadas en Auditoría de Datos",
          "description": "Buenas prácticas para el manejo de grandes volúmenes de datos en Excel/LibreOffice Calc: prevención de pérdida de precisión numérica en identificadores, tablas dinámicas y macros seguras.",
          "relevance": "Directamente aplicable al análisis y cruce de datos en la DAEADI."
        },
        {
          "type": "Guía Oficial de Redacción",
          "title": "Guía para la Redacción de Informes Periciales y Conceptos Técnicos (DNIE - PGN)",
          "description": "Pautas para estructurar conceptos técnicos: antecedentes, objeto de la pericia, metodología empleada, análisis fáctico, hallazgos y conclusiones objetivas sin juicios de valor moral.",
          "relevance": "Estructura obligatoria para los dictámenes analíticos que emite la DAEADI."
        },
        {
          "type": "Decreto Antitrámites",
          "title": "Decreto Ley 019 de 2012 (Decreto Antitrámites)",
          "description": "Prohíbe a las entidades exigir documentos que reposen en sus propios archivos y ordena la aceptación de fotocopias simples sin autenticación notarial.",
          "relevance": "Guía la simplificación en la solicitud de documentos a los ciudadanos."
        },
        {
          "type": "Estándar de Preservación Ofimática",
          "title": "ISO 19005 - Formato PDF/A para Documentos Electrónicos de Oficina",
          "description": "Estándar que garantiza que los documentos ofimáticos convertidos a PDF mantengan incrustadas las fuentes, metadatos y estructura gráfica para lectura exacta a perpetuidad.",
          "relevance": "Estándar de guardado obligatorio de conceptos e informes en la PGN."
        },
        {
          "type": "Jurisprudencia Consejo de Estado",
          "title": "Sentencia Consejo de Estado Sección Primera (Rad. 2016-00321) - Eficacia de Comunicaciones Oficiales",
          "description": "Establece que las comunicaciones oficiales internas y externas cobran eficacia solo cuando son debidamente radicadas y notificadas al destinatario.",
          "relevance": "Evita el envío informal de documentos sin registro oficial."
        },
        {
          "type": "Doctrina de Función Pública",
          "title": "Manual de Imagen Institucional y Uso de Plantillas Oficiales del Estado",
          "description": "Lineamientos sobre el uso obligatorio de membretes institucionales oficiales, fuentes tipográficas accesibles y control de cambios en la gestión documental.",
          "relevance": "Criterio de presentación evaluado en la redacción institucional."
        }
      ],
      "deepModules": [
        {
          "title": "1. Estructura y Rigor Formal de los Documentos Administrativos (GTC 185)",
          "content": "La administración pública se comunica a través de actos formales estandarizados según la GTC 185:\n• Memorando: Comunicación interna entre dependencias de la misma entidad para coordinar acciones, solicitar informes o transmitir directrices.\n• Oficio: Comunicación formal dirigida a terceros externos (ciudadanos, jueces, ministerios o entes vigilados).\n• Concepto Técnico / Informe Pericial: Documento científico-técnico expedido por profesionales especializados (como los ingenieros de la DAEADI). Debe contener obligatoriamente: Antecedentes, Objeto del análisis, Metodología e Instrumentos utilizados, Hallazgos y Resultados de datos, y Conclusiones técnicas objetivas.\n• Circular: Comunicación masiva para impartir instrucciones de carácter general a múltiples dependencias.",
          "keyRule": "En los conceptos periciales de la DAEADI está prohibido calificar la conducta jurídica o moral del investigado; el informe debe limitarse a la certeza técnica de los datos."
        },
        {
          "title": "2. Hojas de Cálculo Avanzadas para Cruces Masivos de Datos (Excel / Calc)",
          "content": "En la DAEADI, las hojas de cálculo se utilizan intensivamente para auditorías preliminares y depuración de datos. Se requiere dominio de:\n• Búsqueda y Coincidencia: Uso de `BUSCARX` (`XLOOKUP`) o la combinación `INDICE` + `COINCIDIR` (`INDEX` + `MATCH`) en lugar del vulnerable `BUSCARV`, permitiendo búsquedas hacia la izquierda y manejo de errores nativo sin alterar la estructura tabular.\n• Tablas Dinámicas y Modelos de Datos: Agrupación multidimensional de expedientes por año, tipo de falta y procuraduría delegada, calculando porcentajes de participación y promedios móviles.\n• Validación de Datos y Formatos de Texto: Crucial para números de identificación (Cédulas, NIT, Radicados): si se formatean como número entero en lugar de texto, los ceros a la izquierda se eliminan (ej. '080123' pasa a '80123'), arruinando los cruces con el SIRI.\n• Funciones Lógicas Condicionales: `SI.CONJUNTO` (`IFS`), `CONTAR.SI.CONJUNTO` y `SUMAR.SI.CONJUNTO` para detectar discrepancias y valores atípicos.",
          "keyRule": "Los números de cédula, radicados y teléfonos SIEMPRE deben almacenarse con formato de texto para preservar ceros a la izquierda y caracteres alfanuméricos."
        },
        {
          "title": "3. Procesamiento Técnico de Textos y Control de Calidad Documental",
          "content": "La elaboración de providencias y conceptos en procesadores de texto exige:\n• Uso estricto de estilos de párrafo (Título 1, Título 2, Normal) para permitir la generación automática de tablas de contenido e índices de anexos accesibles.\n• Control de Cambios y Comparación de Documentos: Herramienta esencial para auditoría de versiones sucesivas de conceptos jurídicos antes de la firma del Viceprocurador.\n• Anonimización y Disociación de Datos: Procedimiento para testar datos sensibles (nombres de menores, números de cuenta, direcciones residenciales) antes de publicar versiones públicas de providencias en el portal web institucional.",
          "keyRule": "Un documento ofimático oficial nunca debe distribuirse con el control de cambios activado ni con comentarios internos visibles al público."
        },
        {
          "title": "4. Redacción Administrativa Objetiva y Lenguaje Claro",
          "content": "La política de Lenguaje Claro del DAFP y DNP exige abandonar el 'lenguaje oscuro, arcaico y barroco' (términos como 'hacerse a saber', 'por medio de la presente nos permitimos'). Principios:\n1. Oraciones cortas: Estructura sujeto + verbo + predicado (máximo 25-30 palabras por frase).\n2. Voz activa en lugar de voz pasiva ('La DAEADI analizó los datos' en vez de 'Los datos fueron objeto de análisis por parte de la DAEADI').\n3. Claridad y precisión: Citar siempre el número de radicado, fecha exacta y fuentes normativas específicas.\n4. Tono respetuoso, neutral e institucional.",
          "keyRule": "El lenguaje claro no reduce el rigor técnico ni jurídico; elimina la ambigüedad y garantiza que el destinatario comprenda el contenido sin equívocos."
        }
      ],
      "scenarioExample": "Un Profesional 3PU-15 de la DAEADI debe cruzar una base de datos de 45.000 servidores públicos con el listado del SIRI en Excel. Al intentar cruzar con `BUSCARV`, observa que muchas cédulas con ceros a la izquierda no hacen match y la hoja se bloquea. El profesional convierte los rangos en Tablas Estructuradas de Excel, convierte las columnas de cédula a formato Texto, aplica la fórmula `=BUSCARX(A2; SIRI_Tabla[Cedula]; SIRI_Tabla[Estado]; 'Sin Sanción'; 0)` y genera una tabla dinámica resumen, entregando el informe consolidado en menos de dos horas.",
      "examTip": "DISTRACTOR TÍPICO DE EXAMEN: En preguntas sobre redacción de informes periciales, la opción incorrecta suele incluir conclusiones como 'se evidencia la mala fe del contratista' o 'el servidor es culpable de corrupción'. El peritaje técnico JAMÁS califica el dolo ni la culpabilidad moral; eso es competencia exclusiva del fallador disciplinario.",
      "glossary": [
        {
          "term": "GTC 185",
          "definition": "Guía Técnica Colombiana de ICONTEC que estandariza la elaboración formal de documentos organizacionales y administrativos."
        },
        {
          "term": "Concepto Técnico",
          "definition": "Dictamen fundado en conocimientos especializados de una ciencia o técnica que aporta elementos de juicio objetivos a una autoridad."
        },
        {
          "term": "BUSCARX (XLOOKUP)",
          "definition": "Función moderna de hojas de cálculo que permite realizar búsquedas exactas o aproximadas en cualquier dirección (izquierda/derecha) con manejo de errores."
        },
        {
          "term": "Tabla Dinámica",
          "definition": "Herramienta interactiva para resumir, analizar, explorar y presentar grandes volúmenes de datos tabulares en pocos clics."
        },
        {
          "term": "PDF/A",
          "definition": "Variante estandarizada internacionalmente del PDF diseñada específicamente para el archivado y preservación digital a largo plazo."
        },
        {
          "term": "Lenguaje Claro",
          "definition": "Estilo de redacción simple, directo y ordenado que permite a los ciudadanos y servidores entender una comunicación estatal a la primera lectura."
        },
        {
          "term": "Anonimización",
          "definition": "Técnica documental consistente en suprimir o testar datos personales sensibles para impedir la identificación de su titular en documentos públicos."
        },
        {
          "term": "Memorando",
          "definition": "Comunicación escrita de carácter interno utilizada para transmitir información, órdenes o peticiones entre funcionarios de la misma entidad."
        }
      ],
      "quiz": [
        {
          "id": "u9_q1",
          "difficulty": "Fácil",
          "type": "Conceptual / Normativa",
          "case": "En la DAEADI se requiere comunicar a todas las procuradurías provinciales una nueva instrucción obligatoria sobre la forma en que deben remitir los archivos de datos mensuales.",
          "question": "Conforme a la Guía Técnica Colombiana GTC 185 y las normas de correspondencia oficial, ¿cuál es el tipo documental administrativo idóneo para impartir instrucciones generales internas?",
          "options": [
            "Un oficio externo protocolario.",
            "Una circular interna o memorando múltiple.",
            "Un acta de levantamiento de cadáver probatorio."
          ],
          "correct": 1,
          "justification": "La GTC 185 y los manuales administrativos establecen que la Circular interna (o memorando múltiple) es el documento diseñado específicamente para impartir directrices, normas o instrucciones de carácter uniforme y general a varias dependencias."
        },
        {
          "id": "u9_q2",
          "difficulty": "Fácil",
          "type": "Conceptual / Normativa",
          "case": "Al importar un archivo de texto con 50.000 cédulas a Excel, las cédulas de departamentos como Cundinamarca que inician en '0' pierden el primer dígito (por ejemplo, '01234567' se convierte en '1234567'), imposibilitando los cruces.",
          "question": "¿Cuál es la causa técnica de este error y cómo se soluciona en la hoja de cálculo?",
          "options": [
            "Es un virus en la memoria RAM del computador.",
            "Ocurre porque el software interpreta la columna como valor numérico entero suprimiendo el cero no significativo; se corrige configurando el formato de la columna como 'Texto' antes de la importación.",
            "Se soluciona sumándole 1 a cada número de identificación."
          ],
          "correct": 1,
          "justification": "En hojas de cálculo, los campos de identificación (cédulas, códigos de expediente, números de teléfono) deben tratarse estrictamente como tipo 'Texto' para evitar que los ceros iniciales sean descartados por las reglas de representación de números enteros."
        },
        {
          "id": "u9_q3",
          "difficulty": "Media",
          "type": "Inferenciación / Criterio Técnico",
          "case": "Un Profesional 3PU-15 necesita cruzar una tabla maestra de 100.000 radicados con una tabla secundaria donde el valor de búsqueda (el radicado) está en la columna C y el dato que necesita extraer está en la columna A (a la izquierda).",
          "question": "¿Cuál es la fórmula de hoja de cálculo moderna y eficiente recomendada para realizar esta búsqueda sin alterar la estructura de las columnas?",
          "options": [
            "La función `BUSCARV` estándar con parámetro de búsqueda exacta falso.",
            "La función `=BUSCARX(...)` o la combinación matricial `=INDICE(...; COINCIDIR(...))`, ya que permiten realizar búsquedas hacia la izquierda de forma nativa y eficiente.",
            "Copiar y pegar manualmente los 100.000 datos uno a uno."
          ],
          "correct": 1,
          "justification": "La limitación clásica de `BUSCARV` (`VLOOKUP`) es que solo busca de izquierda a derecha. Las funciones `BUSCARX` (`XLOOKUP`) o la combinación `INDICE` + `COINCIDIR` (`INDEX/MATCH`) superan esta restricción, permitiendo buscar valores ubicados a la izquierda sin mover columnas."
        },
        {
          "id": "u9_q4",
          "difficulty": "Media",
          "type": "Inferenciación / Criterio Técnico",
          "case": "Al redactar las conclusiones de un informe pericial de analítica de datos sobre una contratación de computadores, el profesional escribe: 'Se concluye que el ordenador del gasto es un funcionario corrupto que actuó con dolo para robarse los recursos públicos'.",
          "question": "Frente a las normas técnicas de elaboración de conceptos técnicos oficiales, ¿cómo califica usted esta redacción?",
          "options": [
            "Excelente, porque refleja la valentía moral del perito informático.",
            "Técnica y jurídicamente inadecuada, pues el informe pericial debe ser estrictamente objetivo y fáctico, limitándose a reportar los hallazgos técnicos (sobrecosto o inconsistencia en especificaciones) sin hacer juicios de valor moral ni calificaciones jurídicas de culpabilidad penal o disciplinaria.",
            "Es válida siempre que el informe se firme bajo gravedad de juramento."
          ],
          "correct": 1,
          "justification": "El perito técnico o analista de datos debe ceñirse a la ciencia o técnica. La calificación de si hubo dolo, culpa o responsabilidad disciplinaria/penal es potestad exclusiva y soberana del operador judicial o disciplinario, nunca del informe pericial."
        },
        {
          "id": "u9_q5",
          "difficulty": "Media",
          "type": "Inferenciación / Criterio Técnico",
          "case": "Una entidad pública va a expedir un concepto técnico en formato digital que debe ser publicado en la página web para consulta ciudadana, pero el documento contiene los nombres, teléfonos y direcciones de los testigos de un proceso.",
          "question": "Conforme a las directrices de anonimización y transparencia, ¿qué procedimiento técnico debe realizarse antes de su publicación?",
          "options": [
            "Cambiar el color del texto a blanco para que no se vea a simple vista.",
            "Elaborar una versión pública testada o anonimizada, suprimiendo de manera irreversible los datos personales sensibles en el procesador de texto antes de generar el archivo PDF/A definitivo.",
            "Publicar el documento completo y advertir en una nota al pie que está prohibido leer los nombres de los testigos."
          ],
          "correct": 1,
          "justification": "Cambiar el color de la fuente no elimina los datos del archivo digital; cualquier persona puede copiar y pegar el texto oculto. La anonimización exige la eliminación material o disociación irreversible de los datos personales antes de la exportación final."
        },
        {
          "id": "u9_q6",
          "difficulty": "Difícil",
          "type": "Juicio Situacional (SJT)",
          "case": "Usted es Profesional 3PU-15 en la DAEADI y su superior le pide proyectar un memorando urgente para el Viceprocurador informando sobre una falla crítica en la sincronización del SIRI. Su jefe le pide que incluya tecnicismos complejos de programación en inglés (ej. 'deadlock de hilos en el backend por timeout en el socket') sin dar ninguna explicación de impacto institucional.",
          "question": "Aplicando las directrices de Lenguaje Claro y Comunicación Administrativa Efectiva, ¿cómo debe estructurar usted el memorando?",
          "options": [
            "Escribir el documento exactamente como lo pidió su jefe, pues los altos directivos deben aprender la jerga técnica informática.",
            "Estructurar el documento en lenguaje claro: explicar primero en términos precisos el impacto institucional real (los certificados de antecedentes no se pudieron expedir por 4 horas), seguido de la causa técnica sintetizada y las acciones inmediatas adoptadas para resolver el incidente, evitando términos crípticos innecesarios.",
            "Enviar únicamente un pantallazo del código de error en la consola de comandos."
          ],
          "correct": 1,
          "justification": "La comunicación ejecutiva en el sector público exige traducir fallas técnicas a impactos y soluciones de gestión. El lenguaje claro garantiza que el tomador de decisiones (el Viceprocurador) comprenda la magnitud del hecho, las consecuencias misionales y las medidas adoptadas."
        },
        {
          "id": "u9_q7",
          "difficulty": "Difícil",
          "type": "Juicio Situacional (SJT)",
          "case": "Para consolidar las estadísticas disciplinarias nacionales, la DAEADI recibe 32 archivos de Excel de diferentes regiones con formatos heterogéneos: unos usan fechas DD/MM/AAAA, otros MM/DD/AAAA y otros texto libre. Un compañero propone simplemente sumar los totales a mano con una calculadora.",
          "question": "Frente al rigor técnico del empleo público, ¿cuál es la solución metodológica correcta y escalable?",
          "options": [
            "Aceptar la propuesta de la calculadora manual para entregar el informe el mismo día.",
            "Utilizar la herramienta Power Query (o un script de automatización en Python/R) para crear una tubería de normalización de datos que transforme de forma estandarizada los formatos de fecha al estándar ISO 8601 (AAAA-MM-DD), valide duplicados y genere un consolidado auditable y reproducible.",
            "Devolver los 32 archivos y negarse a procesar la información."
          ],
          "correct": 1,
          "justification": "La auditoría pública moderna prohíbe sumatorias manuales opacas. Las herramientas como Power Query o scripts reproducibles permiten limpiar y transformar datos heterogéneos de forma automática, dejando constancia de cada paso de transformación para auditoría."
        },
        {
          "id": "u9_q8",
          "difficulty": "Difícil",
          "type": "Juicio Situacional (SJT)",
          "case": "Al enviar a la imprenta y al archivo central un informe estadístico de 200 páginas elaborado en Word, el profesional advierte que las numeraciones de página del índice no coinciden con los capítulos porque alguien insertó imágenes sin ajustar los saltos de sección.",
          "question": "Conforme a la GTC 185 y las normas de aseguramiento de calidad documental, ¿qué debe hacerse antes de remitir el documento formalmente?",
          "options": [
            "Enviar el documento así, pues los índices son meramente decorativos.",
            "Revisar la configuración de saltos de sección, aplicar estilos estructurados a todos los títulos, actualizar la tabla de contenido y verificar que la numeración correlativa arábiga y romana coincida exactamente en el PDF/A generado.",
            "Borrar el índice para que no se note la discrepancia."
          ],
          "correct": 1,
          "justification": "Un documento oficial emanado de la Procuraduría representa la seriedad y fe pública institucional. La congruencia entre el índice y el cuerpo del documento, así como la correcta maquetación conforme a la GTC 185, son exigencias elementales de calidad documental."
        }
      ]
    },
    {
      "id": 10,
      "number": "10",
      "title": "Contratación Estatal y Supervisión de Proyectos Tecnológicos",
      "category": "Conocimientos Esenciales Específicos",
      "level": "Intermedio - Avanzado",
      "duration": "55 a 70 min",
      "summary": "Estudio integral del Estatuto General de Contratación de la Administración Pública (Ley 80 de 1993, Ley 1150 de 2007, Ley 1882 de 2018 y Decreto 1082 de 2015). Modalidades de selección en el Estado colombiano. Rol del Profesional 3PU-15 como Supervisor Técnico de contratos TIC: estudios previos, Acuerdos de Nivel de Servicio (SLA), actas de recibo parcial y final, y procedimiento administrativo sancionatorio contractual (Art. 86 Ley 1474 de 2011).",
      "normativa": [
        "Ley 80 de 1993: Estatuto General de Contratación de la Administración Pública.",
        "Ley 1150 de 2007: Medidas para la eficiencia y transparencia en la contratación con recursos públicos.",
        "Decreto Reglamentario Único 1082 de 2015: Sector Administrativo de Planeación Nacional.",
        "Ley 1474 de 2011 (Estatuto Anticorrupción): Artículo 83 (Supervisión e Interventoría) y Artículo 86 (Procedimiento de Imposición de Multas y Sanciones).",
        "Guías y Circulares de Colombia Compra Eficiente (CCE) para la adquisición de bienes y servicios de TI."
      ],
      "officialInvestigations": [
        {
          "type": "Estatuto Contractual",
          "title": "Ley 80 de 1993 y Ley 1150 de 2007 - Estatuto General de Contratación Pública",
          "description": "Pilares de la contratación estatal en Colombia. Principios de selección objetiva, transparencia, economía, responsabilidad y ecuación financiera del contrato.",
          "relevance": "Marco jurídico vinculante para cualquier adquisición tecnológica en la PGN."
        },
        {
          "type": "Decreto Único Reglamentario",
          "title": "Decreto 1082 de 2015 - Normas de Selección y Contratación Pública",
          "description": "Reglamenta las etapas precontractual, contractual y poscontractual: elaboración de estudios y documentos previos, análisis del sector, garantías y publicación en el SECOP.",
          "relevance": "Estatuto reglamentario evaluado en las pruebas de contratación pública."
        },
        {
          "type": "Ley Anticorrupción",
          "title": "Ley 1474 de 2011 - Artículos 83 y 84: Supervisión e Interventoría Contractual",
          "description": "Define la supervisión técnica como el seguimiento integral administrativo, técnico, financiero y jurídico ejercido por la propia entidad a través de sus servidores públicos.",
          "relevance": "Estatuto de deberes y responsabilidades directas para el cargo 3PU-15."
        },
        {
          "type": "Ley Anticorrupción",
          "title": "Artículo 86 de la Ley 1474 de 2011 - Audiencia de Imposición de Multas y Caducidad",
          "description": "Procedimiento administrativo reglado para hacer efectivas multas, sanciones pecuniarias y declaratoria de incumplimiento contractual garantizando el debido proceso al contratista.",
          "relevance": "Guía la actuación del supervisor ante retrasos graves del proveedor tecnológico."
        },
        {
          "type": "Guía Oficial de Contratación TIC",
          "title": "Guía para la Contratación de Tecnologías de la Información y Nube (CCE / MinTIC)",
          "description": "Pautas para la estructuración de especificaciones técnicas, Acuerdos de Nivel de Servicio (SLA), propiedad intelectual del código fuente y seguridad en servicios cloud.",
          "relevance": "Asegura que los contratos de desarrollo de software para la PGN protejan al Estado."
        },
        {
          "type": "Jurisprudencia Consejo de Estado",
          "title": "Sentencia Consejo de Estado Sección Tercera (Rad. 2019-00128) - Responsabilidad del Supervisor Contractual",
          "description": "Determina que el supervisor que suscribe actas de recibo a satisfacción de entregables defectuosos o inexistentes responde solidariamente por daño patrimonial y falta gravísima disciplinaria.",
          "relevance": "Fija la pauta de responsabilidad personalísima e indelegable del supervisor."
        },
        {
          "type": "Manual Interno PGN",
          "title": "Manual de Contratación, Supervisión e Interventoría de la PGN",
          "description": "Procedimiento interno de la Procuraduría para la designación de supervisores, formatos de informes periódicos, verificación de pagos a seguridad social y liquidación de contratos.",
          "relevance": "Reglamento interno obligatorio para las compras de la DAEADI."
        },
        {
          "type": "Concepto Sala de Consulta",
          "title": "Concepto Consejo de Estado No. 2380 - Prohibición de Modificar el Objeto Contractual",
          "description": "Establece los límites a las adiciones y modificaciones contractuales: prohíbe cambiar el objeto sustancial o revivir contratos vencidos mediante prórrogas extemporáneas.",
          "relevance": "Evita irregularidades en adiciones a contratos de licencias de software."
        }
      ],
      "deepModules": [
        {
          "title": "1. Modalidades de Selección en Colombia y su Aplicación en TIC",
          "content": "La Ley 1150 de 2007 consagra cinco modalidades de selección objetiva:\n1. Licitación Pública: Regla general para contratos de gran cuantía o proyectos tecnológicos de alta complejidad (ej. renovación de la infraestructura de data center central de la PGN).\n2. Selección Abreviada: Para bienes y servicios de características técnicas uniformes (Subasta Inversa para compra de computadores estándar) o por menor cuantía.\n3. Concurso de Méritos: Exclusivo para servicios de consultoría, interventoría técnica y estudios de arquitectura o peritaje especializado.\n4. Contratación Directa: Excepcional y taxativa: urgencia manifiesta, empréstitos, contratos interadministrativos, desarrollo científico/tecnológico o prestación de servicios profesionales y de apoyo a la gestión (intuitu personae).\n5. Mínima Cuantía: Contratos cuyo valor no excede el 10% de la menor cuantía de la entidad.",
          "keyRule": "La adquisición de software especializado a la medida no puede contratarse como bien uniforme por subasta inversa; exige licitación pública o selección abreviada de menor cuantía."
        },
        {
          "title": "2. El Rol del Profesional 3PU-15 como Supervisor Técnico de Contratos TIC",
          "content": "El Artículo 83 de la Ley 1474 de 2011 define la supervisión como el seguimiento integral de la ejecución contractual ejercido por la entidad cuando no se requiere interventoría externa. Las funciones del 3PU-15 supervisor incluyen:\n• Elaborar los informes técnicos periódicos de supervisión.\n• Exigir el cumplimiento del cronograma, especificaciones técnicas y planes de pruebas.\n• Verificar mensualmente que el contratista esté al día en aportes al Sistema de Seguridad Social Integral (Salud, Pensión y ARL) y parafiscales antes de autorizar pagos.\n• Suscribir actas de inicio, suspensión, reinicio y recibo parcial o final a satisfacción.\n• Prohibición absoluta de modificar el objeto o plazo mediante acuerdos verbales.",
          "keyRule": "Firmar un acta de recibo a satisfacción sabiendo que el software tiene fallas o entregables pendientes constituye falta gravísima disciplinaria y delito de falsedad ideológica."
        },
        {
          "title": "3. Acuerdos de Nivel de Servicio (SLA) y Gestión de Incumplimientos TIC",
          "content": "En contratos de tecnología (nube, bases de datos, enlaces de comunicaciones), la calidad se mide mediante SLAs (Service Level Agreements):\n• Disponibilidad: Porcentaje de tiempo que el sistema debe estar operativo (ej. 99.8% mensual).\n• Tiempo Máximo de Respuesta (MTTR): Plazo para atender un incidente según su severidad (ej. Severidad 1 - Caída total: respuesta en menos de 30 minutos).\n• Penalidades y Descuentos: Si el contratista no cumple el SLA pactado, la entidad no puede pagar la totalidad de la factura mensual; debe aplicar los descuentos contractuales automáticos establecidos en los pliegos.\n• Propiedad Intelectual: El código fuente, diagramas, datos y modelos desarrollados con recursos del Estado pertenecen a la Nación - PGN, debiendo entregarse en repositorios oficiales.",
          "keyRule": "El supervisor debe custodiar la propiedad intelectual del software desarrollado, exigiendo la entrega completa del código fuente documentado y sin ofuscación."
        },
        {
          "title": "4. Procedimiento Administrativo Sancionatorio Contractual (Art. 86 Ley 1474)",
          "content": "Cuando el contratista incumple sus obligaciones técnicas o cronogramas, el supervisor no puede sancionarlo por cuenta propia. El trámite formal exige:\n1. Informe Circunstanciado del Supervisor: El 3PU-15 documenta de manera técnica y fáctica el presunto incumplimiento, anexando pruebas y cuantificando el perjuicio.\n2. Citación a Audiencia: El ordenador del gasto cita formalmente al contratista y a la compañía de seguros garante, remitiéndoles el informe del supervisor.\n3. Desarrollo de la Audiencia: El contratista ejerce su derecho de defensa y contradicción.\n4. Decisión Motivada: La entidad expide resolución imponiendo la multa o declarando el incumplimiento, contra la cual procede el recurso de reposición en la misma diligencia.",
          "keyRule": "El supervisor aporta la evidencia probatoria técnica objetiva; la potestad sancionatoria contractual reside exclusivamente en el Ordenador del Gasto."
        }
      ],
      "scenarioExample": "La PGN contrata a una firma externa para desarrollar un módulo de analítica predictiva de quejas en el SIM. El contrato vence en 5 días y el contratista entrega un archivo ejecutable cerrado sin el código fuente ni los manuales de arquitectura pactados en el pliego, rogándole al Profesional 3PU-15 supervisor que 'firme el acta de recibo para que no se pierdan los recursos de la vigencia'. El profesional se niega categóricamente, expide un informe de no conformidad técnica detallando los faltantes y solicita al Ordenador del Gasto iniciar el trámite del Art. 86 de la Ley 1474/11.",
      "examTip": "DISTRACTOR FRECUENTE EN CONTRATACIÓN: Creer que el supervisor puede prorrogar verbalmente un contrato o pactar pagos por entregables no verificados con la promesa de que 'el contratista arreglará los errores la próxima semana'. Ambas actuaciones son constitutivas de faltas disciplinarias gravísimas.",
      "glossary": [
        {
          "term": "Supervisión Contractual",
          "definition": "Seguimiento técnico, administrativo, financiero y jurídico del contrato estatal ejercido por servidores públicos de la entidad contratante."
        },
        {
          "term": "Interventoría",
          "definition": "Seguimiento técnico especializado contratado con un tercero independiente cuando la entidad no cuenta con personal o la ley lo exige en obras públicas."
        },
        {
          "term": "SLA",
          "definition": "Service Level Agreement (Acuerdo de Nivel de Servicio), cláusula que fija parámetros medibles de calidad, disponibilidad y tiempos de respuesta tecnológica."
        },
        {
          "term": "Selección Objetiva",
          "definition": "Principio contractual que exige escoger la oferta más favorable a los intereses del Estado sin consideraciones subjetivas ni afectos personales."
        },
        {
          "term": "Audiencia del Art. 86",
          "definition": "Procedimiento administrativo reglado de la Ley 1474 de 2011 para declarar incumplimientos y hacer efectivas multas o pólizas de seguros al contratista."
        },
        {
          "term": "Estudios Previos",
          "definition": "Conjunto de análisis técnicos, jurídicos y económicos que sustentan la necesidad, conveniencia y presupuesto oficial de una contratación estatal."
        },
        {
          "term": "Acta de Liquidación",
          "definition": "Acto bilateral o unilateral que formaliza el balance financiero, técnico y legal definitivo tras la terminación de un contrato estatal."
        },
        {
          "term": "SECOP II",
          "definition": "Plataforma transaccional electrónica del Estado colombiano para realizar todos los procesos de contratación pública de manera abierta y visible."
        }
      ],
      "quiz": [
        {
          "id": "u10_q1",
          "difficulty": "Fácil",
          "type": "Conceptual / Normativa",
          "case": "La Procuraduría General de la Nación requiere adquirir 2.000 computadores portátiles estándar con características técnicas uniformes y de común utilización para sus sedes territoriales.",
          "question": "Conforme a la Ley 1150 de 2007 y el Decreto 1082 de 2015, ¿cuál es la modalidad de selección que debe utilizarse prioritariamente para este tipo de bienes?",
          "options": [
            "Contratación Directa por urgencia manifiesta.",
            "Selección Abreviada mediante subasta inversa (o Acuerdos Marco de Precios de Colombia Compra Eficiente).",
            "Concurso de Méritos abierto."
          ],
          "correct": 1,
          "justification": "La Ley 1150 de 2007 (Art. 2 num. 2) dispone que la adquisición de bienes y servicios de características técnicas uniformes y de común utilización debe adelantarse por Selección Abreviada mediante subasta inversa o a través de los Acuerdos Marco de Precios administrados por CCE."
        },
        {
          "id": "u10_q2",
          "difficulty": "Fácil",
          "type": "Conceptual / Normativa",
          "case": "Un Profesional Universitario es designado como Supervisor Técnico de un contrato de prestación de servicios de soporte informático en la DAEADI.",
          "question": "De acuerdo con el Artículo 83 de la Ley 1474 de 2011, ¿cuál de las siguientes afirmaciones define la naturaleza jurídica de la supervisión?",
          "options": [
            "Es un contrato de obra externa suscrito con una empresa de auditoría privada.",
            "Es una función ejercida por la misma entidad estatal a través de sus servidores públicos para verificar el cumplimiento técnico, administrativo, financiero y jurídico del contrato.",
            "Es una delegación exclusiva reservada a los ministros del despacho."
          ],
          "correct": 1,
          "justification": "El Art. 83 de la Ley 1474 de 2011 establece que la supervisión consiste en el seguimiento integral del contrato ejercido por la propia entidad estatal cuando no se requiere la contratación de una interventoría externa especializada."
        },
        {
          "id": "u10_q3",
          "difficulty": "Media",
          "type": "Inferenciación / Criterio Técnico",
          "case": "En un contrato de servicio de alojamiento en la nube para el SIRI, se pactó un Acuerdo de Nivel de Servicio (SLA) de disponibilidad del 99.9%. Durante el mes de mayo, los servidores sufrieron caídas recurrentes totalizando 48 horas fuera de servicio (disponibilidad real del 93.3%). El contratista solicita el pago del 100% de la factura mensual prometiendo 'no volver a fallar'.",
          "question": "Como supervisor técnico en la DAEADI, ¿cuál es su actuación conforme a la ley de contratación?",
          "options": [
            "Autorizar el pago total para no perjudicar el flujo de caja de la empresa contratista.",
            "Rechazar la factura plena, aplicar los descuentos y penalidades económicas contempladas en la tabla de SLAs del contrato por indisponibilidad del servicio, y certificar el pago únicamente sobre el valor neto resultante de los descuentos aplicados.",
            "Pagar el 50% de la factura a título personal con recursos propios del supervisor."
          ],
          "correct": 1,
          "justification": "Los Acuerdos de Nivel de Servicio (SLA) son vinculantes y de obligatorio cumplimiento. Si el contratista no alcanzó el nivel de servicio pactado, el supervisor tiene el deber de aplicar las deducciones o penalidades económicas contractuales antes de emitir la certificación de pago."
        },
        {
          "id": "u10_q4",
          "difficulty": "Media",
          "type": "Inferenciación / Criterio Técnico",
          "case": "Un contratista de desarrollo de software entrega a la DAEADI una plataforma web desarrollada a la medida con recursos de la Procuraduría, pero se niega a entregar el código fuente, alegando que el código fuente es 'secreto industrial de su empresa'.",
          "question": "Frente a las directrices de Colombia Compra Eficiente y la legislación de contratación estatal en TIC, ¿es legítima la postura del contratista?",
          "options": [
            "Sí, porque la empresa privada siempre conserva la propiedad de todo lo que programa.",
            "No, porque en los contratos de desarrollo de software a la medida financiados con recursos públicos del Estado, los derechos patrimoniales de autor sobre el código fuente, diagramas y documentación técnica se transfieren a la entidad contratante (la Nación - PGN), debiendo entregarse en su totalidad.",
            "Solo si el contratista paga un impuesto de timbre a la DIAN."
          ],
          "correct": 1,
          "justification": "Las guías de contratación de software de Colombia Compra Eficiente y la Ley de Contratación Estatal determinan que en desarrollos a medida pagados por el Estado, los derechos patrimoniales sobre el código fuente y artefactos pertenecen a la entidad estatal, siendo obligatoria su entrega íntegra."
        },
        {
          "id": "u10_q5",
          "difficulty": "Media",
          "type": "Inferenciación / Criterio Técnico",
          "case": "El plazo de ejecución de un contrato de soporte informático de la PGN venció el 30 de abril. El 15 de mayo (15 días después del vencimiento), el supervisor y el contratista deciden firmar un acta de prórroga por dos meses más para terminar los desarrollos pendientes.",
          "question": "De acuerdo con la jurisprudencia reiterada del Consejo de Estado, ¿cuál es la validez jurídica de dicha prórroga?",
          "options": [
            "Es plenamente válida porque rige el principio de autonomía de la voluntad contractual.",
            "Es absolutamente nula e ineficaz, pues no es jurídicamente viable modificar ni prorrogar contratos cuyo plazo ya se encuentra vencido y extinguido; los acuerdos extemporáneos constituyen una prórroga inexistente que compromete la responsabilidad del servidor.",
            "Es válida si cuenta con el visto bueno verbal del viceministro de TIC."
          ],
          "correct": 1,
          "justification": "El Consejo de Estado ha sentado jurisprudencia pacífica: un contrato estatal vencido no puede ser revivido ni prorrogado por ningún funcionario. Toda adición o prórroga debe suscribirse ANTES del vencimiento del plazo de ejecución contractual."
        },
        {
          "id": "u10_q6",
          "difficulty": "Difícil",
          "type": "Juicio Situacional (SJT)",
          "case": "Usted es supervisor técnico de un contrato de migración de bases de datos. El contratista tiene un retraso injustificado de 4 semanas en la entrega del modelo relacional. Su superior jerárquico le insinúa que no reporte nada para 'no dañar la relación con el proveedor que es amigo de la casa'.",
          "question": "Frente al principio de responsabilidad del supervisor (Art. 83 y 84 Ley 1474/11) y el régimen disciplinario, ¿cuál debe ser su determinación profesional?",
          "options": [
            "Acatar la sugerencia del superior y no registrar ningún reporte formal de retraso en el SECOP II.",
            "Elaborar de inmediato un informe técnico detallado de presunto incumplimiento contractual con soporte probatorio objetivo, cuantificando el desfase del cronograma y radicándolo formalmente ante el Ordenador del Gasto para que este determine si cita a audiencia del Artículo 86 de la Ley 1474 de 2011.",
            "Insultar al contratista públicamente en redes sociales."
          ],
          "correct": 1,
          "justification": "El supervisor responde disciplinaria, fiscal y penalmente si oculta o disimula incumplimientos del contratista. Su obligación funcional no es complacer insinuaciones jerárquicas, sino documentar con rigor técnico los hechos y dar traslado al Ordenador del Gasto para el inicio del proceso sancionatorio reglado."
        },
        {
          "id": "u10_q7",
          "difficulty": "Difícil",
          "type": "Juicio Situacional (SJT)",
          "case": "Un contratista de infraestructura de red solicita el pago de su cuenta mensual por $45.000.000. Al revisar los soportes de seguridad social exigidos por el Art. 50 de la Ley 789 de 2002, el supervisor 3PU-15 nota que la planilla de aportes de la empresa contratista está vencida y no registra el pago de los trabajadores de ese mes.",
          "question": "¿Cuál es la conducta legal que debe asumir el supervisor frente a la autorización del pago?",
          "options": [
            "Aprobar el pago y firmar la certificación, solicitándole al contratista que prometa pagar la seguridad social en los siguientes días.",
            "Abstenerse de certificar el cumplimiento para pago hasta tanto el contratista acredite formalmente el pago de sus obligaciones con el Sistema General de Seguridad Social y aportes parafiscales correspondientes al periodo facturado.",
            "Descontar el dinero de la nómina personal del supervisor."
          ],
          "correct": 1,
          "justification": "El Art. 50 de la Ley 789 de 2002 y el Estatuto Anticorrupción imponen al supervisor contractual la prohibición estricta de certificar o tramitar cuentas de cobro de contratistas que no se encuentren al día en el pago de sus obligaciones con la seguridad social y aportes parafiscales."
        },
        {
          "id": "u10_q8",
          "difficulty": "Difícil",
          "type": "Juicio Situacional (SJT)",
          "case": "Durante la fase precontractual de una licitación para contratar el nuevo data warehouse de la Procuraduría, una empresa ofrece financiar un viaje a un congreso en Las Vegas al Profesional 3PU-15 a cambio de que en los estudios previos incluya un requisito que solo su marca de servidores cumple en el mercado.",
          "question": "Frente al principio de selección objetiva y los delitos contra la administración pública, ¿qué conducta debe adoptar usted de inmediato?",
          "options": [
            "Aceptar el viaje siempre y cuando asista a todas las conferencias académicas del congreso.",
            "Rechazar de plano el ofrecimiento, advertir que orientar los pliegos a una marca exclusiva viola el principio de selección objetiva consagrado en el Art. 5 de la Ley 1150 de 2007, y formular la denuncia respectiva ante las autoridades penales y disciplinarias por tentativa de cohecho.",
            "Aceptar el viaje pero pedir que también lleven a su jefe de área."
          ],
          "correct": 1,
          "justification": "Ofrecer dádivas para direccionar pliegos de condiciones es un delito de cohecho y una vulneración criminal del principio de selección objetiva. La conducta profesional e íntegra del servidor es el rechazo inmediato y la radicación de la denuncia penal correspondiente."
        }
      ]
    },
    {
      "id": 11,
      "number": "11",
      "title": "Bases de Datos Relacionales, Modelado y SQL Misional",
      "category": "Conocimientos Esenciales Específicos",
      "level": "Intermedio - Avanzado",
      "duration": "60 a 75 min",
      "summary": "Estudio técnico profundo del modelo relacional de datos y lenguajes de consulta estructurados (SQL ANSI/ISO). Diseño lógico y físico, formas normales (1FN a BCNF), propiedades ACID, niveles de aislamiento transaccional, optimización de consultas (EXPLAIN ANALYZE), indexación B-Tree/GIN/GiST, funciones de ventana (Window Functions) y diseño de esquemas seguros para sistemas misionales de control (SIRI y SIM).",
      "normativa": [
        "Estándar Internacional ISO/IEC 9075:2023 - Information technology: Database languages SQL.",
        "Marco de Arquitectura Empresarial (MAE) del MinTIC: Dominio de Información y Datos.",
        "Guía Técnica para la Gestión y Calidad de Bases de Datos en Entidades Públicas (MinTIC).",
        "Manual de Seguridad y Políticas de Acceso a Bases de Datos de la PGN.",
        "Estándar de Seguridad de Datos NIST SP 800-88 (Sanitización y Custodia de Medios)."
      ],
      "officialInvestigations": [
        {
          "type": "Estándar Internacional",
          "title": "ISO/IEC 9075:2023 - Estándar SQL de Lenguaje de Consulta Estructurado",
          "description": "Especificación oficial de la sintaxis y semántica del lenguaje SQL: definición de datos (DDL), manipulación de datos (DML), control de transacciones (TCL) y funciones analíticas.",
          "relevance": "Marco técnico universal evaluado en preguntas de desarrollo de bases de datos."
        },
        {
          "type": "Guía de Gobierno Digital",
          "title": "Guía de Calidad e Interoperabilidad de Bases de Datos Estatales (MinTIC)",
          "description": "Lineamientos para modelar esquemas normalizados, evitar redundancia de datos entre entidades y garantizar la integridad referencial en sistemas misionales.",
          "relevance": "Directamente aplicable a la gestión de datos en la DAEADI."
        },
        {
          "type": "Doctrina de Ingeniería de Datos",
          "title": "Fundamentos de Sistemas de Bases de Datos (Silberschatz, Korth y Sudarshan)",
          "description": "Texto técnico referente sobre álgebra relacional, normalización, control de concurrencia multiversión (MVCC), planes de ejecución de consultas y transacciones ACID.",
          "relevance": "Base teórica utilizada por los comités evaluadores universitarios."
        },
        {
          "type": "Arquitectura Misional PGN",
          "title": "Modelo Lógico y Entidad-Relación del Sistema SIRI y SIM de la PGN",
          "description": "Documentación técnica interna sobre las entidades principales: Investigado, Queja, Proceso Disciplinario, Auto, Fallo, Sanción e Inhabilidad, y sus relaciones de cardinalidad.",
          "relevance": "Contexto real indispensable para las preguntas de juicio situacional."
        },
        {
          "type": "Estándar de Seguridad de Bases de Datos",
          "title": "Guía de Aseguramiento de Motores de Bases de Datos Relacionales (CIS Benchmarks)",
          "description": "Mejores prácticas de hardening para PostgreSQL y Oracle: cifrado de tablas en reposo (TDE), control de accesos por roles (RBAC) y auditoría inmutable de transacciones.",
          "relevance": "Seguridad aplicada a la custodia del registro de sanciones de la Nación."
        },
        {
          "type": "Manual de Rendimiento",
          "title": "Guía de Optimización de Consultas e Indexación en PostgreSQL y Oracle",
          "description": "Técnicas de análisis de planes de ejecución mediante EXPLAIN y EXPLAIN ANALYZE, escaneo secuencial vs escaneo por índice y costos de I/O.",
          "relevance": "Resuelve problemas de saturación de servidores en horas de alta radicación."
        },
        {
          "type": "Estándar de Gobernanza de Datos",
          "title": "Marco DAMA-DMBOK: Gestión del Modelo de Datos y Metadatos",
          "description": "Estándar global sobre diccionario de datos, linaje del dato y reglas de negocio embebidas en el catálogo relacional.",
          "relevance": "Aplica a la gobernanza de datos en el proceso de Conocimiento e Innovación."
        },
        {
          "type": "Concepto Técnico MinTIC",
          "title": "Lineamientos de Migración y Despliegue de Motores de Datos en Cloud",
          "description": "Parámetros de alta disponibilidad, réplicas de lectura y conmutación por error (failover) en bases de datos relacionales públicas.",
          "relevance": "Garantiza la resiliencia del SIRI ante contingencias."
        }
      ],
      "deepModules": [
        {
          "title": "1. Modelado Entidad-Relación y Formas Normales (1FN a BCNF)",
          "content": "El diseño de bases de datos relacionales en la DAEADI busca eliminar redundancias y prevenir anomalías de inserción, actualización y borrado mediante la normalización:\n• Primera Forma Normal (1FN): Todos los atributos son atómicos (valores indivisibles) y no existen grupos repetitivos.\n• Segunda Forma Normal (2FN): Cumple 1FN y todos los atributos que no forman parte de la clave primaria tienen dependencia funcional completa de la clave primaria (no dependencias parciales).\n• Tercera Forma Normal (3FN): Cumple 2FN y no existen dependencias funcionales transitivas entre atributos no clave (ningún atributo no clave depende de otro atributo no clave).\n• Forma Normal de Boyce-Codd (BCNF): Extensión más estricta de la 3FN donde para toda dependencia funcional X -> Y, X debe ser una superclave.\n\nEn sistemas transaccionales misionales (OLTP) como el SIRI, el esquema DEBE estar rigurosamente normalizado (mínimo 3FN) para preservar la integridad de cada sanción registrada.",
          "keyRule": "En sistemas OLTP misionales la normalización garantiza la integridad de los datos; en sistemas analíticos OLAP (Data Warehouse) se desnormaliza conscientemente para optimizar consultas de reporte."
        },
        {
          "title": "2. Propiedades ACID y Niveles de Aislamiento Transaccional",
          "content": "Una transacción en la base de datos de la PGN debe cumplir obligatoriamente las propiedades ACID:\n• Atomicidad: La transacción se ejecuta completamente o no se ejecuta en absoluto (Rollback si falla un paso).\n• Consistencia: Lleva la base de datos de un estado válido a otro estado válido, respetando todas las restricciones de integridad (Foreign Keys, Unique, Check).\n• Aislamiento: La ejecución concurrente de transacciones produce el mismo resultado que si se ejecutaran secuencialmente.\n• Durabilidad: Una vez confirmada la transacción (Commit), sus efectos persisten incluso si ocurre una falla eléctrica en el servidor.\n\nNiveles de Aislamiento Estándar SQL:\n1. Read Uncommitted: Permite 'lecturas sucias' (Dirty Reads). No apto para sistemas de control.\n2. Read Committed: Evita lecturas sucias pero permite lecturas no repetibles (Default en PostgreSQL/Oracle).\n3. Repeatable Read: Garantiza que si se lee una fila dos veces en la misma transacción, los datos serán idénticos.\n4. Serializable: Máximo aislamiento; previene lecturas fantasma mediante bloqueos o serialización estricta.",
          "keyRule": "El registro de sanciones e inhabilidades en el SIRI debe ejecutarse bajo niveles de aislamiento estricto que impidan anomalías por concurrencia simultánea."
        },
        {
          "title": "3. Consultas SQL Avanzadas: Funciones de Ventana (Window Functions) y CTEs",
          "content": "En la DAEADI, el Profesional 3PU-15 debe extraer métricas procesales complejas utilizando SQL avanzado:\n• Common Table Expressions (WITH / CTE): Permiten estructurar consultas modulares y legibles, así como consultas recursivas para recorrer jerarquías organizacionales de la PGN.\n• Funciones de Ventana (Window Functions): Calculan agregaciones sobre un conjunto de filas relacionadas sin colapsar el resultado en una sola fila (a diferencia de `GROUP BY`):\n  - `ROW_NUMBER() OVER(PARTITION BY investigado_id ORDER BY fecha_fallo DESC)`: Asigna un número consecutivo a cada fallo de un mismo investigado para seleccionar el más reciente.\n  - `RANK()` y `DENSE_RANK()`: Clasifican dependencias según volumen de quejas, manejando empates.\n  - `LAG()` y `LEAD()`: Permiten comparar los tiempos de una actuación procesal con la actuación inmediatamente anterior o posterior dentro del mismo expediente.",
          "keyRule": "Las funciones de ventana permiten calcular rankings y variaciones temporales en expedientes disciplinarios preservando el detalle individual de cada fila."
        },
        {
          "title": "4. Optimización de Consultas, Indexación y Planes de Ejecución (EXPLAIN ANALYZE)",
          "content": "Cuando una consulta colapsa el servidor de la Procuraduría, el Profesional debe analizar el plan de ejecución:\n• `EXPLAIN ANALYZE`: Muestra el árbol de ejecución real del motor: tiempo de planificación, tiempo de ejecución, costo estimado de CPU y número exacto de filas procesadas.\n• Sequential Scan vs. Index Scan: Si la base de datos escanea secuencialmente millones de filas (Seq Scan) en una búsqueda por cédula, se requiere crear un índice.\n• Tipos de Índices:\n  - B-Tree: Estándar para comparaciones de igualdad (`=`) y rango (`<`, `>`, `BETWEEN`).\n  - GIN (Generalized Inverted Index): Ideal para campos de texto completo (Full Text Search) en descripciones de quejas disciplinarias y columnas de tipo JSONB.\n  - GiST: Para datos espaciales y de georreferenciación de procuradurías provinciales.\n• Índices Compuestos y Parciales: Crear índices únicamente sobre las filas que tienen sanciones activas (`WHERE estado = 'ACTIVO'`) ahorra hasta un 90% de espacio y memoria RAM.",
          "keyRule": "Crear índices indiscriminadamente en todas las columnas ralentiza gravemente las operaciones de inserción y actualización (`INSERT`/`UPDATE`) en bases de datos transaccionales masivas."
        }
      ],
      "scenarioExample": "En jornada de inscripciones electorales, las consultas ciudadanas de antecedentes disciplinarios saturan la base de datos del SIRI, elevando el tiempo de respuesta de 0.2 segundos a 28 segundos por consulta. El Profesional 3PU-15 ejecuta un `EXPLAIN ANALYZE` sobre la consulta principal y descubre un 'Seq Scan' de 8 millones de filas porque la búsqueda filtra por `UPPER(numero_documento)` y el índice existente era solo sobre `numero_documento`. El profesional crea de inmediato un índice funcional `CREATE INDEX idx_siri_doc ON sanciones (UPPER(numero_documento));`, reduciendo el tiempo de respuesta a 8 milisegundos y estabilizando el sistema nacional.",
      "examTip": "DISTRACTOR TÍPICO DE EXAMEN: Afirmar que para acelerar un sistema de base de datos la mejor solución siempre es 'borrar las tablas históricas' o 'desactivar las restricciones de llave foránea'. La solución técnica legítima y segura es la optimización de queries, indexación adecuada y configuración de réplicas de lectura.",
      "glossary": [
        {
          "term": "ACID",
          "definition": "Conjunto de propiedades de las transacciones en motores relacionales: Atomicidad, Consistencia, Aislamiento (Isolation) y Durabilidad."
        },
        {
          "term": "Tercera Forma Normal (3FN)",
          "definition": "Estado de diseño relacional donde se eliminan las dependencias funcionales transitivas entre atributos no clave para evitar redundancias."
        },
        {
          "term": "Window Function",
          "definition": "Función analítica SQL que realiza cálculos a través de un conjunto de filas de una tabla relacionadas con la fila actual sin agruparlas."
        },
        {
          "term": "EXPLAIN ANALYZE",
          "definition": "Comando que muestra el plan de ejecución y los tiempos reales de CPU e I/O consumidos por una consulta en el motor de base de datos."
        },
        {
          "term": "Índice B-Tree",
          "definition": "Estructura de datos en árbol autobalanceado utilizada por motores SQL para localizar rápidamente registros por igualdad o rango."
        },
        {
          "term": "Clave Foránea (FK)",
          "definition": "Restricción de integridad referencial que vincula una columna de una tabla con la clave primaria de otra tabla impidiendo datos huérfanos."
        },
        {
          "term": "Dirty Read",
          "definition": "Anomalía de concurrencia donde una transacción lee datos no confirmados (sin Commit) que fueron modificados por otra transacción."
        },
        {
          "term": "CTE",
          "definition": "Common Table Expression (expresión de tabla común con la cláusula WITH) que define un conjunto de resultados temporal con nombre para modularizar consultas complejas."
        }
      ],
      "quiz": [
        {
          "id": "u11_q1",
          "difficulty": "Fácil",
          "type": "Conceptual / Normativa",
          "case": "En la DAEADI se diseña una tabla para registrar los fallos disciplinarios en el sistema misional.",
          "question": "¿Qué propiedad ACID garantiza que, si se produce un corte de energía en el servidor justo en medio del registro de una sanción, las operaciones a medio completar se deshagan automáticamente (Rollback) sin dejar la base de datos en un estado incompleto o corrupto?",
          "options": [
            "Durabilidad.",
            "Atomicidad.",
            "Aislamiento."
          ],
          "correct": 1,
          "justification": "La Atomicidad garantiza el principio de 'todo o nada': una transacción se ejecuta completamente o, ante cualquier falla, se revierte en su totalidad (Rollback) para preservar la integridad absoluta del sistema."
        },
        {
          "id": "u11_q2",
          "difficulty": "Fácil",
          "type": "Conceptual / Normativa",
          "case": "Un diseñador de bases de datos crea una tabla de funcionarios donde en la columna 'telefonos' almacena múltiples números separados por comas ('3112223344, 3205556677, 2889900').",
          "question": "¿Qué regla fundamental de la Primera Forma Normal (1FN) se está violando en este diseño?",
          "options": [
            "La existencia de llaves foráneas compuestas.",
            "El principio de atomicidad de los atributos, que exige que cada columna contenga únicamente valores indivisibles y que no existan grupos repetitivos.",
            "El principio de no repudio de la firma digital."
          ],
          "correct": 1,
          "justification": "La 1FN exige que todos los valores de las columnas sean atómicos (indivisibles) y que no existan atributos multivaluados o listas separadas por delimitadores dentro de una misma celda relacional."
        },
        {
          "id": "u11_q3",
          "difficulty": "Media",
          "type": "Inferenciación / Criterio Técnico",
          "case": "El equipo de analítica de la DAEADI requiere listar todos los procesos disciplinarios mostrando el número de radicado, el nombre del investigado y, adicionalmente, la posición o ranking del proceso según la cuantía del presunto detrimento patrimonial dentro de cada departamento.",
          "question": "¿Cuál es la cláusula SQL estándar idónea para calcular este ranking sin colapsar el número total de filas de la consulta?",
          "options": [
            "`GROUP BY departamento_id HAVING MAX(cuantia)`",
            "`DENSE_RANK() OVER(PARTITION BY departamento_id ORDER BY cuantia DESC)`",
            "`SELECT DISTINCT departamento_id, cuantia FROM procesos ORDER BY cuantia`"
          ],
          "correct": 1,
          "justification": "Las funciones de ventana analíticas como `DENSE_RANK() OVER(PARTITION BY ... ORDER BY ...)` permiten calcular clasificaciones jerárquicas o rankings particionados por grupos manteniendo visibles todas las filas individuales de la consulta."
        },
        {
          "id": "u11_q4",
          "difficulty": "Media",
          "type": "Inferenciación / Criterio Técnico",
          "case": "Una consulta de búsqueda de antecedentes en la tabla del SIRI con 12 millones de registros tarda 15 segundos en responder. Al ejecutar `EXPLAIN ANALYZE`, el DBA observa la línea: `Seq Scan on sanciones (cost=0.00..342150.00 rows=1 width=84)`.",
          "question": "¿Qué indica técnicamente este resultado del plan de ejecución y cuál es la solución óptima?",
          "options": [
            "Indica que el motor está utilizando memoria caché ultrarrápida y no requiere modificaciones.",
            "Indica que el motor se ve obligado a leer secuencialmente los 12 millones de registros en disco porque no existe un índice utilizable sobre la columna de búsqueda; la solución es crear un índice B-Tree sobre dicha columna.",
            "Indica que se debe cambiar el motor de base de datos relacional por un archivo de texto plano."
          ],
          "correct": 1,
          "justification": "Un 'Sequential Scan' (Seq Scan) sobre millones de filas evidencia que el motor no tiene un índice para localizar directamente el registro, viéndose forzado a escanear toda la tabla fila por fila. Crear un índice B-Tree sustituye el Seq Scan por un 'Index Scan', reduciendo el tiempo a milisegundos."
        },
        {
          "id": "u11_q5",
          "difficulty": "Media",
          "type": "Inferenciación / Criterio Técnico",
          "case": "Durante una jornada electoral masiva, dos operadores del SIRI intentan registrar al mismo tiempo una anotación de sanción sobre el mismo número de cédula. En el nivel de aislamiento 'Read Committed', una transacción lee los datos que la otra aún no ha confirmado mediante `COMMIT`.",
          "question": "¿Cómo se denomina técnicamente esta anomalía de concurrencia y qué nivel de aislamiento la previene?",
          "options": [
            "Se denomina 'Lectura Fantasma' y solo se previene apagando el servidor.",
            "Se denomina 'Lectura Sucia' (Dirty Read); no ocurre en Read Committed ni en niveles superiores como Repeatable Read o Serializable.",
            "Se denomina 'Bloqueo Mutuo' (Deadlock) y ocurre siempre por error de sintaxis."
          ],
          "correct": 1,
          "justification": "Una lectura sucia (Dirty Read) ocurre cuando una transacción lee datos modificados por otra que aún no han hecho Commit. El estándar SQL establece que Read Committed prohíbe las lecturas sucias, garantizando que solo se lean datos confirmados."
        },
        {
          "id": "u11_q6",
          "difficulty": "Difícil",
          "type": "Juicio Situacional (SJT)",
          "case": "Usted es Profesional 3PU-15 en la DAEADI y debe diseñar la base de datos para registrar las pruebas periciales de las investigaciones disciplinarias. Un analista propone guardar los archivos de audio y video de 5 Gigabytes de las audiencias directamente como campos BLOB dentro de la tabla relacional transaccional de expedientes.",
          "question": "Conforme a las buenas prácticas de arquitectura de bases de datos relacionales, ¿cuál es su recomendación técnica fundamentada?",
          "options": [
            "Aprobar la propuesta, pues guardar archivos gigantes dentro de las tablas transaccionales hace que la base de datos sea más rápida.",
            "Rechazar la propuesta y recomendar almacenar los archivos pesados de audio/video en un almacenamiento de objetos externo seguro (Object Storage / File System protegido), guardando en la tabla relacional únicamente la ruta o URL segura, los metadatos y el hash SHA-256 de autenticidad, evitando así la saturación de memoria RAM y el colapso del buffer pool del motor de base de datos.",
            "Comprimir los videos en formato MP3 de baja calidad para que quepan en una columna de tipo VARCHAR."
          ],
          "correct": 1,
          "justification": "Almacenar archivos binarios masivos (BLOBs de gigabytes) dentro de tablas transaccionales degrada severamente el rendimiento del motor de base de datos, desborda la memoria caché e incrementa exponencialmente los tiempos de backup. La arquitectura estándar desacopla los archivos a un almacenamiento de objetos y guarda en la base de datos relacional los metadatos y el hash de integridad."
        },
        {
          "id": "u11_q7",
          "difficulty": "Difícil",
          "type": "Juicio Situacional (SJT)",
          "case": "Un Procurador Delegado solicita a la DAEADI un reporte de 'todos los funcionarios que han sido sancionados dos o más veces por faltas gravísimas en los últimos 5 años'. Un ingeniero junior redacta una consulta utilizando múltiples subconsultas anidadas con `IN` que tarda 45 minutos y bloquea el servidor de producción.",
          "question": "Como Profesional 3PU-15 experto, ¿cómo optimiza usted la consulta para obtener el resultado de forma eficiente y segura?",
          "options": [
            "Eliminar el filtro de los 5 años para que la consulta no tenga que comparar fechas.",
            "Reestructurar la consulta utilizando una expresión de tabla común (CTE) o una subconsulta agrupada con `COUNT(*) >= 2` en una cláusula `HAVING`, asegurando que existan índices sobre `funcionario_id`, `tipo_falta` y `fecha_ejecutoria`, ejecutando la consulta en una réplica de lectura (Read Replica) para no comprometer el motor transaccional de producción.",
            "Reiniciar el servidor cada 10 minutos mientras corre la consulta."
          ],
          "correct": 1,
          "justification": "Reemplazar subconsultas correlacionadas ineficientes por agregaciones con `HAVING` e indexación compuesta optimiza drásticamente el costo de CPU. Además, las consultas analíticas pesadas deben enviarse a una réplica de lectura para no degradar las transacciones de radicación en el servidor de producción."
        },
        {
          "id": "u11_q8",
          "difficulty": "Difícil",
          "type": "Juicio Situacional (SJT)",
          "case": "En el modelo de datos del SIRI, se detecta que al borrar un registro de un funcionario sancionado por orden judicial, la base de datos borra en cascada (`ON DELETE CASCADE`) todos los autos, pruebas y antecedentes históricos asociados en otras 6 tablas relacionadas, perdiéndose la trazabilidad institucional.",
          "question": "¿Qué restricción de integridad referencial debió configurarse para prevenir esta pérdida catastrófica de información histórica?",
          "options": [
            "Configurar `ON DELETE SET NULL` sin restricciones.",
            "Configurar la restricción de llave foránea como `ON DELETE RESTRICT` (o `NO ACTION`) que impida el borrado físico si existen registros dependientes, e implementar una estrategia de 'borrado lógico' (Soft Delete) mediante un campo booleano `activo = FALSE` junto con tablas de auditoría inmutables.",
            "Desactivar todas las llaves foráneas de la base de datos."
          ],
          "correct": 1,
          "justification": "En sistemas misionales del Estado, el borrado físico en cascada está proscrito porque destruye la memoria documental. Las llaves foráneas deben restringir el borrado (`RESTRICT`), y la eliminación o desvinculación se maneja mediante 'borrado lógico' (Soft Delete) y triggers de auditoría para mantener inalterable el historial probatorio."
        }
      ]
    },
    {
      "id": 12,
      "number": "12",
      "title": "Estadística Descriptiva e Inferencial Aplicada a la Gestión Pública",
      "category": "Conocimientos Esenciales Específicos",
      "level": "Intermedio - Avanzado",
      "duration": "55 a 70 min",
      "summary": "Estudio de las técnicas estadísticas aplicadas a la gestión y control del Estado: medidas de tendencia central (media, mediana, moda) y dispersión (varianza, desviación estándar, rango intercuartílico, coeficiente de variación). Asimetría, curtosis y detección de valores atípicos (outliers) en mora procesal disciplinaria. Estadística inferencial: muestreo probabilístico (aleatorio simple, estratificado, por conglomerados), cálculo del tamaño de muestra (margen de error 5%, confianza 95%) y pruebas de hipótesis para auditorías públicas.",
      "normativa": [
        "Guía para el Diseño y Análisis de Indicadores (DANE / DNP).",
        "Lineamientos para el Aseguramiento de la Calidad de la Información Estadística (PEE - DANE).",
        "Manual de Muestreo de Auditoría de la Contraloría y de la Procuraduría General de la Nación.",
        "Estándar Internacional ISO 3534 (Estadística: Vocabulario y Símbolos).",
        "Documento CONPES 3856: Política Nacional de Información Geográfica y Estadística."
      ],
      "officialInvestigations": [
        {
          "type": "Guía Técnica Oficial",
          "title": "Guía para la Construcción y Análisis de Indicadores (DANE / DNP)",
          "description": "Metodología oficial del Departamento Administrativo Nacional de Estadística para formular indicadores cuantitativos, líneas de base, metas y evaluación de dispersión.",
          "relevance": "Marco pedagógico y técnico evaluado en las pruebas de conocimientos específicos."
        },
        {
          "type": "Manual Oficial de Muestreo",
          "title": "Metodología de Muestreo Aplicada a la Auditoría Gubernamental y de Control",
          "description": "Directrices para la selección de muestras estadísticamente representativas en revisiones de expedientes y contratos: niveles de confianza (90%, 95%, 99%) y márgenes de error tolerables.",
          "relevance": "Permite auditar masivamente miles de procesos disciplinarios con validez jurídica."
        },
        {
          "type": "Doctrina Estadística Aplicada",
          "title": "Estadística para Administración y Economía (Anderson, Sweeney y Williams)",
          "description": "Tratado de estadística descriptiva e inferencial: distribuciones de probabilidad normales y asimétricas, teorema del límite central y pruebas de hipótesis.",
          "relevance": "Sustento matemático de los análisis de datos que genera la DAEADI."
        },
        {
          "type": "Guía de Aseguramiento Estadístico",
          "title": "Norma Técnica de Calidad del Proceso Estadístico en el Sector Público (DANE)",
          "description": "Requisitos para garantizar la veracidad, comparabilidad, coherencia y reproducibilidad de las cifras generadas por los órganos de control.",
          "relevance": "Asegura que los informes estadísticos de la PGN no contengan sesgos."
        },
        {
          "type": "Técnicas de Detección de Anomalías",
          "title": "Detección de Valores Atípicos (Outliers) en Series de Tiempos Procesales",
          "description": "Aplicación del diagrama de caja (Boxplot) y el Rango Intercuartílico (IQR) para identificar juzgados o dependencias con tiempos anormalmente altos o bajos de tramitación.",
          "relevance": "Herramienta analítica central para alertas tempranas de congestión judicial."
        },
        {
          "type": "Doctrina de Muestreo",
          "title": "Muestreo Probabilístico Estratificado en Entidades con Presencia Territorial",
          "description": "Metodología para dividir una población estatal heterogénea en subgrupos homogéneos (estratos por departamento o tamaño) asegurando representación equilibrada.",
          "relevance": "Evita que las muestras de la PGN solo representen a Bogotá y olviden las regiones."
        },
        {
          "type": "Concepto Técnico DANE",
          "title": "La Diferencia entre Media y Mediana en Distribuciones Sesgadas de Gestión Pública",
          "description": "Demuestra por qué la mediana es una medida más robusta que la media aritmética para medir tiempos de trámites y quejas con distribuciones fuertemente asimétricas a la derecha.",
          "relevance": "Clave en preguntas de examen sobre interpretación de métricas de mora."
        },
        {
          "type": "Manual de Indicadores Misionales PGN",
          "title": "Manual de Indicadores de Gestión de las Procuradurías Delegadas y Territoriales",
          "description": "Fórmulas de tasa de descongestión, índice de eficacia resolutiva y mora procesal acumulada en el Sistema Misional (SIM).",
          "relevance": "Define los algoritmos de cálculo de los tableros analíticos de la DAEADI."
        }
      ],
      "deepModules": [
        {
          "title": "1. Medidas de Tendencia Central y Dispersión: La Trampa de la Media Aritmética",
          "content": "En la analítica de la PGN, las medidas estadísticas deben interpretarse con criterio técnico:\n• Media Aritmética: Promedio simple. Es sumamente sensible a los valores extremos (outliers). Si 9 procesos tardan 30 días y 1 proceso tarda 3.000 días, la media será de 327 días, dando una imagen distorsionada de la gestión.\n• Mediana: Valor que divide la muestra ordenada exactamente en el 50% inferior y 50% superior. Es una medida robusta e insensible a los valores atípicos; en distribuciones con sesgo positivo (cola larga a la derecha, típica en mora procesal), la mediana representa mejor la realidad del trámite.\n• Moda: Valor o categoría que se repite con mayor frecuencia.\n• Dispersión:\n  - Desviación Estándar: Medida de dispersión respecto a la media.\n  - Rango Intercuartílico (IQR = Q3 - Q1): Amplitud donde se concentra el 50% central de los datos. Fundamental para detectar valores atípicos.\n  - Coeficiente de Variación (CV = s / x̄): Permite comparar la dispersión relativa de procesos con diferentes escalas o volúmenes.",
          "keyRule": "Para medir tiempos de duración de trámites procesales con valores extremos, la MEDIANA y el Rango Intercuartílico son técnicamente superiores y más representativos que la media y la desviación estándar."
        },
        {
          "title": "2. Detección de Valores Atípicos (Outliers) y Distribuciones Asimétricas",
          "content": "En la DAEADI, detectar outliers no es solo un ejercicio matemático; es el mecanismo para descubrir focos de presunta corrupción o desidia administrativa:\n• Criterio de Tukey (Diagrama de Caja / Boxplot):\n  - Un dato es un 'Outlier Leve' si está por encima de Q3 + 1.5*IQR o por debajo de Q1 - 1.5*IQR.\n  - Un dato es un 'Outlier Extremo' si supera Q3 + 3*IQR.\n• Asimetría (Skewness):\n  - Asimetría Positiva (Derecha): Media > Mediana > Moda. Típico en expedientes: la mayoría se resuelve en tiempos razonables, pero unos pocos duran años engavetados.\n  - Asimetría Negativa (Izquierda): Media < Mediana < Moda.\n• Curtosis: Grado de concentración de los datos alrededor de la zona central (Leptocúrtica, Mesocúrtica o Platicúrtica).",
          "keyRule": "Los outliers en tiempos procesales de la PGN alertan sobre posibles expedientes 'olvidados' intencionalmente para favorecer la prescripción disciplinaria."
        },
        {
          "title": "3. Muestreo Probabilístico en Auditorías de Control Público",
          "content": "Cuando una dependencia debe auditar miles de contratos o expedientes, es imposible revisarlos al 100%. Se debe aplicar muestreo probabilístico donde cada elemento tiene una probabilidad conocida y no nula de ser seleccionado:\n1. Muestreo Aleatorio Simple (MAS): Cada expediente de la lista tiene exactamente la misma probabilidad de ser escogido al azar mediante números aleatorios.\n2. Muestreo Estratificado: La población se divide en estratos no solapados según una variable clave (ej. por tipo de falta: contratación, derechos humanos, medio ambiente). Dentro de cada estrato se realiza un MAS. Garantiza que los estratos minoritarios pero críticos queden adecuadamente representados.\n3. Muestreo por Conglomerados: Se divide la población en grupos heterogéneos (ej. sedes provinciales) y se seleccionan conglomerados completos al azar.\n\nMuestreo No Probabilístico (por conveniencia o criterio subjetivo): NO permite calcular margen de error ni inferir conclusiones a toda la población con validez jurídica.",
          "keyRule": "Para que los hallazgos de una muestra tengan validez probatoria en un informe de auditoría de la PGN, el muestreo debe ser estrictamente probabilístico."
        },
        {
          "title": "4. Cálculo del Tamaño de Muestra e Intervalos de Confianza",
          "content": "Para estimar proporciones en una población finita de expedientes (N), la fórmula estadística oficial es:\n\nn = [N * Z^2 * p * q] / [e^2 * (N - 1) + Z^2 * p * q]\n\nDonde:\n• N: Tamaño de la población total (ej. 50.000 expedientes disciplinarios de la vigencia).\n• Z: Nivel de confianza estándar (Para 95% de confianza, Z = 1.96; para 99%, Z = 2.576).\n• p: Proporción esperada del fenómeno (en máxima incertidumbre, se asume p = 0.5 y q = 1 - p = 0.5, maximizando el tamaño muestral).\n• e: Margen de error máximo tolerable (usualmente fijado en el 5%, e = 0.05).\n\nPara una población de 50.000 expedientes, con 95% de confianza y 5% de error, la muestra representativa requerida es de aproximadamente 381 expedientes. Auditar 381 expedientes seleccionados rigurosamente al azar permite inferir la tasa nacional con un 95% de certeza científica.",
          "keyRule": "Auditar un número mayor sin aleatoriedad técnica no mejora la precisión; una muestra probabilística de 384 expedientes es suficiente para representar a millones de registros con 95% de confianza y 5% de error."
        }
      ],
      "scenarioExample": "La DAEADI debe auditar si las personerías municipales están reportando oportunamente las sanciones disciplinarias al SIRI sobre un universo de 80.000 actuaciones. Un asesor propone 'revisar 50 personerías que le queden cerca de Bogotá'. El Profesional 3PU-15 rechaza ese sesgo de conveniencia y diseña un Muestreo Probabilístico Estratificado por categoría municipal (1ª a 6ª categoría) con 95% de nivel de confianza y 5% de margen de error, seleccionando 383 personerías al azar. El informe resultante resiste cualquier controversia judicial por contar con pleno rigor metodológico.",
      "examTip": "DISTRACTOR FRECUENTE EN ESTADÍSTICA: Preguntas que sugieren que 'siempre se debe usar la media para reportar tiempos de trámites' o que 'para que una muestra sea válida debe ser al menos el 50% de la población'. Ambas son falsas: la media se distorsiona con outliers y la teoría estadística demuestra que con menos de 400 observaciones bien muestreadas se representa a poblaciones gigantescas.",
      "glossary": [
        {
          "term": "Muestra Probabilística",
          "definition": "Muestra seleccionada mediante métodos aleatorios donde cada elemento de la población tiene una probabilidad conocida de ser elegido."
        },
        {
          "term": "Mediana",
          "definition": "Medida de tendencia central robusta que divide a un conjunto de datos ordenados en dos partes iguales (percentil 50)."
        },
        {
          "term": "Outlier (Valor Atípico)",
          "definition": "Observación numéricamente distante del resto de los datos que puede deberse a variabilidad intrínseca o a errores de captura y mora procesal."
        },
        {
          "term": "Rango Intercuartílico (IQR)",
          "definition": "Diferencia entre el tercer cuartil (Q3) y el primer cuartil (Q1), que mide la dispersión del 50% central de las observaciones."
        },
        {
          "term": "Nivel de Confianza",
          "definition": "Probabilidad (típicamente 95%) de que el intervalo de confianza calculado contenga el verdadero parámetro poblacional."
        },
        {
          "term": "Margen de Error",
          "definition": "Rango máximo de variación admisible (usualmente 5%) entre la estimación muestral y el valor real de la población."
        },
        {
          "term": "Muestreo Estratificado",
          "definition": "Técnica de muestreo que divide la población en estratos homogéneos según variables de control antes de extraer muestras aleatorias de cada estrato."
        },
        {
          "term": "Asimetría Positiva",
          "definition": "Distribución donde la cola derecha es más larga que la izquierda, provocando que la media sea significativamente mayor que la mediana."
        }
      ],
      "quiz": [
        {
          "id": "u12_q1",
          "difficulty": "Fácil",
          "type": "Conceptual / Normativa",
          "case": "En el análisis de los tiempos de resolución de 10.000 quejas en la PGN, se observa que el 90% se resuelve en menos de 60 días, pero un grupo de 50 quejas tardó más de 4.000 días debido a litigios internacionales complejos.",
          "question": "¿Cuál es la medida de tendencia central más adecuada y representativa para informar el tiempo típico de resolución ciudadana sin distorsión?",
          "options": [
            "La media aritmética, porque toma en cuenta matemáticamente todos los datos.",
            "La mediana, porque es una medida robusta e insensible a los valores extremos (outliers) que sesgan la distribución hacia la derecha.",
            "El rango total restando el menor del mayor."
          ],
          "correct": 1,
          "justification": "En distribuciones asimétricas con colas largas a la derecha (valores extremos altos), la media aritmética se eleva artificialmente distorsionando la realidad. La mediana representa fielmente el tiempo del 50% de la población de quejas sin dejarse arrastrar por los outliers."
        },
        {
          "id": "u12_q2",
          "difficulty": "Fácil",
          "type": "Conceptual / Normativa",
          "case": "La DAEADI debe auditar la consistencia del archivo de 100.000 certificados expedidos por el SIRI durante el último año.",
          "question": "¿Qué tipo de muestreo garantiza que los resultados obtenidos sean estadísticamente extrapolables a toda la población con un nivel de confianza cuantificable?",
          "options": [
            "Muestreo por conveniencia o intencional escogiendo los certificados más fáciles de abrir.",
            "Muestreo probabilístico (como el muestreo aleatorio simple o estratificado), donde cada registro tiene una probabilidad conocida y no nula de ser seleccionado.",
            "Muestreo por 'bola de nieve' preguntando a los compañeros de oficina."
          ],
          "correct": 1,
          "justification": "Solo el muestreo probabilístico permite aplicar la teoría matemática de la inferencia estadística, calcular el margen de error y extrapolar los hallazgos a toda la población con validez científica y probatoria."
        },
        {
          "id": "u12_q3",
          "difficulty": "Media",
          "type": "Inferenciación / Criterio Técnico",
          "case": "Al calcular el resumen de tiempos procesales de una procuraduría delegada, el reporte arroja: Media = 420 días; Mediana = 120 días; Moda = 90 días.",
          "question": "¿Qué conclusión técnica se deriva de la relación entre estas tres medidas sobre la distribución de los tiempos de esa delegada?",
          "options": [
            "La distribución es perfectamente normal y simétrica en forma de campana de Gauss.",
            "La distribución presenta una marcada asimetría positiva (sesgo a la derecha), lo que evidencia que la mayoría de los procesos se resuelve cerca de los 90-120 días, pero existe un grupo de expedientes con mora extrema que infla artificialmente la media a 420 días.",
            "Los datos fueron recolectados erróneamente porque la media nunca puede ser mayor que la mediana."
          ],
          "correct": 1,
          "justification": "Cuando Media > Mediana > Moda, la distribución estadística posee asimetría positiva hacia la derecha. Esto revela la presencia de casos atípicos con tiempos de resolución desmesurados que arrastran la media hacia arriba."
        },
        {
          "id": "u12_q4",
          "difficulty": "Media",
          "type": "Inferenciación / Criterio Técnico",
          "case": "En un análisis mediante diagrama de caja (Boxplot) de los tiempos de radicación de 5.000 quejas, se obtiene que Q1 = 10 días, Q3 = 30 días, lo que da un Rango Intercuartílico (IQR) de 20 días.",
          "question": "Aplicando la regla estadística estándar de John Tukey para la detección de valores atípicos (outliers leves), ¿a partir de qué valor un tiempo de radicación se clasifica como outlier superior?",
          "options": [
            "A partir de 40 días.",
            "A partir de 60 días (Q3 + 1.5 * IQR = 30 + 1.5 * 20 = 60).",
            "A partir de 100 días."
          ],
          "correct": 1,
          "justification": "El límite superior para valores atípicos leves según la metodología de Tukey es Q3 + (1.5 * IQR). Con Q3 = 30 y IQR = 20, el umbral es 30 + (1.5 * 20) = 30 + 30 = 60 días. Cualquier proceso que tome más de 60 días es un valor atípico estadístico."
        },
        {
          "id": "u12_q5",
          "difficulty": "Media",
          "type": "Inferenciación / Criterio Técnico",
          "case": "Un equipo auditor sostiene que para que una muestra de expedientes disciplinarios sea válida en un universo de 40.000 procesos, la muestra obligatoriamente debe ser del 50% de la población (es decir, auditar 20.000 expedientes), pues de lo contrario 'no es seria'.",
          "question": "Frente a la teoría del muestreo estadístico y las guías del DANE y DNP, ¿cómo califica usted esta afirmación?",
          "options": [
            "Es totalmente acertada, porque menos del 50% carece de significancia matemática.",
            "Es técnicamente falsa e ineficiente; la fórmula para poblaciones finitas demuestra que con un nivel de confianza del 95% y un margen de error del 5%, una muestra probabilística de aproximadamente 381 expedientes es suficiente para representar rigurosamente al universo de 40.000 procesos.",
            "Es válida únicamente si los expedientes están digitalizados en PDF."
          ],
          "correct": 1,
          "justification": "El tamaño de una muestra probabilística no depende de una proporción lineal fija de la población. La fórmula matemática para proporciones demuestra que una muestra de ~384 observaciones garantiza un 95% de nivel de confianza y 5% de error para poblaciones de miles o millones de registros."
        },
        {
          "id": "u12_q6",
          "difficulty": "Difícil",
          "type": "Juicio Situacional (SJT)",
          "case": "Usted es Profesional 3PU-15 en la DAEADI y debe evaluar si existe sesgo territorial en las sanciones preventivas impuestas por la PGN. Un grupo de analistas comparó los promedios de sanciones entre 5 regiones pero ignoró que una región tiene 10 veces más población que las otras, afirmando que 'la región con mayor número de sanciones es la más corrupta'.",
          "question": "¿Qué corrección metodológica y estadística debe implementar usted para que el análisis sea riguroso y comparable?",
          "options": [
            "Validar la conclusión porque los números absolutos reflejan la verdad sin necesidad de ajustes.",
            "Corregir el sesgo estandarizando los datos mediante tasas relativas per cápita (por ejemplo, número de sanciones por cada 100.000 habitantes o por cada 1.000 servidores públicos) y aplicar una prueba de hipótesis de diferencias de proporciones o ANOVA antes de emitir cualquier juicio comparativo.",
            "Borrar los datos de la región más grande para que queden iguales."
          ],
          "correct": 1,
          "justification": "Comparar números absolutos entre poblaciones con magnitudes dispares es un error metodológico elemental. La estadística aplicada exige relativizar los datos calculando tasas o índices per cápita y realizar pruebas de significancia estadística (ANOVA o Chi-cuadrado) para determinar si las diferencias son reales o producto del azar."
        },
        {
          "id": "u12_q7",
          "difficulty": "Difícil",
          "type": "Juicio Situacional (SJT)",
          "case": "En un informe para el Congreso, la DAEADI debe presentar el indicador de mora disciplinaria de las 32 procuradurías regionales. El Director sugiere excluir del informe a las 3 procuradurías regionales con peores indicadores alegando que 'esos datos son outliers que dañan el promedio nacional de la entidad'.",
          "question": "Conforme a los principios de integridad estadística del DANE y el Código General Disciplinario, ¿cuál debe ser su posición técnica?",
          "options": [
            "Excluir esas regiones del cálculo y no mencionarlas para que el promedio nacional se vea favorable.",
            "Explicar que la eliminación selectiva y arbitraria de datos desfavorables constituye manipulación y falseamiento de información pública; los valores extremos deben ser reportados transparentemente y explicados en notas técnicas metodológicas, mostrando tanto la media como la mediana para reflejar la realidad del servicio.",
            "Cambiar manualmente los números de esas procuradurías para que coincidan con la meta institucional."
          ],
          "correct": 1,
          "justification": "El aseguramiento de la calidad estadística prohíbe el 'maquillaje' o supresión deliberada de unidades de análisis para alterar los resultados de gestión. Los outliers deben investigarse y explicarse, pero jamás eliminarse a conveniencia para ocultar deficiencias en el servicio público."
        },
        {
          "id": "u12_q8",
          "difficulty": "Difícil",
          "type": "Juicio Situacional (SJT)",
          "case": "Para diseñar una muestra de auditoría sobre contratación en municipios PDET (Programas de Desarrollo con Enfoque Territorial), se observa que el 80% de los municipios son de 6ª categoría (muy pequeños) y el 20% son capitales de departamento que concentran el 75% de los recursos presupuestales.",
          "question": "¿Qué método de muestreo probabilístico es técnicamente imperativo utilizar en este escenario y por qué?",
          "options": [
            "Muestreo Aleatorio Simple, porque es el más fácil y barato de ejecutar en Excel.",
            "Muestreo Estratificado con asignación óptima o proporcional, dividiendo la población en dos estratos (municipios pequeños vs capitales) para asegurar que las capitales con alta concentración de presupuesto no queden subrepresentadas por azar en la muestra.",
            "Muestreo de conveniencia visitando solo los municipios con aeropuerto cercano."
          ],
          "correct": 1,
          "justification": "Cuando la población es marcadamente heterogénea y una fracción pequeña concentra la mayor parte del valor monetario o riesgo, el Muestreo Aleatorio Simple puede dejar por fuera a las entidades críticas. El Muestreo Estratificado garantiza que cada grupo de riesgo esté adecuadamente representado en la muestra final."
        }
      ]
    },
    {
      "id": 13,
      "number": "13",
      "title": "Analítica de Datos, Inteligencia de Negocios (BI) y ETL",
      "category": "Conocimientos Esenciales Específicos",
      "level": "Intermedio - Avanzado",
      "duration": "60 a 75 min",
      "summary": "Estudio integral de la ingeniería y analítica de datos en el Estado: Documento CONPES 3920 (Big Data), arquitectura de Data Warehouse corporativo, modelado dimensional de Ralph Kimball (Tablas de Hechos y Dimensiones, esquemas Estrella y Copo de Nieve, dimensiones lentamente cambiantes SCD Tipos 1, 2 y 3). Ciclo de vida de tuberías ETL vs. ELT, limpieza y calidad del dato (Data Cleansing), y tableros de Business Intelligence (Power BI/Tableau) para la toma de decisiones misionales en la PGN.",
      "normativa": [
        "Documento CONPES 3920 de 2018: Política Nacional de Explotación de Datos (Big Data).",
        "Marco de Gobernanza de Datos para el Estado Colombiano (MinTIC).",
        "Marco Internacional DAMA-DMBOK (Data Management Body of Knowledge).",
        "Guía Metodológica para la Construcción de Bodegas de Datos en el Sector Público (DNP).",
        "Resolución MinTIC sobre Interoperabilidad y Datos Abiertos."
      ],
      "officialInvestigations": [
        {
          "type": "Política Pública Nacional",
          "title": "Documento CONPES 3920 de 2018 - Política Nacional de Explotación de Datos",
          "description": "Establece las directrices estratégicas para que las entidades del Estado aprovechen los datos masivos como activo público para generar eficiencia, transparencia y valor social.",
          "relevance": "Marco programático supremo que guía la creación y funciones de la DAEADI."
        },
        {
          "type": "Estándar Global de Datos",
          "title": "Marco DAMA-DMBOK: Gestión del Data Warehouse y Business Intelligence",
          "description": "Cuerpo de conocimiento global que define la arquitectura de bodegas de datos, linaje, metadatos, calidad del dato y modelado dimensional.",
          "relevance": "Referencia técnica estándar evaluada en convocatorias de ingeniería de datos."
        },
        {
          "type": "Doctrina de Bodegas de Datos",
          "title": "Metodología de Modelado Dimensional (The Data Warehouse Toolkit - Ralph Kimball)",
          "description": "Enfoque de diseño 'Bottom-Up' basado en Data Marts temáticos, Tablas de Hechos aditivas y Dimensiones conformadas.",
          "relevance": "Es el paradigma más utilizado en las plataformas de Business Intelligence del Estado."
        },
        {
          "type": "Doctrina Corporativa de Datos",
          "title": "Arquitectura Corporativa de Información (Bill Inmon)",
          "description": "Enfoque 'Top-Down' basado en un repositorio central normalizado (3FN) a partir del cual se alimentan los data marts departamentales.",
          "relevance": "Permite contrastar enfoques de arquitectura de datos en pruebas técnicas."
        },
        {
          "type": "Guía Técnica de MinTIC",
          "title": "Guía de Aseguramiento de Calidad de Datos en Entidades Públicas",
          "description": "Estándares para medir las 6 dimensiones de calidad del dato: Exactitud, Completitud, Consistencia, Oportunidad, Unicidad y Validez.",
          "relevance": "Aplica al saneamiento previo de los datos del SIRI y SIM."
        },
        {
          "type": "Estándar de Visualización",
          "title": "Buenas Prácticas para el Diseño de Dashboards y Cuadros de Mando (Stephen Few)",
          "description": "Directrices para estructurar tableros de BI: diseño visual limpio, jerarquía visual, evitar gráficos 3D engañosos y optimización de latencia en DAX/SQL.",
          "relevance": "Evalúa el diseño de tableros directivos para el Despacho de la Procuradora."
        },
        {
          "type": "Manual de Pipelines de Datos",
          "title": "Patrones de Tuberías ETL vs. ELT en Ambientes Cloud Gubernamentales",
          "description": "Análisis comparativo: cuándo transformar antes de cargar (ETL tradicional en batch) vs. cargar datos brutos en Data Lakes para transformación elástica (ELT).",
          "relevance": "Criterio de arquitectura para la ingesta masiva de datos en la PGN."
        },
        {
          "type": "Marco de Gobierno de Datos",
          "title": "Guía de Linaje de Datos y Trazabilidad en el Ciclo de Vida Analítico (DAMA)",
          "description": "Metodología para documentar el recorrido de un dato desde su captura original en el SIM hasta su visualización en un dashboard ejecutivo.",
          "relevance": "Garantiza la reproducibilidad y defensa probatoria de los análisis periciales."
        }
      ],
      "deepModules": [
        {
          "title": "1. Arquitectura de Bodegas de Datos: Enfoques Kimball vs. Inmon",
          "content": "La consolidación de la analítica en la Procuraduría exige elegir la arquitectura adecuada:\n• Enfoque Ralph Kimball (Modelado Dimensional / Bottom-Up): Se diseñan Data Marts específicos orientados a procesos de negocio (ej. Data Mart de Inhabilidades, Data Mart de Quejas Electorales). Utiliza esquemas en estrella y copo de nieve con dimensiones conformadas compartidas. Es ágil, de rápida entrega de valor y altamente intuitivo para consultas en herramientas como Power BI.\n• Enfoque Bill Inmon (Corporate Information Factory / Top-Down): Construye primero un Enterprise Data Warehouse (EDW) masivo centralizado en Tercera Forma Normal (3FN). Requiere mayores tiempos y costos iniciales, pero garantiza una consistencia corporativa total.\n\nEn la DAEADI se adopta primordialmente el modelado dimensional de Kimball por su capacidad de integrarse directamente con modelos tabulares y responder a necesidades analíticas urgentes de vigilancia preventiva.",
          "keyRule": "En el modelo dimensional de Kimball, las dimensiones representan el contexto del negocio ('quién', 'dónde', 'cuándo') y las tablas de hechos contienen las métricas numéricas del proceso."
        },
        {
          "title": "2. Modelado Dimensional: Tablas de Hechos, Dimensiones y SCD",
          "content": "Componentes clave del diseño dimensional:\n• Tablas de Hechos (Fact Tables): Contienen métricas o medidas cuantitativas (ej. duración del proceso en días, monto del detrimento patrimonial, cantidad de quejas). Tienen llaves foráneas que apuntan a las dimensiones.\n• Tablas de Dimensiones: Almacenan los atributos descriptivos que contextualizan los hechos (Dim_Funcionario, Dim_Tiempo, Dim_Entidad_Vigilada, Dim_Tipo_Falta).\n• Esquema Estrella vs. Esquema Copo de Nieve (Snowflake): En la estrella las dimensiones están desnormalizadas (máxima velocidad de lectura); en el copo de nieve las dimensiones se normalizan parcialmente en subtablas (ahorro de espacio pero más JOINs lentos).\n• Dimensiones Lentamente Cambiantes (SCD - Slowly Changing Dimensions):\n  - SCD Tipo 1: Sobrescribe el valor antiguo (no guarda historia; útil para corregir erratas de escritura).\n  - SCD Tipo 2: Crea una nueva fila con identificador propio y rango de fechas de vigencia (`fecha_inicio`, `fecha_fin`, `activo = TRUE`). Esencial para auditoría pública, pues permite saber en qué municipio trabajaba un servidor público en la fecha exacta en que cometió la falta disciplinaria.\n  - SCD Tipo 3: Agrega una columna para almacenar el valor anterior.",
          "keyRule": "En sistemas de control disciplinario, las dimensiones de cargos y dependencias deben implementarse como SCD Tipo 2 para mantener la trazabilidad histórica de los traslados."
        },
        {
          "title": "3. Procesos de Extracción, Transformación y Carga: ETL vs. ELT",
          "content": "El flujo de ingesta de datos en la DAEADI:\n• ETL Tradicional (Extract - Transform - Load): Los datos se extraen de fuentes heterogéneas (SIM, SIRI, Registraduría, SECOP), se transforman y limpian en un servidor intermedio (Staging Area) y se cargan limpios en la bodega de datos. Ideal cuando se deben cumplir estrictas reglas de anonimización antes de ingresar a la base analítica.\n• ELT Moderno (Extract - Load - Transform): Los datos brutos se extraen y se cargan de inmediato en un lago de datos (Data Lake / BigQuery / Snowflake), realizando las transformaciones directamente en el motor analítico mediante SQL distribuido. Aprovecha el poder elástico de la nube para procesar petabytes de datos en segundos.\n• Calidad del Dato (Data Cleansing): Eliminación de registros duplicados, manejo de valores nulos, estandarización de nombres (remover tildes y caracteres especiales) y validación de reglas de integridad de negocio.",
          "keyRule": "Un proceso ETL en la DAEADI debe ser idempotente: si se ejecuta dos veces por error, no debe duplicar las sanciones en la bodega de datos."
        },
        {
          "title": "4. Business Intelligence, Data Governance y Tableros Directivos",
          "content": "La Inteligencia de Negocios (BI) transforma los datos del almacén en tableros ejecutivos interactivos para el Despacho del Procurador y la ciudadanía. Reglas de diseño:\n• Principio de Reducción de Ruido Visual (Eliminar 'Chartjunk'): Evitar fondos oscuros chillones, bordes innecesarios o gráficos circulares (pie charts) con más de 4 categorías; preferir gráficos de barras horizontales ordenadas y series de tiempo limpias.\n• Modelado DAX Eficiente: Crear medidas explícitas con DAX estructurado, evitando columnas calculadas innecesarias que saturan la memoria RAM del servidor de Power BI.\n• Gobernanza y Seguridad a Nivel de Fila (RLS - Row Level Security): Configurar RLS para que un Procurador Provincial de Nariño solo pueda visualizar las quejas de su jurisdicción, mientras que el Despacho central tenga acceso consolidado nacional.",
          "keyRule": "El diseño de tableros de BI en la PGN debe implementar Row Level Security (RLS) para preservar la reserva legal territorial de los expedientes en trámite."
        }
      ],
      "scenarioExample": "La DAEADI debe alimentar diariamente un tablero de alertas de contratación cruzando 3 millones de registros del SECOP II con el registro de sancionados del SIRI. El proceso ETL original fallaba constantemente porque corría en horario laboral sobre la base transaccional. El Profesional 3PU-15 rediseña la arquitectura: programa un pipeline ELT nocturno que extrae un delta incremental (solo contratos modificados en las últimas 24 horas), lo carga en un área de staging, ejecuta la desduplicación con SCD Tipo 2 y actualiza el modelo tabular en Power BI antes de las 6:00 a.m., garantizando datos frescos sin afectar la operación diaria.",
      "examTip": "DISTRACTOR TÍPICO DE EXAMEN: Afirmar que en un Data Warehouse se debe usar siempre SCD Tipo 1 para ahorrar espacio en disco. En entidades de control público, sobrescribir datos históricos destruye la evidencia procesal; la técnica obligatoria para preservar la historia de cargos es SCD Tipo 2.",
      "glossary": [
        {
          "term": "Data Warehouse",
          "definition": "Repositorio centralizado de datos integrados provenientes de múltiples fuentes heterogéneas, optimizado para consulta analítica y reporting."
        },
        {
          "term": "Tabla de Hechos",
          "definition": "Tabla central de un modelo dimensional que almacena las métricas numéricas del proceso y las claves foráneas hacia las dimensiones."
        },
        {
          "term": "Tabla de Dimensión",
          "definition": "Estructura que contiene los atributos contextuales cualitativos que permiten filtrar y agrupar los hechos analíticos."
        },
        {
          "term": "SCD Tipo 2",
          "definition": "Técnica de dimensión lentamente cambiante que preserva el historial completo creando un nuevo registro con fechas de vigencia."
        },
        {
          "term": "Esquema Estrella",
          "definition": "Diseño dimensional donde una tabla de hechos central se conecta directamente a dimensiones desnormalizadas, facilitando consultas rápidas."
        },
        {
          "term": "ETL",
          "definition": "Pipeline de datos que comprende la Extracción de fuentes transaccionales, Transformación y limpieza, y Carga en el almacén de datos."
        },
        {
          "term": "RLS",
          "definition": "Row Level Security (Seguridad a Nivel de Fila), filtro de seguridad que restringe la visualización de datos según el rol del usuario conectado."
        },
        {
          "term": "Idempotencia",
          "definition": "Propiedad de un proceso por la cual su ejecución repetida con las mismas entradas produce exactamente el mismo resultado sin generar duplicados."
        }
      ],
      "quiz": [
        {
          "id": "u13_q1",
          "difficulty": "Fácil",
          "type": "Conceptual / Normativa",
          "case": "En el marco del proceso de Conocimiento e Innovación, la DAEADI estructura un Data Mart para monitorear las quejas de contratación pública.",
          "question": "¿Cuál es la función principal de una 'Tabla de Hechos' (Fact Table) dentro del modelado dimensional de Ralph Kimball?",
          "options": [
            "Almacenar los nombres completos y biografías de los funcionarios públicos.",
            "Almacenar las medidas o métricas cuantitativas y numéricas del proceso de negocio, junto con las llaves foráneas que la conectan con las dimensiones.",
            "Guardar los archivos ejecutables del sistema operativo."
          ],
          "correct": 1,
          "justification": "En el modelado dimensional de Kimball, las tablas de hechos contienen las métricas numéricas de desempeño (duración, conteos, valores monetarios) vinculadas a las dimensiones descriptivas mediante claves foráneas."
        },
        {
          "id": "u13_q2",
          "difficulty": "Fácil",
          "type": "Conceptual / Normativa",
          "case": "El Gobierno Nacional expidió el Documento CONPES 3920 para transformar la gestión del Estado a través del aprovechamiento masivo de datos.",
          "question": "¿Cuál es el propósito central del CONPES 3920 en la administración pública colombiana?",
          "options": [
            "Establecer la Política Nacional de Explotación de Datos (Big Data) para generar valor social, económico y mayor transparencia mediante el uso estratégico de la analítica en el sector público.",
            "Prohibir el uso de computadores en dependencias judiciales del Estado.",
            "Obligar a todas las entidades a privatizar sus archivos documentales."
          ],
          "correct": 0,
          "justification": "El CONPES 3920 de 2018 consagra la Política Nacional de Explotación de Datos (Big Data), fijando las bases para que el Estado colombiano desarrolle capacidades analíticas avanzadas e infraestructura de datos para la toma de decisiones basada en evidencia."
        },
        {
          "id": "u13_q3",
          "difficulty": "Media",
          "type": "Inferenciación / Criterio Técnico",
          "case": "Un servidor público investigado fue trasladado de la Alcaldía de Pasto a la Gobernación de Nariño el 1 de junio de 2023. El equipo de analítica necesita que el Data Warehouse conserve el registro de que hasta mayo de 2023 pertenecía a la Alcaldía y desde junio pertenece a la Gobernación, para asociar correctamente una falta cometida en abril.",
          "question": "¿Qué técnica de Dimensión Lentamente Cambiante (SCD) debe implementarse en la tabla Dim_Funcionario?",
          "options": [
            "SCD Tipo 1, sobrescribiendo la entidad anterior por la nueva para no consumir espacio.",
            "SCD Tipo 2, insertando una nueva fila para el funcionario con campos de fecha de vigencia (`fecha_inicio`, `fecha_fin`) y un indicador de estado activo, preservando el histórico de asignación intacto.",
            "SCD Tipo 0, bloqueando cualquier cambio futuro en la base de datos."
          ],
          "correct": 1,
          "justification": "SCD Tipo 2 es el método estándar para mantener la historia completa de cambios en dimensiones descriptivas. Permite asociar transacciones históricas al contexto exacto en que ocurrieron mediante rangos de fechas de vigencia."
        },
        {
          "id": "u13_q4",
          "difficulty": "Media",
          "type": "Inferenciación / Criterio Técnico",
          "case": "Una tubería de datos ETL en la DAEADI extrae diariamente 500.000 registros de contratos desde el SECOP II. Por una caída de conexión a internet a mitad del proceso, la tubería se relanza automáticamente, pero como no tenía control de duplicados, inserta nuevamente los mismos 500.000 registros, duplicando el valor total de la contratación.",
          "question": "¿Qué principio técnico fundamental de ingeniería de datos se incumplió en el diseño de esta tubería?",
          "options": [
            "El principio de neutralidad tecnológica.",
            "El principio de Idempotencia, el cual exige que la ejecución repetida de un pipeline con los mismos datos de entrada produzca siempre el mismo resultado sin generar duplicidades.",
            "El principio de reciprocidad presupuestal."
          ],
          "correct": 1,
          "justification": "La idempotencia es una propiedad crítica en ingeniería de pipelines de datos. Si una carga se interrumpe y se reinicia, el proceso debe borrar o actualizar la partición correspondiente en lugar de insertar duplicados ciegamente."
        },
        {
          "id": "u13_q5",
          "difficulty": "Media",
          "type": "Inferenciación / Criterio Técnico",
          "case": "En un tablero de Power BI diseñado para los Procuradores Provinciales, se requiere que cada procurador solo pueda ver las quejas y procesos correspondientes a su propio departamento, mientras que la Procuradora General debe visualizar el total nacional consolidado.",
          "question": "¿Cuál es la funcionalidad nativa de Business Intelligence que debe configurarse para resolver este requerimiento de seguridad?",
          "options": [
            "Crear 32 archivos de Power BI totalmente independientes y enviarlos por correo electrónico cada semana.",
            "Implementar Seguridad a Nivel de Fila (RLS - Row Level Security) en el modelo de datos, vinculando los roles de usuario a filtros DAX sobre la dimensión geográfica.",
            "Ocultar las columnas de departamento para que nadie sepa de dónde son los procesos."
          ],
          "correct": 1,
          "justification": "Row Level Security (RLS) permite utilizar un único reporte o tablero central y aplicar filtros dinámicos basados en la identidad del usuario autenticado, garantizando que cada servidor solo acceda a los datos autorizados para su jurisdicción."
        },
        {
          "id": "u13_q6",
          "difficulty": "Difícil",
          "type": "Juicio Situacional (SJT)",
          "case": "Usted es Profesional 3PU-15 en la DAEADI y debe evaluar la calidad de un set de datos de 200.000 quejas disciplinarias antes de cargarlas en el modelo predictivo de alertas. El análisis revela que el campo 'fecha_radicacion' tiene un 15% de valores nulos (vacíos) y que en el campo 'tipo_falta' existen 12 variaciones de texto libre para el mismo concepto (ej. 'Contratacion', 'CONTRATOS', 'contrat.', 'ley 80').",
          "question": "Conforme a las dimensiones de calidad del dato de DAMA-DMBOK y MinTIC, ¿cuál es el plan de acción técnico que debe ejecutar antes de la ingesta?",
          "options": [
            "Cargar los datos de inmediato en el modelo predictivo sin modificar nada, pues la inteligencia artificial adivina automáticamente las variaciones.",
            "Ejecutar una fase de Limpieza y Estandarización de Datos (Data Cleansing) en el área de staging: aplicar reglas de imputación o validación cruzada con los expedientes fuente para los nulos de fecha, y mapear mediante un diccionario de sinónimos canónicos las 12 variantes de texto a un valor categórico normalizado único.",
            "Borrar los 200.000 registros para evitar dolores de cabeza técnicos."
          ],
          "correct": 1,
          "justification": "La premisa fundamental de la analítica es 'Garbage In, Garbage Out'. Datos incompletos (nulos en fechas) y no consistentes (variantes ortográficas) arruinan cualquier modelo analítico. La fase de staging debe estandarizar los valores contra catálogos canónicos antes de alimentar los almacenes de datos."
        },
        {
          "id": "u13_q7",
          "difficulty": "Difícil",
          "type": "Juicio Situacional (SJT)",
          "case": "Un analista junior presenta un tablero de control para el Despacho del Viceprocurador con gráficos circulares en 3D con 18 sectores de colores brillantes, animaciones intermitentes y fondos oscuros con marcas de agua complejas, lo que hace casi imposible leer las cifras numéricas y ralentiza la carga del reporte.",
          "question": "Frente a las buenas prácticas de diseño de visualizaciones de datos y comunicación ejecutiva (Stephen Few), ¿cuál es su corrección metodológica?",
          "options": [
            "Felicitar al analista porque los efectos 3D impresionan visualmente a los altos directivos.",
            "Reestructurar el tablero eliminando el 'chartjunk' (elementos decorativos superfluos que distraen y confunden): sustituir los gráficos circulares saturados por gráficos de barras horizontales ordenadas, utilizar una paleta cromática sobria y accesible con alto contraste, y enfocar el diseño en las métricas clave de decisión institucional.",
            "Imprimir el reporte en blanco y negro para no usar la pantalla del computador."
          ],
          "correct": 1,
          "justification": "Los principios de visualización de Stephen Few y Edward Tufte exigen maximizar la relación 'data-ink' (tinta que representa datos reales) y suprimir el 'chartjunk'. Los gráficos 3D y las tortas saturadas distorsionan la percepción geométrica y entorpecen la toma de decisiones directivas."
        },
        {
          "id": "u13_q8",
          "difficulty": "Difícil",
          "type": "Juicio Situacional (SJT)",
          "case": "La DAEADI planea integrar las bases de datos de la Registraduría, el Consejo de Estado y el SIRI para un modelo de alerta temprana. El líder técnico sugiere conectar las herramientas de Business Intelligence directamente a las bases transaccionales de producción (OLTP) de esas tres entidades para 'no gastar dinero en una bodega de datos'.",
          "question": "¿Cuál es el grave riesgo técnico y operativo que usted como Profesional 3PU-15 debe advertir?",
          "options": [
            "No existe ningún riesgo y es la práctica recomendada internacionalmente.",
            "Conectar consultas analíticas masivas y complejas directamente sobre bases transaccionales de producción puede provocar bloqueos de tablas (Table Locks), saturación de memoria RAM y degradación del servicio operativo en tiempo real de esas entidades, arriesgando la caída de la radicación ciudadana; se debe extraer la data hacia una bodega de datos analítica (OLAP) desacoplada.",
            "El único riesgo es que la pantalla del computador cambie de color."
          ],
          "correct": 1,
          "justification": "La separación arquitectónica entre sistemas transaccionales (OLTP) y sistemas analíticos (OLAP) es un principio no negociable. Las consultas analíticas de agregación masiva consumen recursos de I/O y pueden bloquear las transacciones operativas diarias si se ejecutan directamente en producción."
        }
      ]
    },
    {
      "id": 14,
      "number": "14",
      "title": "Seguridad Informática, Ciberseguridad y Habeas Data (ISO 27001 y Ley 1581)",
      "category": "Conocimientos Esenciales Específicos",
      "level": "Intermedio - Avanzado",
      "duration": "60 a 75 min",
      "summary": "Estudio integral de la Tríada de Seguridad (Confidencialidad, Integridad y Disponibilidad) bajo el estándar NTC-ISO/IEC 27001:2022 y el Modelo de Seguridad y Privacidad de la Información (MSPI) del MinTIC. Régimen General de Protección de Datos Personales (Ley Estatutaria 1581 de 2012 y Decreto 1377 de 2013): clasificación legal de datos (Públicos, Semiprivados, Privados y Sensibles), deberes del Responsable y Encargado, protocolo de notificación de brechas de seguridad ante el ColCERT y la SIC en 15 días, y régimen penal de Delitos Informáticos (Ley 1273 de 2009).",
      "normativa": [
        "Norma Técnica NTC-ISO/IEC 27001:2022: Sistemas de Gestión de Seguridad de la Información (SGSI).",
        "Ley Estatutaria 1581 de 2012: Régimen General de Protección de Datos Personales (Habeas Data).",
        "Decreto Reglamentario 1377 de 2013: Reglamentación parcial de la Ley 1581 de 2012.",
        "Ley 1273 de 2009: Por medio de la cual se crea y tipifica el bien jurídico de la protección de la información y de los datos (Delitos Informáticos en el Código Penal).",
        "Modelo de Seguridad y Privacidad de la Información (MSPI - MinTIC).",
        "Circulares de la Superintendencia de Industria y Comercio (SIC) sobre el Registro Nacional de Bases de Datos (RNBD)."
      ],
      "officialInvestigations": [
        {
          "type": "Estándar Internacional",
          "title": "NTC-ISO/IEC 27001:2022 - Sistemas de Gestión de Seguridad de la Información",
          "description": "Especifica los requisitos para establecer, implementar, mantener y mejorar continuamente un SGSI, incorporando los 93 controles de seguridad actualizados en 4 temas (Organizacionales, de Personas, Físicos y Tecnológicos).",
          "relevance": "Marco de seguridad adoptado por la PGN para blindar sus activos de información."
        },
        {
          "type": "Ley Estatutaria",
          "title": "Ley Estatutaria 1581 de 2012 - Estatuto General de Protección de Datos Personales",
          "description": "Desarrolla el derecho constitucional de Habeas Data (Art. 15 C.P.). Regula el tratamiento de datos personales por entidades públicas y privadas, consagrando los principios de legalidad, finalidad, libertad, veracidad y seguridad.",
          "relevance": "Norma marco que limita el uso de datos en cruces masivos de la DAEADI."
        },
        {
          "type": "Código Penal",
          "title": "Ley 1273 de 2009 - Delitos Informáticos en el Código Penal Colombiano",
          "description": "Tipifica conductas punibles: Acceso abusivo a un sistema informático (Art. 269A), Daño informático (Art. 269D), Uso de software malicioso (Art. 269E) y Violación de datos personales (Art. 269F).",
          "relevance": "Establece las sanciones penales para servidores que vulneren o filtren bases de datos misionales."
        },
        {
          "type": "Guía Oficial de Ciberseguridad",
          "title": "Modelo de Seguridad y Privacidad de la Información - MSPI (MinTIC)",
          "description": "Marco sectorial público que articula la ISO 27001 con las directrices de ciberseguridad nacional, gestión de incidentes y continuidad del negocio en el Estado.",
          "relevance": "Políticas evaluadas directamente en el componente de tecnologías de la convocatoria."
        },
        {
          "type": "Reglamentación de Brechas",
          "title": "Circular Externa 002 de la SIC - Notificación de Incidentes de Seguridad",
          "description": "Instrucciones de la Delegatura de Protección de Datos sobre el deber legal de reportar cualquier brecha o incidente de seguridad que comprometa datos personales en un plazo máximo de 15 días hábiles.",
          "relevance": "Protocolo de cumplimiento perentorio ante ataques o fugas de datos en la PGN."
        },
        {
          "type": "Jurisprudencia Constitucional Clave",
          "title": "Sentencia C-748 de 2011 - Revisión Constitucional de la Ley de Habeas Data",
          "description": "Examina la tipología de datos y ratifica que las bases de datos de antecedentes disciplinarios y sancionatorios gozan de un régimen legal estricto para evitar discriminaciones indebidas.",
          "relevance": "Base dogmática del derecho de supresión y actualización de sanciones en el SIRI."
        },
        {
          "type": "Guía Técnica de Ciberseguridad",
          "title": "Guía para la Gestión y Notificación de Incidentes de Ciberseguridad (ColCERT)",
          "description": "Protocolos de respuesta y mitigación coordinada con el Equipo de Respuesta a Emergencias Cibernéticas de Colombia ante ataques de ransomware o denegación de servicio.",
          "relevance": "Guía operativa ante incidentes en los servidores centrales de la PGN."
        },
        {
          "type": "Manual Interno PGN",
          "title": "Política General de Seguridad de la Información de la Procuraduría",
          "description": "Directrices institucionales sobre control de acceso basado en roles (RBAC), uso de cifrado, contraseñas seguras, política de escritorio limpio y clasificación de la información.",
          "relevance": "Estatuto ético y técnico de obligado cumplimiento para el 3PU-15."
        }
      ],
      "deepModules": [
        {
          "title": "1. La Tríada de Seguridad de la Información (CID) y los Controles ISO 27001:2022",
          "content": "La seguridad de la información en la DAEADI se erige sobre tres pilares:\n• Confidencialidad: Garantizar que la información sea accesible únicamente por las personas autorizadas según su rol y necesidad de conocer (Need to Know).\n• Integridad: Salvaguardar la exactitud, completitud y veracidad de los datos y sus métodos de procesamiento, impidiendo modificaciones no autorizadas o accidentales.\n• Disponibilidad: Asegurar que los usuarios autorizados tengan acceso oportuno a la información y a los activos asociados cuando lo requieran para el ejercicio de sus funciones.\n\nControles Clave de ISO 27001:2022 aplicados a la PGN:\n- Control de Acceso Basado en Roles (RBAC): Asignación de permisos por función estricta.\n- Cifrado Robusto: Cifrado en reposo (AES-256) para discos de bases de datos y cifrado en tránsito (TLS 1.3) para todas las conexiones web y APIs misionales.\n- Autenticación Multifactor (MFA): Obligatoria para accesos remotos y cuentas administrativas privilegiadas.",
          "keyRule": "Un sistema seguro no es el que bloquea todo acceso, sino el que garantiza Confidencialidad, Integridad y Disponibilidad de forma balanceada y auditable."
        },
        {
          "title": "2. Clasificación Legal de Datos Personales (Ley Estatutaria 1581 de 2012)",
          "content": "La ley clasifica la información personal en cuatro categorías con regímenes jurídicos diferenciados:\n1. Dato Público: Es aquel que la ley o la Constitución califica como tal y que no requiere autorización previa de su titular para ser recolectado y publicado. Incluye el estado civil de las personas, su calidad de servidor público y las sentencias judiciales ejecutoriadas no sujetas a reserva.\n2. Dato Semiprivado: No tiene naturaleza íntima, pero su conocimiento interesa tanto al titular como a un sector específico (ej. historial crediticio, datos comerciales).\n3. Dato Privado: Por su naturaleza íntima y reservada, solo interesa a su titular (ej. libros de comerciantes, documentos privados, correspondencia personal).\n4. Dato Sensible (Art. 5): Afecta la intimidad del titular o su uso indebido puede generar discriminación (origen racial o étnico, orientación política, convicciones religiosas o filosóficas, pertenencia a sindicatos, datos relativos a la salud, vida sexual y datos biométricos). Su tratamiento está PROHIBIDO por regla general, salvo excepciones expresas de ley.",
          "keyRule": "Los antecedentes disciplinarios de un servidor público son datos públicos una vez ejecutoriada la sanción; las indagaciones preliminares en trámite son datos bajo reserva legal."
        },
        {
          "title": "3. Protocolo de Notificación de Brechas de Seguridad (Incidentes ColCERT y SIC)",
          "content": "Frente a un incidente de seguridad (ej. filtración de bases de datos, ataque de ransomware o acceso indebido a servidores), la PGN debe activar el protocolo formal de respuesta:\n1. Contención y Mitigación Inmediata: Aislar los sistemas comprometidos para evitar la propagación del malware, preservando la memoria volátil (RAM) y los logs para análisis forense.\n2. Notificación Legal Obligatoria: La Circular 002 de la Superintendencia de Industria y Comercio (SIC) y la Ley 1581 imponen el deber perentorio de reportar formalmente a la autoridad de protección de datos el incidente dentro de un término máximo de quince (15) días hábiles contados a partir de su detección.\n3. Coordinación con ColCERT: Reporte inmediato al Centro Cibernético Nacional para emitir alertas de indicadores de compromiso (IoC) al resto del Estado.\n4. Comunicación a los Titulares: Si la brecha compromete datos sensibles o puede ocasionar perjuicios graves a ciudadanos, se les debe informar con prontitud.",
          "keyRule": "Ocultar una brecha de seguridad de datos personales es una falta sancionable por la SIC con multas de hasta 2.000 SMMLV y constituye falta disciplinaria grave para los servidores involucrados."
        },
        {
          "title": "4. Delitos Informáticos en el Código Penal Colombiano (Ley 1273 de 2009)",
          "content": "El Código Penal tipifica delitos con penas agravadas cuando son cometidos por servidores públicos o sobre sistemas estatales:\n• Art. 269A (Acceso Abusivo a un Sistema Informático): Acceder a todo o parte de un sistema informático protegido o mantenerse dentro de él contra la voluntad de quien tiene derecho a excluirlo.\n• Art. 269C (Interceptación de Datos Informáticos): Interceptar datos sin orden judicial previa.\n• Art. 269D (Daño Informático): Borrar, dañar, deteriorar o alterar datos informáticos o mensajes de datos en sistemas públicos.\n• Art. 269F (Violación de Datos Personales): Sustraer, obtener, divulgar, emplear o modificar datos personales para provecho propio o de un tercero sin autorización legal.\n• Agravante Punitivo (Art. 269H): La pena se aumentará de la mitad a las tres cuartas partes cuando la conducta sea cometida por un servidor público en ejercicio de sus funciones o sobre redes del Estado.",
          "keyRule": "Un servidor de la DAEADI que descargue datos confidenciales del SIRI a una memoria USB personal incurre en el delito agravado del Art. 269F del Código Penal."
        }
      ],
      "scenarioExample": "Un ataque de phishing corporativo compromete las credenciales de un funcionario de la DAEADI y un tercero descarga un lote con 10.000 cédulas y direcciones de denunciantes de corrupción. El Profesional 3PU-15 a cargo activa de inmediato el plan de respuesta: revoca las credenciales comprometidas, aísla la IP atacante en el firewall, preserva las trazas forenses en formato inalterable (hash SHA-256) y redacta el informe técnico de notificación a la SIC y al ColCERT dentro del plazo legal de 15 días hábiles, coordinando las medidas de protección para los denunciantes.",
      "examTip": "DISTRACTOR FRECUENTE EN SEGURIDAD: En preguntas sobre brechas de datos, la opción trampa sugiere 'no avisar a la SIC para no alarmar a los medios' o 'tienen un plazo de 6 meses para notificar'. La norma es tajante: el reporte ante la SIC debe hacerse en máximo 15 días hábiles siguientes al momento en que se tenga conocimiento.",
      "glossary": [
        {
          "term": "SGSI",
          "definition": "Sistema de Gestión de Seguridad de la Información, marco de políticas, procesos y controles basados en ISO 27001 para proteger activos de información."
        },
        {
          "term": "Habeas Data",
          "definition": "Derecho fundamental constitucional que faculta a los ciudadanos a conocer, actualizar, rectificar y suprimir sus datos en bases públicas o privadas."
        },
        {
          "term": "Dato Sensible",
          "definition": "Dato personal íntimo cuyo tratamiento está restringido por ley por su potencial de generar discriminación (salud, biometría, ideología)."
        },
        {
          "term": "ColCERT",
          "definition": "Equipo de Respuesta a Emergencias Cibernéticas del Gobierno de Colombia, encargado de coordinar la defensa contra amenazas a la ciberseguridad nacional."
        },
        {
          "term": "Acceso Abusivo",
          "definition": "Delito informático (Art. 269A C.P.) consistente en ingresar sin autorización a un sistema de cómputo protegido por medidas de seguridad."
        },
        {
          "term": "RBAC",
          "definition": "Role-Based Access Control, mecanismo de control que restringe el acceso al sistema informático únicamente a los privilegios autorizados para el rol específico."
        },
        {
          "term": "Tríada CID",
          "definition": "Los tres objetivos esenciales de la seguridad de la información: Confidencialidad, Integridad y Disponibilidad."
        },
        {
          "term": "Cifrado en Reposo",
          "definition": "Protección criptográfica aplicada a los datos almacenados en discos duros y bases de datos para impedir su lectura en caso de robo físico de los medios."
        }
      ],
      "quiz": [
        {
          "id": "u14_q1",
          "difficulty": "Fácil",
          "type": "Conceptual / Normativa",
          "case": "En la DAEADI se gestionan diferentes tipos de datos personales de ciudadanos en el marco de sus funciones misionales.",
          "question": "De acuerdo con la Ley Estatutaria 1581 de 2012, ¿cómo se clasifican legalmente los datos relativos a la salud, huellas dactilares, reconocimiento facial y convicciones políticas o religiosas?",
          "options": [
            "Datos públicos de libre difusión obligatoria.",
            "Datos sensibles, cuyo tratamiento por regla general está prohibido salvo excepciones expresas contempladas en la ley.",
            "Datos semiprivados comerciales."
          ],
          "correct": 1,
          "justification": "El Art. 5 de la Ley 1581 de 2012 define como datos sensibles aquellos que afectan la intimidad del titular o cuyo uso indebido puede generar discriminación (datos biométricos, salud, orientación sexual, política o religiosa), prohibiendo su tratamiento salvo excepciones legales."
        },
        {
          "id": "u14_q2",
          "difficulty": "Fácil",
          "type": "Conceptual / Normativa",
          "case": "Un servidor público utiliza sus claves institucionales para ingresar sin autorización al servidor de expedientes disciplinarios de un despacho ajeno y copia archivos reservados para venderlos a un particular.",
          "question": "¿En qué delito tipificado en el Código Penal colombiano (Ley 1273 de 2009) incurre principalmente este funcionario?",
          "options": [
            "Falso testimonio procesal.",
            "Violación de datos personales (Art. 269F) y acceso abusivo a un sistema informático (Art. 269A), agravado por su condición de servidor público (Art. 269H).",
            "Falta administrativa sin relevancia penal."
          ],
          "correct": 1,
          "justification": "La Ley 1273 de 2009 tipifica la obtención, sustracción o divulgación no autorizada de datos personales protegidos (Art. 269F) y el acceso abusivo a sistemas protegidos (Art. 269A), con penas agravadas de prisión cuando el autor es un servidor público en ejercicio de sus funciones."
        },
        {
          "id": "u14_q3",
          "difficulty": "Media",
          "type": "Inferenciación / Criterio Técnico",
          "case": "La base de datos del SIRI sufre un incidente de seguridad cibernética en el que se detecta la sustracción de un backup con antecedentes disciplinarios históricos de funcionarios públicos.",
          "question": "De conformidad con la reglamentación de la Superintendencia de Industria y Comercio (Circular 002) y la Ley 1581 de 2012, ¿cuál es el plazo legal máximo que tiene la Procuraduría para notificar formalmente esta brecha de seguridad a la autoridad de protección de datos?",
          "options": [
            "No tiene obligación de reportar si el incidente se soluciona internamente en 24 horas.",
            "Dentro de los quince (15) días hábiles siguientes al momento en que se detectó la violación de seguridad o se tuvo conocimiento de ella.",
            "Un plazo de 6 meses calendario."
          ],
          "correct": 1,
          "justification": "La normativa de la SIC y los estándares del RNBD imponen a los responsables del tratamiento de datos personales el deber ineludible de reportar todo incidente o brecha de seguridad a la Delegatura de Protección de Datos Personales en un término no mayor a 15 días hábiles."
        },
        {
          "id": "u14_q4",
          "difficulty": "Media",
          "type": "Inferenciación / Criterio Técnico",
          "case": "En una procuraduría delegada, todos los funcionarios de un despacho utilizan la misma cuenta genérica de usuario `usuario_despacho` con contraseña compartida `pgn12345` para acceder y registrar actuaciones en el sistema SIM.",
          "question": "Frente al estándar ISO/IEC 27001:2022 y los principios de seguridad de la información, ¿qué vulnerabilidad crítica se materializa con esta práctica?",
          "options": [
            "Ninguna, porque las cuentas compartidas fomentan la solidaridad laboral entre funcionarios.",
            "Destruye el principio de No Repudio y la trazabilidad de auditoría, imposibilitando identificar de manera individual e inequívoca qué funcionario específico creó, modificó o borró una actuación procesal en caso de fraude o error.",
            "Hace que los discos duros se desgasten físicamente el doble de rápido."
          ],
          "correct": 1,
          "justification": "La norma ISO 27001 y las políticas de ciberseguridad exigen cuentas individuales y exclusivas. Las cuentas compartidas impiden la trazabilidad e imputación de autoría, violando el principio de no repudio fundamental en auditorías forenses del Estado."
        },
        {
          "id": "u14_q5",
          "difficulty": "Media",
          "type": "Inferenciación / Criterio Técnico",
          "case": "Un ciudadano solicita el derecho al olvido y supresión de un antecedente disciplinario en el SIRI, argumentando que la sanción le perjudica para encontrar empleo privado y que la Ley 1581 de 2012 le da derecho a borrar sus datos personales en cualquier momento.",
          "question": "¿Cómo debe ponderar la Procuraduría esta petición frente a los límites del Habeas Data en el sector público?",
          "options": [
            "Borrar la sanción de inmediato, porque la voluntad del ciudadano prima sobre cualquier registro del Estado.",
            "Revisar si la sanción se encuentra legalmente extinguida o cumplida conforme al tiempo de inhabilidad fijado en el fallo disciplinario; si la sanción está vigente, el derecho de supresión no procede frente a registros públicos de control indispensables para el cumplimiento de deberes constitucionales del Estado.",
            "Imponer una multa al ciudadano por solicitar la eliminación de un dato público."
          ],
          "correct": 1,
          "justification": "La jurisprudencia constitucional (Sentencia C-748 de 2011) ha establecido que el derecho de supresión de datos no es absoluto. No procede cuando existe un deber legal o constitucional de mantener la información en bases de control público mientras la sanción o inhabilidad esté vigente."
        },
        {
          "id": "u14_q6",
          "difficulty": "Difícil",
          "type": "Juicio Situacional (SJT)",
          "case": "Usted es Profesional 3PU-15 en la DAEADI y detecta que un servidor web de pruebas conectado a internet contiene una copia exacta y desprotegida de la base de datos de quejas ciudadanas con datos sensibles de testigos protegidos. Su superior le dice: 'No apagues el servidor porque el contratista está trabajando en él y se enojará'.",
          "question": "Frente a los deberes del Oficial de Seguridad de la Información y el riesgo inminente de filtración masiva, ¿cuál debe ser su determinación?",
          "options": [
            "Hacer caso al superior y dejar el servidor expuesto a internet hasta que el contratista termine el mes entrante.",
            "Aislar inmediatamente el servidor de internet (desconectarlo de la red pública o bloquear puertos en el firewall), reemplazar de forma perentoria la base de datos real por un set de datos anonimizado o sintético para las pruebas del contratista y radicar un informe técnico preventivo de incidente ante el Oficial de Seguridad de la Información (CISO) de la entidad.",
            "Filtrar la base de datos a los medios para evidenciar la negligencia del contratista."
          ],
          "correct": 1,
          "justification": "La norma ISO 27001 y las guías de ciberseguridad prohíben taxativamente el uso de datos personales reales de producción en ambientes de prueba o desarrollo expuestos a internet. El deber del profesional es mitigar el riesgo de fuga aislando el sistema y sustituyendo la data real por datos sintéticos."
        },
        {
          "id": "u14_q7",
          "difficulty": "Difícil",
          "type": "Juicio Situacional (SJT)",
          "case": "Una firma privada de reclutamiento laboral solicita formalmente a la DAEADI acceso directo mediante API a la base de datos de sanciones del SIRI para consultar en lote las hojas de vida de todos los aspirantes a empleos en el sector privado.",
          "question": "Conforme a la Ley 1581 de 2012 y el principio de circulación restringida de datos personales, ¿cuál es el dictamen legal y técnico de la DAEADI?",
          "options": [
            "Otorgar acceso total a la API de inmediato a cambio del pago de una tarifa por consulta.",
            "Aclarar que los ciudadanos y empresas privadas solo tienen acceso al Certificado Ordinario de antecedentes disciplinarios a través de la consulta pública individual individualizada prevista en la ley, pero no tienen derecho a obtener volcados masivos ni accesos irrestrictos por API a la totalidad de la base de datos de ciudadanos, amparando el principio de circulación restringida y seguridad.",
            "Cerrar la consulta pública del SIRI para todo el mundo."
          ],
          "correct": 1,
          "justification": "El principio de circulación restringida de la Ley 1581 de 2012 impide que empresas privadas accedan masivamente a repositorios de antecedentes del Estado sin autorización legal expresa. La consulta ciudadana del SIRI es individual y gratuita, pero no autoriza la entrega masiva de bases de datos a corporaciones de reclutamiento."
        },
        {
          "id": "u14_q8",
          "difficulty": "Difícil",
          "type": "Juicio Situacional (SJT)",
          "case": "Un funcionario de la DAEADI recibe un correo electrónico que aparenta ser del Despacho de la Procuradora General solicitando con urgencia que haga clic en un enlace para 'actualizar las credenciales del servidor central'. El funcionario duda de su legitimidad.",
          "question": "Conforme a las buenas prácticas de ciberseguridad del MSPI, ¿cuál es el protocolo que debe seguir el servidor?",
          "options": [
            "Hacer clic en el enlace inmediatamente para no desobedecer una orden de su máxima autoridad.",
            "No hacer clic en ningún enlace ni descargar adjuntos, verificar el encabezado real del remitente, reportar de inmediato el correo como presunto ataque de 'Phishing' a la Oficina de Tecnologías y al CSIRT interno para su análisis y bloqueo a nivel de proxy perimetral.",
            "Reenviar el correo a todos los compañeros de la entidad para advertirles por mensaje masivo."
          ],
          "correct": 1,
          "justification": "El phishing es el principal vector de ataque cibernético. Ante sospechas de suplantación de identidad institucional, las directrices del MSPI prohíben interactuar con el enlace y mandan reportar inmediatamente a los equipos de seguridad (CSIRT) para bloquear el dominio malicioso antes de que otros usuarios caigan."
        }
      ]
    },
    {
      "id": 15,
      "number": "15",
      "title": "Comunicación Organizacional y Medios Audiovisuales",
      "category": "Conocimientos Esenciales Específicos",
      "level": "Intermedio",
      "duration": "45 a 60 min",
      "summary": "Estudio de las estrategias de comunicación organizacional en el sector público. Metodología de Data Storytelling y visualización efectiva de información para audiencias directivas y no técnicas. Estándares internacionales de accesibilidad web (WCAG 2.1 nivel AA y Resolución MinTIC 1519 de 2020), lenguaje claro y protocolos de comunicación en situaciones de crisis institucional.",
      "normativa": [
        "Resolución MinTIC 1519 de 2020: Estándares de Accesibilidad Web para Entidades Públicas (WCAG 2.1 AA).",
        "Guía de Lenguaje Claro para el Estado Colombiano (DNP / DAFP).",
        "Estrategia de Comunicación Institucional y Relacionamiento con Ciudadanos de la PGN.",
        "Estándar Internacional ISO 9241-11 (Ergonomía de la Interacción Humano-Sistema: Usabilidad).",
        "Directrices de Transparencia Activa y Proactiva (Ley 1712 de 2014)."
      ],
      "officialInvestigations": [
        {
          "type": "Resolución MinTIC Obligatoria",
          "title": "Resolución 1519 de 2020 - Estándares de Accesibilidad Web y Portales Estatales",
          "description": "Obliga a las entidades públicas a cumplir con las pautas de accesibilidad WCAG 2.1 nivel AA: textos alternativos en imágenes, contraste adecuado, navegabilidad por teclado y subtítulos en material audiovisual para personas en condición de discapacidad.",
          "relevance": "Marco técnico vinculante para todos los tableros y portales web de la DAEADI."
        },
        {
          "type": "Guía Oficial de Política Pública",
          "title": "Guía de Lenguaje Claro: La Comunicación Simple y Comprensible en el Estado",
          "description": "Metodología del DNP para simplificar resoluciones, autos y conceptos técnicos sin sacrificar precisión legal, evitando la jerga procesal barroca.",
          "relevance": "Criterio evaluado para medir la claridad expositiva del Profesional 3PU-15."
        },
        {
          "type": "Doctrina de Comunicación con Datos",
          "title": "Storytelling with Data: A Data Visualization Guide for Business Professionals (Cole Nussbaumer)",
          "description": "Texto rector sobre cómo estructurar una narrativa de datos: contexto, audiencia, selección del gráfico adecuado, eliminación del desorden y dirección de la atención con color.",
          "relevance": "Fundamento teórico de los reportes analíticos de la DAEADI."
        },
        {
          "type": "Manual Institucional PGN",
          "title": "Manual de Identidad Visual y Comunicación Estratégica de la Procuraduría",
          "description": "Pautas sobre tipografía oficial, paletas de colores corporativas, uso del escudo de la Nación y manejo de declaraciones ante medios de prensa.",
          "relevance": "Norma interna de imagen institucional que rige las presentaciones de la entidad."
        },
        {
          "type": "Doctrina de Usabilidad",
          "title": "Principios de Diseño Visual y Usabilidad en Medios Digitales (Nielsen Norman Group)",
          "description": "Heurísticas de usabilidad: visibilidad del estado del sistema, correspondencia con el mundo real, control del usuario y prevención de errores.",
          "relevance": "Aplica al diseño de interfaces amigables para funcionarios territoriales."
        },
        {
          "type": "Protocolo de Gestión de Crisis",
          "title": "Manual de Comunicación en Situaciones de Crisis Reputacional (Función Pública)",
          "description": "Flujo de vocería única, emisión de comunicados de prensa en menos de 2 horas ante desinformación y protocolos de contención informativa.",
          "relevance": "Directrices ante filtraciones erróneas de fallos disciplinarios a la prensa."
        },
        {
          "type": "Estándar de Accesibilidad",
          "title": "Pautas de Accesibilidad para el Contenido Web - WCAG 2.1 (W3C)",
          "description": "Estándar internacional basado en 4 principios: Perceptible, Operable, Comprensible y Robusto (POUR).",
          "relevance": "Base técnica de la Resolución 1519 evaluada en los concursos públicos."
        },
        {
          "type": "Guía de Datos Abiertos",
          "title": "Guía de Visualización de Datos Abiertos para la Rendición de Cuentas (MinTIC)",
          "description": "Buenas prácticas para presentar estadísticas de gestión pública de manera interactiva, transparente y auditable para el control social.",
          "relevance": "Orienta los tableros analíticos públicos de la PGN."
        }
      ],
      "deepModules": [
        {
          "title": "1. Data Storytelling: Transformando Métricas Complejas en Narrativas de Acción",
          "content": "El Data Storytelling no consiste en hacer gráficos 'bonitos', sino en comunicar insights que movilicen decisiones de alto impacto misional. Sus tres componentes esenciales son:\n1. Datos Sólidos: Cifras depuradas y validadas matemáticamente en la bodega de datos.\n2. Visualización Eficaz: Gráfico exacto para la relación analítica (barras para comparación, líneas para tendencias temporales, dispersión para correlaciones).\n3. Narrativa Contextualizada: El hilo conductor que responde a tres preguntas para el directivo: ¿Qué pasó? (Diagnóstico), ¿Por qué ocurrió? (Causas) y ¿Qué debemos hacer ahora? (Acción preventiva recomendada).\n\nPara el Despacho de la Procuradora General, un Profesional 3PU-15 no entrega una tabla cruda de 50.000 filas de Excel; presenta una síntesis ejecutiva con una gráfica de tendencia destacando los tres departamentos con mayor riesgo de fraude electoral y la recomendación de desplegar mesas preventivas inmediatas.",
          "keyRule": "El objetivo del Data Storytelling en la DAEADI es cerrar la brecha entre los datos técnicos y la toma de decisiones jurídicas de los procuradores delegados."
        },
        {
          "title": "2. Accesibilidad Digital Universal (WCAG 2.1 Nivel AA y Res. MinTIC 1519 de 2020)",
          "content": "La Resolución 1519 de 2020 impone a las entidades públicas garantizar que sus contenidos web y tableros digitales sean utilizables por todas las personas, incluidas aquellas con discapacidades visuales, auditivas, motrices o cognitivas. Principios del estándar WCAG 2.1 AA:\n• Perceptible: Toda información no textual (imágenes, gráficos de barras en tableros) debe tener texto alternativo descriptivo (`alt text`) para lectores de pantalla. Contraste mínimo de color de 4.5:1 entre el texto y el fondo.\n• Operable: Todas las funcionalidades del tablero o formulario deben ser navegables al 100% utilizando únicamente el teclado (sin ratón).\n• Comprensible: Textos redactados en lenguaje claro, instrucciones inequívocas y prevención/indicación clara de errores en formularios.\n• Robusto: Compatible con diferentes navegadores y tecnologías de asistencia (lectores de pantalla como JAWS o NVDA).",
          "keyRule": "Un tablero de control público que use colores como rojo y verde para indicar 'malo' y 'bueno' debe incluir además íconos o etiquetas textuales para ser accesible a personas con daltonismo."
        },
        {
          "title": "3. Redacción en Lenguaje Claro y Erradicación del Barroco Procesal",
          "content": "La política pública de Lenguaje Claro busca que cualquier ciudadano entienda las providencias y conceptos estatales a la primera lectura. Directrices prácticas:\n• Eliminar palabras arcaicas: Reemplazar 'el pluricitado funcionario' por 'el servidor público investigado'; 'proveyendo en consecuencia' por 'por lo tanto'.\n• Jerarquía de información (Pirámide Invertida): Exponer primero la conclusión principal o decisión adoptada, seguida de los argumentos fácticos y, por último, los detalles normativos.\n• Longitud óptima: Párrafos de máximo 5 a 6 líneas. Evitar subordinadas complejas con diez comas consecutivas.\n• Uso pedagógico de recursos gráficos: Tablas comparativas y diagramas de flujo para explicar procedimientos que en texto plano requerirían diez páginas confusas.",
          "keyRule": "Escribir en lenguaje claro no es infantilizar el derecho; es democratizar el acceso a la justicia y fortalecer la legitimidad de las decisiones de la Procuraduría."
        },
        {
          "title": "4. Protocolos de Comunicación en Crisis Institucional y Vocería Oficial",
          "content": "En situaciones de crisis (ej. filtración a redes de una sanción no ejecutoriada o ataque de ransomware a los servidores del SIRI), se debe actuar bajo protocolo estricto:\n1. Vocería Única: Ningún funcionario operativo ni profesional técnico está autorizado para emitir declaraciones públicas ante la prensa; toda comunicación externa se centraliza exclusivamente en la Oficina de Prensa y en el Despacho de la Procuradora General.\n2. Veracidad sobre Especulación: Emitir boletines oficiales basados estrictamente en hechos verificados técnicamente por la DAEADI, sin emitir conjeturas ni promesas irreales.\n3. Oportunidad: Salir a medios en las primeras dos horas de estallada la crisis para desmentir falsedades y fijar la postura institucional.\n4. Trazabilidad Interna: Documentar minuciosamente la cronología del incidente para los requerimientos de los entes de control y el Congreso.",
          "keyRule": "Un servidor técnico que emite declaraciones o publica pantallazos en redes sociales sobre un incidente institucional comete falta disciplinaria grave por violación de reserva y vocería."
        }
      ],
      "scenarioExample": "La DAEADI debe presentar a los medios y veedurías ciudadanas el balance de alertas preventivas de regalías. El informe original de 80 páginas era un documento denso de texto legal. El Profesional 3PU-15 lidera la adaptación a lenguaje claro y medios audiovisuales: diseña un resumen infográfico accesible de 2 páginas con contraste validado WCAG 2.1 AA, traduce los cálculos econométricos a una historia visual de impacto territorial (con mapa interactivo) y elabora un guion pedagógico en lenguaje claro para un video institucional de 90 segundos, logrando cobertura positiva nacional.",
      "examTip": "DISTRACTOR TÍPICO DE EXAMEN: Afirmar que un profesional de la Procuraduría puede informar extraoficialmente a un periodista amigo sobre los hallazgos de una auditoría para 'ayudar a la verdad'. Eso está penado: la comunicación externa está reservada a los canales oficiales y violar la reserva acarrea destitución.",
      "glossary": [
        {
          "term": "Data Storytelling",
          "definition": "Metodología para comunicar el significado de los datos mediante una combinación de métricas sólidas, narrativa contextual y visualización efectiva."
        },
        {
          "term": "WCAG 2.1 AA",
          "definition": "Pautas de Accesibilidad para el Contenido Web, estándar internacional obligatorio que asegura que personas con discapacidad puedan usar los portales públicos."
        },
        {
          "term": "Chartjunk",
          "definition": "Elementos visuales innecesarios en gráficos (fondos oscuros, sombras 3D, decoraciones) que distraen y no aportan información al lector."
        },
        {
          "term": "Lenguaje Claro",
          "definition": "Enfoque de comunicación que privilegia la redacción directa, sencilla y transparente para que los mensajes estatales sean comprendidos fácilmente."
        },
        {
          "term": "Texto Alternativo (Alt Text)",
          "definition": "Descripción textual incrustada en imágenes o gráficos que permite a los lectores de pantalla transmitir su contenido a personas con discapacidad visual."
        },
        {
          "term": "Vocería Oficial",
          "definition": "Principio según el cual solo los funcionarios formalmente designados por la entidad están autorizados para emitir declaraciones ante medios de comunicación."
        },
        {
          "term": "Pirámide Invertida",
          "definition": "Técnica de redacción informativa que sitúa los datos más relevantes en el primer párrafo y desarrolla los detalles complementarios progresivamente."
        },
        {
          "term": "Contraste de Color",
          "definition": "Relación de luminancia entre el texto y el fondo (mínimo 4.5:1 en nivel AA) para garantizar legibilidad a personas con baja visión o daltonismo."
        }
      ],
      "quiz": [
        {
          "id": "u15_q1",
          "difficulty": "Fácil",
          "type": "Conceptual / Normativa",
          "case": "La DAEADI publica un portal web interactivo con estadísticas de procesos disciplinarios para consulta de la ciudadanía.",
          "question": "Conforme a la Resolución MinTIC 1519 de 2020, ¿cuál es el estándar técnico internacional de accesibilidad web que deben cumplir obligatoriamente los portales de las entidades públicas en Colombia?",
          "options": [
            "Estándar Flash de animación propietaria.",
            "Las Pautas de Accesibilidad para el Contenido Web (WCAG) versión 2.1, en su nivel de conformidad AA.",
            "El estándar de impresión en papel offset."
          ],
          "correct": 1,
          "justification": "La Resolución 1519 de 2020 del MinTIC adopta como estándar vinculante para todo el Estado colombiano las pautas WCAG 2.1 en el nivel de conformidad AA, garantizando el acceso a personas en condición de discapacidad."
        },
        {
          "id": "u15_q2",
          "difficulty": "Fácil",
          "type": "Conceptual / Normativa",
          "case": "En un informe técnico institucional, un profesional utiliza términos en desuso y oraciones de 80 palabras con múltiples subordinadas para 'verse más culto'.",
          "question": "¿Qué política pública del Estado colombiano (liderada por el DNP y el DAFP) promueve la erradicación del lenguaje burocrático confuso en favor de la claridad?",
          "options": [
            "La Política Nacional de Lenguaje Claro.",
            "El Estatuto de Contratación Privada.",
            "El régimen de reservas arancelarias."
          ],
          "correct": 0,
          "justification": "La Guía de Lenguaje Claro para el Estado Colombiano (DNP/DAFP) promueve la redacción directa, sencilla, con oraciones cortas y vocabulario comprensible para democratizar la comunicación pública y generar cercanía institucional."
        },
        {
          "id": "u15_q3",
          "difficulty": "Media",
          "type": "Inferenciación / Criterio Técnico",
          "case": "Al diseñar un mapa de calor en Power BI para mostrar el riesgo de corrupción en las procuradurías provinciales, el analista asigna el color rojo oscuro a 'Riesgo Alto' y verde oscuro a 'Riesgo Bajo' sin incluir leyendas textuales ni íconos.",
          "question": "Frente a las pautas de accesibilidad WCAG 2.1 y la inclusión de personas con daltonismo, ¿qué falla presenta este diseño y cómo se corrige?",
          "options": [
            "No tiene ninguna falla porque el rojo y verde son universales.",
            "Incumple la pauta de no utilizar el color como único medio visual para transmitir información; se corrige añadiendo etiquetas de texto explícitas, íconos diferenciados o patrones de trama junto al color.",
            "Se corrige cambiando el fondo de la pantalla a color amarillo brillante."
          ],
          "correct": 1,
          "justification": "El estándar WCAG 2.1 prohíbe basar la transmisión de información exclusivamente en el color (criterio 1.4.1), pues las personas con deficiencias visuales o daltonismo (protanopía/deuteranopía) confunden el rojo y el verde. Se deben incorporar íconos o etiquetas textuales obligatorias."
        },
        {
          "id": "u15_q4",
          "difficulty": "Media",
          "type": "Inferenciación / Criterio Técnico",
          "case": "Un Profesional 3PU-15 debe preparar una presentación de 10 minutos para el Despacho de la Procuradora General sobre las fallas operativas del SIRI. Cuenta con 120 diapositivas repletas de tablas de datos crudos con números en letra tamaño 8.",
          "question": "Aplicando la metodología de Data Storytelling y comunicación ejecutiva, ¿cómo debe reestructurar su presentación?",
          "options": [
            "Leer rápidamente las 120 diapositivas a gran velocidad para alcanzar a presentar todo en los 10 minutos.",
            "Sintetizar la presentación en 5 o 6 diapositivas de alto impacto visual que sigan una estructura narrativa clara (Diagnóstico del problema, Causa raíz demostrada con un gráfico depurado, y 3 Acciones técnicas concretas recomendadas con su cronograma de solución).",
            "Cancelar la presentación aduciendo que 10 minutos es muy poco tiempo para un ingeniero."
          ],
          "correct": 1,
          "justification": "La comunicación para directivos de alto nivel exige síntesis ejecutiva y enfoque en la decisión. Saturar con 120 diapositivas de tablas crudas atenta contra la eficacia comunicativa; la estructura de Data Storytelling prioriza el mensaje clave, el sustento visual limpio y el plan de acción."
        },
        {
          "id": "u15_q5",
          "difficulty": "Media",
          "type": "Inferenciación / Criterio Técnico",
          "case": "Se desata una crisis en redes sociales porque una página web falsa afirma que 'la Procuraduría borró todas las sanciones del SIRI de los políticos sancionados'. Un periodista llama al celular personal de un Profesional 3PU-15 de la DAEADI pidiéndole declaraciones inmediatas.",
          "question": "Conforme al protocolo institucional de vocería y manejo de crisis de la PGN, ¿cuál debe ser la conducta del profesional?",
          "options": [
            "Darle una entrevista exclusiva al periodista y confirmarle que el sistema tiene fallas para salir en el noticiero.",
            "Abstenerse de dar declaraciones oficiales a título individual, recordar que la vocería institucional está reservada formalmente a la Oficina de Prensa y Despacho de la Procuradora, e informar de inmediato la llamada a su superior para que Prensa emita el comunicado oficial con las cifras técnicas reales.",
            "Apagar el celular y no regresar a trabajar durante la semana."
          ],
          "correct": 1,
          "justification": "En el sector público, la vocería oficial en situaciones de crisis está centralizada en la Oficina de Prensa y los canales autorizados. Los servidores técnicos no pueden conceder entrevistas unilaterales sin autorización, pues ello genera desinformación y falta disciplinaria."
        },
        {
          "id": "u15_q6",
          "difficulty": "Difícil",
          "type": "Juicio Situacional (SJT)",
          "case": "Usted es Profesional 3PU-15 en la DAEADI y debe publicar en el repositorio de datos abiertos del Estado (datos.gov.co) un tablero con las estadísticas de sanciones disciplinarias de la última década. El equipo de diseño propone incrustar una captura de pantalla plana (JPG) con un gráfico de líneas sin datos descargables ni descripción.",
          "question": "Conforme a los estándares de la Ley 1712 de 2014 (Transparencia) y la Resolución 1519 de 2020 de MinTIC, ¿cuál debe ser su determinación?",
          "options": [
            "Aprobar la imagen JPG porque los ciudadanos solo necesitan mirar la foto del gráfico.",
            "Rechazar la publicación en imagen cerrada y exigir que los datos primarios se publiquen en formatos abiertos y estructurados (CSV, JSON o XML) junto con un tablero accesible que permita la descarga de la serie de datos y cuente con texto alternativo para lectores de pantalla.",
            "Publicar el gráfico únicamente en formato PDF cerrado protegido con contraseña."
          ],
          "correct": 1,
          "justification": "La Ley 1712 de 2014 y las directrices de datos abiertos de MinTIC exigen que la información pública se entregue en formatos abiertos, estructurados y reutilizables por la ciudadanía (principio de interoperabilidad y datos abiertos). Una simple imagen JPG no cumple los estándares de transparencia ni de accesibilidad."
        },
        {
          "id": "u15_q7",
          "difficulty": "Difícil",
          "type": "Juicio Situacional (SJT)",
          "case": "En un boletín estadístico oficial sobre la mora procesal de la Procuraduría, el equipo de comunicaciones modifica la escala vertical del eje Y en un gráfico de barras, haciéndola iniciar en 80 en lugar de 0, para que parezca visualmente que la reducción de 2 casos de congestión fue una disminución monumental del 80%.",
          "question": "Frente a los principios de veracidad, ética en la visualización de datos e integridad pública, ¿cuál es su dictamen técnico?",
          "options": [
            "Avalar el gráfico porque en el diseño gráfico la exageración visual es una práctica artística aceptable.",
            "Corregir el gráfico de inmediato para que el eje de ordenadas (Eje Y) inicie en cero (0) en los gráficos de barras o utilizar un gráfico de líneas con escala debidamente rotulada, evitando la distorsión visual engañosa que falsea la realidad ante la ciudadanía y compromete la credibilidad institucional.",
            "Eliminar el gráfico y publicar solo una caricatura."
          ],
          "correct": 1,
          "justification": "Truncar el eje vertical en gráficos de barras es una de las tácticas más conocidas de distorsión estadística y desinformación ('gráfico engañoso'). En la administración pública y en la DAEADI rige el principio ético de veracidad: las barras deben iniciar en cero para que la longitud visual de la barra sea proporcional a la magnitud matemática del dato."
        },
        {
          "id": "u15_q8",
          "difficulty": "Difícil",
          "type": "Juicio Situacional (SJT)",
          "case": "Para capacitar a los procuradores judiciales en una nueva herramienta de minería de textos del SIM, se elabora un manual de 350 páginas de texto plano sin una sola imagen, lleno de comandos de programación en consola. Ningún procurador judicial ha utilizado la herramienta en 3 meses.",
          "question": "Como Profesional 3PU-15 encargado de la estrategia de apropiación y comunicación organizacional, ¿cómo rediseña usted la estrategia pedagógica?",
          "options": [
            "Solicitar la apertura de procesos disciplinarios a los procuradores judiciales por negarse a leer el manual de 350 páginas.",
            "Reemplazar el manual denso por una estrategia pedagógica multimedia: diseñar videoguías interactivas paso a paso de 3 minutos, infografías de flujo con capturas de pantalla reales, y realizar talleres prácticos de aprendizaje activo con casos reales de sus propios despachos.",
            "Eliminar la herramienta de minería de textos y volver a los expedientes impresos en papel."
          ],
          "correct": 1,
          "justification": "La apropiación tecnológica en entidades públicas requiere medios audiovisuales modernos y pedagogía activa. Los manuales excesivamente extensos y densos generan rechazo natural; el uso de recursos multimedia breves, guías visuales y acompañamiento práctico es la mejor práctica probada en gestión del cambio."
        }
      ]
    },
    {
      "id": 16,
      "number": "16",
      "title": "Arquitectura de TI y Sistemas Misionales del Área Disciplinar",
      "category": "Conocimientos Esenciales Específicos",
      "level": "Avanzado",
      "duration": "60 a 75 min",
      "summary": "Estudio avanzado del Marco de Arquitectura Empresarial (MAE) del MinTIC y el estándar internacional TOGAF v10 en el sector público. Los 6 dominios del MAE (Estrategia de TI, Gobierno de TI, Información, Sistemas de Información, Servicios Tecnológicos y Uso/Apropiación). Sistemas misionales de la PGN: arquitectura del SIRI, SIM y GED; patrones de integración gubernamental mediante Servicios Ciudadanos Digitales, APIs REST, mensajería segura y plataforma de interoperabilidad X-Road / Gov.co.",
      "normativa": [
        "Decreto Único Reglamentario 1078 de 2015: Sector de Tecnologías de la Información y las Comunicaciones.",
        "Resolución MinTIC 500 de 2021: Lineamientos del Marco de Arquitectura Empresarial (MAE).",
        "Decreto 620 de 2020: Servicios Ciudadanos Digitales (Interoperabilidad, Autenticación Digital y Carpeta Ciudadana).",
        "Estándar The Open Group TOGAF Standard versión 10.",
        "Manual de Arquitectura y Plataforma Tecnológica de la Procuraduría General de la Nación."
      ],
      "officialInvestigations": [
        {
          "type": "Decreto Reglamentario",
          "title": "Decreto 1078 de 2015 y Resolución MinTIC 500 de 2021 - Marco de Arquitectura Empresarial (MAE)",
          "description": "Estatuto oficial de arquitectura de TI para el Estado colombiano. Define los instrumentos para alinear la tecnología con los objetivos misionales en 6 dominios estructurados.",
          "relevance": "Marco conceptual de ingeniería de sistemas evaluado en el concurso."
        },
        {
          "type": "Estándar Global de Arquitectura",
          "title": "TOGAF Standard Versión 10 (The Open Group)",
          "description": "Metodología estándar para el diseño de arquitectura empresarial: Método de Desarrollo de Arquitectura (ADM), visión de arquitectura, arquitectura de negocio, datos, aplicaciones y tecnología.",
          "relevance": "Base técnica sobre la cual se fundamenta el MAE de MinTIC."
        },
        {
          "type": "Decreto Presidencial",
          "title": "Decreto 620 de 2020 - Política de Servicios Ciudadanos Digitales",
          "description": "Reglamenta los servicios especiales y base: Autenticación Digital, Carpeta Ciudadana e Interoperabilidad entre sistemas del Estado colombiano.",
          "relevance": "Obligatorio para la conexión del SIRI con la Registraduría y la Rama Judicial."
        },
        {
          "type": "Marco de Interoperabilidad",
          "title": "Estándar de Interoperabilidad X-Road y Gov.co (MinTIC)",
          "description": "Protocolo seguro de intercambio de datos entre entidades públicas basado en servidores de seguridad descentralizados, firma criptográfica y marcas de tiempo.",
          "relevance": "Tecnología clave para el intercambio de antecedentes e inhabilidades."
        },
        {
          "type": "Arquitectura Misional PGN",
          "title": "Documento de Arquitectura de Sistemas Misionales PGN: SIRI, SIM y GED",
          "description": "Especificación de componentes: frontends web, capas de servicios de negocio, middleware de mensajería, bases de datos relacionales y almacén de documentos electrónicos.",
          "relevance": "Contexto tecnológico exacto del puesto de trabajo en la DAEADI."
        },
        {
          "type": "Estándar de APIs Gubernamentales",
          "title": "Guía de Buenas Prácticas para el Diseño y Gestión de APIs RESTful en el Estado",
          "description": "Pautas para versionamiento semántico, control de cuotas (Rate Limiting), autenticación OAuth 2.0 / OpenID Connect y documentación en OpenAPI (Swagger).",
          "relevance": "Asegura la integración segura de datos entre dependencias y entidades externas."
        },
        {
          "type": "Guía de Alta Disponibilidad",
          "title": "Lineamientos para la Continuidad Operativa y Recuperación ante Desastres (DRP/BCP)",
          "description": "Parámetros de RTO (Recovery Time Objective) y RPO (Recovery Point Objective) para sistemas misionales de control público en centros de datos primarios y alternos.",
          "relevance": "Garantiza que el SIRI funcione 24/7 sin pérdida de transacciones."
        },
        {
          "type": "Estándar de Microservicios",
          "title": "Arquitectura Orientada a Servicios (SOA) y Contenedores en el Sector Público",
          "description": "Migración de aplicaciones monolíticas heredadas hacia microservicios desacoplados en Kubernetes/Docker para mejorar la escalabilidad en jornadas masivas.",
          "relevance": "Tendencia tecnológica en la modernización de la DAEADI."
        }
      ],
      "deepModules": [
        {
          "title": "1. Los 6 Dominios del Marco de Arquitectura Empresarial (MAE - MinTIC)",
          "content": "El MAE estructura la gestión de tecnología en el Estado colombiano en 6 dominios complementarios:\n1. Estrategia de TI: Alineación de los proyectos tecnológicos con el Plan Estratégico Institucional de la PGN y el Plan Nacional de Desarrollo.\n2. Gobierno de TI: Estructura de toma de decisiones, comités de transformación digital, roles y responsabilidades claras.\n3. Información: Modelado de datos, gobierno de datos, catálogo de información y estándares de calidad para que los datos sean interoperables y seguros.\n4. Sistemas de Información: Catálogo de aplicaciones de la PGN (SIRI, SIM, GED), ciclo de vida del software, arquitectura de aplicaciones y APIs de integración.\n5. Servicios Tecnológicos: Infraestructura física y en la nube (servidores, redes de datos, ciberseguridad, centros de cómputo y monitoreo).\n6. Uso y Apropiación: Plan de formación, incentivos y gestión del cambio para que funcionarios y ciudadanos utilicen eficazmente las plataformas.",
          "keyRule": "El MAE prohíbe comprar software o infraestructura de forma aislada; todo proyecto TIC debe estar fundamentado en los 6 dominios del modelo."
        },
        {
          "title": "2. Arquitectura de los Sistemas Misionales de la PGN: SIRI, SIM y GED",
          "content": "La operación misional de la Procuraduría reposa sobre un ecosistema integrado:\n• SIRI (Sistema de Información de Registro de Sanciones e Inhabilidades): Repositorio central de máxima seguridad administrado por la DAEADI. Registra todas las providencias condenatorias de control disciplinario, penal y fiscal. Emite certificados de antecedentes ordinarios (públicos) y especiales (para posesión de altos cargos o autoridades judiciales).\n• SIM (Sistema de Información Misional): Plataforma transaccional de seguimiento procesal que gestiona los expedientes desde la queja inicial, pasando por las etapas de instrucción y juzgamiento, controlando términos legales y notificaciones.\n• GED (Gestor Electrónico de Documentos): Repositorio documental corporativo que custodia las piezas probatorias digitalizadas, garantizando foliatura electrónica, metadatos y firmas digitales.",
          "keyRule": "El SIRI y el SIM no son sistemas aislados; cuando una sala de juzgamiento del SIM profiere un fallo sancionatorio en firme, este se transmite mediante web services al SIRI para su registro automático."
        },
        {
          "title": "3. Interoperabilidad Estatal y Servicios Ciudadanos Digitales (X-Road y Gov.co)",
          "content": "El Decreto 620 de 2020 establece que las entidades públicas deben interoperar de forma obligatoria para no pedir al ciudadano documentos que el propio Estado ya posee:\n• Marco de Interoperabilidad X-Road: Plataforma de integración descentralizada donde cada entidad tiene un 'Servidor de Seguridad' (Security Server). La comunicación viaja cifrada punto a punto con certificados digitales y sellado de tiempo, sin intermediarios que puedan alterar la información.\n• Casos de Interoperabilidad de la DAEADI:\n  - Con la Registraduría Nacional: Verificación de vigencia de cédulas y defunciones para depuración automática del padrón sancionatorio.\n  - Con el Consejo Superior de la Judicatura: Recepción de sentencias penales con penas privativas o de inhabilitación especial.\n  - Con Colombia Compra Eficiente (SECOP II): Validación en línea de inhabilidades previas a la firma de contratos públicos.",
          "keyRule": "La interoperabilidad mediante X-Road garantiza no repudio e integridad criptográfica en la transmisión de datos entre órganos de control y entidades territoriales."
        },
        {
          "title": "4. Alta Disponibilidad, Resiliencia y Métricas RTO / RPO",
          "content": "Dado que un fallo en el SIRI puede paralizar posesiones de servidores públicos o procesos de contratación en todo el país, la infraestructura debe estar diseñada para alta disponibilidad:\n• Arquitectura Redundante: Clústeres activos-activos de servidores web y réplicas de bases de datos sincronizadas en diferentes zonas geográficas.\n• RTO (Recovery Time Objective): Tiempo máximo tolerable que el sistema puede estar fuera de servicio tras un desastre (para el SIRI se fija en menos de 2 horas).\n• RPO (Recovery Point Objective): Cantidad máxima de datos que se pueden perder medida en tiempo transcurrido desde el último backup (para el SIRI debe ser 0 o máximo 15 minutos mediante replicación continua de logs WAL).\n• Contenedores y Microservicios: Despliegue en contenedores Docker orquestados por Kubernetes, permitiendo autoescalado horizontal (HPA) automático ante picos de consultas durante elecciones.",
          "keyRule": "El diseño de sistemas misionales en la PGN debe contemplar un RTO y RPO mínimos garantizados mediante pruebas periódicas de recuperación ante desastres (DRP)."
        }
      ],
      "scenarioExample": "Durante una jornada nacional de elecciones, las consultas al sistema SIRI se disparan de 5.000 por minuto a 120.000 por minuto, amenazando con colapsar el data center central. El Profesional 3PU-15 experto en arquitectura de TI ha configurado previamente una arquitectura de microservicios elástica: activa la capa de caché distribuido en Redis para consultas repetitivas de antecedentes en firme y el balanceador de carga redirige el tráfico a un clúster de réplicas de solo lectura en la nube pública estatal, manteniendo el servicio 100% disponible con un tiempo de respuesta de 45 milisegundos.",
      "examTip": "DISTRACTOR TÍPICO DE EXAMEN: Afirmar que el intercambio de información entre el SIRI y la Registraduría se hace 'enviando un correo electrónico con una hoja de cálculo adjunta sin clave'. La respuesta técnica correcta siempre exige protocolos formales de interoperabilidad, web services seguros (SOAP/REST con TLS), X-Road y autenticación mutua.",
      "glossary": [
        {
          "term": "MAE",
          "definition": "Marco de Arquitectura Empresarial del MinTIC que articula 6 dominios estratégicos para orientar el uso de TI en el sector público colombiano."
        },
        {
          "term": "TOGAF",
          "definition": "The Open Group Architecture Framework, marco de trabajo internacional estándar para la planificación y diseño de arquitecturas empresariales."
        },
        {
          "term": "X-Road",
          "definition": "Tecnología de interoperabilidad basada en servidores de seguridad distribuidos que permite el intercambio seguro y encriptado de datos entre entidades públicas."
        },
        {
          "term": "RTO",
          "definition": "Recovery Time Objective, plazo máximo admisible para restablecer la operatividad de un sistema informático tras una contingencia o desastre."
        },
        {
          "term": "RPO",
          "definition": "Recovery Point Objective, volumen máximo de transacciones o tiempo de datos que la entidad puede permitirse perder tras un incidente."
        },
        {
          "term": "API REST",
          "definition": "Interfaz de programación de aplicaciones basada en arquitectura REST y protocolos HTTP estándar para el intercambio de datos en formato JSON."
        },
        {
          "term": "Servicios Ciudadanos Digitales",
          "definition": "Política del Decreto 620 de 2020 que integra los servicios de Autenticación Digital, Carpeta Ciudadana e Interoperabilidad en el Estado."
        },
        {
          "term": "Microservicios",
          "definition": "Patrón arquitectónico que estructura una aplicación como una colección de servicios autónomos, pequeños y desplegables independientemente."
        }
      ],
      "quiz": [
        {
          "id": "u16_q1",
          "difficulty": "Fácil",
          "type": "Conceptual / Normativa",
          "case": "La Procuraduría General de la Nación adopta los lineamientos de la Resolución MinTIC 500 de 2021 para modernizar su infraestructura tecnológica.",
          "question": "¿Cuál es el marco oficial que define los lineamientos de arquitectura tecnológica para el Estado colombiano articulado en 6 dominios?",
          "options": [
            "El Código de Procedimiento Penal.",
            "El Marco de Arquitectura Empresarial (MAE) para la Gestión de TI del Estado Colombiano.",
            "El modelo Waterfall de programación estructurada."
          ],
          "correct": 1,
          "justification": "La Resolución MinTIC 500 de 2021 y el Decreto 1078 de 2015 adoptan el Marco de Arquitectura Empresarial (MAE) como el estándar rector para la planeación y desarrollo de TI en todas las entidades del Estado colombiano."
        },
        {
          "id": "u16_q2",
          "difficulty": "Fácil",
          "type": "Conceptual / Normativa",
          "case": "El Decreto 620 de 2020 regula los Servicios Ciudadanos Digitales para facilitar la interacción de los colombianos con el Estado.",
          "question": "¿Cuáles son los tres Servicios Ciudadanos Digitales base consagrados en el Decreto 620 de 2020?",
          "options": [
            "Telefonía celular, televisión comunitaria y radio abierta.",
            "Autenticación Digital, Carpeta Ciudadana Digital e Interoperabilidad.",
            "Cuentas de redes sociales institucionales obligatorias."
          ],
          "correct": 1,
          "justification": "El Decreto 620 de 2020 establece con precisión los tres Servicios Ciudadanos Digitales base del Estado colombiano: la Autenticación Digital, la Carpeta Ciudadana Digital y el servicio de Interoperabilidad."
        },
        {
          "id": "u16_q3",
          "difficulty": "Media",
          "type": "Inferenciación / Criterio Técnico",
          "case": "En el diseño de la arquitectura de continuidad operativa del sistema misional SIRI, el comité directivo fija que, en caso de catástrofe en el Data Center central, el sistema no puede perder más de 5 minutos de transacciones de certificados y debe volver a estar en línea en menos de 1 hora.",
          "question": "¿A qué métricas técnicas corresponden respectivamente estas dos exigencias de continuidad?",
          "options": [
            "RPO = 5 minutos y RTO = 1 hora.",
            "RTO = 5 minutos y RPO = 1 hora.",
            "MTBF = 5 minutos y SLA = 1 hora."
          ],
          "correct": 0,
          "justification": "El RPO (Recovery Point Objective) mide la cantidad máxima de datos tolerables que pueden perderse expresada en tiempo (5 minutos de transacciones). El RTO (Recovery Time Objective) mide el tiempo máximo admisible para restablecer la operación del servicio (1 hora)."
        },
        {
          "id": "u16_q4",
          "difficulty": "Media",
          "type": "Inferenciación / Criterio Técnico",
          "case": "La DAEADI debe interconectar el SIRI con el sistema de contratación SECOP II administrado por Colombia Compra Eficiente para verificar inhabilidades automáticamente.",
          "question": "¿Cuál es el patrón de integración arquitectónico recomendado por el MinTIC para conectar de forma segura dos entidades públicas del Estado?",
          "options": [
            "Compartir las credenciales maestras de la base de datos de la Procuraduría con los ingenieros de Colombia Compra Eficiente.",
            "Implementar Servicios Web seguros (APIs RESTful con autenticación robusta mediante tokens OAuth 2.0 / OpenID Connect) a través de la plataforma de interoperabilidad oficial (X-Road / Gov.co).",
            "Exportar un archivo plano mensual y enviarlo por correo postal certificado."
          ],
          "correct": 1,
          "justification": "El MinTIC y las buenas prácticas de arquitectura empresarial gubernamental exigen el uso de servicios web estructurados (APIs REST) sobre plataformas de interoperabilidad estandarizadas como X-Road, blindadas con TLS y protocolos de autorización OAuth 2.0."
        },
        {
          "id": "u16_q5",
          "difficulty": "Media",
          "type": "Inferenciación / Criterio Técnico",
          "case": "El sistema misional SIM de la PGN fue construido hace 15 años como un único bloque monolítico masivo. Cada vez que se modifica una línea de código del módulo de reparto, todo el sistema de notificaciones y radicación nacional se cae.",
          "question": "En el marco del dominio de Sistemas de Información del MAE, ¿qué modernización arquitectónica es la idónea?",
          "options": [
            "Prohibir cualquier cambio futuro en el código del sistema.",
            "Migrar progresivamente la arquitectura monolítica hacia una Arquitectura de Microservicios desacoplada y contenerizada, donde cada funcionalidad misional (reparto, notificaciones, consultas) opere de manera autónoma sin comprometer la estabilidad de los demás componentes.",
            "Reinstalar el sistema operativo Windows 98 en todos los servidores."
          ],
          "correct": 1,
          "justification": "La arquitectura de microservicios permite desacoplar los componentes funcionales de un sistema complejo. Si un microservicio falla o requiere mantenimiento evolutivo, los demás siguen funcionando con total normalidad, garantizando alta disponibilidad y escalabilidad."
        },
        {
          "id": "u16_q6",
          "difficulty": "Difícil",
          "type": "Juicio Situacional (SJT)",
          "case": "Usted es Profesional 3PU-15 en la DAEADI y asiste a un comité técnico donde se discute la integración del SIRI con las notarías del país. Un asesor propone que, para no demorarse desarrollando APIs, las notarías tengan acceso directo a la base de datos de producción con privilegios de administrador para hacer consultas masivas.",
          "question": "Conforme al Marco de Arquitectura Empresarial (MAE) y las directrices de ciberseguridad, ¿cuál es su dictamen técnico de rechazo?",
          "options": [
            "Aprobar la propuesta para que las notarías no presenten quejas de lentitud.",
            "Rechazar categóricamente el acceso directo a la base de datos de producción, advirtiendo que vulnera los dominios de Información, Servicios Tecnológicos y Seguridad del MAE; proponer en su lugar la exposición de un endpoint o API específico de consulta de antecedentes con control de cuotas (Rate Limiting), autenticación mutua y registro inmutable de transacciones.",
            "Desconectar a todas las notarías del país de los servicios de la Procuraduría."
          ],
          "correct": 1,
          "justification": "Conceder acceso directo a una base de datos de producción a entidades externas es una falla de seguridad inaceptable que viola todos los dominios del MAE e ISO 27001. La integración interinstitucional debe canalizarse estrictamente a través de APIs controladas con rate limiting y autenticación segura."
        },
        {
          "id": "u16_q7",
          "difficulty": "Difícil",
          "type": "Juicio Situacional (SJT)",
          "case": "Durante la etapa de diseño de un nuevo sistema de analítica predictiva en la DAEADI, los desarrolladores omiten documentar el catálogo de componentes, el diagrama de despliegue y los flujos de datos, afirmando que 'en metodologías ágiles no se hace arquitectura ni documentación'.",
          "question": "Frente al estándar TOGAF v10 y las exigencias del Modelo MIPG del DAFP, ¿cómo debe corregirse esta desviación?",
          "options": [
            "Aceptar la omisión porque la agilidad significa no escribir documentos.",
            "Exigir la elaboración obligatoria de los artefactos de arquitectura empresarial (diagramas de componentes, modelo de datos, catálogo de interfaces y diccionario de datos), señalando que la agilidad no exonera al Estado del deber de custodiar la memoria técnica institucional y asegurar el mantenimiento evolutivo del activo público.",
            "Despedir inmediatamente a todos los programadores de la entidad."
          ],
          "correct": 1,
          "justification": "TOGAF v10 y las políticas del MIPG establecen que la agilidad no es sinónimo de desorden o falta de arquitectura. Los artefactos de arquitectura son activos de conocimiento público obligatorios que aseguran la sostenibilidad y auditabilidad de los sistemas del Estado."
        },
        {
          "id": "u16_q8",
          "difficulty": "Difícil",
          "type": "Juicio Situacional (SJT)",
          "case": "En vísperas del cierre de inscripciones de candidatos para el Congreso, se reporta que el enlace de comunicaciones entre la Registraduría Nacional y el SIRI se ha caído por un corte de fibra óptica en Bogotá. Cientos de candidatos no pueden expedir su certificado de antecedentes para inscribirse.",
          "question": "Como Profesional 3PU-15 a cargo del monitoreo arquitectónico en la DAEADI, ¿cuál es la medida técnica de resiliencia y contingencia que debe activarse?",
          "options": [
            "Esperar a que la empresa de telecomunicaciones repare el cable en dos o tres días.",
            "Activar de inmediato el enlace redundante secundario de contingencia por canal alterno de microondas/nube y habilitar el servicio de expedición de certificados sobre la réplica de datos de contingencia previamente sincronizada, emitiendo una alerta a la mesa de soporte para asegurar la continuidad del servicio público sin dilatar el proceso electoral.",
            "Publicar en redes sociales que la Registraduría es culpable de la suspensión de las elecciones."
          ],
          "correct": 1,
          "justification": "La alta disponibilidad y la continuidad del negocio (BCP/DRP) exigen redundancia física y lógica en sistemas misionales críticos de la PGN. Ante la caída del enlace principal, el protocolo técnico impone la conmutación inmediata hacia el enlace de contingencia y la réplica de datos para no entorpecer el proceso democrático."
        }
      ]
    }
  ],
  "mockExamKnowledge": [
    {
      "id": "mk_1",
      "unitId": 1,
      "case": "En un debate jurídico sobre la estructura del Estado, se analiza si una Procuraduría Provincial tiene personería jurídica propia o si actúa bajo la de la Nación.",
      "question": "Conforme a la Ley 489 de 1998, ¿a qué figura de organización administrativa corresponden las Procuradurías Provinciales?",
      "options": [
        "Descentralización administrativa por servicios.",
        "Desconcentración territorial de la Nación - Procuraduría General.",
        "Delegación presidencial de orden público."
      ],
      "correct": 1,
      "explanation": "Las procuradurías regionales y provinciales son dependencias desconcentradas territorialmente que integran la persona jurídica unitaria de la Nación - Procuraduría General de la Nación."
    },
    {
      "id": "mk_2",
      "unitId": 2,
      "case": "Un Procurador Delegado en función preventiva advierte riesgos de sobrecostos en una licitación de vías terciarias y le ordena formalmente al Alcalde revocar el acto de apertura bajo amenaza de sanción inmediata.",
      "question": "¿Es jurídicamente legítima la orden de revocatoria impartida en sede preventiva?",
      "options": [
        "Sí, porque la función preventiva de la PGN tiene facultades de coadministración vinculante.",
        "No, porque la función preventiva tiene facultad de advertir y exhortar, pero no puede dar órdenes de coadministración ni suspender actos directamente.",
        "Sí, siempre que el informe esté firmado por el Viceprocurador."
      ],
      "correct": 1,
      "explanation": "La Corte Constitucional (Sentencia C-977 de 2002) ha reiterado que la función preventiva no autoriza la coadministración ni la injerencia vinculante en la gestión activa de las entidades."
    },
    {
      "id": "mk_3",
      "unitId": 3,
      "case": "Un ciudadano solicita copias de un informe técnico elaborado por la DAEADI que sirvió de sustento para un auto de apertura de investigación disciplinaria en etapa reservada.",
      "question": "Frente a la Ley 1712 de 2014 y el Código General Disciplinario, ¿cómo debe responderse?",
      "options": [
        "Entregar el informe de inmediato por principio de máxima publicidad.",
        "Negar motivadamente la entrega invocando la reserva legal expresa de la indagación previa e investigación (Art. 115 Ley 1952/19).",
        "Destruir el informe para que nadie lo pueda ver."
      ],
      "correct": 1,
      "explanation": "Las investigaciones disciplinarias están amparadas por reserva legal sumaria hasta la notificación del pliego de cargos, por lo que la solicitud de copias debe negarse de manera motivada."
    },
    {
      "id": "mk_4",
      "unitId": 4,
      "case": "La Sala de Juzgamiento de la PGN sanciona con destitución a un Gobernador elegido por voto popular por faltas en la contratación del PAE.",
      "question": "Conforme a la Sentencia C-030 de 2023 de la Corte Constitucional, ¿cuándo surte efectos jurídicos la destitución?",
      "options": [
        "Inmediatamente al día siguiente de notificado el fallo de segunda instancia.",
        "Queda suspendida hasta tanto el Consejo de Estado surta el recurso o control judicial automático e integral.",
        "Nunca, porque la PGN no tiene competencia sobre gobernadores."
      ],
      "correct": 1,
      "explanation": "La Sentencia C-030 de 2023 moduló las sanciones contra elegidos por voto popular, exigiendo el control jurisdiccional automático previo ante el Consejo de Estado."
    },
    {
      "id": "mk_5",
      "unitId": 5,
      "case": "En la DAEADI se busca simplificar el flujo de recepción y análisis de datos misionales entre las 32 procuradurías regionales.",
      "question": "¿Qué herramienta de gestión pública permite estandarizar estos procesos identificando actividades redundantes y compuertas lógicas?",
      "options": [
        "Diagramación en notación BPMN 2.0 en el marco del MIPG.",
        "Un memorando en texto plano de 50 páginas.",
        "El balance contable de fin de año."
      ],
      "correct": 0,
      "explanation": "La metodología oficial del DAFP para optimizar procesos en el sector público es el modelado BPMN 2.0 (Business Process Model and Notation)."
    },
    {
      "id": "mk_6",
      "unitId": 6,
      "case": "Un ciudadano radica una solicitud de información pública ante la Procuraduría. Transcurren 12 días hábiles sin que la entidad responda ni informe prórroga.",
      "question": "¿Qué consecuencia opera según el Parágrafo del Artículo 14 de la Ley 1755 de 2015?",
      "options": [
        "Se entiende negada por silencio administrativo negativo.",
        "Opera el silencio administrativo positivo: la petición se entiende aceptada y los documentos deben entregarse en 3 días de forma gratuita.",
        "El peticionario pierde el derecho a reclamar."
      ],
      "correct": 1,
      "explanation": "En peticiones de documentos, el silencio administrativo positivo obliga a la entidad a entregar copias gratuitas dentro de los 3 días siguientes al vencimiento del plazo de 10 días."
    },
    {
      "id": "mk_7",
      "unitId": 7,
      "case": "Al conformar un expediente disciplinario electrónico, un funcionario junta varios documentos PDF en una carpeta sin orden y sin firmar.",
      "question": "Conforme al Acuerdo 003 de 2015 del AGN, ¿qué componente es obligatorio para que el expediente electrónico sea auténtico e inalterable?",
      "options": [
        "Un archivo comprimido RAR con clave secreta.",
        "Un Índice Electrónico firmado digitalmente que incluya la relación cronológica de los documentos y el valor hash de cada uno.",
        "Imprimir todas las páginas y guardarlas en una carpeta de cartón."
      ],
      "correct": 1,
      "explanation": "El Acuerdo 003 de 2015 del AGN exige que todo expediente electrónico auténtico cuente con un Índice Electrónico firmado digitalmente que registre el hash de cada documento para blindar su integridad."
    },
    {
      "id": "mk_8",
      "unitId": 8,
      "case": "En el marco del MECI actualizado, un analista afirma que el control de riesgos de corrupción en la base de datos del SIRI es tarea exclusiva de los auditores de Control Interno.",
      "question": "¿Es válida esta afirmación según el Modelo de las Tres Líneas de Defensa?",
      "options": [
        "Sí, porque Control Interno responde por los riesgos operativos.",
        "No, porque los servidores operativos y líderes de proceso conforman la Primera Línea de Defensa y son los responsables primarios del autocontrol y la gestión de riesgos.",
        "Solo es válida si los auditores son contadores públicos."
      ],
      "correct": 1,
      "explanation": "En el esquema de Tres Líneas de Defensa, la 1ª Línea (los propios operadores y servidores) es la responsable directa del autocontrol y la gestión de riesgos en sus actividades cotidianas."
    },
    {
      "id": "mk_9",
      "unitId": 9,
      "case": "Un Profesional 3PU-15 redacta un informe pericial de analítica y concluye: 'El alcalde incurrió en culpa gravísima al desviar los recursos'.",
      "question": "¿Qué falla técnica presenta esta conclusión según la GTC 185 y los manuales de peritaje?",
      "options": [
        "El informe no tiene ninguna falla.",
        "El informe pericial técnico debe limitarse a hallazgos objetivos y fácticos sin hacer juicios de valor ni calificaciones jurídicas de culpabilidad disciplinaria, lo cual corresponde al fallador.",
        "Debió calificarlo como dolo en lugar de culpa gravísima."
      ],
      "correct": 1,
      "explanation": "El perito técnico aporta evidencia objetiva basada en su ciencia; no le corresponde calificar la tipicidad ni la culpabilidad jurídica disciplinaria, pues esa función es exclusiva del juez o fallador."
    },
    {
      "id": "mk_10",
      "unitId": 10,
      "case": "En un contrato de infraestructura en la nube para la Procuraduría, el contratista experimenta una caída del servicio durante 4 días continuos en un mes, violando el SLA pactado del 99.8%.",
      "question": "¿Cuál es el deber funcional del supervisor técnico del contrato?",
      "options": [
        "Aprobar la totalidad de la factura para evitar roces con la empresa proveedora.",
        "Aplicar las penalizaciones económicas y descuentos contractuales pactados por incumplimiento del SLA y retener el pago correspondiente hasta la subsanación formal.",
        "Modificar los pliegos de condiciones de manera retroactiva."
      ],
      "correct": 1,
      "explanation": "El supervisor contractual es civil, fiscal y disciplinariamente responsable de hacer cumplir estrictamente los Acuerdos de Nivel de Servicio pactados, aplicando los descuentos de ley."
    },
    {
      "id": "mk_11",
      "unitId": 11,
      "case": "Para consultar todos los procesos disciplinarios y las dependencias asociadas, incluyendo aquellas dependencias recién creadas que aún no tienen ningún proceso radicado, ¿qué operador SQL se debe emplear?",
      "options": [
        "`INNER JOIN` entre Dependencias y Procesos.",
        "`LEFT JOIN` entre Dependencias (a la izquierda) y Procesos (a la derecha).",
        "`DELETE FROM Dependencias`."
      ],
      "correct": 1,
      "explanation": "El `LEFT JOIN` conserva todas las filas de la tabla de la izquierda (`Dependencias`), rellenando con valores nulos o conteos de 0 los registros sin coincidencias de la tabla derecha."
    },
    {
      "id": "mk_12",
      "unitId": 12,
      "case": "Al analizar los tiempos de resolución de quejas en el país, el 90% de los casos se resuelve en 5 días, pero un 2% de expedientes complejos tardó 800 días por recursos judiciales.",
      "question": "¿Qué medida de tendencia central refleja con mayor representatividad el comportamiento típico de atención de la entidad?",
      "options": [
        "La media aritmética sensible a valores atípicos.",
        "La mediana, al ser una medida robusta frente a datos extremos (outliers).",
        "El valor máximo absoluto."
      ],
      "correct": 1,
      "explanation": "La mediana es la métrica de posición más representativa cuando los datos sufren de asimetría o valores extremos desproporcionados (outliers)."
    },
    {
      "id": "mk_13",
      "unitId": 13,
      "case": "La DAEADI diseña un almacén de datos (Data Warehouse) para la reportería ejecutiva de sanciones de la Viceprocuraduría.",
      "question": "¿En cuál estructura se almacenan las métricas numéricas agregables (como días de sanción o cuantía) en un modelo dimensional?",
      "options": [
        "En la Tabla de Hechos (Fact Table).",
        "En las Tablas de Dimensión desnormalizadas.",
        "En el archivo de texto del manual de usuario."
      ],
      "correct": 0,
      "explanation": "En el modelado dimensional, las métricas cuantitativas del negocio/misión se concentran en la Tabla de Hechos, vinculadas a las dimensiones descriptivas circundantes."
    },
    {
      "id": "mk_14",
      "unitId": 14,
      "case": "Un analista de la DAEADI publica en datos abiertos una base de datos con diagnósticos médicos de servidores públicos investigados.",
      "question": "Conforme a la Ley 1581 de 2012, ¿qué categoría legal tienen estos datos?",
      "options": [
        "Datos públicos de libre acceso.",
        "Datos sensibles, cuyo tratamiento y difusión masiva están prohibidos por ley.",
        "Datos comerciales."
      ],
      "correct": 1,
      "explanation": "La información sobre la salud es catalogada como Dato Sensible (Art. 5 Ley 1581/12), y su publicación vulnera el derecho fundamental al Habeas Data y la intimidad."
    },
    {
      "id": "mk_15",
      "unitId": 16,
      "case": "Para permitir que la Registraduría verifique en tiempo real las inhabilidades de jurados de votación en el SIRI, ¿cuál es el mecanismo técnico y seguro conforme a la política de Gobierno Digital?",
      "options": [
        "Entregar una copia de la base de datos completa en un disco duro externo cada mes.",
        "Disponer un servicio web interoperable seguro (API REST) con autenticación mutua, cifrado y contrato semántico estandarizado a través de X-Road.",
        "Compartir el usuario de administrador general por llamada telefónica."
      ],
      "correct": 1,
      "explanation": "El Marco de Interoperabilidad gubernamental exige el uso de servicios web (APIs) desacoplados, cifrados y con autenticación robusta para el intercambio seguro de datos entre entidades."
    }
  ],
  "mockExamBehavioral": [
    {
      "id": "mb_1",
      "competencia": "Pensamiento Conceptual (Nivel A)",
      "case": "La DAEADI debe estructurar un modelo de interoperabilidad entre sistemas disciplinarios con esquemas conceptuales incompatibles.",
      "question": "¿Cuál acción evidencia un PENSAMIENTO CONCEPTUAL en el nivel superior?",
      "options": [
        "Imponer que la otra entidad modifique todo su sistema sin importar el impacto.",
        "Diseñar un modelo ontológico intermedio de mapeo semántico que traduzca las relaciones conceptuales entre ambas entidades facilitando la integración sin alterar sus sistemas de origen.",
        "Suspender el proyecto y continuar con cotejos manuales en papel."
      ],
      "correct": 1,
      "explanation": "El Pensamiento Conceptual Nivel A implica la capacidad de abstraer la complejidad y formular modelos integradores que articulen soluciones estructurales."
    },
    {
      "id": "mb_2",
      "competencia": "Orientación a Resultados (Nivel A)",
      "case": "Se presenta una falla en los servidores a tres días de radicar el informe de gestión de la entidad ante el Congreso.",
      "question": "¿Cómo debe actuar el profesional para demostrar ORIENTACIÓN A RESULTADOS Nivel A?",
      "options": [
        "Esperar a que termine la vacancia judicial para que otros revisen.",
        "Articular un plan de contingencia técnico inmediato, priorizar los procesos de cómputo críticos y monitorear hasta garantizar la entrega del informe en el plazo legal.",
        "Justificar formalmente que la tecnología falló y abstenerse de entregar el reporte."
      ],
      "correct": 1,
      "explanation": "La Orientación a Resultados Nivel A se traduce en tenacidad, iniciativa y superación de contingencias técnicas para asegurar el cumplimiento de las metas institucionales."
    },
    {
      "id": "mb_3",
      "competencia": "Investigación (Nivel B)",
      "case": "Un reporte mensual muestra una caída anómala e inexplicable del 70% en las quejas registradas en una región.",
      "question": "¿Qué conducta evidencia la competencia de INVESTIGACIÓN Nivel B?",
      "options": [
        "Aceptar el dato sin verificar y felicitar a la región.",
        "Indagar de forma metódica y rigurosa: revisar logs de sincronización, contrastar con radicaciones físicas y consultar con los administradores territoriales para identificar la causa raíz.",
        "Modificar los datos en Excel para que no se note la caída."
      ],
      "correct": 1,
      "explanation": "La Investigación Nivel B implica curiosidad sistemática, verificación crítica de datos y búsqueda de evidencia empírica ante cualquier discrepancia."
    },
    {
      "id": "mb_4",
      "competencia": "Cumplimiento de Parámetros de Trabajo (Nivel B)",
      "case": "Un superior le solicita modificar directamente una tabla en producción sin registrar el ticket de cambio en el sistema.",
      "question": "¿Cómo debe actuar el servidor?",
      "options": [
        "Hacer el cambio de inmediato sin dejar rastro.",
        "Explicar con asertividad que los protocolos de seguridad exigen registro previo y respaldo, tramitando la solicitud mediante la vía prioritaria contemplada en el manual.",
        "Denunciar penalmente al superior delante de todos sus compañeros en un pasillo."
      ],
      "correct": 1,
      "explanation": "El Cumplimiento de Parámetros de Trabajo Nivel B exige apego riguroso a los manuales y estándares técnicos, canalizando requerimientos urgentes dentro del marco formal."
    },
    {
      "id": "mb_5",
      "competencia": "Responsabilidad con la Organización (Nivel B)",
      "case": "En una reunión social, una persona le ofrece dinero para conocer si un político tiene investigaciones preliminares en curso.",
      "question": "¿Cuál es la conducta ética ineludible?",
      "options": [
        "Aceptar el dinero prometiendo discreción.",
        "Rechazar categóricamente la propuesta, mantener estricta reserva institucional y denunciar el intento de soborno ante las autoridades competentes.",
        "Darle datos falsos para salir del paso."
      ],
      "correct": 1,
      "explanation": "La Responsabilidad con la Organización Nivel B demanda lealtad institucional, defensa de la reserva legal y ética pública inquebrantable."
    },
    {
      "id": "mb_6",
      "competencia": "Organización del Trabajo (Nivel B)",
      "case": "El profesional enfrenta simultáneamente un derecho de petición con vencimiento en 24 horas y el diseño de un modelo de machine learning con entrega en 15 días.",
      "question": "¿Cómo organiza sus prioridades?",
      "options": [
        "Dedicar todo el día al modelo de machine learning porque es más interesante.",
        "Priorizar la atención del derecho de petición para evitar el vencimiento del término legal y configurar luego bloques de trabajo dedicados para el avance del modelo.",
        "No hacer nada y esperar a que el coordinador le asigne las tareas."
      ],
      "correct": 1,
      "explanation": "La Organización del Trabajo Nivel B exige priorizar tareas por impacto legal (los términos perentorios son improrrogables) y planificar metódicamente el tiempo."
    }
  ]
};
