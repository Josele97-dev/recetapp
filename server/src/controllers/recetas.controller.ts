import { Request, Response } from 'express'
import { obtenerRecetas, obtenerRecetaPorId } from '../services/recetas.service'

export function getRecetas(req: Request, res: Response) {
  try {
    const { categoria } = req.query

    const recetas = obtenerRecetas(categoria as string | undefined)
    res.status(200).json(recetas)

  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las recetas' })
  }
}

export function getRecetaById(req: Request, res: Response) {
  try {
    const { id } = req.params

    if (!id || isNaN(Number(id))) {
      return res.status(400).json({ error: 'ID inválido' })
    }

    const receta = obtenerRecetaPorId(Number(id))

    if (!receta) {
      return res.status(404).json({ error: 'Receta no encontrada' })
    }

    res.status(200).json(receta)

  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la receta' })
  }
}
