import domainServices from '../../../modules/domain/services';

export default function (req, res, next) {
  return domainServices
    .deleteOne(req.params.id)
    .then(response => res.sendStatus(response))
    .catch(err => next(err));
}
