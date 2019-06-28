import favouriteRegionServices from '../../../modules/favouriteRegion/services';

export default function (req, res, next) {
  return favouriteRegionServices
    .removeFavouriteRegion(req.params.uuid, req.params.id)
    .then(response => res.sendStatus(response))
    .catch(err => next(err));
}
