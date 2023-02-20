import { Router } from "express";
//controllers
import {
  getAll,
  create,
  getById,
  update,
  remove,
  increaseLikes,
} from "../controllers";

const router = Router();

router.get("/", getAll);
router.get("/:id", getById);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", remove);
router.post("/:id/likes", increaseLikes);

export default router;
