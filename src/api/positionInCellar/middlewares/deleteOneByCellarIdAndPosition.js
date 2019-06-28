import positionInCellarServices from '../../../modules/positionInCellar/services';

export default function (req, res, next) {
  return positionInCellarServices
    .deleteOneByCellarIdAndPosition(req.params.cellarId, req.params.positionX, req.params.positionY)
    .then(response => res.sendStatus(response))
    .catch(err => next(err));
}
