const sequelizedb = require("../db/sequelizedb");
const { DataTypes } = require("sequelize");

const ProgramaModel = sequelizedb.define("programas", {
  programa_id: { type: DataTypes.INTEGER},
  programa: {type: DataTypes.STRING},
  estado: {type: DataTypes.STRING},
})

module.exports = ProgramaModel;