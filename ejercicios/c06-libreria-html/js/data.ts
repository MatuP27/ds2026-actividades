interface LibroOL {
    key: string,
    title: string,
    author_name?: string,
    cover_i?: number,
    description?: string
}

class LibroInterfazCatalogo {
    private buscador: HTMLInputElement;
    private buscarButton: HTMLButtonElement;

    private resultado: HTMLDivElement;
    private errorDiv: HTMLDivElement;

    constructor() {
        this.buscador = document.getElementById('buscador') as HTMLInputElement;
        this.buscarButton = document.getElementById('buscarButton') as HTMLButtonElement;

        this.resultado = document.getElementById('resultado') as HTMLDivElement;
        this.errorDiv = document.getElementById('errorDiv') as HTMLDivElement;

        this.buscarButton.addEventListener('click', () => this.onClickBuscar());
    }

    async onClickBuscar() {
        try {
            this.renderizarCargando();
            const busqueda = this.validarBusqueda();

            this.renderizar(await this.buscarPorPalabraClave(busqueda));

        } catch (error) {
            this.resultado.innerHTML = '';

            this.mostrarError(error instanceof Error ? error.message : 'Error desconocido');
        }
    }

    validarBusqueda(): string {
        try {
            const busqueda = this.buscador.value.trim();
            if (!busqueda || busqueda.length < 3) {
                throw new Error('Busqueda invalida, al menos 3 caracteres.');
            }
            return busqueda;

        } catch (error) {
            throw error;
        }
    }
    
    renderizar(libros: LibroOL[]) {
        this.resultado.innerHTML = libros.length > 0 ? '' : 'No se encontro ningun resultado.';
        let cards = ``;
        libros.forEach(({ key, title, author_name, cover_i }) => {
            const card = `
                <div class="col-12 col-sm-6 col-lg-4 d-flex">
                    <div class="card w-100">
                        <img src="${cover_i ? 
                            'https://covers.openlibrary.org/b/id/' + cover_i + '-M.jpg' : 
                            'https://static.thenounproject.com/png/1077596-200.png'
                            }" class="card-img-top object-fit-contain" style="height: 400px;" alt="...">
                        <div class="card-body">
                            <h5 class="card-title mb-1">${title}</h5>
                            <p class="text-secondary mb-3">
                                ${author_name || 'Autor desconocido'}
                            </p>
                            <a href="libro.html?key=${encodeURIComponent(key)}" class="btn btn-primary d-flex justify-content-center">Ver más...</a>
                        </div>
                    </div>
                </div>
            `;
            cards += card;
        });
        this.resultado.innerHTML = cards;
    }

    renderizarCargando(): void {
        this.resultado.innerHTML = `
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        `;
    }

    async mostrarError(error: string) {
        this.errorDiv.innerHTML = `
            <div class="alert alert-danger h-100 mt-2" style="height: 50px;" role="alert">
                <div>
                    ${error}
                </div>
            </div>
        `;
        await new Promise(resolve => setTimeout(resolve, 2400));
        this.errorDiv.innerHTML = '';
    }

    async buscarPorPalabraClave(busqueda: string): Promise<LibroOL[]> {
        try {           
            const response = await fetch(`https://openlibrary.org/search.json?q=${busqueda}`);

            if (!response.ok) {
                throw new Error('Error en la respuesta');
            }
            
            return (await response.json()).docs.slice(0, 12).map((libro: any) => {
                return {
                    key: libro.key,
                    title: libro.title,
                    author_name: libro.author_name?.[0] || 'Autor desconocido',
                    cover_i: libro.cover_i
                };
            });
        } catch (error) {
            throw error;
        }
    }
}

new LibroInterfazCatalogo;