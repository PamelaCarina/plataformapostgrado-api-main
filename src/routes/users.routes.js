import { Router } from "express";
import { methods as usersController } from "../controllers/users.controller";
const router = Router();

router.get("/", usersController.getUsers);
router.post("/", usersController.addUsers);

export default router;
