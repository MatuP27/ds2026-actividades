export interface LibroCardProps  {
    id: number;
    titulo: string;
    autor: Autor;
    precio: number;
    imagen: string;
    disponible: boolean;
}
export interface Autor { 
  id: number; 
  nombre: string; 
  nacionalidad: string 
}