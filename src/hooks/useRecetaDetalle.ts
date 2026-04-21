import { useEffect, useState } from 'react'
import { fetchRecetaById } from '../api/client'
import type { Receta } from '../types'

export function useRecetaDetalle(id?: string) {
  const [receta, setReceta] = useState<Receta | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return

    setLoading(true)
    setError(null)

    fetchRecetaById(Number(id))
      .then((data) => {
        setReceta(data)
        setLoading(false)
      })
      .catch((err: Error) => {
        setError(err.message)
        setLoading(false)
      })
  }, [id])

  return { receta, loading, error }
}
