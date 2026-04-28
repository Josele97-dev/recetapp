import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addFavorita } from '../api/client'

export function useAgregarFavorita() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: number) => addFavorita(id),

    async onMutate(id: number) {
      await queryClient.cancelQueries({ queryKey: ['favoritas'] })

      const prev = queryClient.getQueryData<number[]>(['favoritas'])

      queryClient.setQueryData<number[]>(['favoritas'], (old = []) =>
        old.includes(id) ? old : [...old, id]
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
