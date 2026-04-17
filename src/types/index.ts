export interface Receta {
  id: number
  nombre: string
  categoria: string
  descripcion: string
  imagen: string
  ingredientes: string[]
  pasos: string[]
}

export type Favoritas = number[]