import Sequelize from 'sequelize';
import db from '../../db';

const model = db.define('wineType', {
  name: { type: Sequelize.STRING, allowNull: false, unique: true },
});

const WineType = model;

export default WineType;
