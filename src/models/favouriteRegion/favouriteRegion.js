import Sequelize from 'sequelize';
import db from '../../db';

const model = db.define('favouriteRegion', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});

const FavouriteRegion = model;

export default FavouriteRegion;
