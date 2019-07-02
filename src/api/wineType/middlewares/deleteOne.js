import Service from '../../../modules/defaultModelCRUDServices';
import { WineType } from '../../../models';

export default function (req, res, next) {
  const services = new Service(WineType);
  return services
    .deleteOne(req.params.id)
    .then(response => res.sendStatus(response))
    .catch(err => next(err));
}
