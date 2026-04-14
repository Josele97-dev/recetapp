# Componentes

## RecipeCard

Muestra la información básica de una receta en formato card: foto, categoría, nombre y descripción corta.

**Props:**
| Prop | Tipo | Descripción |
|------|------|-------------|
| `id` | `number` | Identificador de la receta |
| `nombre` | `string` | Nombre de la receta |
| `descripcion` | `string` | Descripción corta |
| `imagen` | `string` | URL de la imagen |
| `categoria` | `string` | Categoría de la receta |

**Uso:**
```tsx
<RecipeCard
  id={1}
  nombre="Brownie de chocolate"
  descripcion="Un brownie esponjoso y húmedo."
  imagen="https://..."
  categoria="Postres"
/>
```

---

## FilterBar

Muestra una fila de botones para filtrar recetas por categoría. El botón activo se resalta en naranja.

**Props:**
| Prop | Tipo | Descripción |
|------|------|-------------|
| `categorias` | `string[]` | Lista de categorías disponibles |
| `categoriaActiva` | `string` | Categoría seleccionada actualmente |
| `onCategoriaChange` | `(categoria: string) => void` | Función que se ejecuta al cambiar de categoría |

**Uso:**
```tsx
<FilterBar
  categorias={['Postres', 'Carnes', 'Pasta']}
  categoriaActiva={categoriaActiva}
  onCategoriaChange={setCategoriaActiva}
/>
```

---

## SearchBar

Campo de búsqueda para filtrar recetas por nombre en tiempo real.

**Props:**
| Prop | Tipo | Descripción |
|------|------|-------------|
| `valor` | `string` | Valor actual del input |
| `onChange` | `(valor: string) => void` | Función que se ejecuta al escribir |

**Uso:**
```tsx
<SearchBar
  valor={busqueda}
  onChange={setBusqueda}
/>
```

---

## FavoriteButton

Botón para guardar o quitar una receta de favoritas. Muestra un corazón relleno si es favorita y vacío si no lo es.

**Props:**
| Prop | Tipo | Descripción |
|------|------|-------------|
| `esFavorita` | `boolean` | Si la receta está en favoritas o no |
| `onClick` | `() => void` | Función que se ejecuta al pulsar el botón |

**Uso:**
```tsx
<FavoriteButton
  esFavorita={esFavorita}
  onClick={handleFavorito}
/>
```