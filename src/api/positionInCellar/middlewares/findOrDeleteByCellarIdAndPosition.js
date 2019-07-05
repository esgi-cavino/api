import positionInCellarServices from '../../../modules/positionInCellar/services';

export default function (isToDelete, req, res, next) {
  return positionInCellarServices
    .findOrDeleteByCellarIdAndPosition(req.params.cellarId, req.params.positionX, req.params.positionY, isToDelete)
    .then(response => res.send(response))
    .catch(err => next(err));
}
