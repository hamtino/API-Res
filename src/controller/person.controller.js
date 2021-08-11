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

export async function getPerson(req, res) { 
    try {
        const person = await Person.findAll();
    res.json({
        data: person
    });
    } catch (error) {

        res.status(500).json({
            message: 'error interno del servidor',
            data: {}
        })
    }
}

export async function getOnePerson(req, res) {
    try {
        const { id } = req.params;
        const person = await Person.findOne({
            where: {
                id
            }
        });
        res.json({
            data: person
        }); 
    } catch (error) {
        res.status(500).json({
            message: 'error interno del servidor',
            data: {}
        })
    }
}

export async function deletePerson(req, res) {
    try {
        const { id } = req.params;
        const personDelete = await Person.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'datos eliminados correctamente',
            data: personDelete
        });
    } catch (error) {
        res.status(500).json({
            message: 'error interno del servidor',
            data: {}
        })
    }
}
        
       


    
