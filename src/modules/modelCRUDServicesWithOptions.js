class Service {
  constructor(model, options) {
    this.Model = model;
    this.attributes = options.attributes;
    this.include = options.include;
    this.where = options.where;
  }

  async createUser(data) {
    const user = await this.Model.create(data).then((res, err) => {
      if (err) throw err;
      return res;
    });

    delete user.dataValues.password;
    delete user.dataValues.id;
    delete user.dataValues.salt;
    return user;
  }

  async getAll(offset = 20, limit = 0) {
    const obj = {
      offset,
      limit,
    };
    obj.attributes = this.attributes;
    obj.include = this.include;
    return this.Model.findAll(obj).then((res, err) => {
      if (err) throw err;
      return res;
    });
  }

  async findOne(id) {
    const obj = {};
    obj.attributes = this.attributes;
    obj.include = this.include;
    const param = this.where;
    param[Object.keys(param)[0]] = id;
    obj.where = param;
    return this.Model.findOne(obj).then((res, err) => {
      if (err) throw err;
      return res;
    });
  }

  /* async updateOne(id, data) {
    return this.Model.update(data, {
      where: {
        id,
      },
    }).then((res, err) => {
      if (err) throw err;
      return res;
    });
  }

  async deleteOne(id) {
    return this.Model.destroy({
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
  } */
}

export default Service;
