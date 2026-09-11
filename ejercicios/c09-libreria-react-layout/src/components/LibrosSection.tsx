import { NavLink } from "react-router-dom"
import type { LibroOL } from "../types/Libro";

type Props = {
  libros: LibroOL[];
};

type LibroCardProps = {
  libro: LibroOL;
};

function LibroCard({ libro }: LibroCardProps) {
  return (
    <div className="col-12 col-sm-6 col-lg-4 d-flex">
      <div className="card w-100">
          <img src={`https://covers.openlibrary.org/b/id/${libro.cover_i}-M.jpg`} className="card-img-top object-fit-contain" style={{ height: "400px" }} alt={libro.title} />
          <div className="card-body">
              <h5 className="card-title mb-1">{libro.title}</h5>
              <p className="text-secondary mb-3">
                {libro.author_name}
              </p>
              
              <NavLink
                to={`/libro/${encodeURIComponent(libro.key)}`}
                className="btn btn-primary d-flex justify-content-center"
              >
                Ver más...
              </NavLink>  
          </div>
      </div>
    </div>
  )
}

function LibrosCards({ libros }: Props) {

  return (
    <>
      {libros.map((libro, index) => (
        <LibroCard libro={libro} key={index} />
      ))}
    </>
  );
}

function LibrosSection({ libros }: Props) {
  return (
    <div className="row g-3 justify-content-center flex-grow-1">
      <LibrosCards libros={ libros ​} />
    </div>
  )
}

export default LibrosSection