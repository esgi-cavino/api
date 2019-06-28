import userServices from '../../../modules/user/services';

export default function (req, res, next) {
  return userServices
    .updateOne(req.params.uuid, req.body)
    .then(response => res.send(response))
    .catch(err => next(err));
}
