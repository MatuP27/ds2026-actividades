/*
● Crear index.html con estructura básica y vincular app.js al
final del body
● Declarar con const: tu nombre, tu edad, la materia que estás
cursando
● Mostrar en consola un mensaje con template literals: "Me llamo
[nombre], tengo [edad] años y curso [materia]"
● Declarar con let un contador en 0. Sumarle 1 tres veces.
Mostrar el valor final.
*/
const presentacion = document.getElementById('presentacion');
const contador = document.getElementById('contador');
const nom = 'Matias';
const edad = 21;
const materia = 'Desarrollo de Software';

console.log(`Me llamo ${nom} tengo ${edad} años y curso la materia ${materia}.`);

let i = 0;
i += 1;
i += 1;
i += 1;
console.log(`Contador: ${i}`);
