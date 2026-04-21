# 🧭 Rutas y navegación

------------------------------------------------------------------------

## ⚙️ Configuración

Las rutas están configuradas en `src/App.tsx` usando **React Router
v6**.\
El componente `BrowserRouter` envuelve toda la aplicación y `Routes`
contiene las rutas definidas.

Además, la navegación programática se realiza con `useNavigate`.

------------------------------------------------------------------------

## 🗺️ Estructura de rutas

  -----------------------------------------------------------------------
  Ruta             Página                Descripción
  ---------------- --------------------- --------------------------------
  /                HomePage              Pantalla principal con buscador,
                                         filtros, orden y cards

  /receta/:id      RecipeDetailPage      Detalle de una receta concreta

  \*               NotFoundPage          Página 404 para rutas no
                                         encontradas
  -----------------------------------------------------------------------

Esta estructura coincide con tu `App.tsx` actual.

------------------------------------------------------------------------

## 🔀 Navegación entre páginas

### ➡️ Desde HomePage → RecipeDetailPage

Cuando el usuario hace click en el botón **"Ver receta"** dentro de una
`RecipeCard`, se navega a:

``` ts
/receta/{id}
```

Esto se hace con:

``` ts
navigate(`/receta/${id}`)
```

------------------------------------------------------------------------

### ⬅️ Desde RecipeDetailPage → atrás

En la página de detalle hay un botón **"← Volver"** que usa:

``` ts
navigate(-1)
```

------------------------------------------------------------------------

### 🏠 Desde NotFoundPage → inicio

El botón de la página 404 redirige a:

``` ts
navigate('/')
```

------------------------------------------------------------------------

## 📄 Páginas

### 🏡 HomePage

Pantalla principal de la aplicación.

Incluye:

-   buscador\
-   filtros por categoría\
-   filtro de favoritas\
-   orden A-Z / Z-A\
-   botón de receta aleatoria\
-   cards de recetas\
-   skeletons mientras carga

Toda la lógica proviene del hook `useRecetas`.

------------------------------------------------------------------------

### 📖 RecipeDetailPage

Muestra el detalle completo de una receta:

-   imagen\
-   categoría\
-   descripción\
-   ingredientes\
-   pasos\
-   botón de favorita

Obtiene el id desde la URL con:

``` ts
const { id } = useParams()
```

La lógica proviene del hook `useRecetaDetalle`.

Incluye un skeleton mientras carga.

------------------------------------------------------------------------

### 🚫 NotFoundPage

Página 404 que aparece cuando el usuario accede a una ruta inexistente.\
Incluye un botón para volver al inicio.
