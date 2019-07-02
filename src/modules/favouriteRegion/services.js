import { FavouriteRegion } from '../../models';

class FavouriteRegionService {
  constructor(collectionName) {
    this.COLLECTION_NAME = collectionName;
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
