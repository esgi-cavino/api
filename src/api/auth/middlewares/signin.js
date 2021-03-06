import jwt from 'jsonwebtoken';
// import config from 'config';
import bcrypt from 'bcrypt';
import { User } from '../../../models/index';

const JWT_SECRET = process.env.jwt_secret;
const JWT_VALID_DURATION = process.env.jwt_validDuration;
export default function (req, res, next) {
  User.findOne({ where: { email: req.body.email } }).then((user, err) => {
    if (err || !user) { next({ status: 400, message: 'Wrong email or password' }); } else if (bcrypt.hashSync(req.body.password, user.salt) === user.password) {
      const token = jwt.sign({ userUUID: user.uuid }, JWT_SECRET, { expiresIn: JWT_VALID_DURATION });
      const { uuid } = user;
      res.send({ uuid, token });
    } else { next({ message: 'Password is not correct' }); }
  });
}
