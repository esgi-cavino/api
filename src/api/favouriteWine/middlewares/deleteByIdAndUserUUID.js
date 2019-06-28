import favouriteWineServices from '../../../modules/favouriteWine/services';

export default function (req, res, next) {
  return favouriteWineServices
    .deleteOneByIdAndUserUUID(req.params.id, req.params.userUUID)
    .then(response => res.sendStatus(response))
    .catch(err => next(err));
}
