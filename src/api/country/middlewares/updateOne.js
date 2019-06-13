import countryServices from '../../../modules/country/services';

export default function (req, res, next) {
  return countryServices
    .updateOne(req.params.id, req.body)
    .then(response => res.send(response))
    .catch(err => next(err));
}
