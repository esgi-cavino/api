import Service from '../../../modules/modelCRUDServicesWithOptions';
import signin from './signin';

export default function (data, req, res, next) {
  const services = new Service(data.model, data.options);
  return services
    .createUser(req.body)
    .then(() => {
      signin(req, res, next);
    })
    .catch(err => next(err));
}

