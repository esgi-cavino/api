import Sequelize from 'sequelize';
import db from '../../db';

const model = db.define('country', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
});

const Country = model;

export default Country;
