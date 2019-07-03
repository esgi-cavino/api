import bcrypt from 'bcrypt';

import userService from './modules/user/services';
import cellarService from './modules/cellar/services';
import positionInCellarService from './modules/positionInCellar/services';
import CRUDServices from './modules/defaultModelCRUDServices';

import User from './models/user/user';
import Cellar from './models/cellar/cellar';
import WineType from './models/wineType/wineType';
import Region from './models/region/region';
import FavouriteRegion from './models/favouriteRegion/favouriteRegion';
import FavouriteWine from './models/favouriteWine/favouriteWine';
import Bottle from './models/bottle/bottle';
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

const getId = async (Model) => {
  let id = '';
  await Model.findOne({ offste: 0, limit: 1 }).then((model) => {
    id = model.id;
  });
  return (id);
};

const createUser = async (object) => {
  await userService.create(object);
};

const createUserWithAllOptions = async (firstname, lastname, email, password, age, address,
  isSeller, isAdmin) => {
  await createUser({
    firstname,
    lastname,
    email,
    password,
    age,
    address,
    isSeller,
    isAdmin,
  });
};

const createUsers = async () => {
  await User.sync({ force: true });

  await createUserWithAllOptions('Admin', 'Istrator', 'admin@cavino.fr', 'admin', 45,
    'Paris (France)', false, true);

  await createUserWithAllOptions('Seller', 'Man', 'seller@corporation.com', 'seller', 34,
    '47 private road, NY City (USA)', true, false);

  await createUser({
    firstname: 'firstname', lastname: 'lastname', email: userEmail, password: userPassword,
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

const createSimpleTables = async (Model, list) => {
  await Model.sync({ force: true });

  await Model.bulkCreate(list);
};

const createVintages = async () => {
  await Vintage.sync({ force: true });

  await Vintage.bulkCreate([{
    year: 2018,
  }, {
    year: 2019,
  }]);
};

const createFavourites = async (Model, data) => {
  data.userUUID = await getUserUUID();

  await FavouriteWine.sync({ force: true });

  const services = new CRUDServices(Model);
  await services.create(data);
};

const createBottles = async () => {

  const wineTypeId = await getId(WineType);
  const regionId = await getId(Region);
  const countryId = await getId(Country);
  const domainId = await getId(Domain);
  const vintageId = await getId(Vintage);
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
    name: 'Bottle n°2', description: 'BIO Wine', price: 49.99, isOrganic: true, wineTypeId, regionId, countryId, domainId, vintageId,
  }]);
};

const createPositionInCellars = async () => {
  const cellarId = await getId(Cellar);
  const bottleId = await getId(Bottle);
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
  await createSimpleTables(WineType, [{ name: 'Blanc' }, { name: 'Rosé' }]);
  await createSimpleTables(Region, [{ name: 'Alsace' }, { name: 'Beaujolais' },
    { name: 'Bordeaux' }, { name: 'Bourgogne' }, { name: 'Champagne' },
    { name: 'Corse' }, { name: 'Jura' }, { name: 'Languedoc-Roussillon' },
    { name: 'Loire' }, { name: 'Provence' }, { name: 'Valée du rône' },
    { name: 'Savoie-Bugey' }, { name: 'Sud-ouest' }, { name: 'Moselle' }]);
  await createSimpleTables(Country, [{ name: 'France' }, { name: 'Allemagne' }]);
  await createSimpleTables(Domain, [{ name: 'Château d\'Agassac' },
    { name: 'Château Lagrange' }]);
  await createVintages();
  await createFavourites(FavouriteRegion, { userUUID: '', regionId: await getId(Region) });
  await createFavourites(FavouriteWine, { userUUID: '', wineTypeId: await getId(WineType) });
  await createBottles();
  await createPositionInCellars();
};
