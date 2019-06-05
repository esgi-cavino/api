import wineTypeServices from '../../../modules/wineType/services';

export default function (req, res, next) {
  return wineTypeServices
    .findOne(req.params.id)
    .then(response => res.send(response))
    .catch(err => next(err));
}
