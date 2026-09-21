# Plataforma de Estudio y Preparación de Alto Rendimiento
## Concurso Abierto de Méritos No. 121-2026 — Procuraduría General de la Nación
### Empleo: Profesional Universitario (Código 3PU - Grado 15)
- **Dependencia:** Dirección de Apoyo Estratégico, Análisis de Datos de Información (DAEADI)
- **Proceso Misional:** Conocimiento e Innovación
- **Asignación Básica Mensual:** $6.889.867 COP
- **Planta:** Global Bogotá (4 vacantes)
- **Experiencia Exigida:** No requiere experiencia previa

---

## 📌 Descripción del Proyecto

Este repositorio contiene la plataforma interactiva de estudio y preparación técnica-jurídica estructurada específicamente para superar la **Prueba de Competencias Funcionales (70% ELIMINATORIA - Mínimo aprobatorio: 65/100 puntos)** y la **Prueba de Competencias Comportamentales (20% Clasificatoria)** de la Convocatoria No. 121-2026 de la Procuraduría General de la Nación (Resolución 212 de 2026).

La plataforma funciona de manera **100% offline** (sin requerir conexión a internet ni servidores externos) y está diseñada bajo el estándar de **Pruebas de Juicio Situacional (SJT)**, planteando casos reales y dilemas contextualizados en las operaciones de la DAEADI (SIRI, SIM, cruces de bases de datos, peritajes forenses y gobierno de datos).

---

## 🚀 Características Principales de la Plataforma

1. **16 Unidades Temáticas Completas**:
   - Cubre el 100% de los conocimientos esenciales comunes y específicos exigidos en el profesiograma oficial.
   - **144 Fuentes Oficiales**: Leyes, decretos reglamentarios, sentencias de unificación de la Corte Constitucional y Consejo de Estado, directivas PGN y estándares técnicos (ISO 27001, MAE MinTIC, DANE, DNP, AGN, ICONTEC).
   - **64 Módulos Teóricos Profundos**: Desglose conceptual riguroso y casuística de aplicación directa en la DAEADI.
   - **128 Términos de Glosario Especializado**: Vocabulario técnico-jurídico con definiciones de alta precisión.

2. **Mecanismo de Desbloqueo Secuencial al 100% (Mastery Learning)**:
   - La Unidad 01 inicia desbloqueada.
   - Las Unidades 02 a 16 permanecen bloqueadas con candado (🔒).
   - Para desbloquear la siguiente unidad, el aspirante debe responder la evaluación de la unidad previa y alcanzar el **100% de aciertos** (8 de 8 preguntas).
   - En caso de fallar alguna pregunta, el sistema genera un **reporte diagnóstico exhaustivo** con la fundamentación legal y técnica de cada opción errónea, permitiendo el reintento ilimitado hasta lograr el dominio total.

3. **Graduación por Dificultad y Tipología de Reactivos**:
   - Cada pregunta se clasifica y etiqueta visualmente en tiempo real:
     - `🟢 Fácil`: Preguntas conceptuales y normativas directas.
     - `🟡 Media`: Preguntas de inferenciación jurídica y criterio técnico.
     - `🔴 Difícil`: Casos complejos de Juicio Situacional (SJT) con distractores finos.

4. **Simuladores de Examen Integrados**:
   - **Simulacro de Conocimientos Funcionales (70%)**: Evaluación cronometrada multidimensional.
   - **Simulacro de Competencias Comportamentales (20%)**: Evaluación de juicio conductual para el nivel profesional (Pensamiento conceptual, orientación a resultados, investigación, apego a parámetros, responsabilidad organizacional).
   - **Guía de Descarte en Juicio Situacional**: Técnicas analíticas para descartar opciones extremas, ilegales o complacientes en pruebas del Estado.

---

## 📂 Estructura del Repositorio

```
procuraduria/
├── README.md                              # Documentación general del proyecto
├── Plan_Estudio_Procuraduria_3PU15.md     # Documento maestro del plan de estudio
├── view.pdf                               # Documento oficial de la Convocatoria 121-2026
└── plataforma_estudio/                    # Aplicación Web Interactiva
    ├── index.html                         # Interfaz gráfica de usuario
    ├── styles.css                         # Hoja de estilos con tema institucional oscuro
    ├── app.js                             # Lógica de la aplicación, control de estado y exámenes
    └── data.js                            # Banco de datos maestro (16 unidades, fuentes y preguntas)
```

---

## 💻 Instrucciones de Uso

Para ejecutar y utilizar la plataforma:

1. Clona el repositorio en tu máquina local:
   ```bash
   git clone https://github.com/Caleon45/concurso-pgn-121-2026.git
   ```
2. Abre la carpeta del proyecto y haz doble clic sobre el archivo `plataforma_estudio/index.html` en cualquier navegador web moderno (Google Chrome, Microsoft Edge, Mozilla Firefox).
3. ¡Listo! Todo el progreso, unidades desbloqueadas y estadísticas se almacenan localmente en tu navegador (`localStorage`).

---

## ⚖️ Marco Normativo y Legal Clave

- **Constitución Política de 1991**: Arts. 29 (Debido Proceso), 113 (Estructura del Estado), 118 y 277 (Ministerio Público), 209 (Función Administrativa).
- **Decreto Ley 262 de 2000**: Estructura Orgánica y Funcional de la Procuraduría General de la Nación.
- **Ley 1952 de 2019 & Ley 2094 de 2021**: Código General Disciplinario y separación de roles de instrucción y juzgamiento.
- **Sentencia C-030 de 2023**: Control jurisdiccional automático ante el Consejo de Estado para sanciones contra servidores de elección popular.
- **Ley 1437 de 2011 & Ley 1755 de 2015**: Procedimiento administrativo y derecho fundamental de petición.
- **Ley 1581 de 2012 & Ley 1273 de 2009**: Protección de datos personales (Habeas Data) y régimen penal de delitos informáticos.
- **Decreto 1499 de 2017**: Modelo Integrado de Planeación y Gestión (MIPG) y MECI.
- **Ley 80 de 1993 & Ley 1150 de 2007**: Estatuto General de Contratación Estatal.
