import LinkTableServices from '../../../modules/linkTableServices';
import { FavouriteRegion } from '../../../models';

export default function (req, res, next) {
  const services = new LinkTableServices(FavouriteRegion);
  return services
    .removeFavourite({ userUUID: req.params.uuid, regionId: req.params.id })
    .then(response => res.sendStatus(response))
    .catch(err => next(err));
}
