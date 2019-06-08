import User from './user/user';
import Cellar from './cellar/cellar';
import WineType from './wineType/wineType';
import Region from './region/region';
import FavouriteRegion from './favouriteRegion/favouriteRegion';

require('dotenv').config();

if (process.env.syncModels === 'true' && process.env.feed !== 'true') {
  User.sync({ force: true });
  Cellar.sync({ force: true });
  WineType.sync({ force: true });
  Region.sync({ force: true });
  FavouriteRegion.sync({ force: true });
}

User.belongsToMany(Region, {
  onDelete: 'CASCADE',
  foreignKey: 'userUUID',
  through: FavouriteRegion,
});
User.hasMany(Cellar, {
  onDelete: 'CASCADE',
  foreignKey: 'userUUID',
});

Region.belongsToMany(User, {
  onDelete: 'CASCADE',
  foreignKey: 'regionId',
  through: FavouriteRegion,
});


export { User, Cellar, WineType, Region, FavouriteRegion };

