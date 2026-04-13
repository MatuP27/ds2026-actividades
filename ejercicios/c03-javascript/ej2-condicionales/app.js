// Ejercicio 2 — Condicionales
// ● Crear una función clasificarNota(nota) que reciba un número y
// retorne:
// ○ "Desaprobado" si es menor a 4
// ○ "Aprobado" si es entre 4 y 7
// ○ "Promocionado" si es 8 o más
// ● Crear una función diaDeLaSemana(numero) con switch que retorne
// el nombre del día (1=Lunes...7=Domingo). Si es 6 o 7 agregar
// "(fin de semana)". Si no es 1-7, retornar "Día inválido".
// ● Probar ambas funciones con console.log usando distintos
// valores.

function clasificarNota(nota) {
    if (nota < 4) { return 'Desaprobado'; } 
    else if ((nota >= 4) && (nota <= 7)) { return 'Aprobado'; }
    else if (nota >= 8) { return 'Promocionado'; }
}

console.log(clasificarNota(5), clasificarNota(10), clasificarNota(2));

function diaDeLaSemana(numero) {
    switch (numero) {
        case 1: return 'Lunes';
        case 2: return 'Martes';
        case 3: return 'Miercoles';
        case 4: return 'Jueves';
        case 5: return 'Viernes';
        case 6: return 'Fin de semana';
        case 7: return 'Fin de semana';
        default: return 'Dia invalido'
    }
}

console.log(diaDeLaSemana(1), diaDeLaSemana(7), diaDeLaSemana(15));