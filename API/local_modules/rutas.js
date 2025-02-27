const express = require ("express");
const router = express.Router();

const {traerUnPosteo,traerPosteos,crearPosteo,actualizarPosteo,borrarPosteo} = require("./controladores.js");

router.get ("/",traerPosteos);
router.get ("/:id",traerUnPosteo);
router.post ("/",crearPosteo);
router.put ("/:id",actualizarPosteo);
router.delete ("/:id",borrarPosteo);

module.exports = router;