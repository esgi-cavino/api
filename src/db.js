import Sequelize from 'sequelize';

const DATABASE = process.env.database;
const USERNAME = process.env.username;
const PASSWORD = process.env.password;
const HOST = process.env.host;

const db = new Sequelize('hcpzjwnq', 'hcpzjwnq', 'sdXlcCI3bFqlBjMb5zZ6SIKOtA35z_Wa', {
  host: 'manny.db.elephantsql.com',
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
