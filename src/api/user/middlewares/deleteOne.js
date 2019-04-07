import userServices from '../../../modules/user/services';

export default function (req, res, next) {
  return userServices
    .deleteOne(req.params.uuid)
    .then(response => res.sendStatus(response))
    .catch(err => next(err));
}
