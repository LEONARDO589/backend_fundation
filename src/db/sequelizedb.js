const Sequelize = require('sequelize');
const {config} = require('dotenv')
config();

const sequelizedb = new Sequelize(process.env.DATA_BASE, process.env.USER_BASE, process.env.PASSWORD_BASE, {
  host: process.env.HOST,
  dialect: 'mysql'
});

sequelizedb
  .authenticate()
  .then(() => {
  console.log('Connection has been established successfully.');
  })
  .catch(err => {
     console.error('Unable to connect to the database:', err);
  });
  
  module.exports = sequelizedb