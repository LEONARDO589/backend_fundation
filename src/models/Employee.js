const sequelizedb = require("../db/sequelizedb");
const { DataTypes } = require("sequelize");

const EmployeeModel = sequelizedb.define("employees", {
  name: { type: DataTypes.STRING},
  apellidos: {type: DataTypes.STRING},
  email: {type: DataTypes.STRING},
  salary: {type: DataTypes.INTEGER},
})

module.exports = EmployeeModel;
