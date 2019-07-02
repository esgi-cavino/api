import Service from '../../../modules/defaultModelCRUDServices';
import { Country } from '../../../models';

export default function (req, res, next) {
  const services = new Service(Country);
  return services
    .deleteOne(req.params.id)
    .then(response => res.sendStatus(response))
    .catch(err => next(err));
}
