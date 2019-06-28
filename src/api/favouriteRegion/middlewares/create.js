import favouriteRegionServices from '../../../modules/favouriteRegion/services';

export default function (req, res, next) {
  return favouriteRegionServices
    .create(req.body)
    .then(response => res.send(response))
    .catch(err => next(err));
}
