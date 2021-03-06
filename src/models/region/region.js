import Sequelize from 'sequelize';
import db from '../../db';

const model = db.define('region', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
});

const Region = model;

export default Region;
