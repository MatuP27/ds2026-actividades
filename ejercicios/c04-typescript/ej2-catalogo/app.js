var LibroController = /** @class */ (function () {
    function LibroController(repository) {
        this.repository = repository;
    }
    LibroController.prototype.crearLibro = function (isbn, titulo, autor, precio, disponible, genero) {
        return { isbn: isbn, titulo: titulo, autor: autor, precio: precio, disponible: disponible, genero: genero };
    };
    LibroController.prototype.buscarPorAutor = function (autor) {
        return this.repository.buscarPorAutor(autor);
    };
    LibroController.prototype.buscarTodos = function () {
        return this.repository.buscarTodos();
    };
    LibroController.prototype.librosDisponibles = function () {
        return this.repository.librosDisponibles();
    };
    LibroController.prototype.precioPromedio = function (libros) {
        if (libros.length === 0)
            return 0;
        var total = 0;
        for (var i = libros.length - 1; i >= 0; i--) {
            total += libros[i].precio;
        }
        return total / libros.length;
    };
    return LibroController;
}());
var LibroRepository = /** @class */ (function () {
    function LibroRepository() {
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
    LibroRepository.prototype.persistir = function (l) {
        this.bd.push(l);
    };
    LibroRepository.prototype.buscarPorAutor = function (autor) {
        return this.bd.filter(function (l) {
            return l.autor.toLowerCase().includes(autor.toLowerCase());
        });
    };
    LibroRepository.prototype.buscarTodos = function () {
        return this.bd;
    };
    LibroRepository.prototype.librosDisponibles = function () {
        return this.bd.filter(function (l) {
            return l.disponible;
        });
    };
    return LibroRepository;
}());
var LibroInterfaz = /** @class */ (function () {
    function LibroInterfaz(controller) {
        var _this = this;
        this.controller = controller;
        this.buscador = document.getElementById('filtroAutor');
        this.filtrar = document.getElementById('filtrar');
        this.mostrarTodos = document.getElementById('mostrarTodos');
        this.mostrarDisponibles = document.getElementById('mostrarDisponibles');
        this.listado = document.getElementById('listado');
        this.stats = document.getElementById('stats');
        this.filtrar.addEventListener('click', function () { return _this.onClickFiltrar(); });
        this.mostrarTodos.addEventListener('click', function () { return _this.onClickMostrarTodos(); });
        this.mostrarDisponibles.addEventListener('click', function () { return _this.onClickMostrarDisponibles(); });
    }
    LibroInterfaz.prototype.onClickFiltrar = function () {
        this.renderizar(this.controller.buscarPorAutor(this.buscador.value));
    };
    LibroInterfaz.prototype.onClickMostrarTodos = function () {
        this.renderizar(this.controller.buscarTodos());
    };
    LibroInterfaz.prototype.onClickMostrarDisponibles = function () {
        this.renderizar(this.controller.librosDisponibles());
    };
    LibroInterfaz.prototype.renderizar = function (l) {
        var _this = this;
        this.listado.innerHTML = '';
        l.forEach(function (libro) {
            var _a;
            var li = document.createElement('li');
            li.className = "libro-disponible-".concat(libro.disponible);
            li.textContent = "".concat(libro.isbn, ". \"").concat(libro.titulo, "\", ").concat(libro.autor, " (").concat((_a = libro.genero) !== null && _a !== void 0 ? _a : '', " ").concat(libro.precio, ")");
            _this.listado.appendChild(li);
        });
        this.stats.innerHTML = "\n            Cantidad libros: ".concat(l.length, "\n            Precio promedio: ").concat(this.controller.precioPromedio(l), "\n        ");
    };
    return LibroInterfaz;
}());
new LibroInterfaz(new LibroController(new LibroRepository));
