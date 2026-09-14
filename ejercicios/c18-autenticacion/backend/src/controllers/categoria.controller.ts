import { Request, Response } from "express";
import * as categoriasService from "../services/categoria.services";

export async function getAll(req: Request, res: Response) {
    return res.json(await categoriasService.findAll());
}

export async function getById(req: Request, res: Response) {
    const categoria = await categoriasService.findById(Number(req.params.id));
    if (!categoria) return res.status(404).json({ error: "Categoria no encontrada" });
    return res.json(categoria);
}

export async function create(req: Request, res: Response) {
        const nuevo = await categoriasService.create(req.body);
        return res.status(200).json(nuevo);
}

export async function update(req: Request, res: Response) {
        const actualizado = await categoriasService.update(Number(req.params.id), req.body);
        if (!actualizado) return res.status(404).json({ error: "Categoria no encontrada" });
        return res.json(actualizado);
}

export async function remove(req: Request, res: Response) {
        const borrado = await categoriasService.remove(Number(req.params.id));
        if (!borrado) return res.status(404).json({ error: "Categoria no encontrada" });
        return res.status(204).send();
}