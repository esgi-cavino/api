import bcrypt from 'bcrypt';

import userService from './modules/user/services';
import cellarService from './modules/cellar/services';
import wineTypeService from './modules/wineType/services';
import regionService from './modules/region/services';
import favouriteRegionService from './modules/favouriteRegion/services';

import User from './models/user/user';
import Cellar from './models/cellar/cellar';
import WineType from './models/wineType/wineType';
import Region from './models/region/region';
import FavouriteRegion from './models/favouriteRegion/favouriteRegion';

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
    userUUID: userUuid,
  });
};

const createWineTypes = async () => {
  await WineType.sync({ force: true });

  await wineTypeService.create({
    name: 'Blanc',
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

export default async () => {
  await createUsers();
  await createCellars();
  await createWineTypes();
  await createRegions();
  await createFavouriteRegions();
};
