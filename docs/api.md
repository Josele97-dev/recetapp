# API REST

## Base URL

```
http://localhost:3000/api/v1
```

---

## Recetas

### GET /recetas
Devuelve todas las recetas o filtradas por categoría.

**Query params:**
- `categoria` (opcional)

**Request:**
```
GET /api/v1/recetas
GET /api/v1/recetas?categoria=Postres
```

**Response 200:**
```json
[
  {
    "id": 1,
    "nombre": "Brownie de chocolate",
    "categoria": "Postres",
    "descripcion": "Un brownie esponjoso y húmedo con pepitas de chocolate.",
    "imagen": "https://...",
    "ingredientes": ["200g de chocolate negro", "100g de mantequilla"],
    "pasos": ["Derrite el chocolate con la mantequilla.", "Hornea a 180°C."]
  }
]
```

**Response 500:**
```json
{
  "error": "Error al obtener las recetas"
}
```

---

### GET /recetas/:id
Devuelve el detalle de una receta concreta.

**Request:**
```
GET /api/v1/recetas/1
```

**Response 200:**
```json
{
  "id": 1,
  "nombre": "Brownie de chocolate",
  "categoria": "Postres",
  "descripcion": "Un brownie esponjoso y húmedo con pepitas de chocolate.",
  "imagen": "https://...",
  "ingredientes": ["200g de chocolate negro", "100g de mantequilla"],
  "pasos": ["Derrite el chocolate con la mantequilla.", "Hornea a 180°C."]
}
```

**Response 400:**
```json
{
  "error": "ID inválido"
}
```

**Response 404:**
```json
{
  "error": "Receta no encontrada"
}
```

**Response 500:**
```json
{
  "error": "Error al obtener la receta"
}
```

---

## Favoritas

### GET /favoritas
Devuelve los IDs de las recetas favoritas.

**Request:**
```
GET /api/v1/favoritas
```

**Response 200:**
```json
[1, 3, 7]
```

**Response 500:**
```json
{
  "error": "Error al obtener favoritas"
}
```

---

### POST /favoritas/:id
Añade una receta a favoritas.

**Request:**
```
POST /api/v1/favoritas/1
```

**Response 201:**
```json
[1]
```

**Response 400:**
```json
{
  "error": "ID inválido"
}
```

**Response 404:**
```json
{
  "error": "Receta no encontrada"
}
```

**Response 500:**
```json
{
  "error": "Error al agregar favorita"
}
```

---

### DELETE /favoritas/:id
Elimina una receta de favoritas.

**Request:**
```
DELETE /api/v1/favoritas/1
```

**Response 200:**
```json
[]
```

**Response 400:**
```json
{
  "error": "ID inválido"
}
```

**Response 500:**
```json
{
  "error": "Error al eliminar favorita"
}
```
