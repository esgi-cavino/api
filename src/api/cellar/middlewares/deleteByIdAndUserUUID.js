import cellarServices from '../../../modules/cellar/services';

export default function (req, res, next) {
  return cellarServices
    .deleteOneByIdAndUserUUID(req.params.id, req.params.userUUID)
    .then(response => res.sendStatus(response))
    .catch(err => next(err));
}
