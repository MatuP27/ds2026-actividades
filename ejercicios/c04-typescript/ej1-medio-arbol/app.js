// Ejercicio 1 - Medio-árbol de asteriscos TIPADO
// Objetivo: tomar el Ejercicio 5 de C03 (DOM: input y botón) y
// reconvertirlo a TypeScript para ver la diferencia.
// Pasos:
// ● Copiar el ejercicio 05 de la clase anterior
// ● Crear un archivo app.ts con las funciones convertidas a
// typescript.
// ● Traspilar: tsc app.ts
// ● Abrir en el navegador y probar.
// ● Romper algo a propósito: cambiar la firma de la función
// generarAsteriscos() para que reciba string en vez de number, y
// ver cómo tsc "se queja" antes de generar el .js.
var generar = document.getElementById('button');
var generarArbol = function (num) {
    var arbol = [];
    num++;
    for (num > 0; num--;) {
        var asterisco = '';
        for (var i = 0; i <= num; i++) {
            asterisco += '*';
        }
        arbol.push(asterisco);
    }
    return arbol;
};
var mostrarArbol = function (num) {
    var div = document.getElementById('arbol');
    if (!div)
        return;
    div.innerHTML = '';
    if (num > 0) {
        var arbol = generarArbol(num);
        for (var i = (arbol.length - 1); i !== 0; i--) {
            div.innerHTML += arbol[i] + '<br>';
        }
    }
    else {
        div.innerHTML = 'Error, numero invalido.';
    }
};
generar === null || generar === void 0 ? void 0 : generar.addEventListener('click', function () {
    var inputNumber = document.getElementById("number");
    if (!inputNumber)
        return;
    mostrarArbol(Number(inputNumber.value));
});
