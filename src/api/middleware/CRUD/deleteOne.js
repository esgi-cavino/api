import Service from '../../../modules/defaultModelCRUDServices';

export default function (Model, req, res, next) {
  const services = new Service(Model);
  return services
    .deleteOne(req.params.id)
    .then(response => res.sendStatus(response))
    .catch(err => next(err));
}
