import { Cellar } from '../../models';

class CellarService {
  constructor(collectionName) {
    this.COLLECTION_NAME = collectionName;
  }

  async create(data) {
    return Cellar.create(data).then((res, err) => {
      if (err) throw err;
      return res;
    });
  }

  async getAll(offset = 20, limit = 0) {
    return Cellar.findAll({
      offset,
      limit,
    }).then((res, err) => {
      if (err) throw err;
      return res;
    });
  }

  async findOne(id) {
    return Cellar.findOne({
      where: { id },
    }).then((res, err) => {
      if (err) throw err;
      return res;
    });
  }

  async updateOne(id, data) {
    return Cellar.update(data, {
      where: {
        id,
      },
    }).then((res, err) => {
      if (err) throw err;
      return res;
    });
  }

  async deleteOne(id) {
    return Cellar.destroy({
      where: {
        id,
      },
    }).then((res, err) => {
      if (err) throw err;
      if (res > 0) {
        return 200;
      }
      return (404);
    });
  }

  async deleteOneByIdAndUserUUID(id, userUUID) {
    return Cellar.destroy({
      where: {
        id,
        userUUID,
      },
    }).then((res, err) => {
      if (err) throw err;
      if (res > 0) {
        return 200;
      }
      return (404);
    });
  }

  async findByUserUUID(userUUID) {
    return Cellar.findAll({
      where: { userUUID },
    }).then((res, err) => {
      if (err) throw err;
      return res;
    });
  }

  /* async newWithUserUUID(userUUID, data) {
    const { name } = data;
    return Cellar.create({ userUUID, name }).then((res, err) => {
      if (err) throw err;
      return res;
    });
  } */
}

export default new CellarService('cellar');
