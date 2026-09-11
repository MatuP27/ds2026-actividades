import { useState } from "react";

import type { LibroOL } from "../types/Libro.ts";

import VolverAtras from '../components/VolverAtras.tsx'
import Buscador from '../components/Buscador.tsx'
import LibrosSection from '../components/LibrosSection.tsx'


function Catalogo() {
  const [libros, setLibros] = useState<LibroOL[]>([]);

  return (
    <>
      <VolverAtras to="/" texto="Inicio"/>
      <Buscador setLibros={setLibros} />
      <LibrosSection libros={libros} />
    </>
  )
}

export default Catalogo