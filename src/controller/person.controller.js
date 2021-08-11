import { response } from "express"
import Person from "../models/person"

export async function createPerson(req, res) {
    const {fullname, birth } = req.body
    try {
        let newPerson = await Person.create({
            fullname,
            birth      
        });
        if (newPerson) {
            res.json({
                message: 'persona creada con exito',
                data: newPerson
            });
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'error interno del servidor',
            data: {}
        })
    }
    
        
       


    
}