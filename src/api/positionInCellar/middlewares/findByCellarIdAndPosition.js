import positionInCellarServices from '../../../modules/positionInCellar/services';

export default function (req, res, next) {
  return positionInCellarServices
    .findByCellarIdAndPosition(req.params.cellarId, req.params.positionX, req.params.positionY)
    .then(response => res.send(response))
    .catch(err => next(err));
}
