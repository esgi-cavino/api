import Service from '../../../modules/defaultModelCRUDServices';

export default function (Model, req, res, next) {
  const services = new Service(Model);
  return services
    .create(req.body)
    .then(response => res.send(response))
    .catch(err => next(err));
}
