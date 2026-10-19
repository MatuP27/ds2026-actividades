import { useState, useEffect } from "react";
import type { LibroCardProps } from "../types/libroCardProps";
import { useFetch } from "../hooks/useFetch"; // Asegúrate de ajustar la ruta de tu hook

type Props = {
  setLibros: React.Dispatch<React.SetStateAction<LibroCardProps[]>>;
};

function Buscador({ setLibros }: Props) {
  const [busqueda, setBusqueda] = useState<string>("");

  // 1. Obtener datos mediante el Custom Hook
  const { data: todosLosLibros, loading, error } = useFetch<LibroCardProps[]>("/libros");

  // 2. Al cargar o recibir 'todosLosLibros', actualizar el estado del padre
  useEffect(() => {
    if (todosLosLibros) {
      setLibros(todosLosLibros);
    }
  }, [todosLosLibros, setLibros]);

  // 3. Función de búsqueda/filtrado local sobre los datos que ya trajo useFetch
  const buscarLibros = () => {
    if (!todosLosLibros) return;

    const query = busqueda.toLowerCase().trim();

    if (query === "") {
      setLibros(todosLosLibros);
      return;
    }

    const resultados = todosLosLibros.filter((libro) => {
      const coincideTitulo = libro.titulo?.toLowerCase().includes(query);
      const coincideAutor = libro.autor.nombre?.toLowerCase().includes(query);
      return coincideTitulo || coincideAutor;
    });

    setLibros(resultados);
  };

  return (
    <section className="mb-5 d-flex flex-column gap-2">
      <section className="col-lg-8 input-group input-group-lg" role="search">
        <input
          className="form-control form-control-lg me-2"
          type="search"
          id="buscador"
          placeholder="Buscar libros, autores..."
          aria-label="Search"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <button
          className="btn btn-primary btn-lg"
          type="button"
          onClick={buscarLibros}
        >
          Buscar
        </button>
      </section>

      {error && (
        <div className="alert alert-danger py-2 px-3 mb-0">
          {error}
        </div>
      )}

      {loading && (
        <div className="d-flex justify-content-center">
          <div className="mt-5 spinner-border">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </section>
  );
}

export default Buscador;