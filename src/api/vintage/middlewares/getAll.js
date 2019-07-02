import Service from '../../../modules/defaultModelCRUDServices';
import { Vintage } from '../../../models';

export default function (req, res, next) {
  const {
    offset,
    limit,
  } = req.query;

  const services = new Service(Vintage);
  return services
    .getAll(parseInt(offset, 10), parseInt(limit, 10))
    .then(response => res.send(response))
    .catch(err => next(err));
}
