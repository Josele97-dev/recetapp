# Context y estado global

## ¿Por qué Context?

En RecetApp las favoritas se usan en varios sitios:

-   en la `RecipeCard` para mostrar el botón,
-   en la `RecipeDetailPage` para saber si está guardada,
-   en el `FilterBar` para filtrar por favoritas,
-   y también dentro del hook `useRecetaDetalle` para comprobar si la
    receta cargada es favorita.

Sin Context habría que pasar las favoritas como props de componente en
componente, lo que se vuelve complicado rápidamente.\
Con Context cualquier componente puede acceder a las favoritas
directamente.

------------------------------------------------------------------------

## FavoritasContext

Gestiona el estado global de las recetas favoritas y lo comparte con
toda la aplicación.

Además, se sincroniza automáticamente con el backend usando:

-   `fetchFavoritas()`
-   `addFavorita(id)`
-   `removeFavorita(id)`

### Lo que comparte

  -----------------------------------------------------------------------
  Valor             Tipo              Descripción
  ----------------- ----------------- -----------------------------------
  favoritas         number\[\]        Array con los ids de las recetas
                                      favoritas

  agregarFavorita   (id: number) =\>  Añade una receta a favoritas y
                    void              sincroniza con la API

  quitarFavorita    (id: number) =\>  Elimina una receta de favoritas y
                    void              sincroniza con la API

  esFavorita        (id: number) =\>  Comprueba si una receta es favorita
                    boolean           
  -----------------------------------------------------------------------

------------------------------------------------------------------------

## FavoritasProvider

Envuelve la aplicación en `main.tsx` para que todos los componentes
tengan acceso al Context.

``` tsx
<FavoritasProvider>
  <App />
</FavoritasProvider>
```

------------------------------------------------------------------------

## useFavoritas

Custom hook para consumir el Context fácilmente desde cualquier
componente o hook.

``` tsx
const { favoritas, agregarFavorita, quitarFavorita, esFavorita } = useFavoritas()
```

### Se usa en:

-   `RecipeCard`
-   `FavoriteButton`
-   `HomePage` (para filtrar favoritas)
-   `RecipeDetailPage`
-   `useRecetaDetalle` (para saber si la receta cargada es favorita)

------------------------------------------------------------------------

## ¿Cuándo usar Context?

Context es útil cuando un estado necesita ser compartido entre varios
componentes que están en distintos niveles del árbol de componentes.

En RecetApp lo usamos para las favoritas porque se necesitan en:

-   la card,
-   el detalle,
-   el filtro,
-   y los hooks que gestionan recetas.

Para estados locales que solo usa un componente, es mejor usar
`useState` directamente.
