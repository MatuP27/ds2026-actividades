// Ejercicio 3 - ABM de libros en la página
// Objetivo: ombinar formulario + lista + estado en memoria, todo
// tipado (Extensión del Ej 2).
// Pasos:
// ● Partir del HTML del Ej 2 y sumar un formulario para cargar
// libros (con todos los campos y un <div id="errorForm"></div>
// para mostrar los errores
// ● Cada <li> del listado debe tener además un botón "Eliminar"
// que lo quita del array y re-renderiza.
// ● En app.ts:
    // ○ Reusar la interface Libro del Ej 2.
    // ○ Array catalogo: Libro[] que empieza con 2-3 libros
    // precargados.
    // ○ Funciones tipadas:
        // - agregarLibro(libro: Libro): void — lo agrega al array y
        // llama a renderizar.
        // - eliminarLibro(isbn: string): void — lo saca del array y
        // re-renderiza.
        // - validarFormulario(): Libro | null — lee los inputs,
        // valida que no estén vacíos / precio > 0, genera un ISBN
        // random (ej: "AUTO-" + Date.now()) y devuelve un Libro, o
        // null si hay error.
    // ○ El handler del botón Agregar:
        // - Llamar a validarFormulario().
        // - Si devuelve null → mostrar error en #errorForm.
        // - Si devuelve un Libro → agregarLibro() + limpiar el form.
// ● Traspilar: tsc app.ts
// ● Abrir en el navegador y probar agregar y eliminar libros.
interface Libro {
    isbn: string,
    titulo: string,
    autor: string,
    precio: number,
    disponible: boolean,
    genero?: string,    
}

class LibroController {
    constructor(private repository: LibroRepository) { }

    crearLibro(isbn: string, titulo: string, autor: string, precio: number, disponible: boolean, genero?: string): Libro {
        return {isbn, titulo, autor, precio, disponible, genero};
    }

    agregarLibro(libro: Libro): void {
        this.repository.persistir(libro);
    }

    eliminarLibro(isbn: string): void {
        this.repository.eliminar(isbn);
    }

    buscarPorAutor(autor: string): Libro[] {
        return this.repository.buscarPorAutor(autor);
    }

    buscarTodos(): Libro[] {
        return this.repository.buscarTodos();
    }

    librosDisponibles(): Libro[] {
        return this.repository.librosDisponibles();
    }
    
    precioPromedio(libros: Libro[]): number {
        if (libros.length === 0) return 0;
        

        let total: number = 0;
        libros.forEach(libro => {
            total += libro.precio;
        });
        
        return total / libros.length;
    }

    generarIsbn(): string {
        return Date.now().toString();
    }
}

class LibroRepository {
    private bd: Libro[];

    constructor() {
        this.bd = [
            {
                isbn: "978-987-123456-0",
                titulo: "El principito",
                autor: "Antoine de Saint-Exupéry",
                precio: 15000,
                disponible: true,
                genero: "Ficción"
            },
            {
                isbn: "978-950-123456-1",
                titulo: "Clean Code",
                autor: "Robert C. Martin",
                precio: 45000,
                disponible: true,
                genero: "Programación"
            },
            {
                isbn: "978-8445072300",
                titulo: "Don Quijote de la Mancha",
                autor: "Miguel de Cervantes",
                precio: 20000,
                disponible: false
            },
            {
                isbn: "978-0307474278",
                titulo: "The Clean Coder",
                autor: "Robert C. Martin",
                precio: 40000,
                disponible: true,
                genero: "Programación"
            },
            {
                isbn: "978-0132350884",
                titulo: "Clean Architecture",
                autor: "Robert C. Martin",
                precio: 48000,
                disponible: false,
                genero: "Programación"
            },
            {
                isbn: "978-8491050292",
                titulo: "Novelas ejemplares",
                autor: "Miguel de Cervantes",
                precio: 18000,
                disponible: true,
                genero: "Clásico"
            },
            {
                isbn: "978-0140449266",
                titulo: "Hamlet",
                autor: "William Shakespeare",
                precio: 17000,
                disponible: true,
                genero: "Drama"
            },
            {
                isbn: "978-0141439600",
                titulo: "Orgullo y prejuicio",
                autor: "Jane Austen",
                precio: 19000,
                disponible: true,
                genero: "Romance"
            },
            {
                isbn: "978-0451524935",
                titulo: "1984",
                autor: "George Orwell",
                precio: 21000,
                disponible: false,
                genero: "Distopía"
            },
            {
                isbn: "978-0544003415",
                titulo: "El Hobbit",
                autor: "J.R.R. Tolkien",
                precio: 25000,
                disponible: true,
                genero: "Fantasía"
            },
            {
                isbn: "978-0261103573",
                titulo: "El Señor de los Anillos",
                autor: "J.R.R. Tolkien",
                precio: 60000,
                disponible: false,
                genero: "Fantasía"
            }
        ];
    }

    persistir(l: Libro): void {
        this.bd.push(l);
    }

    eliminar(isbn: string): void {
        this.bd = this.bd.filter(l => 
            l.isbn != isbn
        );
    }

    buscarPorAutor(autor: string): Libro[] {
        return this.bd.filter(l =>
            l.autor.toLowerCase().includes(autor.toLowerCase())
        );
    }
    
    buscarTodos(): Libro[] {
        return this.bd;
    }

    librosDisponibles(): Libro[] {
        return this.bd.filter(l =>
            l.disponible
        );
    }
}

class LibroInterfaz {
    // BUSCADOR
    private buscador: HTMLInputElement;
    private filtrar: HTMLButtonElement;
    private mostrarTodos: HTMLButtonElement;
    private mostrarDisponibles: HTMLButtonElement;
    private listado: HTMLUListElement;
    private stats: HTMLParagraphElement;

    // FORM
    private form: HTMLFormElement;
    private titulo: HTMLInputElement;
    private autor: HTMLInputElement;
    private precio: HTMLInputElement;
    private disponible: HTMLInputElement;
    private genero: HTMLInputElement;
    private error: HTMLDivElement;

    constructor(private controller: LibroController) {
        // BUSCADOR
        this.buscador = document.getElementById('filtroAutor') as HTMLInputElement;
        this.filtrar = document.getElementById('filtrar') as HTMLButtonElement;
        this.mostrarTodos = document.getElementById('mostrarTodos') as HTMLButtonElement;
        this.mostrarDisponibles = document.getElementById('mostrarDisponibles') as HTMLButtonElement;

        this.listado = document.getElementById('listado') as HTMLUListElement;
        this.stats = document.getElementById('stats') as HTMLParagraphElement;

        // FORM
        this.form = document.getElementById('crearLibro') as HTMLFormElement;
        this.titulo = this.form.elements.namedItem("titulo") as HTMLInputElement;
        this.autor = this.form.elements.namedItem("autor") as HTMLInputElement;
        this.precio = this.form.elements.namedItem("precio") as HTMLInputElement;
        this.disponible = this.form.elements.namedItem("disponible") as HTMLInputElement;
        this.genero = this.form.elements.namedItem("genero") as HTMLInputElement;
        this.error = document.getElementById('errorForm') as HTMLDivElement;
        
        this.filtrar.addEventListener('click', () => this.onClickFiltrar());
        this.mostrarTodos.addEventListener('click', () => this.onClickMostrarTodos());
        this.mostrarDisponibles.addEventListener('click', () => this.onClickMostrarDisponibles());

        this.form.addEventListener('submit', (event) => {
            event.preventDefault(); // evitar que el form haga el get.
            this.onSubmitForm();
        });

        this.renderizar(this.controller.buscarTodos());
    }
    
    onSubmitForm(): void {
        const libro: Libro | null = this.validarFormulario();

        if (libro !== null) {
            this.controller.agregarLibro(libro);
            this.form.reset();
            this.renderizar(this.controller.buscarTodos());
        }
    }

    onClickEliminarLibro(isbn: string): void {
        this.controller.eliminarLibro(isbn);
        this.renderizar(this.controller.buscarTodos());
    }

    onClickFiltrar(): void {
        this.renderizar(this.controller.buscarPorAutor(this.buscador.value));
    }

    onClickMostrarTodos(): void {
        this.renderizar(this.controller.buscarTodos());
    }

    onClickMostrarDisponibles(): void {
        this.renderizar(this.controller.librosDisponibles());
    }
    
    renderizar(l: Libro[]): void {
        this.listado.innerHTML = '';
        
        l.forEach(libro => {
            const li = document.createElement('li');
            li.className = `libro-disponible-${libro.disponible}`;
            li.textContent = `${libro.isbn}. "${libro.titulo}", ${libro.autor} (${libro.genero ?? ''} ${libro.precio})`;

            // crear botón
            const button = document.createElement('button');
            button.textContent = "Eliminar";

            button.addEventListener("click", () => {
                this.onClickEliminarLibro(libro.isbn);
            });
            li.appendChild(button);

            this.listado.appendChild(li);
        });


        this.stats.innerHTML = `
            Cantidad libros: ${l.length}
            Precio promedio: ${this.controller.precioPromedio(l)}
        `;
    }

    renderizarError(error: string): void {
        this.error.innerText = error;
    }

    validarFormulario(): Libro | null {
        const titulo = this.titulo.value.trim();
        const autor = this.autor.value.trim();
        const precio = parseFloat(this.precio.value);
        const disponible = this.disponible.checked;
        const genero = this.genero.value.trim() || undefined;

        if (!titulo || !autor || isNaN(precio) || precio <= 0) {
            this.renderizarError('Completar todos los campos correctamente');
            return null;
        }

        return this.controller.crearLibro(this.controller.generarIsbn(), titulo, autor, precio, disponible, genero);
    }
}

new LibroInterfaz (new LibroController(new LibroRepository));