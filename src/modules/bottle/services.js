import {
 Bottle, WineType, Region, Country, Domain, Vintage 
} from '../../models';

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
      }, {
        model: Region,
        attributes: ['name'],
      }, {
        model: Country,
        attributes: ['name'],
      }, {
        model: Domain,
        attributes: ['name'],
      }, {
        model: Vintage,
        attributes: ['year'],
      }],
      attributes: { exclude: ['wineTypeId', 'regionId', 'countryId', 'domainId', 'vintageId'] },
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
      }, {
        model: Region,
        attributes: ['name'],
      }, {
        model: Country,
        attributes: ['name'],
      }, {
        model: Domain,
        attributes: ['name'],
      }, {
        model: Vintage,
        attributes: ['year'],
      }],
      where: { id },
      attributes: { exclude: ['wineTypeId', 'regionId', 'countryId', 'domainId', 'vintageId'] },
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
