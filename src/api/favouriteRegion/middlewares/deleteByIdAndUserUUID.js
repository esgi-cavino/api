import LinkTableServices from '../../../modules/linkTableServices';
import { FavouriteRegion } from '../../../models';

export default function (req, res, next) {
  const services = new LinkTableServices(FavouriteRegion);
  return services
    .deleteWithConditions({ id: req.params.id, userUUID: req.params.userUUID })
    .then(response => res.sendStatus(response))
    .catch(err => next(err));
}
