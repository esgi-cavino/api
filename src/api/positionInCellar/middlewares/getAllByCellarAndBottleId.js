import positionInCellarServices from '../../../modules/positionInCellar/services';

export default function (req, res, next) {
  const {
    offset,
    limit,
  } = req.query;

  return positionInCellarServices
    .getAllByCellarAndBottleId(req.params.cellarId, req.params.bottleId, parseInt(offset, 10), parseInt(limit, 10))
    .then(response => res.send(response))
    .catch(err => next(err));
}
