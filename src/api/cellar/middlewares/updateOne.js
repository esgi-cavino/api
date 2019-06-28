import cellarServices from '../../../modules/cellar/services';

export default function (req, res, next) {
  return cellarServices
    .updateOne(req.params.id, req.body)
    .then(response => res.send(response))
    .catch(err => next(err));
}
