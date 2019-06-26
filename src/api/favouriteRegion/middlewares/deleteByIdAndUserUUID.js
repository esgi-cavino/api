import favouriteRegionServices from '../../../modules/favouriteRegion/services';

export default function (req, res, next) {
  return favouriteRegionServices
    .deleteOneByIdAndUserUUID(req.params.id, req.params.userUUID)
    .then(response => res.sendStatus(response))
    .catch(err => next(err));
}
