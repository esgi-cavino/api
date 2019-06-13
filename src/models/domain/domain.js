import Sequelize from 'sequelize';
import db from '../../db';

const model = db.define('domain', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
});

const Domain = model;

export default Domain;
