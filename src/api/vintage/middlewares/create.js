import Service from '../../../modules/defaultModelCRUDServices';
import { Vintage } from '../../../models';

export default function (req, res, next) {
  const services = new Service(Vintage);
  return services
    .create(req.body)
    .then(response => res.send(response))
    .catch(err => next(err));
}
