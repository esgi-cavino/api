import domainServices from '../../../modules/domain/services';

export default function (req, res, next) {
  return domainServices
    .findOne(req.params.id)
    .then(response => res.send(response))
    .catch(err => next(err));
}
