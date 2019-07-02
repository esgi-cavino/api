class LinkTableServices {
  constructor(model) {
    this.Model = model;
  }

  async deleteOneByIdAndUserUUID(condition) {
    return this.Model.destroy({
      where: condition,
    }).then((res, err) => {
      if (err) throw err;
      if (res > 0) {
        return 200;
      }
      return (404);
    });
  }

  async removeFavourite(condition) {
    return this.Model.destroy({
      where: condition,
    }).then((res, err) => {
      if (err) throw err;
      if (res > 0) {
        return 200;
      }
      return (404);
    });
  }
}

export default LinkTableServices;
