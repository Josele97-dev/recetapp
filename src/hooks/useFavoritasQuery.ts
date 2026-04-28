import { useQuery } from '@tanstack/react-query'
import { fetchFavoritas } from '../api/client'

export function useFavoritasQuery() {
  return useQuery({
    queryKey: ['favoritas'],
    queryFn: fetchFavoritas,
    staleTime: 1000 * 60 * 5, 
  })
}
