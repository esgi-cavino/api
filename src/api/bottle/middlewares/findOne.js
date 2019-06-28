import bottleServices from '../../../modules/bottle/services';

export default function (req, res, next) {
  return bottleServices
    .findOne(req.params.id)
    .then(response => res.send(response))
    .catch(err => next(err));
}
