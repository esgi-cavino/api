import User from './user/user';
import Cellar from './cellar/cellar';
import WineType from './wineType/wineType';
import Region from './region/region';

require('dotenv').config();

if (process.env.syncModels === 'true' && process.env.feed !== 'true') {
  User.sync({ force: true });
  Cellar.sync({ force: true });
  WineType.sync({ force: true });
  Region.sync({ force: true });
}

export { User, Cellar, WineType, Region };

