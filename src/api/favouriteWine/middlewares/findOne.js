import favouriteWineServices from '../../../modules/favouriteWine/services';

export default function (req, res, next) {
  return favouriteWineServices
    .findOne(req.params.id)
    .then(response => res.send(response))
    .catch(err => next(err));
}
