import positionInCellarServices from '../../../modules/positionInCellar/services';

export default function (req, res, next) {
  const {
    offset,
    limit,
  } = req.query;

  return positionInCellarServices
    .getAllByCellarId(req.params.cellarId, parseInt(offset, 10), parseInt(limit, 10))
    .then(response => res.send(response))
    .catch(err => next(err));
}
