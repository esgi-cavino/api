import User from './user/user';
import Cellar from './cellar/cellar';

require('dotenv').config();

if (process.env.syncModels === 'true') {
  User.sync({ force: true });
  Cellar.sync({ force: true });
}

export { User, Cellar };

