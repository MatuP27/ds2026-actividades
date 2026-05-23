import { useState } from "react";

import type { LibroOL } from "../types/Libro.ts";

import NavBar from '../components/Navbar.tsx'
import VolverAtras from '../components/VolverAtras.tsx'
import Buscador from '../components/Buscador.tsx'
import LibrosSection from '../components/LibrosSection.tsx'
import Footer from '../components/Footer.tsx'


function Catalogo() {
  const [libros, setLibros] = useState<LibroOL[]>([]);

  return (
    <>
      <header>
        <NavBar />
      </header>

      <main className='container-lg py-5'>
        <VolverAtras to="/" texto="Inicio"/>
        <Buscador setLibros={setLibros} />
        <LibrosSection libros={libros} />
      </main>

      <Footer />
    </>
  )
}

export default Catalogo