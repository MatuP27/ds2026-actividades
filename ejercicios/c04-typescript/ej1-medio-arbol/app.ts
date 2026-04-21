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
const generar = document.getElementById('button') as HTMLButtonElement;

const generarArbol = (num: number): string[] => { 
    let arbol: string[] = []
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

const mostrarArbol = (num: number): void => {
    const div = document.getElementById('arbol') as HTMLDivElement;
    if (!div) return;

    div.innerHTML = '';

    if (num > 0) {
        const arbol: string[] = generarArbol(num);
        for (let i: number = (arbol.length - 1); i !== 0; i--) { div.innerHTML += arbol[i] + '<br>'; }

    } else { div.innerHTML = 'Error, numero invalido.' }
};

generar?.addEventListener('click', (): void => {
    const inputNumber = document.getElementById("number") as HTMLInputElement;
    if (!inputNumber) return;
    mostrarArbol(Number(inputNumber.value));
});
