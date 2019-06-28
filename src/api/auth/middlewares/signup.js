import userServices from '../../../modules/user/services';
import signin from './signin';

export default function (req, res, next) {
  return userServices
    .create(req.body)
    .then(() => {
      signin(req, res, next);
    })
    .catch(err => next(err));
}

