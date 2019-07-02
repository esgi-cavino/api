import LinkTableServices from '../../../modules/linkTableServices';
import { FavouriteWine } from '../../../models';

export default function (req, res, next) {
  const services = new LinkTableServices(FavouriteWine);
  return services
    .removeFavourite({ userUUID: req.params.uuid, wineTypeId: req.params.id })
    .then(response => res.sendStatus(response))
    .catch(err => next(err));
}
