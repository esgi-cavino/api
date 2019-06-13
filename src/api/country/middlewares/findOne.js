import countryServices from '../../../modules/country/services';

export default function (req, res, next) {
  return countryServices
    .findOne(req.params.id)
    .then(response => res.send(response))
    .catch(err => next(err));
}
