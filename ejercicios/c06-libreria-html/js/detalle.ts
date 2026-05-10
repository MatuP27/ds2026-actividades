interface LibroOL {
    key: string,
    title: string,
    author_name?: string,
    cover_i?: number,
    description?: string
}

class LibroInterfazVerMas {
    private resultado: HTMLDivElement;

    constructor() {
        this.resultado = document.getElementById('resultado') as HTMLDivElement;
    }

    async onChargePage() {
        try {
            const busqueda = this.validarBusqueda();

            this.renderizar(await this.buscarPorKey(busqueda));

        } catch (error) {
            this.volverAlCatalogo();
        }
    }

    validarBusqueda(): string {
        const params = new URLSearchParams(window.location.search);

        const key = params.get('key');

        if (!key) {
            throw new Error('Key inválida');
        }

        return key;
    }
    
    renderizar(libro: LibroOL) {
        const portada = libro.cover_i
            ? `https://covers.openlibrary.org/b/id/${libro.cover_i}-L.jpg`
            : `https://static.thenounproject.com/png/1077596-200.png`;

        const card = `
            <div class="col-12 col-md-6 d-flex justify-content-center">
                <img 
                    src="${portada}" 
                    class="img-fluid rounded-start"
                    alt="Portada del libro"
                >
            </div>

            <div class="col-12 col-md-6">
                <div class="card-body p-4 p-lg-5">
                    <h1 class="card-title h2 mb-1">${libro.title}</h1>
                    <p class="text-muted h5 mb-4">${libro.author_name || 'Autor desconocido'}</p>
                    
                    <p class="card-text leading-relaxed text-secondary">
                        ${libro.description || 'Sin descripción'}
                    </p>

                    <h4 class="fst-italic">$ 19.000,00</h4>

                    <div class="d-grid d-md-block">
                        <a href="#" class="btn btn-primary btn-lg px-5 fw-bold mt-4">Comprar</a>
                    </div>

                </div>
            </div>
        `;

        this.resultado.innerHTML = card;
    }

    volverAlCatalogo() {
        window.location.href = 'catalogo.html';
    }

    async buscarPorKey(key: string): Promise<LibroOL> {
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
    }
}

const verMas = new LibroInterfazVerMas;
verMas.onChargePage();