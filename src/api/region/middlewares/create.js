import Service from '../../../modules/defaultModelCRUDServices';
import { Region } from '../../../models';

export default function (req, res, next) {
  const services = new Service(Region);
  return services
    .create(req.body)
    .then(response => res.send(response))
    .catch(err => next(err));
}
