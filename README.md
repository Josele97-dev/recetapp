# RecetApp

RecetApp es una aplicación web moderna diseñada para descubrir recetas
de cocina de forma rápida, visual y organizada. Permite buscar, filtrar
por categoría, ver el detalle de cada receta y guardar favoritas. El
proyecto está compuesto por un frontend en React + TypeScript y un
backend en Node.js + Express, ambos desplegados en producción.

El objetivo principal es ofrecer una experiencia fluida, accesible y
visualmente atractiva para cualquier usuario que quiera explorar recetas
de manera sencilla.

------------------------------------------------------------------------

## URLs del Proyecto

**Frontend (Vercel)**\
https://recetapp-rho.vercel.app

**API / Backend (Railway)**\
https://recetapp-production-bc37.up.railway.app

Ambos servicios se comunican mediante la variable de entorno:

``` env
VITE_API_URL
```

------------------------------------------------------------------------

## Objetivo del Proyecto

El propósito de RecetApp es proporcionar una plataforma intuitiva para:

-   Explorar recetas mediante tarjetas visuales\
-   Filtrar por categorías (postres, carnes, pasta, etc.)\
-   Buscar recetas por nombre\
-   Ver el detalle completo de cada receta\
-   Guardar recetas favoritas\
-   Consultarlas en cualquier momento

La aplicación está pensada para ser rápida, ligera y fácil de usar tanto
en móvil como en escritorio.

------------------------------------------------------------------------

## Arquitectura General

El proyecto está dividido en dos capas principales:

### Frontend (React + TypeScript + Vite)

El frontend se encarga de la interfaz de usuario, navegación, estado
global y comunicación con la API.

#### Tecnologías principales

-   React 18\
-   TypeScript\
-   Vite\
-   TailwindCSS\
-   React Router\
-   Context API\
-   Hooks personalizados\
-   Skeletons para carga progresiva

#### Páginas principales

-   HomePage → listado de recetas, filtros, buscador, orden, favoritas\
-   RecipeDetailPage → detalle completo de una receta\
-   NotFoundPage → página 404

#### Componentes reutilizables

-   RecipeCard\
-   FilterBar\
-   SearchBar\
-   FavoriteButton\
-   HomeSkeleton\
-   RecipeSkeleton\
-   RecipeDetailSkeleton

#### Estado global

Gestionado mediante Context API: - Lista de favoritas\
- Funciones para añadir/quitar\
- Sincronización con backend

#### Hooks personalizados

**useRecetas** - Carga inicial de recetas\
- Filtrado por categoría\
- Búsqueda por nombre\
- Orden A‑Z / Z‑A\
- Filtro de favoritas\
- Estados de loading y error\
- Función `recetaAleatoria()`

**useRecetaDetalle** - Carga de una receta por ID\
- Manejo de loading\
- Manejo de error\
- Pantalla personalizada de "Receta no encontrada"

#### API centralizada

``` ts
src/api/client.ts
```

------------------------------------------------------------------------

### Backend (Node.js + Express + TypeScript)

El backend expone una API REST que sirve recetas y gestiona favoritas.

#### Tecnologías principales

-   Node.js\
-   Express\
-   TypeScript\
-   CORS\
-   Railway (deploy)

#### Estructura modular

-   Rutas → definen endpoints\
-   Controladores → validan y procesan requests\
-   Servicios → lógica de negocio\
-   Datos → recetas.json

#### Favoritas

Se almacenan en memoria del servidor (suficiente para un proyecto
académico).

------------------------------------------------------------------------

## Endpoints Principales de la API

  Método   Endpoint                      Descripción
  -------- ----------------------------- ------------------------------
  GET      /api/v1/recetas               Lista todas las recetas
  GET      /api/v1/recetas/:id           Devuelve una receta concreta
  GET      /api/v1/recetas?categoria=X   Filtra por categoría
  GET      /api/v1/favoritas             Devuelve IDs favoritas
  POST     /api/v1/favoritas/:id         Añade una favorita
  DELETE   /api/v1/favoritas/:id         Elimina una favorita

------------------------------------------------------------------------

## Ejemplo de respuesta de /recetas

``` json
[
  {
    "id": 1,
    "nombre": "Tarta de queso",
    "categoria": "Postres",
    "descripcion": "...",
    "ingredientes": ["..."],
    "pasos": ["..."],
    "imagen": "..."
  }
]
```

------------------------------------------------------------------------

## Gestión del Estado

### Context API (Favoritas)

-   `favoritas: number[]`\
-   `agregarFavorita(id)`\
-   `quitarFavorita(id)`\
-   `esFavorita(id)`

Se sincroniza automáticamente con el backend.

### Hooks personalizados

**useRecetas** - Cargar recetas desde la API\
- Filtrar por categoría\
- Buscar por nombre\
- Ordenar\
- Filtrar favoritas\
- Manejar loading y error\
- Devolver receta aleatoria

**useRecetaDetalle** - Cargar receta por ID\
- Manejar loading\
- Manejar error\
- Mostrar pantalla personalizada si no existe

------------------------------------------------------------------------

## Rutas y Navegación

  Ruta          Página             Descripción
  ------------- ------------------ -------------------------------------------
  /             HomePage           Listado de recetas con filtros y buscador
  /receta/:id   RecipeDetailPage   Detalle completo de una receta
  \*            NotFoundPage       Página 404

------------------------------------------------------------------------

## Componentes Principales

-   RecipeCard → Tarjeta visual con imagen, nombre, categoría y botón de
    favoritas\
-   FilterBar → Botones para filtrar por categoría o favoritas\
-   SearchBar → Input controlado para buscar recetas por nombre\
-   FavoriteButton → Corazón relleno/vacío según favoritas

### Skeletons

-   HomeSkeleton\
-   RecipeSkeleton\
-   RecipeDetailSkeleton

------------------------------------------------------------------------

## Testing

### Interfaz

-   Carga de recetas\
-   Navegación entre páginas\
-   Botón de volver\
-   Comportamiento del buscador\
-   Filtros por categoría\
-   Favoritas funcionando\
-   Pantalla de receta no encontrada

### Responsive

-   Móvil: tarjetas en columna\
-   Tablet: grid estable\
-   Desktop: diseño amplio

### API

-   Endpoints funcionando\
-   Manejo de errores 404 y 500\
-   Favoritas funcionando

### Consola

-   Sin errores de React\
-   Peticiones correctas a la API

------------------------------------------------------------------------

## Estructura del Proyecto

``` bash
RECETAPP/
│
├── dist/                    
│
├── docs/                     
│   ├── agile.md
│   ├── api.md
│   ├── architecture.md       
│   ├── components.md
│   ├── context.md
│   ├── deployment.md
│   ├── forms.md
│   ├── hooks.md
│   ├── idea.md
│   ├── project-management.md
│   ├── retrospective.md
│   ├── routing.md
│   └── testing.md                  
│
├── server/                   
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── data/
│   │   │   └── recetas.json
│   │   └── index.ts
│   ├── package.json
│   └── tsconfig.json
│
├── src/                      
│   ├── api/
│   │   └── client.ts
│   ├── components/
│   │   ├── FavoriteButton.tsx
│   │   ├── FilterBar.tsx
│   │   ├── HomeSkeleton.tsx
│   │   ├── RecipeCard.tsx
│   │   ├── RecipeDetailSkeleton.tsx
│   │   ├── RecipeSkeleton.tsx
│   │   └── SearchBar.tsx
│   ├── context/
│   ├── hooks/
│   ├── pages/
│   ├── types/
│   ├── utils/
│   ├── App.tsx
│   └── main.tsx
│
├── .env.local             
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

------------------------------------------------------------------------

## Instalación y Ejecución

### Frontend

``` bash
npm install
```

Crear `.env.local`:

``` env
VITE_API_URL=http://localhost:3000/api/v1
```

Ejecutar:

``` bash
npm run dev
```

### Backend

``` bash
cd server
npm install
npm run dev
```

------------------------------------------------------------------------

## Deploy

### Frontend

Desplegado en Vercel.

### Backend

Desplegado en Railway, con CORS habilitado.

---

## Documentación Completa (en /docs)

- [Metodologías (Agile, Scrum, Kanban)](docs/agile.md)
- [API REST](docs/api.md)
- [Componentes](docs/components.md)
- [Context y estado global](docs/context.md)
- [Despliegue](docs/deployment.md)
- [Arquitectura](docs/architecture.md)
- [Formularios](docs/forms.md)
- [Hooks](docs/hooks.md)
- [Idea del proyecto](docs/idea.md)
- [Gestión del proyecto](docs/project-management.md)
- [Retrospectiva](docs/retrospective.md)
- [Routing](docs/routing.md)
- [Testing](docs/testing.md)


---

## Licencia

Proyecto académico / educativo.
