import { Country } from '../../models';

class CountryService {
  constructor(collectionName) {
    this.COLLECTION_NAME = collectionName;
  }

  async create(data) {
    return Country.create(data).then((res, err) => {
      if (err) throw err;
      return res;
    });
  }

  async getAll(offset = 20, limit = 0) {
    return Country.findAll({
      offset,
      limit,
    }).then((res, err) => {
      if (err) throw err;
      return res;
    });
  }

  async findOne(id) {
    return Country.findOne({
      where: { id },
    }).then((res, err) => {
      if (err) throw err;
      return res;
    });
  }

  async updateOne(id, data) {
    return Country.update(data, {
      where: {
        id,
      },
    }).then((res, err) => {
      if (err) throw err;
      return res;
    });
  }

  async deleteOne(id) {
    return Country.destroy({
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

export default new CountryService('country');
