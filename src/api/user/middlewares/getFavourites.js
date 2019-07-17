import userServices from '../../../modules/user/services';

export default function (object, req, res, next) {
  return userServices
    .getFavourites(req.params.uuid, object.model, object.param)
    .then(response => res.send(response))
    .catch(err => next(err));
}
