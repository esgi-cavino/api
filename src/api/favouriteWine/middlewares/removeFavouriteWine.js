import favouriteWineServices from '../../../modules/favouriteWine/services';

export default function (req, res, next) {
  return favouriteWineServices
    .removeFavouriteWine(req.params.uuid, req.params.id)
    .then(response => res.sendStatus(response))
    .catch(err => next(err));
}
