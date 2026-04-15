import { Request, Response } from 'express'
import { obtenerFavoritas, agregarFavorita, eliminarFavorita } from '../services/favoritas.service'

export function getFavoritas(req: Request, res: Response) {
  const favoritas = obtenerFavoritas()
  res.status(200).json(favoritas)
}

export function addFavorita(req: Request, res: Response) {
  const { id } = req.params
  const favoritas = agregarFavorita(Number(id))
  res.status(201).json(favoritas)
}

export function deleteFavorita(req: Request, res: Response) {
  const { id } = req.params
  const favoritas = eliminarFavorita(Number(id))
  res.status(200).json(favoritas)
}