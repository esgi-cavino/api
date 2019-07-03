import LinkTableServices from '../../../modules/linkTableServices';

export default function (data, req, res, next) {
  const services = new LinkTableServices(data.Model);
  const { param } = data;
  param.userUUID = req.params.uuid;
  param[Object.keys(param)[1]] = req.params.id;
  return services
    .deleteWithConditions(param)
    .then(response => res.sendStatus(response))
    .catch(err => next(err));
}
