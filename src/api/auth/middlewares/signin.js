import jwt from 'jsonwebtoken';
import config from 'config';
import bcrypt from 'bcrypt';
import { User } from '../../../models/index';

export default function (req, res, next) {
  User.findOne({ where: { email: req.body.email } }).then((user, err) => {
    if (err || !user) { next({ status: 400, message: 'Wrong email or password' }); } else if (bcrypt.hashSync(req.body.password, user.salt) === user.password) {
      const token = jwt.sign({ userUUID: user.uuid }, config.get('jwt_secret'));
      res.send({ token });
    } else { next({ message: 'Password is not correct' }); }
  });
}
