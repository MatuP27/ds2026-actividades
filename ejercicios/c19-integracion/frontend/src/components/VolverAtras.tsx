import { NavLink } from "react-router-dom"

type Props = {
  to: string;
  texto: string;
};

function VolverAtras({ to, texto }: Props) {
  return (
    <div className="mb-4 text-end">
      <NavLink to={to} className="link-dark link-underline-opacity-0 icon-link icon-link-hover">
        {texto}
        <svg xmlns="http://w3.org" width="16" style={{ height: "16px" }} fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 0.708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
        </svg>
      </NavLink>
    </div>
  )
}

export default VolverAtras