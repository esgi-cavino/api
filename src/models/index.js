import User from './user/user';
import Cellar from './cellar/cellar';
import WineType from './wineType/wineType';
import Region from './region/region';
import FavouriteRegion from './favouriteRegion/favouriteRegion';
import FavouriteWine from './favouriteWine/favouriteWine';
import Bottle from './bottle/bottle';
import QuantityInCellar from './quantityInCellar/quantityInCellar';
import PositionInCellar from './positionInCellar/positionInCellar';
import Country from './country/country';

require('dotenv').config();

if (process.env.syncModels === 'true' && process.env.feed !== 'true') {
  User.sync({ force: true });
  Cellar.sync({ force: true });
  WineType.sync({ force: true });
  Region.sync({ force: true });
  FavouriteRegion.sync({ force: true });
  FavouriteWine.sync({ force: true });
  Bottle.sync({ force: true });
  QuantityInCellar.sync({ force: true });
  PositionInCellar.sync({ force: true });
  Country.sync({ force: true });
}

User.belongsToMany(Region, {
  onDelete: 'CASCADE',
  foreignKey: 'userUUID',
  through: FavouriteRegion,
});
User.belongsToMany(WineType, {
  onDelete: 'CASCADE',
  foreignKey: 'userUUID',
  through: FavouriteWine,
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

WineType.belongsToMany(User, {
  onDelete: 'CASCADE',
  foreignKey: 'wineTypeId',
  through: FavouriteWine,
});
/* WineType.hasMany(Bottle, {
  onDelete: 'CASCADE',
  foreignKey: 'wineTypeId',
}); */

/* Cellar.belongsToMany(Bottle, {
  onDelete: 'CASCADE',
  foreignKey: 'cellarId',
  through: QuantityInCellar,
}); */


/* * Cellar.belongsToMany(Bottle, {
  onDelete: 'CASCADE',
  foreignKey: 'cellarId',
  through: PositionInCellar,
}); * */

/* Bottle.belongsToMany(Cellar, {
  onDelete: 'CASCADE',
  foreignKey: 'bottleId',
  through: QuantityInCellar,
}); */
/* * Bottle.belongsToMany(Cellar, {
  onDelete: 'CASCADE',
  foreignKey: 'bottleId',
  through: PositionInCellar,
}); * */
Bottle.belongsTo(WineType, {
  foreignKey: 'wineTypeId',
});
Bottle.belongsTo(Region, {
  foreignKey: 'regionId',
});
Bottle.belongsTo(Country, {
  foreignKey: 'countryId',
});

PositionInCellar.belongsTo(Cellar, {
  foreignKey: 'cellarId',
});
PositionInCellar.belongsTo(Bottle, {
  foreignKey: 'bottleId',
});

export {
  User, Cellar, WineType, Region, FavouriteRegion, FavouriteWine, Bottle, QuantityInCellar, PositionInCellar, Country,
};
