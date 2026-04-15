import { useState, useEffect, useMemo, useCallback } from 'react'
import { useFavoritas } from '../context/FavoritasContext'

interface Receta {
  id: number
  nombre: string
  descripcion: string
  imagen: string
  categoria: string
  ingredientes: string[]
  pasos: string[]
}

function useRecetas() {
  const [recetas, setRecetas] = useState<Receta[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const [categoria, setCategoria] = useState('Todas')
  const [busqueda, setBusqueda] = useState('')
  const [orden, setOrden] = useState<"az" | "za" | "none">("none")
  const [mostrarFavoritas, setMostrarFavoritas] = useState(false)

  const { esFavorita } = useFavoritas()

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/recetas?t=' + Date.now())
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

  const recetasFiltradas = useMemo(() => {
    let resultado = [...recetas]

    if (mostrarFavoritas) {
      resultado = resultado.filter((r) => esFavorita(r.id))
    }

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
  }, [recetas, categoria, busqueda, mostrarFavoritas, orden, esFavorita])

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
    setOrden((prev) => (prev === 'az' ? 'za' : 'az'))
  }, [])

  const recetaAleatoria = () => {
    if (recetas.length === 0) return null
    return recetas[Math.floor(Math.random() * recetas.length)]
  }

  return {
    recetas: recetasFiltradas,
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
  }
}

export default useRecetas
