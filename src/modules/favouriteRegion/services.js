import { FavouriteRegion } from '../../models';

class FavouriteRegionService {
  constructor(collectionName) {
    this.COLLECTION_NAME = collectionName;
  }

  async create(data) {
    return FavouriteRegion.create(data).then((res, err) => {
      if (err) throw err;
      return res;
    });
  }

  async getAll(offset = 20, limit = 0) {
    return FavouriteRegion.findAll({
      offset,
      limit,
    }).then((res, err) => {
      if (err) throw err;
      return res;
    });
  }

  async findOne(id) {
    return FavouriteRegion.findOne({
      where: { id },
    }).then((res, err) => {
      if (err) throw err;
      return res;
    });
  }

  async updateOne(id, data) {
    return FavouriteRegion.update(data, {
      where: {
        id,
      },
    }).then((res, err) => {
      if (err) throw err;
      return res;
    });
  }

  async deleteOne(id) {
    return FavouriteRegion.destroy({
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
    return FavouriteRegion.destroy({
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

  async removeFavouriteRegion(uuid, id) {
    return FavouriteRegion.destroy({
      where: {
        userUUID: uuid,
        regionId: id,
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

export default new FavouriteRegionService('favouriteRegion');
