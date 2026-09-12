import { Navigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import type { LibroCardProps } from "../types/libroCardProps";

import VolverAtras from "../components/VolverAtras";

interface LibroProps {
  libros: LibroCardProps[];
}

function LibroDetalle({ libros }: LibroProps) {
  const { id } = useParams();

  const [libro, setLibro] = useState<LibroCardProps | null>(null);

  useEffect(() => {
    if (!id) return;

    const libroEncontrado = libros.find(
      (libro) => libro.id === Number(id)
    );

    setLibro(libroEncontrado || null);
  }, [id, libros]);

  if (!libro) {
    return <p>Libro no encontrado.</p>;
  }

  return (
    <div className="card shadow-sm border-0">
      <div className="row g-0 align-items-center">

        <div className="col-12 col-md-6 d-flex justify-content-center">
          <img
            src={libro.imagen}
            className="img-fluid rounded-start"
            alt={libro.titulo}
          />
        </div>

        <div className="col-12 col-md-6">
          <div className="card-body p-4 p-lg-5">

            <h1 className="card-title h2 mb-1">
              {libro.titulo}
            </h1>

            <p className="text-muted h5 mb-4">
              {libro.autor}
            </p>

            <h4 className="fst-italic">
              ${libro.precio.toLocaleString("es-AR")}
            </h4>

            <p className="mt-3">
              {libro.disponible
                ? "Libro disponible"
                : "Libro no disponible"}
            </p>

            <div className="d-grid d-md-block">
              <button
                className="btn btn-primary btn-lg px-5 fw-bold mt-4"
                disabled={!libro.disponible}
              >
                Comprar
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

function Libro({ libros }: LibroProps) {
  const { id } = useParams();

  if (!id) {
    return <Navigate to="/catalogo" />;
  }

  return (
    <>
      <VolverAtras to="/catalogo" texto="Catálogo" />

      <div className="container py-4">
        <LibroDetalle libros={libros} />
      </div>
    </>
  );
}

export default Libro;