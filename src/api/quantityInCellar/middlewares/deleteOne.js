import quantityInCellarServices from '../../../modules/quantityInCellar/services';

export default function (req, res, next) {
  return quantityInCellarServices
    .deleteOne(req.params.id)
    .then(response => res.sendStatus(response))
    .catch(err => next(err));
}
