import positionInCellarServices from '../../../modules/positionInCellar/services';

export default function (req, res, next) {
  return positionInCellarServices
    .deleteOne(req.params.id)
    .then(response => res.sendStatus(response))
    .catch(err => next(err));
}
