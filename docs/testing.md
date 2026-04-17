# Testing

Este documento recoge las pruebas básicas realizadas para comprobar que la aplicación funciona correctamente.

---

## 1. Pruebas de interfaz

### HomePage
- ✔️ Carga la lista de recetas.
- ✔️ Muestra buscador y filtros.
- ✔️ Las tarjetas muestran imagen, nombre y categoría.
- ✔️ Al hacer clic en una receta, navega al detalle.

### RecipeDetailPage
- ✔️ Muestra la información completa de la receta.
- ✔️ Si el ID no existe, muestra “Receta no encontrada”.
- ✔️ Botón de volver funciona correctamente.

### NotFoundPage
- ✔️ Se muestra al entrar en rutas inexistentes.

---

## 2. Pruebas de responsive
- ✔️ Móvil: tarjetas en columna, texto legible.
- ✔️ Tablet: grid estable.
- ✔️ Desktop: diseño amplio y sin saltos.

---

## 3. Pruebas de consola
- ✔️ Sin errores de React.
- ✔️ Peticiones correctas a la API.
- ✔️ IDs inexistentes devuelven 404 (comportamiento esperado).

---

## 4. Pruebas de endpoints

| Método | Endpoint | Resultado esperado | Estado |
|--------|----------|--------------------|--------|
| GET | `/api/v1/recetas` | Devuelve todas las recetas | ✔️ |
| GET | `/api/v1/recetas/:id` | Devuelve receta o 404 | ✔️ |
| GET | `/api/v1/recetas?categoria=Postres` | Filtra recetas | ✔️ |
| GET | `/api/v1/favoritas` | Devuelve IDs favoritas | ✔️ |
| POST | `/api/v1/favoritas/:id` | Añade favorita | ✔️ |
| DELETE | `/api/v1/favoritas/:id` | Elimina favorita | ✔️ |

---

## 5. Observaciones
- Las recetas se leen desde `recetas.json`.
- Las favoritas se almacenan en memoria del backend mientras está en ejecución.
- No hay persistencia real (se pierden al reiniciar el servidor).

---