var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var LibroInterfazCatalogo = /** @class */ (function () {
    function LibroInterfazCatalogo() {
        var _this = this;
        this.buscador = document.getElementById('buscador');
        this.buscarButton = document.getElementById('buscarButton');
        this.resultado = document.getElementById('resultado');
        this.errorDiv = document.getElementById('errorDiv');
        this.buscarButton.addEventListener('click', function () { return _this.onClickBuscar(); });
    }
    LibroInterfazCatalogo.prototype.onClickBuscar = function () {
        return __awaiter(this, void 0, void 0, function () {
            var busqueda, _a, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        this.renderizarCargando();
                        busqueda = this.validarBusqueda();
                        _a = this.renderizar;
                        return [4 /*yield*/, this.buscarPorPalabraClave(busqueda)];
                    case 1:
                        _a.apply(this, [_b.sent()]);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _b.sent();
                        this.resultado.innerHTML = '';
                        this.mostrarError(error_1 instanceof Error ? error_1.message : 'Error desconocido');
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LibroInterfazCatalogo.prototype.validarBusqueda = function () {
        try {
            var busqueda = this.buscador.value.trim();
            if (!busqueda || busqueda.length < 3) {
                throw new Error('Busqueda invalida, al menos 3 caracteres.');
            }
            return busqueda;
        }
        catch (error) {
            throw error;
        }
    };
    LibroInterfazCatalogo.prototype.renderizar = function (libros) {
        this.resultado.innerHTML = libros.length > 0 ? '' : 'No se encontro ningun resultado.';
        var cards = "";
        libros.forEach(function (_a) {
            var key = _a.key, title = _a.title, author_name = _a.author_name, cover_i = _a.cover_i;
            var card = "\n                <div class=\"col-12 col-sm-6 col-lg-4 d-flex\">\n                    <div class=\"card w-100\">\n                        <img src=\"".concat(cover_i ?
                'https://covers.openlibrary.org/b/id/' + cover_i + '-M.jpg' :
                'https://static.thenounproject.com/png/1077596-200.png', "\" class=\"card-img-top object-fit-contain\" style=\"height: 400px;\" alt=\"...\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title mb-1\">").concat(title, "</h5>\n                            <p class=\"text-secondary mb-3\">\n                                ").concat(author_name || 'Autor desconocido', "\n                            </p>\n                            <a href=\"libro.html?key=").concat(encodeURIComponent(key), "\" class=\"btn btn-primary d-flex justify-content-center\">Ver m\u00E1s...</a>\n                        </div>\n                    </div>\n                </div>\n            ");
            cards += card;
        });
        this.resultado.innerHTML = cards;
    };
    LibroInterfazCatalogo.prototype.renderizarCargando = function () {
        this.resultado.innerHTML = "\n            <div class=\"spinner-border text-primary\" role=\"status\">\n                <span class=\"visually-hidden\">Loading...</span>\n            </div>\n        ";
    };
    LibroInterfazCatalogo.prototype.mostrarError = function (error) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.errorDiv.innerHTML = "\n            <div class=\"alert alert-danger h-100 mt-2\" style=\"height: 50px;\" role=\"alert\">\n                <div>\n                    ".concat(error, "\n                </div>\n            </div>\n        ");
                        return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 2400); })];
                    case 1:
                        _a.sent();
                        this.errorDiv.innerHTML = '';
                        return [2 /*return*/];
                }
            });
        });
    };
    LibroInterfazCatalogo.prototype.buscarPorPalabraClave = function (busqueda) {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetch("https://openlibrary.org/search.json?q=".concat(busqueda))];
                    case 1:
                        response = _a.sent();
                        if (!response.ok) {
                            throw new Error('Error en la respuesta');
                        }
                        return [4 /*yield*/, response.json()];
                    case 2: return [2 /*return*/, (_a.sent()).docs.slice(0, 12).map(function (libro) {
                            var _a;
                            return {
                                key: libro.key,
                                title: libro.title,
                                author_name: ((_a = libro.author_name) === null || _a === void 0 ? void 0 : _a[0]) || 'Autor desconocido',
                                cover_i: libro.cover_i
                            };
                        })];
                    case 3:
                        error_2 = _a.sent();
                        throw error_2;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return LibroInterfazCatalogo;
}());
new LibroInterfazCatalogo;
