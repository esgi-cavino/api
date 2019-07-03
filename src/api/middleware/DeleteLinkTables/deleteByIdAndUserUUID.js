import LinkTableServices from '../../../modules/linkTableServices';

export default function (Model, req, res, next) {
  const services = new LinkTableServices(Model);
  return services
    .deleteWithConditions({ id: req.params.id, userUUID: req.params.userUUID })
    .then(response => res.sendStatus(response))
    .catch(err => next(err));
}
