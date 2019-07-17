import { expect } from 'chai';
import errors from './errors';

const test = (title, message, code, errorFunction) => {
  describe(title, () => {
    it(`should return${code}`, () => {
      const error = errorFunction;

      expect(error.message).to.equal(message);
      expect(error.status).to.equal(code);
    });
  });
};

describe('enums > errors', () => {
  it('should export an object', () => {
    expect(errors).to.be.an('object');
  });
  test('notFound', 'Not Found', 404, errors.notFound());
  test('unauthorized', 'You must be authenticated', 401, errors.unauthorized());
});
