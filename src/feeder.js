import bcrypt from 'bcrypt';

import userService from './modules/user/services';
import cellarService from './modules/cellar/services';
import wineTypeService from './modules/wineType/services';
import regionService from './modules/region/services';
import favouriteRegionService from './modules/favouriteRegion/services';
import favouriteWineService from './modules/favouriteWine/services';
import bottleService from './modules/bottle/services';
import quantityInCellarService from './modules/quantityInCellar/services';
import positionInCellarService from './modules/positionInCellar/services';
import countryService from './modules/country/services';
import domainService from './modules/domain/services';
import vintageService from './modules/vintage/services';

import User from './models/user/user';
import Cellar from './models/cellar/cellar';
import WineType from './models/wineType/wineType';
import Region from './models/region/region';
import FavouriteRegion from './models/favouriteRegion/favouriteRegion';
import FavouriteWine from './models/favouriteWine/favouriteWine';
import Bottle from './models/bottle/bottle';
import QuantityInCellar from './models/quantityInCellar/quantityInCellar';
import PositionInCellar from './models/positionInCellar/positionInCellar';
import Country from './models/country/country';
import Domain from './models/domain/domain';
import Vintage from './models/vintage/vintage';

const userEmail = 'e@mail.com';
const userPassword = 'password';

const createUsers = async () => {
  await User.sync({ force: true });

  await userService.create({
    firstname: 'Admin',
    lastname: 'Istrator',
    email: 'admin@cavino.fr',
    password: 'admin',
    age: 45,
    address: 'Paris (France)',
    isAdmin: true,
  });

  await userService.create({
    firstname: 'Seller',
    lastname: 'Man',
    email: 'seller@corporation.com',
    password: 'seller',
    age: 34,
    address: '47 private road, NY City (USA)',
    isSeller: true,
  });

  await userService.create({
    firstname: 'firstname',
    lastname: 'lastname',
    email: userEmail,
    password: userPassword,
  });
};

const createCellars = async () => {
  let userUuid = '';
  User.findOne({ where: { email: userEmail } }).then((user) => {
    if (bcrypt.hashSync(userPassword, user.salt) === user.password) {
      userUuid = user.uuid;
    }
  });

  await Cellar.sync({ force: true });

  await cellarService.create({
    name: 'TheCellar',
    width: 5,
    height: 5,
    userUUID: userUuid,
  });
};

const createWineTypes = async () => {
  await WineType.sync({ force: true });

  await wineTypeService.create({
    name: 'Blanc',
  });

  await wineTypeService.create({
    name: 'Rosé',
  });
};

const createRegions = async () => {
  await Region.sync({ force: true });

  await regionService.create({
    name: 'Alsace',
  });

  await regionService.create({
    name: 'Beaujolais',
  });

  await regionService.create({
    name: 'Bordeaux',
  });

  await regionService.create({
    name: 'Bourgogne',
  });

  await regionService.create({
    name: 'Champagne',
  });

  await regionService.create({
    name: 'Corse',
  });

  await regionService.create({
    name: 'Jura',
  });

  await regionService.create({
    name: 'Languedoc-Roussillon',
  });

  await regionService.create({
    name: 'Loire',
  });

  await regionService.create({
    name: 'Provence',
  });

  await regionService.create({
    name: 'Valée du rône',
  });

  await regionService.create({
    name: 'Savoie-Bugey',
  });

  await regionService.create({
    name: 'Sud-ouest',
  });

  await regionService.create({
    name: 'Moselle',
  });
};

const createCountrys = async () => {
  await Country.sync({ force: true });

  await countryService.create({
    name: 'France',
  });

  await countryService.create({
    name: 'Allemagne',
  });
};

const createDomains = async () => {
  await Domain.sync({ force: true });

  await domainService.create({
    name: 'Château d\'Agassac',
  });

  await domainService.create({
    name: 'Château Lagrange',
  });
};

const createVintages = async () => {
  await Vintage.sync({ force: true });

  await vintageService.create({
    year: 2018,
  });

  await vintageService.create({
    year: 2019,
  });
};

const createFavouriteRegions = async () => {
  let userUuid;
  User.findOne({ where: { email: userEmail } }).then((user) => {
    if (bcrypt.hashSync(userPassword, user.salt) === user.password) {
      userUuid = user.uuid;
    }
  });
  let regionId = '';
  Region.findOne({ offste: 0, limit: 1 }).then((region) => {
    regionId = region.id;
  });

  await FavouriteRegion.sync({ force: true });

  await favouriteRegionService.create({
    userUUID: userUuid,
    regionId,
  });
};


const createFavouriteWines = async () => {
  let userUuid;
  User.findOne({ where: { email: userEmail } }).then((user) => {
    if (bcrypt.hashSync(userPassword, user.salt) === user.password) {
      userUuid = user.uuid;
    }
  });
  let wineTypeId = '';
  WineType.findOne({ offste: 0, limit: 1 }).then((wineType) => {
    wineTypeId = wineType.id;
  });

  await FavouriteWine.sync({ force: true });

  await favouriteWineService.create({
    userUUID: userUuid,
    wineTypeId,
  });
};


const createBottles = async () => {
  let wineTypeId = '';
  WineType.findOne({ offste: 0, limit: 1 }).then((wineType) => {
    wineTypeId = wineType.id;
  });

  let regionId = '';
  Region.findOne({ offste: 0, limit: 1 }).then((region) => {
    regionId = region.id;
  });

  let countryId = '';
  Country.findOne({ offste: 0, limit: 1 }).then((country) => {
    countryId = country.id;
  });

  let domainId = '';
  Domain.findOne({ offste: 0, limit: 1 }).then((domain) => {
    domainId = domain.id;
  });

  let vintageId = '';
  Vintage.findOne({ offste: 0, limit: 1 }).then((vintage) => {
    vintageId = vintage.id;
  });

  await Bottle.sync({ force: true });

  await bottleService.create({
    name: 'Bottle n°1',
    description: 'Bottle with wine type Alsace ?',
    price: 32.6,
    averagePrice: 34.3,
    isOrganic: false,
    wineTypeId,
    regionId,
    countryId,
    domainId,
    vintageId,
  });

  await bottleService.create({
    name: 'Bottle n°2',
    description: 'BIO Wine',
    price: 49.99,
    isOrganic: true,
    wineTypeId,
    regionId,
    countryId,
    domainId,
    vintageId,
  });
};

const createQuantityInCellars = async () => {
  let cellarId;
  Cellar.findOne({ offste: 0, limit: 1 }).then((cellar) => {
    cellarId = cellar.id;
  });
  let bottleId;
  Bottle.findOne({ offste: 0, limit: 1 }).then((bottle) => {
    bottleId = bottle.id;
  });

  await QuantityInCellar.sync({ force: true });

  await quantityInCellarService.create({
    cellarId,
    bottleId,
    quantity: 2,
  });
};

const createPositionInCellars = async () => {
  let cellarId;
  Cellar.findOne({ offste: 0, limit: 1 }).then((cellar) => {
    cellarId = cellar.id;
  });
  let bottleId;
  Bottle.findOne({ offste: 0, limit: 1 }).then((bottle) => {
    bottleId = bottle.id;
  });

  await PositionInCellar.sync({ force: true });

  await positionInCellarService.create({
    cellarId,
    bottleId,
    positionX: 0,
    positionY: 0,
  });

  await positionInCellarService.create({
    cellarId,
    bottleId,
    positionX: 3,
    positionY: 3,
  });
};

export default async () => {
  await createUsers();
  await createCellars();
  await createWineTypes();
  await createRegions();
  await createCountrys();
  await createDomains();
  await createVintages();
  await createFavouriteRegions();
  await createFavouriteWines();
  await createBottles();
  await createQuantityInCellars();
  await createPositionInCellars();
};
