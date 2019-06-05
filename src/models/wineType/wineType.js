import Sequelize from 'sequelize';
import db from '../../db';

const model = db.define('wineType', {
  name: { type: Sequelize.STRING, allowNull: false, unique: true },
  userUUID: { type: Sequelize.UUID, allowNull: false },
});

const WineType = model;

export default WineType;
