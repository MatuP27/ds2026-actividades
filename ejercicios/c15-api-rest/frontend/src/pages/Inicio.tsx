import LibrosSection from '../components/LibrosSection.tsx'
import { NavLink } from 'react-router-dom';
import type { LibroCardProps } from '../types/libroCardProps';

function BienvenidaSection() {
  return (
    <section className="container-fluid py-5 bg-primary text-white" id="bienvenida-section">

      <div className="container-lg py-5">
        <h1 className="display-3 fst-italic">
            ¡Bienvenido a <span className="fw-bold fst-normal">Tinta & Papel</span>!
        </h1>

        <p className="lead mb-4">
            Encontrá los mejores libros al mejor precio.
        </p>

        <NavLink to="/catalogo" className="btn btn-light btn-lg">
            Ver catálogo
        </NavLink>
      </div>
    </section>    
  )
}

function MasVendidosSection() {
  return (
    <>
      <section className="mb-5">

        <h2 className="fw-bold border-bottom pb-2">
            Más vendidos...
        </h2>

        <p className="text-secondary">
            Los libros más elegidos por nuestros lectores.
        </p>

      </section>

      <section className="mt-5">
        <LibrosSection />
      </section>
    </>
  )
}

function Inicio() {
  return (
    <>
      <BienvenidaSection />

      <MasVendidosSection />
    </>
  )
}

export default Inicio