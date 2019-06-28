import Sequelize from 'sequelize';
import db from '../../db';

const model = db.define('positionInCellar', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  positionX: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  positionY: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

const PositionInCellar = model;

export default PositionInCellar;
