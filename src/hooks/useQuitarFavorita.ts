import { useMutation, useQueryClient } from '@tanstack/react-query'
import { removeFavorita } from '../api/client'

export function useQuitarFavorita() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: number) => removeFavorita(id),

    async onMutate(id: number) {
      await queryClient.cancelQueries({ queryKey: ['favoritas'] })

      const prev = queryClient.getQueryData<number[]>(['favoritas'])

      queryClient.setQueryData<number[]>(['favoritas'], (old = []) =>
        old.filter(f => f !== id)
      )

      return { prev }
    },

    onError(_error, _id, context) {
      if (context?.prev) {
        queryClient.setQueryData(['favoritas'], context.prev)
      }
    },

    onSettled() {
      queryClient.invalidateQueries({ queryKey: ['favoritas'] })
    }
  })
}
