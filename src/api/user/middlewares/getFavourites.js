import userServices from '../../../modules/user/services';

export default function (Model, param, req, res, next) {
  return userServices
    .getFavourites(req.params.uuid, Model, param)
    .then(response => res.send(response))
    .catch(err => next(err));
}
