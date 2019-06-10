import bottleServices from '../../../modules/bottle/services';

export default function (req, res, next) {
  return bottleServices
    .updateOne(req.params.id, req.body)
    .then(response => res.send(response))
    .catch(err => next(err));
}
