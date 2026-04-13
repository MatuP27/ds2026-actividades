// Ejercicio 5 - DOM: input y botón
// ● Crear un HTML con un <input type="number"> y un <button>
// "Generar"
// ● Al hacer click, leer el número del input y generar un "medio-
// árbol" de asteriscos de esa altura.
// Ejemplo para altura 4:
// ● Mostrar el resultado en un <pre> en la página (no en consola)
// ● Validar: si el input está vacío o es menor a 1, mostrar un
// mensaje de error en la página

const generar = document.getElementById('button');

const generarArbol = (num) => { 
    let arbol = []
    num ++; 

    for (num > 0; num--;) {
        let asterisco = '';

        for (let i = 0; i <= num; i++) {
            asterisco += '*';
        }
        arbol.push(asterisco);
    }
    return arbol;
};

const mostrarArbol = (num) => {
    const div = document.getElementById('arbol');
    div.innerHTML = '';

    if (num > 0) {
        const arbol = generarArbol(num);
        for (let i = (arbol.length - 1); i !== 0; i--) { div.innerHTML += arbol[i] + '<br>'; }

    } else { div.innerHTML = 'Error, numero invalido.' }
};
generar.addEventListener('click', () => {
    mostrarArbol(document.getElementById('number').value);
});
