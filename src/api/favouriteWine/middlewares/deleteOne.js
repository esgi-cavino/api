import favouriteWineServices from '../../../modules/favouriteWine/services';

export default function (req, res, next) {
  return favouriteWineServices
    .deleteOne(req.params.id)
    .then(response => res.sendStatus(response))
    .catch(err => next(err));
}
