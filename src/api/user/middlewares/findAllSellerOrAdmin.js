import userServices from '../../../modules/user/services';

export default function (condition, req, res, next) {
  const {
    offset,
    limit,
  } = req.query;

  return userServices
    .findAllSellerOrAdmin(parseInt(offset, 10), parseInt(limit, 10), condition)
    .then(response => res.send(response))
    .catch(err => next(err));
}
