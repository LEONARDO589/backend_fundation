const sequelizedb = require("../db/sequelizedb");
const { DataTypes } = require("sequelize");

const UserModel = sequelizedb.define("users", {
  fullname: { type: DataTypes.STRING, require: true },
  cedula: { type: DataTypes.INTEGER, require: true },
  user: { type: DataTypes.STRING, unique: true, require: true},
  email: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING, require: true },
});

module.exports = UserModel;
