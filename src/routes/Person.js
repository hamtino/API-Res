import { Router } from "express";
const router = Router();
import { createPerson, getPerson, getOnePerson, deletePerson } from "../controller/person.controller"

router.post('/', createPerson)
router.get('/', getPerson)

router.get('/:id', getOnePerson)

router.get('/:id', getOnePerson)



export default router;