# Retrospectiva del Proyecto — RecetApp

Este documento recoge mi reflexión final sobre el desarrollo de RecetApp, incluyendo lo que aprendí, los problemas que encontré y cómo conecté todas las partes del proyecto (frontend, backend y API). También explico cómo utilicé herramientas de IA como apoyo durante el proceso.

---

## Lo que he aprendido

Durante este proyecto he aprendido muchísimo, tanto a nivel técnico como a nivel de organización. Algunos de los aprendizajes más importantes han sido:

### **1. Conectar un frontend en React con un backend real**
En este proyecto he creado mi propia API con Express y he tenido que:

- Definir endpoints REST
- Gestionar errores y estados HTTP
- Servir datos desde un JSON
- Probar la API con el navegador y con el frontend

Esto me ha ayudado a entender mejor cómo se comunican las dos capas y qué problemas pueden aparecer entre ellas.

### **2. Trabajar con TypeScript en ambos lados**
TypeScript me ha obligado a ser más ordenado y a pensar mejor los tipos. He aprendido:

- A definir interfaces compartidas
- A tipar funciones de red
- A manejar errores de forma más estricta

### **3. Organizar un proyecto real con componentes, hooks y contexto**
En el frontend he aprendido a:

- Crear componentes reutilizables
- Usar hooks personalizados para separar lógica
- Gestionar estado global con Context API
- Mantener el código más limpio y modular

Esto me ha ayudado a estructurar mejor la aplicación y a evitar duplicar lógica.

### **4. Desplegar un proyecto completo**
He aprendido a desplegar:

- El frontend en Vercel
- El backend en Railway

Y a conectarlos mediante variables de entorno. También he aprendido cómo funcionan los despliegues automáticos y cómo evitar que Railway consuma horas cuando no lo necesito.

---

## Cómo conecté frontend, backend y API

La conexión entre las capas fue uno de los puntos clave del proyecto.

1. **Backend (Express)** expone la API en `/api/v1/...`.
2. **Frontend (React)** hace peticiones con `fetch` usando `VITE_API_URL`.
3. La API devuelve datos tipados que el frontend muestra en pantalla.
4. El estado global (Context) gestiona las favoritas.
5. Los hooks (`useRecetas`) se encargan de filtrar, buscar y manejar errores.

Al principio me costó que todo encajara, pero una vez configurado el cliente de API y las rutas, el flujo quedó muy claro.

---

## Problemas que encontré

Durante el desarrollo fui encontrando algunos problemas normales cuando estás conectando varias partes de un proyecto real. Aunque al principio me hicieron avanzar más despacio, cada uno de ellos me ayudó a entender mejor cómo funciona una aplicación completa.

### **1. Ajustar la comunicación entre frontend y backend**
Uno de los primeros retos fue asegurarme de que las rutas del backend coincidían exactamente con las peticiones del frontend. A veces un pequeño detalle, como un `/api/v1` olvidado o un parámetro mal escrito, hacía que la petición fallara. Esto me enseñó a revisar bien cada endpoint y a entender mejor cómo viajan los datos.

### **2. Gestionar correctamente los estados en React**
Tuve que aprender a manejar estados como `loading`, `error` y los casos en los que no hay resultados. Al principio no tenía claro dónde colocar cada parte de la lógica, pero poco a poco fui entendiendo cómo organizar mejor los componentes y los hooks para que la interfaz reaccionara de forma coherente.

### **3. Configurar correctamente el despliegue**
El despliegue fue una parte nueva para mí. Tuve que entender cómo funcionan Vercel y Railway, cómo usar variables de entorno y cómo conectar ambas partes sin romper nada. Aunque me llevó un rato, al final comprendí mejor cómo se publica una aplicación real.

En general, todos estos problemas fueron oportunidades para aprender y mejorar mi forma de trabajar.

---

## Cómo utilicé IA durante el desarrollo

La IA me ha servido como **herramienta de apoyo**, no como sustituto del trabajo. La utilicé para:
- Resolver dudas puntuales de TypeScript o React
- Pedir explicaciones de errores que no entendía
- Mejorar la estructura de algunos componentes
- Revisar documentación y ayudarme a redactarla mejor
- Generar ideas para mejorar la interfaz
- Revisar el README y hacerlo más profesional

---

## Reflexión final

Este proyecto ha sido una experiencia muy completa. He pasado por todas las fases:
- Pensar la idea
- Diseñar la arquitectura
- Crear el backend
- Construir el frontend
- Conectar ambas partes
- Gestionar estado y lógica
- Documentar todo
- Desplegar en producción

Me ha ayudado a entender cómo se trabaja en un proyecto real y a mejorar mi forma de organizarme. También he aprendido a ser más paciente con los errores y a buscar soluciones de forma más estructurada.

Siento que ahora tengo una visión mucho más clara de cómo funciona una aplicación web completa y me veo más preparado para seguir aprendiendo.