import { useRecetasContext } from '../context/RecetasContext'
import { useFavoritas } from '../context/FavoritasContext'
import { useMemo } from 'react'

function useRecetas() {
  const {
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
  } = useRecetasContext()

  const { esFavorita } = useFavoritas()

  const recetas = useMemo(() => {
    if (!mostrarFavoritas) return recetasFiltradas
    return recetasFiltradas.filter((r) => esFavorita(r.id))
  }, [recetasFiltradas, mostrarFavoritas, esFavorita])

  return {
    recetas,
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