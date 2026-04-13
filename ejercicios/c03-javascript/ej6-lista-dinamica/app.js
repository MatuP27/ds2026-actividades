// Ejercicio 6 - DOM: lista dinámica
// ● Agregar un <input type="text"> para nombre de producto y un
// <button> "Agregar"
// ● Al hacer click, agregar el producto como un <li> dentro de un
// <ul> en la página
// ● Cada item debe tener un botón "Eliminar" que al clickearlo
// borre ese item de la lista
// ● Validar que el input no esté vacío
// ● Agregar un contador que muestre "X productos en la lista"

let list = [];

const agregarProducto = () => {
    const producto = document.getElementById('producto').value;

    if (producto.trim() !== '') {
        list.push(producto);
        listarProductos();
        mostrarContador();
    }
};

const eliminarProducto = (numIndice) => {
    if (numIndice === 0) {
        list.pop();
    } else {
        list.splice(numIndice, numIndice);
    }
    listarProductos();
    mostrarContador();
};

const mostrarContador = () => {
    document.getElementById('contador').innerHTML =`${list.length} productos en la lista.`
};

const listarProductos = () => {
    const listElement = document.getElementById('listaProductos');

    listElement.innerHTML = '';
    for (let i = (list.length - 1); i >= 0; i--) {
        listElement.innerHTML += `<li name='${i}'>
        ${list[i]}
        <button type="button" onclick="eliminarProducto(${i})">Eliminar</button>
    </li>`;
    }
};

document.getElementById('agregar').addEventListener('click', agregarProducto);