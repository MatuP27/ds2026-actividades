import request from "supertest";
import jwt from "jsonwebtoken";
import app from "../app";
import { JWT_SECRET } from "../config/env";
import { describe, it, expect, vi } from "vitest";

const libroNuevo = { titulo: "Bestiario ", precio: 9000, imagen: "https://img/r.jpg", autorId: 1 };

const tokenCliente = jwt.sign({ id: 2, rol: "CLIENTE" }, JWT_SECRET, { expiresIn: "1h" });
const tokenAdmin   = jwt.sign({ id: 1, rol: "ADMIN" },   JWT_SECRET, { expiresIn: "1h" });

it("con token de CLIENTE → 403", async () => {
  const res = await request(app).post("/api/libros")
    .set("Authorization", `Bearer ${tokenCliente}`).send(libroNuevo);
  expect(res.status).toBe(403);
});

it("ADMIN con body inválido → 400, no 403", async () => {
  const res = await request(app).post("/api/libros")
    .set("Authorization", `Bearer ${tokenAdmin}`).send({ precio: -5 });
  expect(res.status).toBe(400);
  expect(res.body.detalles).toContainEqual({ campo: "precio", mensaje: "El precio debe ser mayor a 0" });
});