import positionInCellarServices from '../../../modules/positionInCellar/services';

export default function (req, res, next) {
  return positionInCellarServices
    .updateOne(req.params.id, req.body)
    .then(response => res.send(response))
    .catch(err => next(err));
}
