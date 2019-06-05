import Sequelize from 'sequelize';
import db from '../../db';

const model = db.define('cellar', {
  name: { type: Sequelize.STRING, allowNull: false },
  userUUID: { type: Sequelize.UUID, allowNull: false },
});

const Cellar = model;

export default Cellar;
