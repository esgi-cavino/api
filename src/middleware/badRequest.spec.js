import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import badRequest from './badRequest';

chai.use(sinonChai);

describe('middleware > badRequest', () => {
  it('should be a function', () => {
    expect(badRequest).to.be.a('function');
  });

  it('should call next with an error', () => {
    const next = sinon.spy();
    const req = {
      url: '/api',
      uuurl: 'kkkk',
    };

    badRequest(req, null, next);

    expect(next).to.have.been.called;
    expect(next.args[0][0].status).to.equal(400);
  });
});
