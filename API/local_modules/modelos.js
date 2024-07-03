const db = require ("./base-de-datos.js");

const {DataTypes} = require ("sequelize");

const posteosModel = db.define ("comentarios",{
    fecha:{type:DataTypes.STRING},
    nombre:{type:DataTypes.STRING},
    paquete:{type:DataTypes.STRING},
    valoracion:{type:DataTypes.STRING},
    comentario:{type:DataTypes.STRING}
});

module.exports = posteosModel;