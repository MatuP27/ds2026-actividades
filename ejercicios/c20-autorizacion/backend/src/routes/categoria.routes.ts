import { Router } from "express";
import * as categoriaController from "../controllers/categoria.controller";
import { validate, validateParams } from "../middlewares/validate.middleware";
import { idParamSchema } from "../validations/libro.validation";
import { libroCreateSchema, libroUpdateSchema } from "../validations/libro.validation";

const router = Router();
// Las rutas van RELATIVAS: el prefijo /api/libros lo monta index.ts.
router.get("/", categoriaController.getAll);
router.get("/:id", validateParams(idParamSchema), categoriaController.getById);
router.post("/", validate(libroCreateSchema), categoriaController.create);
router.put("/:id", validateParams(idParamSchema), validate(libroUpdateSchema), categoriaController.update);
router.delete("/:id", validateParams(idParamSchema), categoriaController.remove);

export default router;
