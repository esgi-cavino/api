function notFound() {
  const error = new Error('Not Found');
  error.status = 404;
  return error;
}

function unauthorized() {
  const error = new Error('You must be authenticated');
  error.status = 401;
  return error;
}

export default {
  notFound,
  unauthorized,
};
