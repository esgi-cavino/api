import positionInCellarServices from '../../../modules/positionInCellar/services';

export default function (req, res, next) {
  return positionInCellarServices
    .create(req.body)
    .then(response => res.send(response))
    .catch(err => next(err));
}
