const posteosModel = require("../models/posteosModel.js")

// Leer comentarios 
const traerPosteos = async (req, res) => {
    try {
        const posteos = await posteosModel.findAll()
        res.json(posteos)
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Traer un comentario
const traerUnPosteo = async (req, res) => {
    try {
        const posteo = await posteosModel.findByPk(req.params.id)
        res.json(posteo)
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Escrbir comentario
const crearPosteo = async (req, res) => {
    try {
        await posteosModel.create(req.body)
        res.json({ "message": "Registro creado correctamente" })
        /*           Brian Herrera */
        /*         const newPosteo = await posteosModel.create(req.body);
                res.json(newPosteo); */
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Editar comentario
const actualizarPosteo = async (req, res) => {
    try {
        await posteosModel.update(req.body, {
            where: { id: req.params.id }
        })
        res.json({ "message": "Registro actualizado correctamente" })
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Borrar comentario
const borrarPosteo = async (req, res) => {
    try {
        await posteosModel.destroy({
            where: { id: req.params.id }
        })
        res.json({ "message": `se borró el registro ${req.params.id}` })
    } catch (error) {
        res.json({ message: error.message })
    }
}


module.exports = { traerPosteos, traerUnPosteo, crearPosteo, actualizarPosteo, borrarPosteo }