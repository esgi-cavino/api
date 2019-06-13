import domainServices from '../../../modules/domain/services';

export default function (req, res, next) {
  return domainServices
    .updateOne(req.params.id, req.body)
    .then(response => res.send(response))
    .catch(err => next(err));
}
