import Service from '../../../modules/defaultModelCRUDServices';
import { Domain } from '../../../models';

export default function (req, res, next) {
  const services = new Service(Domain);
  return services
    .updateOne(req.params.id, req.body)
    .then(response => res.send(response))
    .catch(err => next(err));
}
