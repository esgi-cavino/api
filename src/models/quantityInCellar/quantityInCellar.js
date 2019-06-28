import Sequelize from 'sequelize';
import db from '../../db';

const model = db.define('quantityInCellar', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

const QuantityInCellar = model;

export default QuantityInCellar;
