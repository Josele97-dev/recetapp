import { useRecetasContext } from '../context/RecetasContext'

export function useRecetaDetalle(id?: string) {
  const { recetas, loading, error } = useRecetasContext()
  const receta = recetas.find((r) => r.id === Number(id)) || null
  return { receta, loading, error }
}