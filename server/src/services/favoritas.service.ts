let favoritas: number[] = []

export function obtenerFavoritas() {
  return favoritas
}

export function agregarFavorita(id: number) {
  if (!favoritas.includes(id)) {
    favoritas.push(id)
  }
  return favoritas
}

export function eliminarFavorita(id: number) {
  favoritas = favoritas.filter((f) => f !== id)
  return favoritas
}