import { Bottle, WineType } from '../../models';

class BottleService {
  constructor(collectionName) {
    this.COLLECTION_NAME = collectionName;
  }

  async create(data) {
    return Bottle.create(data).then((res, err) => {
      if (err) throw err;
      return res;
    });
  }

  async getAll(offset = 20, limit = 0) {
    return Bottle.findAll({
      include: [{
        model: WineType,
        attributes: ['name'],
      }],
      attributes: { exclude: ['wineTypeId'] },
      offset,
      limit,
    }).then((res, err) => {
      if (err) throw err;
      return res;
    });
  }

  async findOne(id) {
    return Bottle.findOne({
      include: [{
        model: WineType,
        attributes: ['name'],
      }],
      where: { id },
      attributes: { exclude: ['wineTypeId'] },
    }).then((res, err) => {
      if (err) throw err;
      return res;
    });
  }

  async updateOne(id, data) {
    return Bottle.update(data, {
      where: {
        id,
      },
    }).then((res, err) => {
      if (err) throw err;
      return res;
    });
  }

  async deleteOne(id) {
    return Bottle.destroy({
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
}

export default new BottleService('bottle');
