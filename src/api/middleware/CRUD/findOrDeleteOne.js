import Service from '../../../modules/defaultModelCRUDServices';

export default function (data, req, res, next) {
  const services = new Service(data.model);
  return services
    .findOrDeleteOne(req.params.id, data.isToDelete)
    .then(response => res.send(response))
    .catch(err => next(err));
}
