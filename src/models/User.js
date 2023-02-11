const sequelizedb = require("../db/sequelizedb");
const { DataTypes } = require("sequelize");

const UserModel = sequelizedb.define("users", {
  fullname: { type: DataTypes.STRING },
  identification: { type: DataTypes.NUMBER },
  user: { type: DataTypes.STRING, unique: true},
  email: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING, require: true },
  activedate: {type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW},
  state: {type: DataTypes.NUMBER, defaultValue: 1} 
});

module.exports = UserModel;
