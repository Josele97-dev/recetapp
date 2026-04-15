import { Request, Response } from 'express'
import { obtenerRecetas, obtenerRecetaPorId } from '../services/recetas.service'

export function getRecetas(req: Request, res: Response) {
  const { categoria } = req.query
  const recetas = obtenerRecetas(categoria as string | undefined)
  res.status(200).json(recetas)
}

export function getRecetaById(req: Request, res: Response) {
  const { id } = req.params
  const receta = obtenerRecetaPorId(Number(id))

  if (!receta) {
    res.status(404).json({ error: 'Receta no encontrada' })
    return
  }

  res.status(200).json(receta)
}