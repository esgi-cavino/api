import regionServices from '../../../modules/region/services';

export default function (req, res, next) {
  return regionServices
    .deleteOne(req.params.id)
    .then(response => res.sendStatus(response))
    .catch(err => next(err));
}
