export default (req, res, next) => {
  const error = new Error(`Bad request: ${req.url} #errorID`);
  error.status = 400;
  next(error);
};
