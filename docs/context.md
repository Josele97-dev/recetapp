# Context y estado global

## ¿Por qué Context?

En RecetApp las favoritas se usan en varios sitios: en la `RecipeCard` para mostrar el botón, en la `RecipeDetailPage` para saber si está guardada, y en el `FilterBar` para filtrar por favoritas. Sin Context habría que pasar las favoritas como props de componente en componente, lo que se vuelve complicado rápidamente. Con Context cualquier componente puede acceder a las favoritas directamente.

---

## FavoritasContext

Gestiona el estado global de las recetas favoritas y lo comparte con toda la aplicación.

**Lo que comparte:**
| Valor | Tipo | Descripción |
|-------|------|-------------|
| `favoritas` | `number[]` | Array con los ids de las recetas favoritas |
| `agregarFavorita` | `(id: number) => void` | Añade una receta a favoritas |
| `quitarFavorita` | `(id: number) => void` | Elimina una receta de favoritas |
| `esFavorita` | `(id: number) => boolean` | Comprueba si una receta es favorita |

---

## FavoritasProvider

Envuelve la aplicación en `main.tsx` para que todos los componentes tengan acceso al Context.

```tsx
<FavoritasProvider>
  <App />
</FavoritasProvider>
```

---

## useFavoritas

Custom hook para consumir el Context fácilmente desde cualquier componente.

```tsx
const { favoritas, agregarFavorita, quitarFavorita, esFavorita } = useFavoritas()
```

---

## ¿Cuándo usar Context?

Context es útil cuando un estado necesita ser compartido entre varios componentes que están en distintos niveles del árbol de componentes. En RecetApp lo usamos para las favoritas porque se necesitan en la card, en el detalle y en el filtro. Para estados locales que solo usa un componente, es mejor usar `useState` directamente.