# 🚀 Despliegue de RecetApp

Este documento explica el proceso completo de despliegue del frontend y el backend de RecetApp, incluyendo configuración, variables de entorno y pasos necesarios para publicar la aplicación en producción.

---

## 🌐 Despliegue del Frontend (Vercel)

El frontend está construido con **React + TypeScript + Vite** y se despliega automáticamente en Vercel.

### 1. Conectar el repositorio

- Acceder a Vercel y seleccionar **New Project**  
- Importar el repositorio desde GitHub  
- Seleccionar la carpeta raíz del frontend  

### 2. Configuración del proyecto

Vercel detecta automáticamente Vite, por lo que no es necesario configurar nada adicional.

### 3. Variables de entorno

En **Project Settings → Environment Variables**, añadir:

```
VITE_API_URL=https://recetapp-production-bc37.up.railway.app/api/v1
```

Esto permite que el frontend se comunique con la API desplegada.

### 4. Deploy automático

Cada vez que se hace push a la rama `main`, Vercel genera un nuevo despliegue.

---

## 🛠️ Despliegue del Backend (Railway)

El backend está construido con **Node.js + Express + TypeScript** y se despliega en Railway.

### 1. Crear un nuevo servicio

- Entrar en Railway  
- Seleccionar **New → Deploy from GitHub Repo**  
- Elegir el repositorio `recetapp`  
- Seleccionar la carpeta del backend: `server/`  

### 2. Configuración del servicio

Railway detecta automáticamente el `package.json`.

#### Scripts necesarios

En `server/package.json` debe existir:

```json
"start": "node dist/index.js"
```

El backend debe compilarse antes de ejecutarse.

### 3. Variables de entorno

En **Variables**, añadir:

```
PORT=3000
```

Y en el código:

```ts
const PORT = process.env.PORT || 3000
```

### 4. Deploy automático

Cada vez que se hace push a `main`, Railway reconstruye y despliega el backend.

---

## 🔗 Conexión entre Frontend y Backend

El frontend usa la variable `VITE_API_URL` para comunicarse con la API.

Ejemplo:

```ts
const API_BASE_URL = import.meta.env.VITE_API_URL
```

Esto permite que el frontend funcione tanto en local como en producción.

---

## 🧪 Comprobación en Producción

### 1. Verificar API

Abrir:

https://recetapp-production-bc37.up.railway.app/api/v1/recetas

Comprobar que devuelve datos correctamente.

### 2. Verificar Frontend

Abrir:

https://recetapp-rho.vercel.app

Probar:

- Búsqueda  
- Filtros  
- Detalle de receta  
- Favoritas  

---

## 📦 Resultado final

Tras completar este proceso:

- Backend desplegado en Railway  
- Frontend desplegado en Vercel  
- Conexión mediante variables de entorno  
- Aplicación funcionando en producción  