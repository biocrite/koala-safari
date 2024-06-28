const db = require ("../data/db.js");

const {DataTypes} = require ("sequelize");

const posteosModel = db.define ("comentarios",{
    titulo:{type:DataTypes.STRING},
    contenido:{type:DataTypes.STRING},
    fecha:{type:DataTypes.STRING},
    nombre:{type:DataTypes.STRING},
    paquete:{type:DataTypes.STRING},
    valoracion:{type:DataTypes.STRING},
    comentario:{type:DataTypes.STRING}
});
module.exports = posteosModel;