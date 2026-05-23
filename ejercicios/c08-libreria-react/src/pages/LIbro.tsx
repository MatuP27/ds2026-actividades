import { Navigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import type { LibroOL } from "../types/Libro";

import NavBar from '../components/Navbar.tsx'
import VolverAtras from '../components/VolverAtras.tsx'
import Footer from '../components/Footer.tsx'

type Props = {
  libroKey: string;
};

function LibroDetalle({ libroKey }: Props) {
  const buscarPorKey = async (key: string): Promise<LibroOL> => {        
    try {    
      // Buscar resto
      const responseBusqueda = await fetch(
          `https://openlibrary.org/search.json?q=${key}`
      );

      if (!responseBusqueda.ok) {
          throw new Error('Error en búsqueda');
      }

      const dataBusqueda = await responseBusqueda.json();

      const libroBusqueda = dataBusqueda.docs?.[0];

      if (!libroBusqueda) {
          throw new Error('Libro no encontrado');
      }

      // Buscar detalle
      const responseDetalle = await fetch(
          `https://openlibrary.org${key}.json`
      );

      if (!responseDetalle.ok) {
        throw new Error('Error en detalle');
      }

      const dataDetalle = await responseDetalle.json();

      const descripcion =
          typeof dataDetalle.description === 'string'
              ? dataDetalle.description
              : dataDetalle.description?.value || 'Sin descripción';
      
      const libro: LibroOL = {
          key,
          title: libroBusqueda.title,
          author_name: libroBusqueda.author_name[0],
          cover_i: libroBusqueda.cover_i,
          description: descripcion,
      };

      return libro;

    } catch (error) {
        throw error;
    }
  };

  const [libro, setLibro] =
    useState<LibroOL | null>(null);

  // const [loading, setLoading] =
  //   useState<boolean>(true);

  const [error, setError] = useState<string>("");

  useEffect(() => {

    const cargarLibro = async () => {

      try {

        // setLoading(true);

        const data =
          await buscarPorKey(
            decodeURIComponent(libroKey)
          );

        setLibro(data);

      } catch (err) {

        setError(
          "No se pudo cargar el libro"
        );

      } finally {

        // setLoading(false);

      }
    };

    cargarLibro();

  }, [libroKey]);

  if (!libro) {
    return (
      <div className="d-flex justify-content-center">

        <div
          className="spinner-border text-primary"
          role="status"
        />

      </div>
    );
  }


  const portada = libro.cover_i
    ? `https://covers.openlibrary.org/b/id/${libro.cover_i}-L.jpg`
    : "https://static.thenounproject.com/png/1077596-200.png";
  
  return (
    <div className="card shadow-sm border-0">
      <div className="row g-0 align-items-center" id="resultado">
        <div className="col-12 col-md-6 d-flex justify-content-center">
            <img src={portada} className="img-fluid rounded-start" alt={libro.title} />
        </div>

        <div className="col-12 col-md-6">
            <div className="card-body p-4 p-lg-5">
                <h1 className="card-title h2 mb-1">{libro.title}</h1>
                <p className="text-muted h5 mb-4"> {libro.author_name} </p>
                
                <p className="card-text leading-relaxed text-secondary">
                    {libro.description}
                </p>

                <h4 className="fst-italic">$ 19.000,00</h4>

                <div className="d-grid d-md-block">
                    <a href="#" className="btn btn-primary btn-lg px-5 fw-bold mt-4">Comprar</a>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
function Libro() {
  const { libroKey } = useParams();
  
  if (!libroKey) return <Navigate to="/catalogo" />;

  return (
    <>
      <header>
        <NavBar />
      </header>

      <main className='container-lg py-5'>
        <VolverAtras to="/catalogo" texto="Catálogo"/>
        <LibroDetalle libroKey={libroKey} />
      </main>

      <Footer />
    </>
  )
}

export default Libro