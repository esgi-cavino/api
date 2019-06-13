import domainServices from '../../../modules/domain/services';

export default function (req, res, next) {
  return domainServices
    .create(req.body)
    .then(response => res.send(response))
    .catch(err => next(err));
}
