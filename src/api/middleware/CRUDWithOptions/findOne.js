import Service from '../../../modules/modelCRUDServicesWithOptions';

export default function (data, req, res, next) {
  const services = new Service(data.model, data.options);
  return services
    .findOne(req.params.id)
    .then(response => res.send(response))
    .catch(err => next(err));
}
