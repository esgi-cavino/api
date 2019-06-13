import vintageServices from '../../../modules/vintage/services';

export default function (req, res, next) {
  return vintageServices
    .deleteOne(req.params.id)
    .then(response => res.sendStatus(response))
    .catch(err => next(err));
}
