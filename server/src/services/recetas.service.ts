import fs from 'fs';
import path from 'path';

//const recetasPath = path.join(__dirname, '../config/recetas.json');
const recetasPath = path.join(process.cwd(), '../data/recetas.json');


function leerRecetas() {
  const raw = fs.readFileSync(recetasPath, 'utf-8');
  return JSON.parse(raw);
}

export function obtenerRecetas(categoria?: string) {
  const recetas = leerRecetas();
  if (!categoria || categoria === 'Todas') {
    return recetas;
  }
  return recetas.filter((r: any) => r.categoria === categoria);
}

export function obtenerRecetaPorId(id: number) {
  const recetas = leerRecetas();
  return recetas.find((r: any) => r.id === id) || null;
}