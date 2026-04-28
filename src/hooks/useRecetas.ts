import { useRecetasContext } from '../context/RecetasContext'
import { useFavoritasQuery } from './useFavoritasQuery'
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

  // AHORA USAMOS REACT QUERY
  const { data: favoritas = [] } = useFavoritasQuery()

  const recetas = useMemo(() => {
    if (!mostrarFavoritas) return recetasFiltradas
    return recetasFiltradas.filter((r) => favoritas.includes(r.id))
  }, [recetasFiltradas, mostrarFavoritas, favoritas])

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
