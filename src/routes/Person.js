import { Router } from "express";
const router = Router();
import { createPerson, getPerson, getOnePerson, deletePerson, updatePerson } from "../controller/person.controller"

router.post('/', createPerson)
router.get('/', getPerson)

router.get('/:id', getOnePerson)

router.delete('/:id', deletePerson)

router.put('/:id', updatePerson)




export default router;