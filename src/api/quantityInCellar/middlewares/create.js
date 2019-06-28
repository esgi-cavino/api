import quantityInCellarServices from '../../../modules/quantityInCellar/services';

export default function (req, res, next) {
  return quantityInCellarServices
    .create(req.body)
    .then(response => res.send(response))
    .catch(err => next(err));
}
