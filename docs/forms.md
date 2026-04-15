# Formularios e interacción

## Buscador de recetas

El buscador es el formulario controlado principal de RecetApp. Está implementado en el componente `SearchBar` y gestionado desde `useRecetas`.

### Componente SearchBar

```tsx
interface Props {
  valor: string
  onChange: (valor: string) => void
}

function SearchBar({ valor, onChange }: Props) {
  return (
    <input
      type="text"
      placeholder="Buscar receta..."
      value={valor}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-orange-400 text-sm"
    />
  )
}
```

### Gestión del estado

El estado del input se gestiona en `useRecetas` con `useState` y `useCallback`:

```ts
const [busqueda, setBusqueda] = useState('')

const handleBusquedaChange = useCallback((valor: string) => {
  setBusqueda(valor)
}, [])
```

### Validación y mensajes

Si el buscador no encuentra resultados se muestra un mensaje al usuario:

```tsx
{recetas.length === 0 && (
  <p className="text-center text-gray-500 col-span-3 mt-8">
    No se han encontrado recetas
  </p>
)}
```

Si el buscador está vacío se muestran todas las recetas disponibles.