import cellarServices from '../../../modules/cellar/services';

export default function (req, res, next) {
  return cellarServices
    .findByUserUUID(req.params.uuid)
    .then(response => res.send(response))
    .catch(err => next(err));
}
