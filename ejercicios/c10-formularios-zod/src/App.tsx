import { Routes, Route } from "react-router-dom"
import Layout from './components/Layout/Layout';
import Inicio from "./pages/Inicio"
import Catalogo from "./pages/Catalogo"
import Contacto from "./pages/Contacto"
import './App.css'
import { useState } from 'react';
import type { LibroCardProps } from './types/libroCardProps';
import LibroNuevo from "./pages/LibroNuevo";
import Libro from "./pages/LIbro";


const librosIniciales: LibroCardProps[] = [
  {
    id: 1,
    titulo: 'El principito',
    autor: 'Antoine de Saint-Exupéry',
    precio: 4500,
    imagen: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=400',
    disponible: true
  },
  {
    id: 2,
    titulo: 'Patrones de diseño',
    autor: 'Alexander Shvets',
    precio: 8500,
    imagen: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=400',
    disponible: true
  },
  {
    id: 3,
    titulo: 'Farenheit 451',
    autor: 'Ray Bradbury',
    precio: 5200,
    imagen: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=400',
    disponible: false
  },
  {
    id: 4,
    titulo: 'React para Principiantes',
    autor: 'John Doe',
    precio: 3600,
    imagen: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=400',
    disponible: true
  }
];

function App() {
  const [libros, setLibros] = useState<LibroCardProps[]>(librosIniciales);
  const agregarLibro = (nuevo: LibroCardProps) => setLibros([...libros, nuevo]);
  // const eliminarLibro = (id: number) => setLibros(libros.filter(l => l.id !== id)); 
  // const editarLibro = (id: number, actualizado: LibroCardProps) => setLibros(libros.map(l => l.id === id ? actualizado : l));  

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/catalogo" element={<Catalogo libros={libros}/>} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/libro/:id" element={<Libro libros={libros}/>} />
        <Route path="/libros/crear" element={<LibroNuevo onAgregar={agregarLibro}/>} />
      </Routes>
    </Layout>
  )
}

export default App