import { useState } from "react";

import type { LibroCardProps } from '../types/libroCardProps';

import VolverAtras from '../components/VolverAtras.tsx'
import Buscador from '../components/Buscador.tsx'
import LibrosSection from '../components/LibrosSection.tsx'

function Catalogo() {
  // Inicializas el estado con la lista que llega por props
  const [libros, setLibros] = useState<LibroCardProps[]>([]);

  return (
    <>
      <VolverAtras to="/" texto="Inicio"/>
      <Buscador setLibros={setLibros} />
      <LibrosSection libros={libros} />
    </>
  )
}

export default Catalogo