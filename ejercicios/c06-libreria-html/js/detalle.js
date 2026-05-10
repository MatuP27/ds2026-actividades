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
var LibroInterfazVerMas = /** @class */ (function () {
    function LibroInterfazVerMas() {
        this.resultado = document.getElementById('resultado');
    }
    LibroInterfazVerMas.prototype.onChargePage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var busqueda, _a, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        busqueda = this.validarBusqueda();
                        _a = this.renderizar;
                        return [4 /*yield*/, this.buscarPorKey(busqueda)];
                    case 1:
                        _a.apply(this, [_b.sent()]);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _b.sent();
                        this.volverAlCatalogo();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LibroInterfazVerMas.prototype.validarBusqueda = function () {
        var params = new URLSearchParams(window.location.search);
        var key = params.get('key');
        if (!key) {
            throw new Error('Key inválida');
        }
        return key;
    };
    LibroInterfazVerMas.prototype.renderizar = function (libro) {
        var portada = libro.cover_i
            ? "https://covers.openlibrary.org/b/id/".concat(libro.cover_i, "-L.jpg")
            : "https://static.thenounproject.com/png/1077596-200.png";
        var card = "\n            <div class=\"col-12 col-md-6 d-flex justify-content-center\">\n                <img \n                    src=\"".concat(portada, "\" \n                    class=\"img-fluid rounded-start\"\n                    alt=\"Portada del libro\"\n                >\n            </div>\n\n            <div class=\"col-12 col-md-6\">\n                <div class=\"card-body p-4 p-lg-5\">\n                    <h1 class=\"card-title h2 mb-1\">").concat(libro.title, "</h1>\n                    <p class=\"text-muted h5 mb-4\">").concat(libro.author_name || 'Autor desconocido', "</p>\n                    \n                    <p class=\"card-text leading-relaxed text-secondary\">\n                        ").concat(libro.description || 'Sin descripción', "\n                    </p>\n\n                    <h4 class=\"fst-italic\">$ 19.000,00</h4>\n\n                    <div class=\"d-grid d-md-block\">\n                        <a href=\"#\" class=\"btn btn-primary btn-lg px-5 fw-bold mt-4\">Comprar</a>\n                    </div>\n\n                </div>\n            </div>\n        ");
        this.resultado.innerHTML = card;
    };
    LibroInterfazVerMas.prototype.volverAlCatalogo = function () {
        window.location.href = 'catalogo.html';
    };
    LibroInterfazVerMas.prototype.buscarPorKey = function (key) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var responseBusqueda, dataBusqueda, libroBusqueda, responseDetalle, dataDetalle, descripcion, libro, error_2;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, fetch("https://openlibrary.org/search.json?q=".concat(key))];
                    case 1:
                        responseBusqueda = _c.sent();
                        if (!responseBusqueda.ok) {
                            throw new Error('Error en búsqueda');
                        }
                        return [4 /*yield*/, responseBusqueda.json()];
                    case 2:
                        dataBusqueda = _c.sent();
                        libroBusqueda = (_a = dataBusqueda.docs) === null || _a === void 0 ? void 0 : _a[0];
                        if (!libroBusqueda) {
                            throw new Error('Libro no encontrado');
                        }
                        return [4 /*yield*/, fetch("https://openlibrary.org".concat(key, ".json"))];
                    case 3:
                        responseDetalle = _c.sent();
                        if (!responseDetalle.ok) {
                            throw new Error('Error en detalle');
                        }
                        return [4 /*yield*/, responseDetalle.json()];
                    case 4:
                        dataDetalle = _c.sent();
                        descripcion = typeof dataDetalle.description === 'string'
                            ? dataDetalle.description
                            : ((_b = dataDetalle.description) === null || _b === void 0 ? void 0 : _b.value) || 'Sin descripción';
                        libro = {
                            key: key,
                            title: libroBusqueda.title,
                            author_name: libroBusqueda.author_name[0],
                            cover_i: libroBusqueda.cover_i,
                            description: descripcion,
                        };
                        return [2 /*return*/, libro];
                    case 5:
                        error_2 = _c.sent();
                        throw error_2;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    return LibroInterfazVerMas;
}());
var verMas = new LibroInterfazVerMas;
verMas.onChargePage();
