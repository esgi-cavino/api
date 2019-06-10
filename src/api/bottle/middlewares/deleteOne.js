import bottleServices from '../../../modules/bottle/services';

export default function (req, res, next) {
  return bottleServices
    .deleteOne(req.params.id)
    .then(response => res.sendStatus(response))
    .catch(err => next(err));
}
