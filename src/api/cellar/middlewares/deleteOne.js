import cellarServices from '../../../modules/cellar/services';

export default function (req, res, next) {
  return cellarServices
    .deleteOne(req.params.id)
    .then(response => res.sendStatus(response))
    .catch(err => next(err));
}
