import { memo } from 'react'
import { useFavoritasQuery } from '../hooks/useFavoritasQuery'
import { useAgregarFavorita } from '../hooks/useAgregarFavorita'
import { useQuitarFavorita } from '../hooks/useQuitarFavorita'

interface Props {
  id: number
}

function FavoriteButtonComponent({ id }: Props) {
  const { data: favoritas = [] } = useFavoritasQuery()
  const agregarFavorita = useAgregarFavorita()
  const quitarFavorita = useQuitarFavorita()

  const esFavorita = favoritas.includes(id)

  const handleClick = () => {
    if (esFavorita) quitarFavorita.mutate(id)
    else agregarFavorita.mutate(id)
  }

  return (
    <button
      onClick={handleClick}
      className="text-2xl transition-transform hover:scale-110"
    >
      {esFavorita ? '❤️' : '🤍'}
    </button>
  )
}

export default memo(FavoriteButtonComponent)
