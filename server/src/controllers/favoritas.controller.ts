import { Request, Response } from 'express'
import { obtenerFavoritas, agregarFavorita, eliminarFavorita } from '../services/favoritas.service'
import { obtenerRecetaPorId } from '../services/recetas.service'

export function getFavoritas(req: Request, res: Response) {
  try {
    const favoritas = obtenerFavoritas()
    res.status(200).json(favoritas)
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener favoritas' })
  }
}

export function addFavorita(req: Request, res: Response) {
  try {
    const { id } = req.params

    if (!id || isNaN(Number(id))) {
      return res.status(400).json({ error: 'ID inválido' })
    }

    const receta = obtenerRecetaPorId(Number(id))

    if (!receta) {
      return res.status(404).json({ error: 'Receta no encontrada' })
    }

    const favoritas = agregarFavorita(Number(id))
    return res.status(201).json(favoritas)

  } catch (error) {
    return res.status(500).json({ error: 'Error al agregar favorita' })
  }
}

export function deleteFavorita(req: Request, res: Response) {
  try {
    const { id } = req.params

    if (!id || isNaN(Number(id))) {
      return res.status(400).json({ error: 'ID inválido' })
    }

    const favoritas = eliminarFavorita(Number(id))
    res.status(200).json(favoritas)
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar favorita' })
  }
}
