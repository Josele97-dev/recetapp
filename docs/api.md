# API REST

## Base URL

```
http://localhost:3000/api/v1
```

---

## Recetas

### GET /recetas
Devuelve todas las recetas.

**Request:**
```
GET /api/v1/recetas
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

---

### GET /recetas?categoria=Postres
Devuelve las recetas filtradas por categoría.

**Request:**
```
GET /api/v1/recetas?categoria=Postres
```

**Response 200:**
```json
[
  {
    "id": 1,
    "nombre": "Brownie de chocolate",
    "categoria": "Postres",
    ...
  }
]
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

**Response 404:**
```json
{
  "error": "Receta no encontrada"
}
```

---

## Favoritas

### GET /favoritas
Devuelve los ids de las recetas favoritas.

**Request:**
```
GET /api/v1/favoritas
```

**Response 200:**
```json
[1, 3, 7]
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