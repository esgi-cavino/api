import favouriteRegionServices from '../../../modules/favouriteRegion/services';

export default function (req, res, next) {
  return favouriteRegionServices
    .updateOne(req.params.id, req.body)
    .then(response => res.send(response))
    .catch(err => next(err));
}
