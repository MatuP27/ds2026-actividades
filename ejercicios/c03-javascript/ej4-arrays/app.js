// Ejercicio 4 - Arrays y bucles
// ● Crear un array con al menos 8 números
// ● Usando for o for...of, calcular y mostrar en consola:
// ○ La suma total
// ○ El promedio
// ○ El número mayor
// ○ El número menor
// ● Crear una función generarAsteriscos(n) que reciba un número y
// retorne un string con esa cantidad de asteriscos (ej:
// generarAsteriscos(5) → "*****"). Usar un bucle for
const list = [1,2,3,4,5,6,7,8];
const sumar = () => { 
    let total = 0;
    for (let i = list.length-1; i >= 0; i--) {
        total += list[i];
    }
    return total;
}

const promedio = () => { return (sumar()/(list.length)); }

const elementoMayor = () => { 
    if (list.length > 0) {
        let mayor = list[list.length-1];

        for (let i = list.length-1; i >= 0; i--) {
            if (list[i] > mayor) { mayor = list[i]; }
        }
        return mayor;
    }
}

const elementoMenor = () => { 
    if (list.length > 0) {
        let menor = list[list.length-1];

        for (let i = list.length-1; i >= 0; i--) {
            if (list[i] < menor) { menor = list[i]; }
        }
        return menor;
    }
}
console.log(elementoMayor(), elementoMenor(), promedio());

const generarAsteriscos = (num) => { 
    let asterisco = '';

    for (let i = 0; i < num; i++) {
        asterisco += '*';
    }
    return asterisco;
};

console.log(`Generar 6 asteriscos ${generarAsteriscos(6)}`);