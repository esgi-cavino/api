import {
  User,
} from '../../models';

class UserService {
  constructor(collectionName) {
    this.COLLECTION_NAME = collectionName;
  }

  async findAllSellerOrAdmin(offset = 20, limit = 0, condition) {
    return User.findAll({
      attributes: { exclude: ['id', 'password', 'salt'] },
      offset,
      limit,
      where: condition,
    }).then((res, err) => {
      if (err) throw err;
      return res;
    });
  }

  async updateOne(uuid, data) {
    return User.update(data, {
      where: {
        uuid,
      },
    }).then((res, err) => {
      if (err) throw err;
      return res;
    });
  }

  async deleteOne(uuid) {
    return User.destroy({
      where: {
        uuid,
      },
    }).then((res, err) => {
      if (err) throw err;
      if (res > 0) {
        return 200;
      }
      return (404);
    });
  }

  async getFavourites(uuid, Model, param) {
    return User.findAll({
      include: [{
        model: Model,
        through: {
          attributes: [],
          where: { userUUID: uuid },
        },
      }],
    }).then((res, err) => {
      if (err) throw err;
      return res[0][param];
    });
  }
}

export default new UserService('user');
