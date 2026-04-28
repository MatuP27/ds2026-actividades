// Ejercicio 1 - Fetch básico tipado
// Objetivo: Que llamen a una API real con async/await y
// aprendan a tipar lo que viene del servidor en lugar de
// tratarlo como any.
// API:
    // JSONPlaceholder (https://jsonplaceholder.typicode.com)
// Pasos:
// ● Crear un proyecto con index.html y app.ts.
// ● Definir una interface Usuario con: id, name, email,
// phone.
// ● Escribir una función async function obtenerUsuarios():
// Promise<Usuario[]> que use fetch y devuelva los
// usuarios tipados.
// ● Llamar la función y mostrar nombre y email de cada
// usuario en la consola.
// ● Manejar errores con try/catch.

interface Usuario {
    id: Number,
    name: String,
    email: String,
    phone: String
}

async function obtenerUsuarios(): Promise<Usuario[]> {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) {
            throw new Error('Error en la respuesta');
        }

        return await response.json();

    } catch (error) {
        console.error(error);
        return [];
    }
}

async function mostrarUsuarios() {
    const usuarios: Usuario[] = await obtenerUsuarios();

    usuarios.forEach(({ id, name, email, phone }) => {
        console.log(`${id} - ${name} - ${email} - ${phone}`);
    }); 
}

mostrarUsuarios();