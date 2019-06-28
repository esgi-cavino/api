import Sequelize from 'sequelize';
import db from '../../db';

const model = db.define('bottle', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  averagePrice: {
    type: Sequelize.FLOAT,
  },
  isOrganic: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

const Bottle = model;

export default Bottle;
