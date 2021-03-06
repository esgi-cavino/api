import User from './user/user';
import Cellar from './cellar/cellar';
import WineType from './wineType/wineType';
import Region from './region/region';
import FavouriteRegion from './favouriteRegion/favouriteRegion';
import FavouriteWine from './favouriteWine/favouriteWine';
import Bottle from './bottle/bottle';
import PositionInCellar from './positionInCellar/positionInCellar';
import Country from './country/country';
import Domain from './domain/domain';
import Vintage from './vintage/vintage';

require('dotenv').config();

if (process.env.syncModels === 'true' && process.env.feed !== 'true') {
  User.sync({ force: true });
  Cellar.sync({ force: true });
  WineType.sync({ force: true });
  Region.sync({ force: true });
  FavouriteRegion.sync({ force: true });
  FavouriteWine.sync({ force: true });
  Bottle.sync({ force: true });
  PositionInCellar.sync({ force: true });
  Country.sync({ force: true });
  Domain.sync({ force: true });
  Vintage.sync({ force: true });
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

Bottle.belongsTo(WineType, {
  foreignKey: 'wineTypeId',
});
Bottle.belongsTo(Region, {
  foreignKey: 'regionId',
});
Bottle.belongsTo(Country, {
  foreignKey: 'countryId',
});
Bottle.belongsTo(Domain, {
  foreignKey: 'domainId',
});
Bottle.belongsTo(Vintage, {
  foreignKey: 'vintageId',
});

PositionInCellar.belongsTo(Cellar, {
  foreignKey: 'cellarId',
});
PositionInCellar.belongsTo(Bottle, {
  foreignKey: 'bottleId',
});

export {
  User, Cellar, WineType, Region, FavouriteRegion, FavouriteWine, Bottle, PositionInCellar, Country, Domain, Vintage,
};
