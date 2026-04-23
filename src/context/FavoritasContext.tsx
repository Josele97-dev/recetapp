import { createContext, useState, useCallback, useContext, useEffect } from 'react'
import { fetchFavoritas, addFavorita, removeFavorita } from '../api/client'

interface FavoritasContextType {
  favoritas: number[]
  agregarFavorita: (id: number) => void
  quitarFavorita: (id: number) => void
  esFavorita: (id: number) => boolean
}

const FavoritasContext = createContext<FavoritasContextType | null>(null)

function FavoritasProvider({ children }: { children: React.ReactNode }) {
  const [favoritas, setFavoritas] = useState<number[]>([])

  useEffect(() => {
    fetchFavoritas()
      .then(setFavoritas)
      .catch(() => setFavoritas([]))
  }, [])

  const agregarFavorita = useCallback((id: number) => {
    addFavorita(id)
      .then(setFavoritas)
      .catch(() => {})
  }, [])

  const quitarFavorita = useCallback((id: number) => {
    removeFavorita(id)
      .then(setFavoritas)
      .catch(() => {})
  }, [])

  const esFavorita = useCallback(
    (id: number) => favoritas.includes(id),
    [favoritas]
  )

  return (
    <FavoritasContext.Provider
      value={{ favoritas, agregarFavorita, quitarFavorita, esFavorita }}
    >
      {children}
    </FavoritasContext.Provider>
  )
}

function useFavoritas() {
  const context = useContext(FavoritasContext)
  if (!context) {
    throw new Error('useFavoritas debe usarse dentro de FavoritasProvider')
  }
  return context
}

export { FavoritasProvider, useFavoritas }
