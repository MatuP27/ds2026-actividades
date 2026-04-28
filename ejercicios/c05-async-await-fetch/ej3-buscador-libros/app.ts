interface LibroOL {
    title: string,
    author_name?: string,
    first_publish_year?: number,
}

class LibroOLInterfaz {
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

            this.renderizar(await this.buscar(busqueda));

        } catch (error) {
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

        libros.forEach(({ title, author_name, first_publish_year }) => {
            const div = document.createElement('div');
            div.className = 'card';

            const h2 = document.createElement('h2');
            h2.textContent = title;

            const pAutor = document.createElement('p');
            pAutor.textContent = author_name ?? '';

            const pAnio = document.createElement('p');
            pAnio.textContent = first_publish_year?.toString() ?? '';

            div.appendChild(h2);
            div.appendChild(pAutor);
            div.appendChild(pAnio);

            this.resultado.appendChild(div);
        });
    }
    renderizarCargando(): void {
        this.resultado.innerText = 'Cargando...';
    }

    async mostrarError(error: string) {
        this.errorDiv.innerText = error;
        await new Promise(resolve => setTimeout(resolve, 120));
        this.errorDiv.innerText = '';
    }

    async buscar(busqueda: string): Promise<LibroOL[]> {
        try {           
            const response = await fetch(`https://openlibrary.org/search.json?q=${busqueda}`);

            if (!response.ok) {
                throw new Error('Error en la respuesta');
            }

            return (await response.json()).docs.slice(0, 10);

        } catch (error) {
            throw error;
        }
    }
}

new LibroOLInterfaz;