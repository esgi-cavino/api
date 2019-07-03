import { PositionInCellar } from '../../models';

class PositionInCellarService {
  constructor(collectionName) {
    this.COLLECTION_NAME = collectionName;
  }

  async getAllByCellarId(cellarId, offset = 0, limit = 20) {
    return PositionInCellar.findAll({
      where: { cellarId },
      offset,
      limit,
    }).then((res, err) => {
      if (err) throw err;
      return res;
    });
  }

  async getAllByCellarAndBottleId(cellarId, bottleId, offset = 0, limit = 20) {
    return PositionInCellar.findAll({
      where: { cellarId, bottleId },
      offset,
      limit,
    }).then((res, err) => {
      if (err) throw err;
      return res;
    });
  }

  async findByCellarIdAndPosition(cellarId, positionX, positionY) {
    return PositionInCellar.findOne({
      where: { cellarId, positionX, positionY },
    }).then((res, err) => {
      if (err) throw err;
      return res;
    });
  }

  async deleteOneByCellarIdAndPosition(cellarId, positionX, positionY) {
    return PositionInCellar.destroy({
      where: {
        cellarId,
        positionX,
        positionY,
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

export default new PositionInCellarService('positionInCellar');
