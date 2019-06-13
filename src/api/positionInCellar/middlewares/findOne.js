import positionInCellarServices from '../../../modules/positionInCellar/services';

export default function (req, res, next) {
  return positionInCellarServices
    .findOne(req.params.id)
    .then(response => res.send(response))
    .catch(err => next(err));
}
