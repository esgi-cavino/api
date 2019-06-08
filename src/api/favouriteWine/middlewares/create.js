import favouriteWineServices from '../../../modules/favouriteWine/services';

export default function (req, res, next) {
  return favouriteWineServices
    .create(req.body)
    .then(response => res.send(response))
    .catch(err => next(err));
}
