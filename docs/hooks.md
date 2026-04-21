# Hooks

------------------------------------------------------------------------

## useState

Se usa para gestionar estado local en los componentes y en los hooks
personalizados.

En RecetApp se usa para:

-   categoría activa\
-   texto del buscador\
-   orden A-Z / Z-A\
-   mostrar favoritas\
-   loading y error\
-   receta cargada en el detalle

### Ejemplo real dentro de `useRecetas`

``` ts
const [categoria, setCategoria] = useState('Todas')
const [busqueda, setBusqueda] = useState('')
const [orden, setOrden] = useState<'az' | 'za' | 'none'>('none')
const [mostrarFavoritas, setMostrarFavoritas] = useState(false)
```

------------------------------------------------------------------------

## useEffect

Se usa para ejecutar efectos secundarios, como cargar datos desde la
API.

### En `useRecetas`

``` ts
useEffect(() => {
  fetchRecetas()
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

### En `useRecetaDetalle`

``` ts
useEffect(() => {
  fetchRecetaById(id)
    .then((data) => {
      setReceta(data)
      setLoading(false)
    })
    .catch(() => {
      setError('No se pudo cargar la receta')
      setLoading(false)
    })
}, [id])
```

------------------------------------------------------------------------

## useMemo

Se usa para optimizar cálculos derivados.

En RecetApp se usa para:

-   filtrar por categoría\
-   filtrar por búsqueda\
-   ordenar\
-   filtrar favoritas

### Ejemplo real

``` ts
const recetasFiltradas = useMemo(() => {
  let resultado = [...recetas]

  if (categoria !== 'Todas') {
    resultado = resultado.filter((r) => r.categoria === categoria)
  }

  if (busqueda.trim() !== '') {
    resultado = resultado.filter((r) =>
      r.nombre.toLowerCase().includes(busqueda.toLowerCase())
    )
  }

  if (mostrarFavoritas) {
    resultado = resultado.filter((r) => favoritas.includes(r.id))
  }

  if (orden === 'az') resultado.sort((a, b) => a.nombre.localeCompare(b.nombre))
  if (orden === 'za') resultado.sort((a, b) => b.nombre.localeCompare(a.nombre))

  return resultado
}, [recetas, categoria, busqueda, mostrarFavoritas, orden, favoritas])
```

------------------------------------------------------------------------

## useCallback

Se usa para evitar recrear funciones en cada render.

### Ejemplos reales

``` ts
const handleCategoriaChange = useCallback((nuevaCategoria: string) => {
  setCategoria(nuevaCategoria)
}, [])

const handleBusquedaChange = useCallback((valor: string) => {
  setBusqueda(valor)
}, [])

const toggleOrden = useCallback(() => {
  setOrden((prev) => (prev === 'az' ? 'za' : prev === 'za' ? 'none' : 'az'))
}, [])
```

------------------------------------------------------------------------

## 🔧 Custom Hook: useRecetas

Hook principal que centraliza toda la lógica de la HomePage.

### Incluye:

-   carga de recetas\
-   loading y error\
-   filtro por categoría\
-   búsqueda\
-   orden A-Z / Z-A\
-   filtro de favoritas\
-   receta aleatoria\
-   funciones para actualizar cada estado

### Devuelve:

  Valor                   Tipo                     Descripción
  ----------------------- ------------------------ --------------------------------------
  recetas                 Receta\[\]               Recetas filtradas y ordenadas
  loading                 boolean                  Estado de carga
  error                   string \| null           Error si falla la API
  categoria               string                   Categoría activa
  busqueda                string                   Texto del buscador
  orden                   'az' \| 'za' \| 'none'   Orden actual
  mostrarFavoritas        boolean                  Si se muestran solo favoritas
  handleCategoriaChange   function                 Cambia la categoría
  handleBusquedaChange    function                 Cambia la búsqueda
  toggleOrden             function                 Cambia el orden
  toggleFavoritas         function                 Activa/desactiva filtro de favoritas
  recetaAleatoria         function                 Devuelve una receta aleatoria

------------------------------------------------------------------------

## Custom Hook: useRecetaDetalle

Hook para cargar una receta individual en la página de detalle.

### Incluye:

-   carga por ID\
-   loading\
-   error\
-   receta no encontrada\
-   integración con favoritas

### Devuelve:

  Valor            Tipo             Descripción
  ---------------- ---------------- --------------------------------
  receta           Receta \| null   Receta cargada
  loading          boolean          Estado de carga
  error            string \| null   Error si falla la API
  esFavorita       boolean          Si la receta está en favoritas
  toggleFavorita   function         Añadir o quitar favorita
