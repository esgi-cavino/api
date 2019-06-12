import quantityInCellarServices from '../../../modules/quantityInCellar/services';

export default function (req, res, next) {
  return quantityInCellarServices
    .findOne(req.params.id)
    .then(response => res.send(response))
    .catch(err => next(err));
}
