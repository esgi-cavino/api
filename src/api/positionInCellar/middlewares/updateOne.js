import Service from '../../../modules/defaultModelCRUDServices';
import { PositionInCellar } from '../../../models';

export default function (req, res, next) {
  const services = new Service(PositionInCellar);
  return services
    .updateOne(req.params.id, req.body)
    .then(response => res.send(response))
    .catch(err => next(err));
}
