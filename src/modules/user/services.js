import {
  User, Region, WineType,
} from '../../models';

class UserService {
  constructor(collectionName) {
    this.COLLECTION_NAME = collectionName;
  }

  async create(data) {
    return User.create(data).then((res, err) => {
      if (err) throw err;
      const { uuid } = res;
      const { firstname } = res;
      const { lastname } = res;
      const { email } = res;
      const { createdAt } = res;
      const { updatedAt } = res;
      const { age } = res;
      const { address } = res;
      const { isSeller } = res;
      const { isAdmin } = res;
      return ({
        uuid, firstname, lastname, email, age, address, isSeller, isAdmin, createdAt, updatedAt,
      });
    });
  }

  async getAll(offset = 20, limit = 0) {
    return User.findAll({
      attributes: { exclude: ['id', 'password', 'salt'] },
      offset,
      limit,
    }).then((res, err) => {
      if (err) throw err;
      return res;
    });
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

  async findOne(uuid) {
    return User.findOne({
      where: { uuid },
      attributes: { exclude: ['id', 'password', 'salt'] },
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

  async getFavouriteRegions(uuid) {
    return User.findAll({
      include: [{
        model: Region,
        through: {
          attributes: [],
          where: { userUUID: uuid },
        },
      }],
    }).then((res, err) => {
      if (err) throw err;
      return res[0].regions;
    });
  }

  async getFavouriteWine(uuid) {
    return User.findAll({
      include: [{
        model: WineType,
        through: {
          attributes: [],
          where: { userUUID: uuid },
        },
      }],
    }).then((res, err) => {
      if (err) throw err;
      return res[0].wineTypes;
    });
  }
}

export default new UserService('user');
