# Arquitectura de la aplicación

## Componentes principales

### Páginas
- `HomePage` — pantalla principal con las fotocards de recetas
- `RecipeDetailPage` — detalle de una receta con ingredientes y pasos
- `NotFoundPage` — página 404

### Componentes reutilizables
- `RecipeCard` — card con foto, título y descripción corta
- `FilterBar` — barra de filtros por categoría y favoritas
- `SearchBar` — buscador por nombre de receta
- `FavoriteButton` — botón para guardar o quitar una receta de favoritas

---

## Gestión del estado

- **Context API** — para las favoritas, compartidas entre la card, el detalle y el filtro
- **useState local** — para el filtro seleccionado y el texto del buscador
- **useEffect** — para cargar las recetas desde la API al entrar en la página

---

## Endpoints de la API

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/v1/recetas` | Devuelve todas las recetas |
| GET | `/api/v1/recetas/:id` | Devuelve el detalle de una receta |
| GET | `/api/v1/recetas?categoria=Postres` | Filtra recetas por categoría |
| GET | `/api/v1/favoritas` | Devuelve las favoritas |
| POST | `/api/v1/favoritas/:id` | Añade una receta a favoritas |
| DELETE | `/api/v1/favoritas/:id` | Elimina una receta de favoritas |

---

## Dónde se persisten los datos

### En el servidor:
- Las recetas (servidas desde `recetas.json`)
- Las recetas favoritas guardadas

### En el cliente:
- El filtro seleccionado actualmente
- El texto del buscador
- El estado de carga (loading, error, éxito)

---

## Diagrama del flujo de datos

```
Usuario
   │
   ▼
Frontend (React)
   │  fetch
   ▼
API REST (Express)
   │
   ▼
recetas.json / favoritas.json
```

El usuario interactúa con el frontend. El frontend hace peticiones a la API de Express. La API lee o escribe los datos en los archivos JSON y devuelve la respuesta al frontend, que actualiza la interfaz.

---

# Capa de Red (API Client)

La aplicación utiliza una capa de red centralizada en `src/api/client.ts`.

- Tipado estricto de los datos
- Manejo consistente de errores
- Separación entre lógica de red y UI
- API como única fuente de verdad

---

## Base URL

```ts
const API_BASE_URL = 'http://localhost:3000/api/v1'
```

---

## Tipo Receta

```ts
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

---

## Cliente de API

```ts
export async function fetchRecetas() {
  const res = await fetch(`${API_BASE_URL}/recetas`)
  if (!res.ok) throw new Error('Error al cargar las recetas')
  return res.json()
}

export async function fetchRecetaById(id) {
  const res = await fetch(`${API_BASE_URL}/recetas/${id}`)
  if (!res.ok) throw new Error('No se pudo cargar la receta')
  return res.json()
}

export async function fetchRecetasPorCategoria(categoria) {
  const res = await fetch(`${API_BASE_URL}/recetas?categoria=${encodeURIComponent(categoria)}`)
  if (!res.ok) throw new Error('Error al filtrar recetas')
  return res.json()
}

export async function fetchFavoritas() {
  const res = await fetch(`${API_BASE_URL}/favoritas`)
  if (!res.ok) throw new Error('Error al cargar favoritas')
  return res.json()
}

export async function addFavorita(id) {
  const res = await fetch(`${API_BASE_URL}/favoritas/${id}`, { method: 'POST' })
  if (!res.ok) throw new Error('No se pudo añadir')
}

export async function removeFavorita(id) {
  const res = await fetch(`${API_BASE_URL}/favoritas/${id}`, { method: 'DELETE' })
  if (!res.ok) throw new Error('No se pudo eliminar')
}
```

---

## Estados en la UI

```tsx
if (loading) return <p>Cargando recetas...</p>

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
      <RecipeCard key={r.id} receta={r} />
    ))}
  </div>
)
```
