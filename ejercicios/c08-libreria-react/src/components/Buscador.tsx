import { useState } from "react";

type Props = {
  setLibros: React.Dispatch<
    React.SetStateAction<any[]>
  >;
};

function Buscador({ setLibros }: Props) {
  const [busqueda, setBusqueda] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const buscarLibros = async () => {
    try {
      setError("");
      setLoading(true);

      const response = await fetch(
        `https://openlibrary.org/search.json?q=${busqueda}`
      );

      if (!response.ok) {
        throw new Error("Error en la respuesta");
      }

      const data = await response.json();

      const librosFormateados =
        data.docs.slice(0, 12).map((libro: any) => {
          return {
            key: libro.key,
            title: libro.title,
            author_name:
              libro.author_name?.[0]
              || "Autor desconocido",

            cover_i: libro.cover_i
          };
      });
      setLibros(librosFormateados);

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