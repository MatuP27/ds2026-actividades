import { NavLink } from "react-router-dom"
import type { LibroCardProps } from '../types/libroCardProps';

type Props = {
  libros: LibroCardProps[];
};

type LibroCardPropss = {
  libro: LibroCardProps;
};

function LibroCard({ libro }: LibroCardPropss) {
  return (
    <div className="col-12 col-sm-6 col-lg-4 d-flex">
      <div className="card w-100">
          <img src={`${libro.imagen}`} className="card-img-top object-fit-contain" style={{ height: "400px" }} alt={libro.titulo} />
          <div className="card-body">
              <h5 className="card-title mb-1">{libro.titulo}</h5>
              <p className="text-secondary mb-3">
                {libro.autor}
              </p>
              
              <NavLink
                to={`/libro/${libro.id}`}
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