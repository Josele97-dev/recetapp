# Rutas y navegación

## Configuración

Las rutas están configuradas en `src/App.tsx` usando React Router. El componente `BrowserRouter` envuelve toda la aplicación y `Routes` contiene las rutas definidas.

## Estructura de rutas

| Ruta | Página | Descripción |
|------|--------|-------------|
| `/` | `HomePage` | Pantalla principal con las fotocards de recetas |
| `/receta/:id` | `RecipeDetailPage` | Detalle de una receta concreta |
| `*` | `NotFoundPage` | Página 404 para rutas no encontradas |

## Navegación entre páginas

- Al hacer click en una card en `HomePage` navega a `/receta/:id` usando `useNavigate`
- En `RecipeDetailPage` hay un botón "Volver" que navega a la página anterior con `navigate(-1)`
- En `NotFoundPage` hay un botón que lleva de vuelta al inicio con `navigate('/')`

## Páginas

### HomePage
Pantalla principal de la app. Muestra las fotocards de recetas con el buscador y los filtros por categoría.

### RecipeDetailPage
Muestra el detalle completo de una receta: imagen, categoría, descripción, ingredientes y pasos. Recibe el `id` de la receta por la URL con `useParams`.

### NotFoundPage
Página 404 que se muestra cuando el usuario intenta acceder a una ruta que no existe.