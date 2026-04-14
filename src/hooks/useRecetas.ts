import { useState, useEffect, useMemo, useCallback } from 'react'

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

  const recetasFiltradas = useMemo(() => {
    return recetas
      .filter((r) => categoria === 'Todas' || r.categoria === categoria)
      .filter((r) => r.nombre.toLowerCase().includes(busqueda.toLowerCase()))
  }, [recetas, categoria, busqueda])

  const handleCategoriaChange = useCallback((nuevaCategoria: string) => {
    setCategoria(nuevaCategoria)
  }, [])

  const handleBusquedaChange = useCallback((valor: string) => {
    setBusqueda(valor)
  }, [])

  return {
    recetas: recetasFiltradas,
    loading,
    error,
    categoria,
    busqueda,
    handleCategoriaChange,
    handleBusquedaChange,
  }
}

export default useRecetas