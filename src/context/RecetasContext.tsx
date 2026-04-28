import { createContext, useState, useCallback, useContext, useEffect, useMemo } from 'react'
import { fetchRecetas } from '../api/client'
import type { Receta } from '../types'

interface RecetasContextType {
  recetas: Receta[]
  recetasFiltradas: Receta[]
  loading: boolean
  error: string | null
  categoria: string
  busqueda: string
  orden: 'az' | 'za' | 'none'
  mostrarFavoritas: boolean
  handleCategoriaChange: (categoria: string) => void
  handleBusquedaChange: (valor: string) => void
  toggleFavoritas: () => void
  toggleOrden: () => void
  recetaAleatoria: () => Receta | null
}

const RecetasContext = createContext<RecetasContextType | null>(null)

function RecetasProvider({ children }: { children: React.ReactNode }) {
  const [recetas, setRecetas] = useState<Receta[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [categoria, setCategoria] = useState('Todas')
  const [busqueda, setBusqueda] = useState('')
  const [orden, setOrden] = useState<'az' | 'za' | 'none'>('none')
  const [mostrarFavoritas, setMostrarFavoritas] = useState(false)

  useEffect(() => {
    if (recetas.length > 0) return
    setLoading(true)
    setError(null)
    fetchRecetas()
      .then((data) => {
        setRecetas(data)
        setLoading(false)
      })
      .catch((err: Error) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

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
    if (orden === 'az') {
      resultado.sort((a, b) => a.nombre.localeCompare(b.nombre))
    }
    if (orden === 'za') {
      resultado.sort((a, b) => b.nombre.localeCompare(a.nombre))
    }
    return resultado
  }, [recetas, categoria, busqueda, orden])

  const handleCategoriaChange = useCallback((nuevaCategoria: string) => {
    setCategoria(nuevaCategoria)
  }, [])

  const handleBusquedaChange = useCallback((valor: string) => {
    setBusqueda(valor)
  }, [])

  const toggleFavoritas = useCallback(() => {
    setMostrarFavoritas((prev) => !prev)
  }, [])

  const toggleOrden = useCallback(() => {
    const siguiente: Record<'none' | 'az' | 'za', 'az' | 'za' | 'none'> = {
      none: 'az',
      az: 'za',
      za: 'none'
    }
    setOrden((prev) => siguiente[prev])
  }, [])

  const recetaAleatoria = useCallback(() => {
    if (recetas.length === 0) return null
    return recetas[Math.floor(Math.random() * recetas.length)]
  }, [recetas])

  return (
    <RecetasContext.Provider value={{
      recetas,
      recetasFiltradas,
      loading,
      error,
      categoria,
      busqueda,
      orden,
      mostrarFavoritas,
      handleCategoriaChange,
      handleBusquedaChange,
      toggleFavoritas,
      toggleOrden,
      recetaAleatoria,
    }}>
      {children}
    </RecetasContext.Provider>
  )
}

function useRecetasContext() {
  const context = useContext(RecetasContext)
  if (!context) throw new Error('useRecetasContext debe usarse dentro de RecetasProvider')
  return context
}

export { RecetasProvider, useRecetasContext }