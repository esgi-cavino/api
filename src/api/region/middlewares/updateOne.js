import regionServices from '../../../modules/region/services';

export default function (req, res, next) {
  return regionServices
    .updateOne(req.params.id, req.body)
    .then(response => res.send(response))
    .catch(err => next(err));
}
