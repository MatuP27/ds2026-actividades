// import { useState } from "react";

import type { LibroCardProps } from '../types/libroCardProps';

import VolverAtras from '../components/VolverAtras.tsx'
// import Buscador from '../components/Buscador.tsx'
import LibrosSection from '../components/LibrosSection.tsx'

interface LibrosProps {
  libros: LibroCardProps[];
  // onEliminar: (id: number) => void;
}

function Catalogo({ libros = [] }: LibrosProps) {
  // const [libros, setLibros] = useState<LibroCardProps[]>([]);

  return (
    <>
      <VolverAtras to="/" texto="Inicio"/>
      {/* <Buscador setLibros={setLibros} /> */}
      <LibrosSection libros={libros} />
    </>
  )
}

export default Catalogo