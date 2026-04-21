# 🚀 Despliegue de RecetApp

Este documento explica el proceso completo de despliegue del frontend y
el backend de RecetApp, incluyendo configuración, variables de entorno y
pasos necesarios para publicar la aplicación en producción.

------------------------------------------------------------------------

## 🌐 Despliegue del Frontend (Vercel)

El frontend está construido con **React + TypeScript + Vite** y se
despliega automáticamente en Vercel.

### 1. Conectar el repositorio

-   Acceder a Vercel
-   Seleccionar **New Project**
-   Importar el repositorio desde GitHub
-   Seleccionar la raíz del proyecto (el frontend está en la carpeta
    principal)

### 2. Configuración del proyecto

Vercel detecta automáticamente Vite, por lo que no es necesario
configurar nada adicional.

### 3. Variables de entorno

En **Project Settings → Environment Variables**, añadir:

``` env
VITE_API_URL=https://recetapp-production-bc37.up.railway.app/api/v1
```

Esto permite que el frontend se comunique con la API desplegada.

### 4. Deploy automático

Cada vez que se hace push a la rama `main`, Vercel genera un nuevo
despliegue.

------------------------------------------------------------------------

## 🛠️ Despliegue del Backend (Railway)

El backend está construido con **Node.js + Express + TypeScript** y se
despliega en Railway.

### 1. Crear un nuevo servicio

-   Entrar en Railway
-   Seleccionar **New → Deploy from GitHub Repo**
-   Elegir el repositorio `recetapp`
-   Seleccionar la carpeta del backend: `server/`

### 2. Configuración del servicio

Railway detecta automáticamente el `package.json`.

Tu backend usa TypeScript compilado, por lo que necesitas estos scripts
en `server/package.json`:

``` json
"scripts": {
  "dev": "ts-node-dev src/index.ts",
  "build": "tsc",
  "start": "node dist/index.js"
}
```

Railway ejecutará automáticamente:

``` bash
npm install
npm run build
npm start
```

Esto compila `src/` a `dist/` y ejecuta:

``` bash
node dist/index.js
```

### 3. Variables de entorno

En **Variables**, añadir:

``` env
PORT=3000
```

Y en el código:

``` ts
const PORT = process.env.PORT || 3000
```

### 4. Deploy automático

Cada vez que haces push a `main`, Railway:

-   Instala dependencias
-   Compila TypeScript a `dist/`
-   Ejecuta `node dist/index.js`

------------------------------------------------------------------------

## 🔗 Conexión entre Frontend y Backend

El frontend usa la variable `VITE_API_URL` para comunicarse con la API.

Ejemplo:

``` ts
const API_BASE_URL = import.meta.env.VITE_API_URL
```

Esto permite que el frontend funcione tanto en local como en producción.

------------------------------------------------------------------------

## 🧪 Comprobación en Producción

### 1. Verificar API

Abrir:

https://recetapp-production-bc37.up.railway.app/api/v1/recetas

Debe devolver datos correctamente.

### 2. Verificar Frontend

Abrir:

https://recetapp-rho.vercel.app

Probar:

-   Búsqueda
-   Filtros
-   Detalle de receta
-   Favoritas

------------------------------------------------------------------------

## 📦 Resultado final

Tras completar este proceso:

-   Backend desplegado en Railway
-   Frontend desplegado en Vercel
-   Conexión mediante variables de entorno
-   Aplicación funcionando en producción
