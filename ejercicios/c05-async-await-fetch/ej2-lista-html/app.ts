// Ejercicio 2 — DOM + fetch
// Objetivo: Conectar el resultado del fetch con la
// pantalla: render dinámico, estado de carga y manejo
// visual de errores. La estructura mínima de cualquier
// vista que consume datos.
// Pasos:
// ● Partir del HTML del Ej 1, cuando se reciben los datos,
// mostrar la lista de usuarios como una <ul> en la
// página, cada <li> con el nombre y el email.
// ● Mientras carga, mostrar un <p>Cargando…</p>. Cuando
// termina, ocultarlo.
// ● Si hay error, mostrar un mensaje rojo en la página.
interface Usuario {
    id: Number,
    name: String,
    email: String,
    phone: String
}
const listado = document.getElementById('listado') as HTMLUListElement;
const cargando = document.getElementById('carga') as HTMLParagraphElement;
const errorP = document.getElementById('error') as HTMLParagraphElement;

function mostrarError(error: string): void {
    errorP.innerText = error;
}
function limpiarError(): void {
    errorP.innerText = '';
}


async function obtenerUsuarios(): Promise<Usuario[]> {
    try {
        limpiarError();
        
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) {
            throw new Error('Error en la respuesta');
        }

        return await response.json();

    } catch (error) {
        mostrarError(error instanceof Error ? error.message : 'Error desconocido');
        return [];
    }
}

function comenzarCarga() {
    cargando.innerText = "Cargando...";
}

function terminarCarga() {
    cargando.innerText = "";
}


async function mostrarUsuarios() {
    comenzarCarga();
    const usuarios: Usuario[] = await obtenerUsuarios();
    terminarCarga();

    usuarios.forEach(({ name, email }) => {
        const li = document.createElement('li');
        // li.className = `libro-disponible-${libro.disponible}`;
        li.textContent = `${name} - ${email})`;

        listado.appendChild(li);
    }); 
}

mostrarUsuarios();