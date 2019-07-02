import Service from '../../../modules/defaultModelCRUDServices';
import { FavouriteWine } from '../../../models';

export default function (req, res, next) {
  const services = new Service(FavouriteWine);
  return services
    .findOne(req.params.id)
    .then(response => res.send(response))
    .catch(err => next(err));
}
