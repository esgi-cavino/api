import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import getAll from './getAll';
import userServices from '../../../modules/user/services';

chai.use(sinonChai);

describe('api > user > middleware > getAll ', () => {
  let res;
  let next;
  let getAllStub;
  const req = {
    query: {},
  };

  beforeEach(() => {
    res = {
      send: sinon.spy(),
    };
    next = sinon.spy();
    getAllStub = sinon.stub(userServices, 'getAll');
  });

  afterEach(() => {
    req.query = {};
    sinon.restore();
  });

  it('should export a function', () => {
    expect(getAll).to.be.a('function');
  });

  it('should send the service response', () => {
    const data = {
      an: 'object',
    };
    getAllStub.resolves(data);

    return getAll(req, res, next).then(() => {
      expect(getAllStub).to.have.been.calledWith(NaN, NaN);
      expect(res.send).to.have.been.calledWith(data);
      expect(next).not.to.have.been.called;
    });
  });

  it('should pass the right parameters from query', () => {
    getAllStub.resolves({});

    req.query = {
      offset: '2',
      limit: '30',
    };

    return getAll(req, res, next).then(() => {
      expect(getAllStub).to.have.been.calledWith(2, 30);
    });
  });

  it('should next if service is reject', () => {
    const error = {
      name: 'ouups',
    };
    getAllStub.rejects(error);

    return getAll(req, res, next).then(() => {
      expect(res.send).not.to.have.been.called;
      expect(next).to.have.been.calledWith(error);
    });
  });
});
