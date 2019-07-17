import Service from '../../../modules/modelCRUDServicesWithOptions';

export default function (data, req, res, next) {
  const {
    offset,
    limit,
  } = req.query;

  const services = new Service(data.model, data.options);
  return services
    .getAll(parseInt(offset, 10), parseInt(limit, 10))
    .then(response => res.send(response))
    .catch(err => next(err));
}
