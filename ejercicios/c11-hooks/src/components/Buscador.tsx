import { useState, useEffect } from "react";
import type { LibroCardProps } from "../types/libroCardProps";

type Props = {
  setLibros: React.Dispatch<
    React.SetStateAction<any[]>
  >;
};

function Buscador({ setLibros }: Props) {
  const [busqueda, setBusqueda] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const cargar = async () => {
      try {
        const res = await fetch('/libros.json');
        if (!res.ok) throw new Error('Error al cargar los libros');
        setLibros(await res.json());
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };
    cargar();
  }, []);

  const buscarLibros = async () => {
    try {
      setError("");
      setLoading(true);

      const response = await fetch(
        `/libros.json`
      );

      if (!response.ok) {
        throw new Error("Error en la respuesta");
      }

      const data = await response.json();
      const resultados =
        data.filter((libro: LibroCardProps) => {
          const coincideTitulo = libro.titulo?.toLowerCase().includes(busqueda);
          const coincideAutor = libro.autor?.toLowerCase().includes(busqueda);
          return coincideTitulo || coincideAutor;
      });
      
      setLibros(resultados);

    } catch (error) {
      setError(error instanceof Error ? error.message : 'Error desconocido');

    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mb-5 d-flex flex-column gap-2">
      <section className="col-lg-8 input-group input-group-lg" role="search">
          <input className="form-control form-control-lg me-2" type="search" id="buscador" placeholder="Buscar libros, autores..." aria-label="Search" 
            value={busqueda}

            onChange={(e) =>
              setBusqueda(e.target.value)
            }
          />
          <button className="btn btn-primary btn-lg" type="submit" onClick={buscarLibros}>Buscar</button>
      </section>        

      {
        (error != "") && (
          <div className="alert alert-danger py-2 px-3 mb-0">

            {error}

          </div>
        )
      }

      {
        loading && (
          <div className="d-flex justify-content-center ">
            <div className="mt-5 spinner-border">

              <span className="visually-hidden">
                Loading...
              </span>

            </div>
          </div>
        )
      }
    </section>
  )
}

export default Buscador