import { NavLink } from "react-router-dom"

function NavBar(){
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary p-fixed">
        <div className="container-lg">
            <a className="navbar-brand" href="index.html">
                <img src="https://images.vexels.com/media/users/3/267831/isolated/preview/cd079d709300f6af3cdfa75b83d35db8-icono-de-libros-acogedores-de-invierno.png" alt="Logo" style={{ height: "40px" }} />
                Tinta & Papel
            </a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <NavLink
                        to="/"
                        className={({ isActive }: { isActive: boolean }) =>
                          isActive
                            ? "nav-link active"
                            : "nav-link"
                        }
                      >
                        Inicio
                      </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                          to="/catalogo"
                          className={({ isActive }: { isActive: boolean }) =>
                            isActive
                              ? "nav-link active"
                              : "nav-link"
                          }
                        >
                          Catálogo
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                          to="/contacto"
                          className={({ isActive }: { isActive: boolean }) =>
                            isActive
                              ? "nav-link active"
                              : "nav-link"
                          }
                        >
                          Contacto
                        </NavLink>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Gestión Libros
                      </a>

                      <ul className="dropdown-menu">
                        <li>
                          <NavLink className="dropdown-item" to="/libros/crear">
                            Crear
                          </NavLink>
                        </li>

                        <li>
                          <NavLink className="dropdown-item" to="/libros/modificar">
                            Modificar
                          </NavLink>
                        </li>

                        <li>
                          <NavLink className="dropdown-item" to="/libros/eliminar">
                            Eliminar
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default NavBar