import bottleServices from '../../../modules/bottle/services';

export default function (req, res, next) {
  const {
    offset,
    limit,
  } = req.query;

  return bottleServices
    .getAll(parseInt(offset, 10), parseInt(limit, 10))
    .then(response => res.send(response))
    .catch(err => next(err));
}
