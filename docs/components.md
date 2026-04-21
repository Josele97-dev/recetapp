# Componentes

## RecipeCard

Muestra la información básica de una receta en formato card: foto,
categoría, nombre y descripción corta.

### Props

  Prop          Tipo     Descripción
  ------------- -------- ----------------------------
  id            number   Identificador de la receta
  nombre        string   Nombre de la receta
  descripcion   string   Descripción corta
  imagen        string   URL de la imagen
  categoria     string   Categoría de la receta

### Uso

``` tsx
<RecipeCard
  id={1}
  nombre="Brownie de chocolate"
  descripcion="Un brownie esponjoso y húmedo."
  imagen="https://..."
  categoria="Postres"
/>
```

------------------------------------------------------------------------

## FilterBar

Muestra una fila de botones para filtrar recetas por categoría.\
El botón activo se resalta en naranja.

### Props

  -------------------------------------------------------------------------
  Prop                Tipo              Descripción
  ------------------- ----------------- -----------------------------------
  categorias          string\[\]        Lista de categorías disponibles

  categoriaActiva     string            Categoría seleccionada actualmente

  onCategoriaChange   (categoria:       Función que se ejecuta al cambiar
                      string) =\> void  de categoría
  -------------------------------------------------------------------------

### Uso

``` tsx
<FilterBar
  categorias={['Postres', 'Carnes', 'Pasta']}
  categoriaActiva={categoriaActiva}
  onCategoriaChange={setCategoriaActiva}
/>
```

------------------------------------------------------------------------

## SearchBar

Campo de búsqueda para filtrar recetas por nombre en tiempo real.

### Props

  -----------------------------------------------------------------------
  Prop              Tipo              Descripción
  ----------------- ----------------- -----------------------------------
  valor             string            Valor actual del input

  onChange          (valor: string)   Función que se ejecuta al escribir
                    =\> void          
  -----------------------------------------------------------------------

### Uso

``` tsx
<SearchBar
  valor={busqueda}
  onChange={setBusqueda}
/>
```

------------------------------------------------------------------------

## FavoriteButton

Botón para guardar o quitar una receta de favoritas.\
Muestra un corazón relleno si es favorita y vacío si no lo es.

### Props

  Prop         Tipo          Descripción
  ------------ ------------- -------------------------------------------
  esFavorita   boolean       Si la receta está en favoritas o no
  onClick      () =\> void   Función que se ejecuta al pulsar el botón

### Uso

``` tsx
<FavoriteButton
  esFavorita={esFavorita}
  onClick={handleFavorito}
/>
```

------------------------------------------------------------------------

# Skeletons (componentes de carga)

## RecipeSkeleton

Componente que muestra un placeholder visual mientras se cargan las
recetas en la HomePage.\
Simula la estructura de una tarjeta de receta con bloques grises
animados.

### Características

-   Card blanca con sombra
-   Imagen simulada (`h-48 bg-gray-200`)
-   Varias líneas de texto simuladas
-   Animación `animate-pulse`
-   No recibe props

### Uso

``` tsx
<RecipeSkeleton />
```

------------------------------------------------------------------------

## RecipeDetailSkeleton

Componente que muestra un placeholder del detalle de una receta mientras
se carga la información desde la API.

### Características

-   Fondo gris degradado igual que RecipeDetailPage
-   Header con un bloque simulando el botón de volver
-   Contenedor blanco con sombra
-   Imagen grande simulada (`h-80 bg-gray-200`)
-   Título, categoría y descripción simulados
-   Lista de ingredientes simulada
-   Lista de pasos simulada
-   Animación `animate-pulse`
-   No recibe props

### Uso

``` tsx
<RecipeDetailSkeleton />
```
