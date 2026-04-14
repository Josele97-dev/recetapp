# Hooks

## useState

Se usa para gestionar estado local en los componentes y hooks. En RecetApp lo usamos para guardar las recetas, el estado de carga, los errores, la categoría activa y el texto del buscador.

```ts
const [recetas, setRecetas] = useState<Receta[]>([])
const [loading, setLoading] = useState(true)
const [error, setError] = useState<string | null>(null)
const [categoria, setCategoria] = useState('Todas')
const [busqueda, setBusqueda] = useState('')
```

---

## useEffect

Se usa para ejecutar efectos secundarios, como llamadas a la API. En RecetApp lo usamos para cargar las recetas del backend cuando el componente se monta. El array vacío `[]` al final indica que solo se ejecuta una vez.

```ts
useEffect(() => {
  fetch('http://localhost:3000/api/v1/recetas')
    .then((res) => res.json())
    .then((data) => {
      setRecetas(data)
      setLoading(false)
    })
    .catch(() => {
      setError('Error al cargar las recetas')
      setLoading(false)
    })
}, [])
```

---

## useMemo

Se usa para optimizar cálculos costosos. En RecetApp lo usamos para filtrar las recetas por categoría y búsqueda. Solo recalcula cuando cambian las dependencias (`recetas`, `categoria` o `busqueda`), evitando cálculos innecesarios en cada render.

```ts
const recetasFiltradas = useMemo(() => {
  return recetas
    .filter((r) => categoria === 'Todas' || r.categoria === categoria)
    .filter((r) => r.nombre.toLowerCase().includes(busqueda.toLowerCase()))
}, [recetas, categoria, busqueda])
```

---

## useCallback

Se usa para evitar que las funciones se recreen en cada render. En RecetApp lo usamos para las funciones que manejan el cambio de categoría y el buscador.

```ts
const handleCategoriaChange = useCallback((nuevaCategoria: string) => {
  setCategoria(nuevaCategoria)
}, [])

const handleBusquedaChange = useCallback((valor: string) => {
  setBusqueda(valor)
}, [])
```

---

## Custom Hook: useRecetas

Hook reutilizable que centraliza toda la lógica de las recetas: carga, filtrado por categoría y búsqueda. Cualquier página que necesite recetas puede usarlo.

**Devuelve:**
| Valor | Tipo | Descripción |
|-------|------|-------------|
| `recetas` | `Receta[]` | Recetas filtradas |
| `loading` | `boolean` | Si están cargando |
| `error` | `string \| null` | Error si ha fallado |
| `categoria` | `string` | Categoría activa |
| `busqueda` | `string` | Texto del buscador |
| `handleCategoriaChange` | `function` | Cambia la categoría |
| `handleBusquedaChange` | `function` | Cambia la búsqueda |

**Uso:**
```tsx
const { recetas, loading, error, categoria, busqueda, handleCategoriaChange, handleBusquedaChange } = useRecetas()
```