import cellarServices from '../../../modules/cellar/services';

export default function (req, res, next) {
  return cellarServices
    .findOne(req.params.id)
    .then(response => res.send(response))
    .catch(err => next(err));
}
