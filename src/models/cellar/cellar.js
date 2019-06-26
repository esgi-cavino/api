import Sequelize from 'sequelize';
import db from '../../db';

const model = db.define('cellar', {
  name: { type: Sequelize.STRING, allowNull: false, unique: true },
  width: { type: Sequelize.INTEGER, allowNull: false },
  height: { type: Sequelize.INTEGER, allowNull: false },
});

const Cellar = model;

export default Cellar;
