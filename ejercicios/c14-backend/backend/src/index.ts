import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (_req, res) => {
  res.json({ mensaje: "API de la Librería — ¡hola desde un container! 🐳" });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

interface Libro {
  id: number;
  titulo: string;
  autor: string;
  precio: number;
  imagen: string;
  disponible: boolean;
}

interface Autor {
  id: number;
  nombre: string;
  nacionalidad: string;
}

const libros: Libro[] = [
  { id: 1, titulo: "El principito", autor: "Antoine de Saint-Exupéry", precio: 4500, imagen: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80", disponible: true },
  { id: 2, titulo: "Patrones de diseño", autor: "Alexander Shvets", precio: 8500, imagen: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=400&q=80", disponible: true },
  { id: 3, titulo: "Farenheit 451", autor: "Ray Bradbury", precio: 5200, imagen: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=400&q=80", disponible: false },
  { id: 4, titulo: "Cien años de soledad", autor: "Gabriel García Márquez", precio: 6200, imagen: "https://images.unsplash.com/photo-1473187983305-f615310e7daa?auto=format&fit=crop&w=400&q=80", disponible: true },
  { id: 5, titulo: "1984", autor: "George Orwell", precio: 5400, imagen: "https://images.unsplash.com/photo-1473755504818-b72b6dfdc0a1?auto=format&fit=crop&w=400&q=80", disponible: true },
  { id: 6, titulo: "El alquimista", autor: "Paulo Coelho", precio: 4300, imagen: "https://images.unsplash.com/photo-1519682577862-22b62b24e493?auto=format&fit=crop&w=400&q=80", disponible: true },
  { id: 7, titulo: "Sapiens: De animales a dioses", autor: "Yuval Noah Harari", precio: 7800, imagen: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=400&q=80", disponible: false },
  { id: 8, titulo: "El código Da Vinci", autor: "Dan Brown", precio: 5100, imagen: "https://images.unsplash.com/photo-1496104679561-38b73d6fcdf0?auto=format&fit=crop&w=400&q=80", disponible: true },
  { id: 9, titulo: "Matar a un ruiseñor", autor: "Harper Lee", precio: 4700, imagen: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=400&q=80", disponible: true },
  { id: 10, titulo: "La sombra del viento", autor: "Carlos Ruiz Zafón", precio: 6900, imagen: "https://images.unsplash.com/photo-1529480821492-a27f2b0b4b79?auto=format&fit=crop&w=400&q=80", disponible: false },
];

const autores: Autor[] = [
  { id: 1, nombre: "Antoine de Saint-Exupéry", nacionalidad: "Francia" },
  { id: 2, nombre: "Alexander Shvets", nacionalidad: "Ucrania" },
  { id: 3, nombre: "Ray Bradbury", nacionalidad: "Estados Unidos" },
  { id: 4, nombre: "Gabriel García Márquez", nacionalidad: "Colombia" },
  { id: 5, nombre: "George Orwell", nacionalidad: "Reino Unido" },
  { id: 6, nombre: "Paulo Coelho", nacionalidad: "Brasil" },
  { id: 7, nombre: "Yuval Noah Harari", nacionalidad: "Israel" },
  { id: 8, nombre: "Dan Brown", nacionalidad: "Estados Unidos" },
  { id: 9, nombre: "Harper Lee", nacionalidad: "Estados Unidos" },
  { id: 10, nombre: "Carlos Ruiz Zafón", nacionalidad: "España" },
];

app.get("/libros", (req, res) => {
  const { disponible } = req.query;
  if (disponible == undefined) {
    res.json(libros);
    return;
  } else if (disponible || disponible === "false") {
    res.json(libros.filter(libro => libro.disponible === (disponible === "true")));
  } else {
    res.json(libros);
  }
});

app.get("/autores", (_req, res) => {
  res.json(autores);
});
