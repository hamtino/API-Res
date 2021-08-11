import { Router } from "express";
const router = Router();
import { createPerson, getPerson } from "../controller/person.controller"

router.post('/', createPerson)
router.get('/', getPerson)

export default router;