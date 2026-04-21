# 🏗️ Arquitectura de la aplicación

------------------------------------------------------------------------

## 📦 Componentes principales

### 📄 Páginas

-   **HomePage** --- pantalla principal con las tarjetas de recetas,
    filtros, buscador y orden\
-   **RecipeDetailPage** --- detalle de una receta con ingredientes y
    pasos\
-   **NotFoundPage** --- página 404

### ♻️ Componentes reutilizables

-   **RecipeCard** --- card con foto, título y descripción corta\
-   **FilterBar** --- barra de filtros por categoría y favoritas\
-   **SearchBar** --- buscador por nombre de receta\
-   **FavoriteButton** --- botón para guardar o quitar una receta de
    favoritas\
-   **RecipeSkeleton** --- skeleton para la carga de recetas\
-   **RecipeDetailSkeleton** --- skeleton para la carga del detalle

------------------------------------------------------------------------

## 🧠 Gestión del estado

### 🌍 Estado global

-   **Context API** --- para las favoritas, compartidas entre la card,
    el detalle, el filtro y los hooks

### 🪝 Hooks personalizados

#### `useRecetas`

Maneja:

-   carga de recetas\
-   filtros\
-   búsqueda\
-   orden\
-   favoritas\
-   loading y error\
-   receta aleatoria

#### `useRecetaDetalle`

Maneja:

-   carga de una receta por ID\
-   loading\
-   error\
-   receta no encontrada

### 📍 Estado local

-   Filtro seleccionado\
-   Texto del buscador\
-   Orden A-Z / Z-A

------------------------------------------------------------------------

## 🔌 Endpoints de la API

  --------------------------------------------------------------------------------------
  Método             Endpoint                            Descripción
  ------------------ ----------------------------------- -------------------------------
  GET                /api/v1/recetas                     Devuelve todas las recetas

  GET                /api/v1/recetas/:id                 Devuelve el detalle de una
                                                         receta

  GET                /api/v1/recetas?categoria=Postres   Filtra recetas por categoría

  GET                /api/v1/favoritas                   Devuelve las favoritas

  POST               /api/v1/favoritas/:id               Añade una receta a favoritas

  DELETE             /api/v1/favoritas/:id               Elimina una receta de favoritas
  --------------------------------------------------------------------------------------

------------------------------------------------------------------------

## 💾 Dónde se persisten los datos

### 🖥️ En el servidor

-   Las recetas (servidas desde `recetas.json`)\
-   Las recetas favoritas guardadas en memoria

### 💻 En el cliente

-   Filtro seleccionado\
-   Texto del buscador\
-   Estado de carga (`loading`, `error`, éxito)\
-   Recetas filtradas y ordenadas (derivadas del hook `useRecetas`)

------------------------------------------------------------------------

## 🔄 Diagrama del flujo de datos

``` text
Usuario
   │
   ▼
Frontend (React)
   │  fetch
   ▼
API REST (Express)
   │
   ▼
recetas.json / favoritas
```

-   El usuario interactúa con el frontend.\
-   El frontend hace peticiones a la API de Express.\
-   La API lee los datos de `recetas.json` y gestiona las favoritas.\
-   El frontend actualiza la interfaz según la respuesta.

------------------------------------------------------------------------

## 🌐 Capa de Red (API Client)

La aplicación utiliza una capa de red centralizada en
`src/api/client.ts`.

-   Tipado estricto\
-   Manejo consistente de errores\
-   Separación entre UI y red\
-   API como única fuente de verdad\
-   Base URL tomada de variables de entorno

### 🔗 Base URL

``` ts
const API_BASE_URL = import.meta.env.VITE_API_URL
```

### 🧾 Tipo Receta

``` ts
export interface Receta {
  id: number
  nombre: string
  descripcion: string
  categoria: string
  imagen: string
  ingredientes: string[]
  pasos: string[]
}
```

### 📡 Cliente de API

``` ts
export async function fetchRecetas() {
  const res = await fetch(`${API_BASE_URL}/recetas`)
  if (!res.ok) throw new Error('Error al cargar las recetas')
  return res.json()
}

export async function fetchRecetaById(id: number) {
  const res = await fetch(`${API_BASE_URL}/recetas/${id}`)
  if (!res.ok) throw new Error('No se pudo cargar la receta')
  return res.json()
}

export async function fetchFavoritas() {
  const res = await fetch(`${API_BASE_URL}/favoritas`)
  if (!res.ok) throw new Error('Error al cargar favoritas')
  return res.json()
}

export async function addFavorita(id: number) {
  const res = await fetch(`${API_BASE_URL}/favoritas/${id}`, { method: 'POST' })
  if (!res.ok) throw new Error('No se pudo añadir')
}

export async function removeFavorita(id: number) {
  const res = await fetch(`${API_BASE_URL}/favoritas/${id}`, { method: 'DELETE' })
  if (!res.ok) throw new Error('No se pudo eliminar')
}
```

------------------------------------------------------------------------

## 🎯 Estados en la UI

``` tsx
if (loading) return <RecipeSkeleton />

if (error) {
  return (
    <div>
      <p>Error: {error}</p>
      <button onClick={() => window.location.reload()}>Reintentar</button>
    </div>
  )
}

return (
  <div>
    {recetas.map((r) => (
      <RecipeCard key={r.id} {...r} />
    ))}
  </div>
)
```
