# Organización del proyecto

## Metodología

Para organizar el desarrollo de RecetApp estoy usando un tablero de **Trello** con una estructura inspirada en Kanban. Las tareas van avanzando de izquierda a derecha por las columnas según su estado.

## Tablero de Trello

El tablero está dividido en 5 columnas:

- **Backlog** — todas las tareas pendientes del proyecto
- **Todo** — tareas seleccionadas para hacer próximamente
- **In Progress** — tareas en las que estoy trabajando ahora mismo
- **Review** — tareas terminadas pendientes de revisión
- **Done** — tareas completamente terminadas

## Organización de las tarjetas

Cada tarjeta representa una funcionalidad del proyecto. Dentro de cada tarjeta hay un checklist con las subtareas técnicas necesarias para completarla. Cuando todas las subtareas están marcadas, la tarjeta pasa a la siguiente columna.

## Estructura del repositorio

El proyecto está organizado en un único repositorio con dos partes diferenciadas:

- `src/` — código del frontend (React + TypeScript + Tailwind)
- `server/` — código del backend (Node.js + Express)
- `docs/` — documentación del proyecto

## Planificación

El proyecto tiene una duración de 2 semanas. La planificación general es:

- **Semana 1** — configuración, arquitectura, componentes principales y backend
- **Semana 2** — favoritas, buscador, responsive, despliegue y documentación