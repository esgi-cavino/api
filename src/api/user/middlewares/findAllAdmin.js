import userServices from '../../../modules/user/services';

export default function (req, res, next) {
  const {
    offset,
    limit,
  } = req.query;

  return userServices
    .findAllSellerOrAdmin(parseInt(offset, 10), parseInt(limit, 10), { isAdmin: true })
    .then(response => res.send(response))
    .catch(err => next(err));
}
