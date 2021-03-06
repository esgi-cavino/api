import { Router } from 'express';

import create from '../middleware/CRUD/create';
import getAll from '../middleware/CRUDWithOptions/getAll';
import findOne from '../middleware/CRUDWithOptions/findOne';
import findOrDeleteOne from '../middleware/CRUD/findOrDeleteOne';
import updateOne from '../middleware/CRUD/updateOne';
import {
  Bottle, WineType, Region, Country, Domain, Vintage,
} from '../../models';

const bottleRouter = Router();
const bottleAuthRouter = Router();
const bottleAdminRouter = Router();

const table = '/bottle';
const includes = [{ model: WineType, attributes: ['name'] },
  { model: Region, attributes: ['name'] },
  { model: Country, attributes: ['name'] },
  { model: Domain, attributes: ['name'] },
  { model: Vintage, attributes: ['year'] }];

bottleAuthRouter.get(table, getAll.bind(null, {
  model: Bottle,
  options: {
    attributes: { exclude: ['wineTypeId', 'regionId', 'countryId', 'domainId', 'vintageId'] },
    include: includes,
  },
}));

bottleAuthRouter.get(`${table}/:id`, findOne.bind(null, {
  model: Bottle,
  options: {
    attributes: { exclude: ['wineTypeId', 'regionId', 'countryId', 'domainId', 'vintageId'] },
    where: { id: 0 },
    include: includes,
  },
}));

bottleAuthRouter.patch(`${table}/:id`, updateOne.bind(null, Bottle));

bottleAuthRouter.post(`${table}`, create.bind(null, Bottle));

bottleAdminRouter.delete(`${table}/:id`,
  findOrDeleteOne.bind(null, {
    model: Bottle,
    isToDelete: true,
  }));

export { bottleRouter, bottleAuthRouter, bottleAdminRouter };
