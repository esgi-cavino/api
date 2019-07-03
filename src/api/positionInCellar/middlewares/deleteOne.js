import Service from '../../../modules/defaultModelCRUDServices';
import { PositionInCellar } from '../../../models';

export default function (req, res, next) {
  const services = new Service(PositionInCellar);
  return services
    .deleteOne(req.params.id)
    .then(response => res.sendStatus(response))
    .catch(err => next(err));
}
