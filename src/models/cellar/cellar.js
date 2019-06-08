import Sequelize from 'sequelize';
import db from '../../db';
import User from '../user/user';

const model = db.define('cellar', {
  name: { type: Sequelize.STRING, allowNull: false, unique: true },
  /* userUUID: {
    type: Sequelize.UUID,
    allowNull: false,
    references: {
      model: User,
      key: 'uuid',
      // This declares when to check the foreign key constraint. PostgreSQL only.
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
    },
  }, */
});

const Cellar = model;

export default Cellar;
