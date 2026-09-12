import { Autor } from "../types/autor.types";

const autores: Autor[] = [
  { id: 1, nombre: "Antoine de Saint-Exupéry", nacionalidad: "Francia" },
  { id: 2, nombre: "Alexander Shvets", nacionalidad: "Ucrania" },
  { id: 3, nombre: "Ray Bradbury", nacionalidad: "Estados Unidos" },
  { id: 4, nombre: "Gabriel García Márquez", nacionalidad: "Colombia" },
  { id: 5, nombre: "George Orwell", nacionalidad: "Reino Unido" },
  { id: 6, nombre: "Paulo Coelho", nacionalidad: "Brasil" },
  { id: 7, nombre: "Yuval Noah Harari", nacionalidad: "Israel" },
  { id: 8, nombre: "Dan Brown", nacionalidad: "Estados Unidos" },
  { id: 9, nombre: "Harper Lee", nacionalidad: "Estados Unidos" },
  { id: 10, nombre: "Carlos Ruiz Zafón", nacionalidad: "España" },
];

let proximoId=10;

export function findAll(): Autor[] {
  return autores;
}

export function findById(id: number): Autor | undefined {
  return autores.find(autor => autor.id === id);
}

export function create(datos: Omit<Autor, "id">): Autor {
  const nuevo: Autor = { id: proximoId++, ...datos };
  autores.push(nuevo);
  return nuevo;
}

export function update(id: number, datos: Partial<Omit<Autor, "id">>): Autor | undefined {
  const i = autores.findIndex(autor => autor.id === id);
  if (i === -1) return undefined;
  autores[i] = { ...autores[i], ...datos };
  return autores[i];
}

export function remove(id: number): boolean {
  const i = autores.findIndex(autor => autor.id === id);
  if (i === -1) return false;
  autores.splice(i, 1);
  return true;
}