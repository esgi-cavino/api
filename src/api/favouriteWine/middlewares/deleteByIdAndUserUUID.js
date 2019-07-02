import LinkTableServices from '../../../modules/linkTableServices';
import { FavouriteWine } from '../../../models';

export default function (req, res, next) {
  const services = new LinkTableServices(FavouriteWine);
  return services
    .deleteOneByIdAndUserUUID({ id: req.params.id, userUUID: req.params.userUUID })
    .then(response => res.sendStatus(response))
    .catch(err => next(err));
}
