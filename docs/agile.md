# Metodologías de desarrollo: Agile, Scrum y Kanban

## ¿Qué es Agile?

Agile es una **filosofía de trabajo**, no una herramienta concreta. La idea central es trabajar en ciclos cortos, entregar valor poco a poco y adaptarse cuando las cosas cambian. Sus 4 valores clave son: personas sobre procesos, software funcionando sobre documentación, colaboración con el cliente sobre negociación de contratos, y respuesta al cambio sobre seguir un plan rígido.

---

## ¿Qué es Scrum?

Scrum es un framework con reglas claras: define roles, ciclos de trabajo y reuniones concretas.

**Roles:** el **Product Owner** prioriza qué se hace y representa al cliente; el **Scrum Master** facilita el proceso y elimina obstáculos; el **equipo de desarrollo** construye el producto.

**Sprints:** ciclos de trabajo de 1 a 4 semanas. Al inicio se planifica qué se va a hacer, durante el sprint hay una reunión diaria de 15 minutos, y al final se hace una **review** donde se presenta el trabajo al cliente para recibir feedback, y una **retrospectiva** donde el equipo reflexiona sobre cómo mejorar.

**Backlog:** lista de todo lo que hay que hacer en el producto, ordenada por prioridad. Al inicio de cada sprint se selecciona un subconjunto de esa lista para trabajar durante ese ciclo.

---

## ¿Qué es Kanban?

Kanban es un método visual de gestión del trabajo. Se basa en un **tablero con columnas** que representan fases del proceso (por ejemplo: "Por hacer", "En progreso", "Hecho"). Cada tarea es una tarjeta que avanza de izquierda a derecha hasta completarse.

No hay sprints ni ciclos fijos: el trabajo fluye de forma continua. La clave está en los **límites WIP** (trabajo en curso): cada columna tiene un máximo de tareas simultáneas. Si se llena, hay que resolver ese cuello de botella antes de empezar algo nuevo. La idea es terminar lo que tienes antes de coger algo más.

---

## Diferencias entre Scrum y Kanban

| | Scrum | Kanban |
|---|---|---|
| **Ritmo** | Sprints de duración fija | Flujo continuo |
| **Roles** | Definidos (PO, SM, equipo) | Ninguno |
| **Cambios** | No se permiten dentro del sprint | En cualquier momento |
| **Tablero** | Se resetea cada sprint | Permanente |

Scrum da más estructura y previsibilidad. Kanban es más flexible y fácil de adoptar.

---

## ¿Cuándo usar cada uno?

**Scrum** encaja cuando estás construyendo un producto desde cero, el trabajo se puede planificar en bloques, el equipo es estable y hay un cliente disponible para dar feedback regular. También es ideal si el equipo es nuevo en Agile y necesita una estructura clara.

**Kanban** encaja cuando el trabajo llega de forma impredecible (soporte, mantenimiento, DevOps), las tareas son muy variadas o el equipo trabaja en varios proyectos a la vez y necesita responder rápido.

Si ninguno encaja del todo, existe **Scrumban**: un híbrido que combina la estructura de Scrum con la flexibilidad de Kanban, útil cuando hay mezcla de trabajo planificado y reactivo.