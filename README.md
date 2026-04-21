# RecetApp

RecetApp es una aplicación web para descubrir recetas de cocina de forma rápida, visual y organizada. Permite buscar, filtrar por categoría, ver el detalle de cada receta y guardar favoritas. El proyecto incluye un frontend en React y un backend en Node.js + Express, ambos desplegados en producción.

---

## URLs del Proyecto

### Frontend (Vercel)
https://recetapp-rho.vercel.app

### API / Backend (Railway)
https://recetapp-production-bc37.up.railway.app

Ambos servicios están conectados mediante la variable de entorno `VITE_API_URL`.

---

## Objetivo del Proyecto

Crear una aplicación sencilla, rápida y accesible para encontrar recetas según categoría, nombre o preferencias personales.

El usuario puede:

- Navegar por recetas con tarjetas visuales  
- Filtrar por categoría  
- Buscar por nombre  
- Ver el detalle completo de cada receta  
- Guardar recetas favoritas  
- Consultarlas en cualquier momento  

---

## Arquitectura General

El proyecto está dividido en dos capas principales:

### Frontend (React + TypeScript + Vite)

- Páginas: HomePage, RecipeDetailPage, NotFoundPage  
- Componentes reutilizables: RecipeCard, FilterBar, SearchBar, FavoriteButton  
- Estado global con Context API para gestionar favoritas  
- Hooks personalizados para cargar y filtrar recetas  
- Estilos con TailwindCSS  
- Navegación con React Router  

### Backend (Node.js + Express + TypeScript)

- Endpoints REST para recetas y favoritas  
- Controladores, servicios y rutas separados  
- Datos servidos desde `recetas.json`  
- Favoritas almacenadas en memoria del servidor  
- Arquitectura modular y escalable  

---

## Endpoints Principales de la API

| Método | Endpoint | Descripción |
|--------|--------|------------|
| GET | /api/v1/recetas | Lista todas las recetas |
| GET | /api/v1/recetas/:id | Devuelve una receta concreta |
| GET | /api/v1/recetas?categoria=X | Filtra por categoría |
| GET | /api/v1/favoritas | Devuelve IDs favoritas |
| POST | /api/v1/favoritas/:id | Añade una favorita |
| DELETE | /api/v1/favoritas/:id | Elimina una favorita |

---

## Gestión del Estado

### Context API

Usado para gestionar las recetas favoritas en toda la aplicación.

Comparte:

- `favoritas: number[]`  
- `agregarFavorita(id)`  
- `quitarFavorita(id)`  
- `esFavorita(id)`  

### Estado local

- Categoría activa  
- Texto del buscador  
- Estado de carga y error  

### Custom Hook: useRecetas

Centraliza:

- Carga de recetas  
- Filtrado por categoría  
- Búsqueda por nombre  
- Estados de loading y error  

---

## Rutas y Navegación

| Ruta | Página | Descripción |
|------|------|------------|
| / | HomePage | Listado de recetas con filtros y buscador |
| /receta/:id | RecipeDetailPage | Detalle completo de una receta |
| * | NotFoundPage | Página 404 |

---

## Componentes Principales

### RecipeCard
Tarjeta visual con imagen, nombre, categoría y botón de favoritas.

### FilterBar
Botones para filtrar por categoría o favoritas.

### SearchBar
Input controlado para buscar recetas por nombre.

### FavoriteButton
Corazón relleno/vacío según si la receta está en favoritas.

---

## Testing

### Interfaz
- Carga de recetas  
- Navegación entre páginas  
- Botón de volver  
- Comportamiento del buscador  
- Filtros por categoría  

### Responsive
- Móvil: tarjetas en columna  
- Tablet: grid estable  
- Desktop: diseño amplio  

### API
- Endpoints funcionando  
- Manejo de errores 404 y 500  
- Favoritas funcionando  

### Consola
- Sin errores de React  
- Peticiones correctas a la API  

---

## Estructura del Proyecto

```
RECETAPP/
│
├── dist/
│
├── docs/
│   ├── agile.md
│   ├── api.md
│   ├── components.md
│   ├── context.md
│   ├── deployment.md
│   ├── design.md
│   ├── forms.md
│   ├── hooks.md
│   ├── idea.md
│   ├── project-management.md
│   ├── retrospective.md
│   ├── routing.md
│   └── testing.md
│
├── public/
│
├── server/
│   ├── data/
│   │   └── recetas.json
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   │   ├── favoritas.controller.ts
│   │   │   └── recetas.controller.ts
│   │   ├── routes/
│   │   │   ├── favoritas.routes.ts
│   │   │   └── recetas.routes.ts
│   │   ├── services/
│   │   │   ├── favoritas.service.ts
│   │   │   └── recetas.service.ts
│   │   └── index.ts
│   ├── package-lock.json
│   ├── package.json
│   └── tsconfig.json
│
├── src/
│   ├── api/
│   │   └── client.ts
├── components/
│   ├── FavoriteButton.tsx
│   ├── FilterBar.tsx
│   ├── RecipeCard.tsx
│   ├── RecipeDetailSkeleton.tsx
│   ├── RecipeSkeleton.tsx
│   └── SearchBar.tsx
│   ├── context/
│   │   └── FavoritasContext.tsx
│   ├── hooks/
│   │   └── useRecetas.ts
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── NotFoundPage.tsx
│   │   └── RecipeDetailPage.tsx
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## Instalación y Ejecución

### Frontend

1. Instala las dependencias:
```bash
npm install
```

2. Crea el archivo `.env.local` en la raíz del proyecto con el siguiente contenido: 

```
VITE_API_URL=http://localhost:3000/api/v1
```

> Este archivo no se incluye en el repositorio por seguridad.

3. Arranca el servidor de desarrollo:
```bash
npm run dev
```

Frontend disponible en `http://localhost:5173`

### Backend

1. Entra en la carpeta del servidor:
```bash
cd server
```

2. Instala las dependencias:
```bash
npm install
```

3. Arranca el servidor:
```bash
npm run dev
```

Backend disponible en `http://localhost:3000`

## Deploy

### Frontend
Desplegado en Vercel.

### Backend
Desplegado en Railway con CORS habilitado.

---

## Documentación Completa (en /docs)

- [Metodologías (Agile, Scrum, Kanban)](docs/agile.md)
- [API REST](docs/api.md)
- [Componentes](docs/components.md)
- [Context y estado global](docs/context.md)
- [Despliegue](docs/deployment.md)
- [Arquitectura y diseño](docs/design.md)
- [Formularios](docs/forms.md)
- [Hooks](docs/hooks.md)
- [Idea del proyecto](docs/idea.md)
- [Gestión del proyecto](docs/project-management.md)
- [Retrospective](docs/retrospective.md)
- [Routing](docs/routing.md)
- [Testing](docs/testing.md)


---

## Licencia

Proyecto académico / educativo.
