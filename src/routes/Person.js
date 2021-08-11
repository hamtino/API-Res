import { Router } from "express";
const router = Router();
import { createPerson } from "../controller/person.controller"

router.post('/', createPerson)

export default router;