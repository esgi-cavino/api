import { Cellar } from '../../models';

class CellarService {
  constructor(collectionName) {
    this.COLLECTION_NAME = collectionName;
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
}

export default new CellarService('cellar');
