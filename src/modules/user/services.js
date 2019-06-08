import { User } from '../../models';
import { FavouriteRegion } from '../../models';
import { Region } from '../../models';

class UserService {
  constructor(collectionName) {
    this.COLLECTION_NAME = collectionName;
  }

  async create(data) {
    return User.create(data).then((res, err) => {
      if (err) throw err;
      return res;
    });
  }

  async getAll(offset = 20, limit = 0) {
    return User.findAll({
      attributes: ['uuid', 'firstname', 'lastname', 'email', 'createdAt', 'updatedAt'],
      offset,
      limit,
    }).then((res, err) => {
      if (err) throw err;
      return res;
    });
  }

  async findOne(uuid) {
    return User.findOne({
      where: { uuid },
      attributes: ['uuid', 'firstname', 'lastname', 'email', 'createdAt', 'updatedAt'],
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
}

export default new UserService('user');
