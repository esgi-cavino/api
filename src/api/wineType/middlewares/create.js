import wineTypeServices from '../../../modules/wineType/services';

export default function (req, res, next) {
  return wineTypeServices
    .create(req.body)
    .then(response => res.send(response))
    .catch(err => next(err));
}
