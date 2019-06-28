import vintageServices from '../../../modules/vintage/services';

export default function (req, res, next) {
  return vintageServices
    .findOne(req.params.id)
    .then(response => res.send(response))
    .catch(err => next(err));
}
