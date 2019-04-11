import Sequelize from 'sequelize';

require('dotenv').config();

const DATABASE = process.env.database;
const USERNAME = process.env.dbUsername;
const PASSWORD = process.env.dbPassword;
const HOST = process.env.host;

const db = new Sequelize(DATABASE, USERNAME, PASSWORD, {
  host: HOST,
  dialect: 'postgres',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

export default db;
