# RecetApp

RecetApp es una aplicación web moderna diseñada para descubrir recetas de cocina de forma rápida, visual y organizada. Permite buscar, filtrar por categoría, ver el detalle de cada receta y guardar favoritas. El proyecto está compuesto por un frontend en React + TypeScript y un backend en Node.js + Express, ambos desplegados en producción.

El objetivo principal es ofrecer una experiencia fluida, accesible y visualmente atractiva para cualquier usuario que quiera explorar recetas de manera sencilla.

## 🌐 URLs del Proyecto

**Frontend (Vercel)**  
https://recetapp-rho.vercel.app

**API / Backend (Railway)**  
https://recetapp-production-bc37.up.railway.app

Ambos servicios se comunican mediante la variable de entorno:

```
VITE_API_URL
```

## 🎯 Objetivo del Proyecto

El propósito de RecetApp es proporcionar una plataforma intuitiva para:

- Explorar recetas mediante tarjetas visuales
- Filtrar por categorías (postres, carnes, pasta, etc.)
- Buscar recetas por nombre
- Ver el detalle completo de cada receta
- Guardar recetas favoritas
- Consultarlas en cualquier momento

La aplicación está pensada para ser rápida, ligera y fácil de usar tanto en móvil como en escritorio.

## 🏗️ Arquitectura General

El proyecto está dividido en dos capas principales:

### 🖥️ Frontend (React + TypeScript + Vite)

El frontend se encarga de la interfaz de usuario, navegación, estado global y comunicación con la API.

#### Tecnologías principales
- React 18
- TypeScript
- Vite
- TailwindCSS
- React Router
- Context API
- Hooks personalizados
- Skeletons para carga progresiva

#### Páginas principales
- HomePage → listado de recetas, filtros, buscador, orden, favoritas
- RecipeDetailPage → detalle completo de una receta
- NotFoundPage → página 404

#### Componentes reutilizables
- RecipeCard
- FilterBar
- SearchBar
- FavoriteButton
- RecipeSkeleton
- RecipeDetailSkeleton

#### Estado global
Gestionado mediante Context API:
- Lista de favoritas
- Funciones para añadir/quitar
- Sincronización con backend

#### Hooks personalizados

**useRecetas**
- Carga inicial de recetas
- Filtrado por categoría
- Búsqueda por nombre
- Orden A-Z / Z-A
- Filtro de favoritas
- Estados de loading y error
- Función `recetaAleatoria()`

**useRecetaDetalle**
- Carga de una receta por ID
- Manejo de loading
- Manejo de error
- Pantalla personalizada de “Receta no encontrada”

#### API centralizada
Toda la comunicación con el backend pasa por:

```
src/api/client.ts
```

---

### 🧩 Backend (Node.js + Express + TypeScript)

El backend expone una API REST que sirve recetas y gestiona favoritas.

#### Tecnologías principales
- Node.js
- Express
- TypeScript
- CORS
- Railway (deploy)

#### Estructura modular
- Rutas → definen endpoints
- Controladores → validan y procesan requests
- Servicios → lógica de negocio
- Datos → recetas.json

#### Favoritas
Se almacenan en memoria del servidor (suficiente para un proyecto académico).

---

## 📡 Endpoints Principales de la API

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | /api/v1/recetas | Lista todas las recetas |
| GET | /api/v1/recetas/:id | Devuelve una receta concreta |
| GET | /api/v1/recetas?categoria=X | Filtra por categoría |
| GET | /api/v1/favoritas | Devuelve IDs favoritas |
| POST | /api/v1/favoritas/:id | Añade una favorita |
| DELETE | /api/v1/favoritas/:id | Elimina una favorita |

### Ejemplo de respuesta de /recetas

```json
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

---

## 🧠 Gestión del Estado

### Context API (Favoritas)

- `favoritas: number[]`
- `agregarFavorita(id)`
- `quitarFavorita(id)`
- `esFavorita(id)`

Se sincroniza automáticamente con el backend.

### Hooks personalizados

**useRecetas**
- Cargar recetas desde la API
- Filtrar por categoría
- Buscar por nombre
- Ordenar
- Filtrar favoritas
- Manejar loading y error
- Devolver receta aleatoria

**useRecetaDetalle**
- Cargar receta por ID
- Manejar loading
- Manejar error
- Mostrar pantalla personalizada si no existe

---

## 🧭 Rutas y Navegación

| Ruta | Página | Descripción |
|------|--------|-------------|
| / | HomePage | Listado de recetas con filtros y buscador |
| /receta/:id | RecipeDetailPage | Detalle completo de una receta |
| * | NotFoundPage | Página 404 |

---

## 🧩 Componentes Principales

- **RecipeCard** → Tarjeta visual con imagen, nombre, categoría y botón de favoritas.
- **FilterBar** → Botones para filtrar por categoría o favoritas.
- **SearchBar** → Input controlado para buscar recetas por nombre.
- **FavoriteButton** → Corazón relleno/vacío según si la receta está en favoritas.

### Skeletons
- RecipeSkeleton
- RecipeDetailSkeleton

---

## 🧪 Testing

### Interfaz
- Carga de recetas
- Navegación entre páginas
- Botón de volver
- Comportamiento del buscador
- Filtros por categoría
- Favoritas funcionando
- Pantalla de receta no encontrada

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

## 📁 Estructura del Proyecto

```
RECETAPP/
│
├── dist/
├── docs/
├── public/
├── server/
├── src/
├── README.md
```

---

## 🚀 Instalación y Ejecución

### Frontend

```bash
npm install
```

Crear `.env.local`:

```
VITE_API_URL=http://localhost:3000/api/v1
```

Ejecutar:

```bash
npm run dev
```

### Backend

```bash
cd server
npm install
npm run dev
```

---

## ☁️ Deploy

### Frontend
Desplegado en Vercel.

### Backend
Desplegado en Railway, con CORS habilitado.

---

## 📚 Documentación Completa (en /docs)

- Metodologías (Agile, Scrum, Kanban)
- API REST
- Componentes
- Context y estado global
- Despliegue
- Arquitectura y diseño
- Formularios
- Hooks
- Idea del proyecto
- Gestión del proyecto
- Retrospectiva
- Routing
- Testing

---

## 📄 Licencia

Proyecto académico / educativo.
