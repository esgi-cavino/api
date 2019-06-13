import countryServices from '../../../modules/country/services';

export default function (req, res, next) {
  return countryServices
    .deleteOne(req.params.id)
    .then(response => res.sendStatus(response))
    .catch(err => next(err));
}
