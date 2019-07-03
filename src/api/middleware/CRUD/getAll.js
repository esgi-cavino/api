import Service from '../../../modules/defaultModelCRUDServices';

export default function (Model, req, res, next) {
  const {
    offset,
    limit,
  } = req.query;

  const services = new Service(Model);
  return services
    .getAll(parseInt(offset, 10), parseInt(limit, 10))
    .then(response => res.send(response))
    .catch(err => next(err));
}
