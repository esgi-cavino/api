import regionServices from '../../../modules/region/services';

export default function (req, res, next) {
  return regionServices
    .create(req.body)
    .then(response => res.send(response))
    .catch(err => next(err));
}
