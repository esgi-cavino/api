import Sequelize from 'sequelize';
import bcrypt from 'bcrypt';
import db from '../../db';

const model = db.define('user', {
  uuid: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    unique: true,
  },
  firstname: { type: Sequelize.STRING, allowNull: false },
  lastname: { type: Sequelize.STRING, allowNull: false },
  password: { type: Sequelize.STRING, allowNull: false },
  salt: { type: Sequelize.STRING },
  email: {
    type: Sequelize.STRING,
    unique: true,
    validate: {
      isEmail: true, // checks for email format (foo@bar.com)
      // isNull: false, // only allows null
      notEmpty: true, // don't allow empty string
    },
  },
}, {
  hooks: {
    beforeCreate: (user) => {
      const salt = bcrypt.genSaltSync();
      user.password = bcrypt.hashSync(user.password, salt);
      user.salt = salt;
    },
  },
  instanceMethods: {
    validPassword(password) {
      return bcrypt.compareSync(password, this.password);
    },
  },
});

const User = model;

export default User;
