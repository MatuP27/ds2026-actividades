// Ejercicio 2 — Catálogo de libros tipado
// Objetivo: practicar interfaces, arrays de objetos, filtros y
// renderizado en HTML.
// Pasos:
// ● Crear un index.html con:
    // ○ <h1>Catálogo</h1>, <input type="text" id="filtroAutor">
    // ○ <button id="filtrar">Filtrar</button>
    // ○ <button id="mostrarDisponibles">Solo disponibles</button>
    // ○ <button id="mostrarTodos">Ver todos</button>
    // ○ <ul id="listado"> donde se van a mostrar los libros.
    // ○ <p id="stats"></p> para mostrar cantidad y precio promedio
    // ○ <script src="app.js"></script> al final del <body>
    // ○ Crear app.ts con una interface Libro isbn(string), titulo
    // (string), autor (string), precio (number) disponible
    // (boolean) y genero (string/opcional).
// ● Escribir y tipar estas funciones:
    // ○ buscarPorAutor(autor: string): Libro[]
    // ○ librosDisponibles(): Libro[]
    // ○ precioPromedio(libros: Libro[]): number
    // ○ renderizar(libros: Libro[]): void → agrega cada libro como
    // <li> en el <ul> y actualiza el <p> de stats con la cantidad
    // y el promedio.
// ● Enganchar los botones:
    // ○ Filtrar → leer el input y llamar
    // renderizar(buscarPorAutor(...)).
    // ○ Solo disponibles → renderizar(librosDisponibles()).
    // ○ Ver todos → renderizar(catalogo).
// ● Al cargar la página, mostrar todos los libros por defecto.
// ● Traspilar: tsc app.ts
// ● Abrir en el navegador y probar los tres botones.
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
        
        for (let i = libros.length - 1; i >= 0; i--) {
            total += libros[i].precio;
        }

        return total / libros.length;
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
    private buscador: HTMLInputElement;

    private filtrar: HTMLButtonElement;
    private mostrarTodos: HTMLButtonElement;
    private mostrarDisponibles: HTMLButtonElement;

    private listado: HTMLUListElement;
    private stats: HTMLParagraphElement;

    constructor(private controller: LibroController) {
        this.buscador = document.getElementById('filtroAutor') as HTMLInputElement;
        
        this.filtrar = document.getElementById('filtrar') as HTMLButtonElement;
        this.mostrarTodos = document.getElementById('mostrarTodos') as HTMLButtonElement;
        this.mostrarDisponibles = document.getElementById('mostrarDisponibles') as HTMLButtonElement;

        this.listado = document.getElementById('listado') as HTMLUListElement;
        this.stats = document.getElementById('stats') as HTMLParagraphElement;

        
        this.filtrar.addEventListener('click', () => this.onClickFiltrar());
        this.mostrarTodos.addEventListener('click', () => this.onClickMostrarTodos());
        this.mostrarDisponibles.addEventListener('click', () => this.onClickMostrarDisponibles());
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
            this.listado.appendChild(li);
        });


        this.stats.innerHTML = `
            Cantidad libros: ${l.length}
            Precio promedio: ${this.controller.precioPromedio(l)}
        `;
    }
}

new LibroInterfaz (new LibroController(new LibroRepository));