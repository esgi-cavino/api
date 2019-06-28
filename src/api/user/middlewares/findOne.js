import userServices from '../../../modules/user/services';

export default function (req, res, next) {
  return userServices
    .findOne(req.params.uuid)
    .then(response => res.send(response))
    .catch(err => next(err));
}
