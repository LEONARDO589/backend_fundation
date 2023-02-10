

const sequelizedb = require("../db/sequelizedb");
const { DataTypes } = require("sequelize");

const BeneficiarioModel = sequelizedb.define("beneficiarios", {
  nombre: { type: DataTypes.STRING},
  apellidos: {type: DataTypes.STRING},
  cedula: {type: DataTypes.INTEGER, unique:true},
  fecha_nacimiento: {type: DataTypes.STRING},
  edad: {type: DataTypes.INTEGER},
  fecha_ingreso: {type: DataTypes.STRING},

})

module.exports = BeneficiarioModel;