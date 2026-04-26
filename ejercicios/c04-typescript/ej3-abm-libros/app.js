var LibroController = /** @class */ (function () {
    function LibroController(repository) {
        this.repository = repository;
    }
    LibroController.prototype.crearLibro = function (isbn, titulo, autor, precio, disponible, genero) {
        return { isbn: isbn, titulo: titulo, autor: autor, precio: precio, disponible: disponible, genero: genero };
    };
    LibroController.prototype.agregarLibro = function (libro) {
        this.repository.persistir(libro);
    };
    LibroController.prototype.eliminarLibro = function (isbn) {
        this.repository.eliminar(isbn);
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
        libros.forEach(function (libro) {
            total += libro.precio;
        });
        return total / libros.length;
    };
    LibroController.prototype.generarIsbn = function () {
        return Date.now().toString();
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
    LibroRepository.prototype.eliminar = function (isbn) {
        this.bd = this.bd.filter(function (l) {
            return l.isbn != isbn;
        });
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
        // BUSCADOR
        this.buscador = document.getElementById('filtroAutor');
        this.filtrar = document.getElementById('filtrar');
        this.mostrarTodos = document.getElementById('mostrarTodos');
        this.mostrarDisponibles = document.getElementById('mostrarDisponibles');
        this.listado = document.getElementById('listado');
        this.stats = document.getElementById('stats');
        // FORM
        this.form = document.getElementById('crearLibro');
        this.titulo = this.form.elements.namedItem("titulo");
        this.autor = this.form.elements.namedItem("autor");
        this.precio = this.form.elements.namedItem("precio");
        this.disponible = this.form.elements.namedItem("disponible");
        this.genero = this.form.elements.namedItem("genero");
        this.error = document.getElementById('errorForm');
        this.filtrar.addEventListener('click', function () { return _this.onClickFiltrar(); });
        this.mostrarTodos.addEventListener('click', function () { return _this.onClickMostrarTodos(); });
        this.mostrarDisponibles.addEventListener('click', function () { return _this.onClickMostrarDisponibles(); });
        this.form.addEventListener('submit', function (event) {
            event.preventDefault(); // evitar que el form haga el get.
            _this.onSubmitForm();
        });
        this.renderizar(this.controller.buscarTodos());
    }
    LibroInterfaz.prototype.onSubmitForm = function () {
        var libro = this.validarFormulario();
        if (libro !== null) {
            this.controller.agregarLibro(libro);
            this.form.reset();
            this.renderizar(this.controller.buscarTodos());
        }
    };
    LibroInterfaz.prototype.onClickEliminarLibro = function (isbn) {
        this.controller.eliminarLibro(isbn);
        this.renderizar(this.controller.buscarTodos());
    };
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
            // crear botón
            var button = document.createElement('button');
            button.textContent = "Eliminar";
            button.addEventListener("click", function () {
                _this.onClickEliminarLibro(libro.isbn);
            });
            li.appendChild(button);
            _this.listado.appendChild(li);
        });
        this.stats.innerHTML = "\n            Cantidad libros: ".concat(l.length, "\n            Precio promedio: ").concat(this.controller.precioPromedio(l), "\n        ");
    };
    LibroInterfaz.prototype.renderizarError = function (error) {
        this.error.innerText = error;
    };
    LibroInterfaz.prototype.validarFormulario = function () {
        var titulo = this.titulo.value.trim();
        var autor = this.autor.value.trim();
        var precio = parseFloat(this.precio.value);
        var disponible = this.disponible.checked;
        var genero = this.genero.value.trim() || undefined;
        if (!titulo || !autor || isNaN(precio) || precio <= 0) {
            this.renderizarError('Completar todos los campos correctamente');
            return null;
        }
        return this.controller.crearLibro(this.controller.generarIsbn(), titulo, autor, precio, disponible, genero);
    };
    return LibroInterfaz;
}());
new LibroInterfaz(new LibroController(new LibroRepository));
