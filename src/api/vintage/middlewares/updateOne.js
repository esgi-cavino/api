import vintageServices from '../../../modules/vintage/services';

export default function (req, res, next) {
  return vintageServices
    .updateOne(req.params.id, req.body)
    .then(response => res.send(response))
    .catch(err => next(err));
}
