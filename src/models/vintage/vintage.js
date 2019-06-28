import Sequelize from 'sequelize';
import db from '../../db';

const model = db.define('vintage', {
  year: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: true,
  },
});

const Vintage = model;

export default Vintage;
