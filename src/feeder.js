import bcrypt from 'bcrypt';

import userService from './modules/user/services';
import cellarService from './modules/cellar/services';
import wineTypeService from './modules/wineType/services';

import User from './models/user/user';
import Cellar from './models/cellar/cellar';
import WineType from './models/wineType/wineType';

const userEmail = 'e@mail.com';
const userPassword = 'password';

const createUsers = async () => {
  await User.sync({ force: true });

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
  let userUuid = '';
  User.findOne({ where: { email: userEmail } }).then((user) => {
    if (bcrypt.hashSync(userPassword, user.salt) === user.password) {
      userUuid = user.uuid;
    }
  });

  await WineType.sync({ force: true });

  await wineTypeService.create({
    name: 'Blanc',
    userUUID: userUuid,
  });
};

export default async () => {
  await createUsers();
  await createCellars();
  await createWineTypes();
};
