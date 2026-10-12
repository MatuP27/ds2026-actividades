function Contacto() {
  return (
    <>

        <div className="card border-0 shadow-lg overflow-hidden rounded-4">
            <div className="row g-0 min-vh-50">
                <div className="col-12 col-md-5 bg-primary text-white d-flex align-items-center">
                    <div className="p-4 p-lg-5">
                        <span className="badge bg-light text-primary mb-3 px-3 py-2">Estamos disponibles</span>
                        <h1 className="display-5 fw-bold mb-3">Contáctanos</h1>

                        <p className="fs-5 opacity-75 mb-4">
                            ¿Querés trabajar con nosotros?
                            Contanos tu idea y creemos algo increíble juntos.
                        </p>

                        <div className="d-flex flex-column gap-3">

                            <div className="d-flex align-items-center gap-3">
                                <div className="bg-white text-primary rounded-circle d-flex justify-content-center align-items-center" 
                                style={{ width: "50px", height: "50px" }}>📧</div>

                                <div>
                                    <small className="opacity-75">Email</small>
                                    <div className="fw-semibold">
                                        contacto@tinta&papel.com
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex align-items-center gap-3">
                                <div className="bg-white text-primary rounded-circle d-flex justify-content-center align-items-center" 
                                style={{ width: "50px", height: "50px" }}>📞</div>

                                <div>
                                    <small className="opacity-75">Teléfono</small>
                                    <div className="fw-semibold">+54 9 11 1234-5678</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-7 bg-white">
                    <div className="card-body p-4 p-lg-5">
                        <h2 className="fw-bold mb-1">Envíanos un mensaje</h2>
                        <p className="text-muted mb-4">Te responderemos lo antes posible.</p>

                        <form className="d-flex flex-column gap-4">
                            <div className="form-floating">
                                <input type="text" className="form-control rounded-3" id="floatingName" placeholder="Nombre" required />
                                <label htmlFor="floatingName">Nombre completo</label>
                            </div>        

                            <div className="form-floating">
                                <input type="email" className="form-control rounded-3" id="floatingInput" placeholder="nombre@ejemplo.com" required />
                                <label htmlFor="floatingInput">Correo electrónico</label>
                            </div>

                            <div className="form-floating">
                                <select className="form-select rounded-3" id="floatingSelect" required>
                                    <option selected disabled hidden>Seleccione una opción</option>
                                    <option>Consulta</option>
                                    <option>Reclamo</option>
                                    <option>Sugerencia</option>
                                </select>
                                <label htmlFor="floatingSelect">Motivo de consulta</label>
                            </div>

                            <div className="form-floating">
                                <textarea className="form-control rounded-3" id="floatingTextarea" placeholder="Mensaje"  style={{ height: "140px" }} required></textarea>
                                <label htmlFor="floatingTextarea">Mensaje</label>
                            </div>

                            <button type="submit" className="btn btn-primary btn-lg rounded-3 py-3 fw-semibold">Enviar mensaje</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contacto