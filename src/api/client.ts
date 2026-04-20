import type { Receta, Favoritas } from '../types'

const BASE_URL = import.meta.env.VITE_API_URL

export async function fetchRecetas(categoria?: string): Promise<Receta[]> {
  const url = categoria && categoria !== 'Todas'
    ? `${BASE_URL}/recetas?categoria=${categoria}`
    : `${BASE_URL}/recetas`

  const res = await fetch(url)
  if (!res.ok) throw new Error('Error al cargar las recetas')
  return res.json()
}

export async function fetchRecetaById(id: number): Promise<Receta> {
  const res = await fetch(`${BASE_URL}/recetas/${id}`)
  if (!res.ok) throw new Error('Receta no encontrada')
  return res.json()
}

export async function fetchFavoritas(): Promise<Favoritas> {
  const res = await fetch(`${BASE_URL}/favoritas`)
  if (!res.ok) throw new Error('Error al cargar favoritas')
  return res.json()
}

export async function addFavorita(id: number): Promise<Favoritas> {
  const res = await fetch(`${BASE_URL}/favoritas/${id}`, { method: 'POST' })
  if (!res.ok) throw new Error('Error al añadir favorita')
  return res.json()
}

export async function removeFavorita(id: number): Promise<Favoritas> {
  const res = await fetch(`${BASE_URL}/favoritas/${id}`, { method: 'DELETE' })
  if (!res.ok) throw new Error('Error al eliminar favorita')
  return res.json()
}