import Sequelize from 'sequelize';
import db from '../../db';

const model = db.define('favouriteWine', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});

const FavouriteWine = model;

export default FavouriteWine;
