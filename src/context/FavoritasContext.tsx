import { createContext, useState, useCallback, useContext } from 'react'

interface FavoritasContextType {
  favoritas: number[]
  agregarFavorita: (id: number) => void
  quitarFavorita: (id: number) => void
  esFavorita: (id: number) => boolean
}

const FavoritasContext = createContext<FavoritasContextType | null>(null)

function FavoritasProvider({ children }: { children: React.ReactNode }) {
  const [favoritas, setFavoritas] = useState<number[]>([])

  const agregarFavorita = useCallback((id: number) => {
    setFavoritas((prev) => [...prev, id])
  }, [])

  const quitarFavorita = useCallback((id: number) => {
    setFavoritas((prev) => prev.filter((f) => f !== id))
  }, [])

  const esFavorita = useCallback((id: number) => {
    return favoritas.includes(id)
  }, [favoritas])

  return (
    <FavoritasContext.Provider value={{ favoritas, agregarFavorita, quitarFavorita, esFavorita }}>
      {children}
    </FavoritasContext.Provider>
  )
}

function useFavoritas() {
  const context = useContext(FavoritasContext)
  if (!context) throw new Error('useFavoritas debe usarse dentro de FavoritasProvider')
  return context
}

export { FavoritasProvider, useFavoritas }