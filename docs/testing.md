# Testing

Este documento recoge las pruebas básicas realizadas para comprobar que
la aplicación funciona correctamente.

------------------------------------------------------------------------

## 1. Pruebas de interfaz

### HomePage

-   ✔️ Carga la lista de recetas desde la API\
-   ✔️ Muestra buscador, filtros y orden A‑Z / Z‑A\
-   ✔️ Muestra el botón de "Favoritas"\
-   ✔️ Muestra el botón de "Receta aleatoria"\
-   ✔️ Las tarjetas muestran imagen, nombre, categoría y estado de
    favorita\
-   ✔️ Muestra `RecipeSkeleton` mientras carga\
-   ✔️ Al hacer clic en una receta, navega al detalle

### RecipeDetailPage

-   ✔️ Muestra la información completa de la receta\
-   ✔️ Muestra `RecipeDetailSkeleton` mientras carga\
-   ✔️ Si el ID no existe, muestra "Receta no encontrada"\
-   ✔️ Botón de volver funciona correctamente\
-   ✔️ Botón de favorita sincroniza con el backend

### NotFoundPage

-   ✔️ Se muestra al entrar en rutas inexistentes\
-   ✔️ Botón para volver al inicio funciona

------------------------------------------------------------------------

## 2. Pruebas de responsive

-   ✔️ **Móvil:** tarjetas en columna, filtros accesibles, texto
    legible\
-   ✔️ **Tablet:** grid estable de 2--3 columnas\
-   ✔️ **Desktop:** diseño amplio, grid de 3--4 columnas, sin saltos

------------------------------------------------------------------------

## 3. Pruebas de consola

-   ✔️ Sin errores de React\
-   ✔️ Sin warnings de dependencias o keys\
-   ✔️ Peticiones correctas a la API\
-   ✔️ IDs inexistentes devuelven 404 (comportamiento esperado)\
-   ✔️ Favoritas sincroniza correctamente con POST y DELETE

------------------------------------------------------------------------

## 4. Pruebas de endpoints

  Método   Endpoint                            Resultado esperado           Estado
  -------- ----------------------------------- ---------------------------- --------
  GET      /api/v1/recetas                     Devuelve todas las recetas   ✔️
  GET      /api/v1/recetas/:id                 Devuelve receta o 404        ✔️
  GET      /api/v1/recetas?categoria=Postres   Filtra recetas               ✔️
  GET      /api/v1/favoritas                   Devuelve IDs favoritas       ✔️
  POST     /api/v1/favoritas/:id               Añade favorita               ✔️
  DELETE   /api/v1/favoritas/:id               Elimina favorita             ✔️

------------------------------------------------------------------------

## 5. Observaciones

-   Las recetas se leen desde `recetas.json`\
-   Las favoritas se almacenan en memoria del backend mientras está en
    ejecución\
-   No hay persistencia real (se pierden al reiniciar el servidor)\
-   El frontend usa `VITE_API_URL` para conectarse al backend en
    producción\
-   Los skeletons mejoran la experiencia de carga y funcionan
    correctamente
