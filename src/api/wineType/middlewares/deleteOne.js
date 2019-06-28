import wineTypeServices from '../../../modules/wineType/services';

export default function (req, res, next) {
  return wineTypeServices
    .deleteOne(req.params.id)
    .then(response => res.sendStatus(response))
    .catch(err => next(err));
}
