import { FavouriteWine } from '../../models';

class FavouriteWineService {
  constructor(collectionName) {
    this.COLLECTION_NAME = collectionName;
  }

  async deleteOneByIdAndUserUUID(id, userUUID) {
    return FavouriteWine.destroy({
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

  async removeFavouriteWine(uuid, id) {
    return FavouriteWine.destroy({
      where: {
        userUUID: uuid,
        wineTypeId: id,
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

export default new FavouriteWineService('favouriteWine');
