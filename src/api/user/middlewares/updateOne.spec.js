import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import userServices from '../../../modules/user/services';
import updateOne from './updateOne';

chai.use(sinonChai);

describe('api > user > middleware > updateOne', () => {
  let userServicesUpdateOneStub;

  afterEach(() => {
    sinon.restore();
  });

  beforeEach(() => {
    userServicesUpdateOneStub = sinon.stub(userServices, 'updateOne');
  });

  it('should be a function', () => {
    expect(updateOne).to.be.a('function');
  });

  it('should call updateOne service with req.params.uuid and call res.send', () => {
    const response = {
      data: true,
    };
    const req = {
      params: {
        uuid: '0a000a00-0a00-00a0-000a-00a00000a00a',
      },
    };
    const res = {
      send: sinon.spy(),
    };
    const next = sinon.spy();

    userServicesUpdateOneStub.resolves(response);

    return updateOne(req, res, next).then(() => {
      expect(res.send).to.have.been.called;
      expect(next).not.to.have.been.called;
      expect(userServicesUpdateOneStub).to.have.been.called;
    });
  });

  it('should call updateOne service with req.params.id and call next if error', () => {
    const req = {
      params: {
        uuid: 1,
      },
    };
    const res = {
      send: sinon.spy(),
    };
    const next = sinon.spy();
    userServicesUpdateOneStub.rejects();

    return updateOne(req, res, next).then(() => {
      expect(res.send).not.to.have.been.called;
      expect(next).to.have.been.called;
      expect(userServicesUpdateOneStub).to.have.been.called;
    });
  });
});
