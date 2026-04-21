import { useEffect, useState } from 'react'

interface Receta {
  id: number
  nombre: string
  descripcion: string
  imagen: string
  categoria: string
  ingredientes: string[]
  pasos: string[]
}

export function useRecetaDetalle(id?: string) {
  const [receta, setReceta] = useState<Receta | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return

    setLoading(true)
    setError(null)

    fetch(`${import.meta.env.VITE_API_URL}/recetas/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setReceta(data)
        setLoading(false)
      })
      .catch(() => {
        setError('Error al cargar la receta')
        setLoading(false)
      })
  }, [id])

  return { receta, loading, error }
}
