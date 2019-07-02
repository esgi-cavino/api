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

const getUserUUID = async () => {
  let userUuid = '';
  await User.findOne({ where: { email: userEmail } }).then((user) => {
    if (bcrypt.hashSync(userPassword, user.salt) === user.password) {
      userUuid = user.uuid;
    }
  });
  return (userUuid);
};

const getRegionId = async () => {
  let regionId = '';
  await Region.findOne({ offste: 0, limit: 1 }).then((region) => {
    regionId = region.id;
  });
  return (regionId);
};

const getWineTypeId = async () => {
  let wineTypeId = '';
  await WineType.findOne({ offste: 0, limit: 1 }).then((wineType) => {
    wineTypeId = wineType.id;
  });
  return (wineTypeId);
};

const getCountryId = async () => {
  let countryId = '';
  await Country.findOne({ offste: 0, limit: 1 }).then((country) => {
    countryId = country.id;
  });
  return (countryId);
};

const getDomainId = async () => {
  let domainId = '';
  await Domain.findOne({ offste: 0, limit: 1 }).then((domain) => {
    domainId = domain.id;
  });
  return (domainId);
};

const getVintageId = async () => {
  let vintageId = '';
  await Vintage.findOne({ offste: 0, limit: 1 }).then((vintage) => {
    vintageId = vintage.id;
  });
  return (vintageId);
};

const getCellarId = async () => {
  let cellarId = '';
  await Cellar.findOne({ offste: 0, limit: 1 }).then((cellar) => {
    cellarId = cellar.id;
  });
  return (cellarId);
};

const getBottleId = async () => {
  let bottleId = '';
  await Bottle.findOne({ offste: 0, limit: 1 }).then((bottle) => {
    bottleId = bottle.id;
  });
  return (bottleId);
};

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
  const userUuid = await getUserUUID();
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

  await WineType.bulkCreate([{
    name: 'Blanc',
  }, {
    name: 'Rosé',
  }]);
};

const createRegions = async () => {
  await Region.sync({ force: true });

  await Region.bulkCreate([{
    name: 'Alsace',
  }, {
    name: 'Beaujolais',
  }, {
    name: 'Bordeaux',
  }, {
    name: 'Bourgogne',
  }, {
    name: 'Champagne',
  }, {
    name: 'Corse',
  }, {
    name: 'Jura',
  }, {
    name: 'Languedoc-Roussillon',
  }, {
    name: 'Loire',
  }, {
    name: 'Provence',
  }, {
    name: 'Valée du rône',
  }, {
    name: 'Savoie-Bugey',
  }, {
    name: 'Sud-ouest',
  }, {
    name: 'Moselle',
  }]);
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

  await Domain.bulkCreate([{
    name: 'Château d\'Agassac',
  }, {
    name: 'Château Lagrange',
  }]);
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
  const userUuid = await getUserUUID();
  const regionId = await getRegionId();
  await FavouriteRegion.sync({ force: true });

  await favouriteRegionService.create({
    userUUID: userUuid,
    regionId,
  });
};


const createFavouriteWines = async () => {
  const userUuid = await getUserUUID();
  const wineTypeId = await getWineTypeId();

  await FavouriteWine.sync({ force: true });

  await favouriteWineService.create({
    userUUID: userUuid,
    wineTypeId,
  });
};

const createBottles = async () => {

  const wineTypeId = await getWineTypeId();
  const regionId = await getRegionId();
  const countryId = await getCountryId();
  const domainId = await getDomainId();
  const vintageId = await getVintageId();
  await Bottle.sync({ force: true });

  await Bottle.bulkCreate([{
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
  }, {
    name: 'Bottle n°2',
    description: 'BIO Wine',
    price: 49.99,
    isOrganic: true,
    wineTypeId,
    regionId,
    countryId,
    domainId,
    vintageId,
  }]);
};

const createQuantityInCellars = async () => {
  const cellarId = await getCellarId();
  const bottleId = await getBottleId();
  await QuantityInCellar.sync({ force: true });

  await quantityInCellarService.create({
    cellarId,
    bottleId,
    quantity: 2,
  });
};

const createPositionInCellars = async () => {
  const cellarId = await getCellarId();
  const bottleId = await getBottleId();
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
