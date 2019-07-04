import { Router } from 'express';

import create from '../middleware/CRUD/create';
import getAll from '../middleware/CRUDWithOptions/getAll';
import findOne from '../middleware/CRUDWithOptions/findOne';
import deleteOne from '../middleware/CRUD/deleteOne';
import updateOne from '../middleware/CRUD/updateOne';
import {
  Bottle, WineType, Region, Country, Domain, Vintage,
} from '../../models';

const bottleRouter = Router();
const bottleAuthRouter = Router();
const bottleAdminRouter = Router();

const table = '/bottle';

bottleAuthRouter.get(table, getAll.bind(null, {
  model: Bottle,
  options: {
    attributes: { exclude: ['wineTypeId', 'regionId', 'countryId', 'domainId', 'vintageId'] },
    include: [{ model: WineType, attributes: ['name'] },
      { model: Region, attributes: ['name'] },
      { model: Country, attributes: ['name'] },
      { model: Domain, attributes: ['name'] },
      { model: Vintage, attributes: ['year'] }],
  },
}));

bottleAuthRouter.get(`${table}/:id`, findOne.bind(null, {
  model: Bottle,
  options: {
    attributes: { exclude: ['wineTypeId', 'regionId', 'countryId', 'domainId', 'vintageId'] },
    where: { id: 0 },
    include: [{ model: WineType, attributes: ['name'] },
      { model: Region, attributes: ['name'] },
      { model: Country, attributes: ['name'] },
      { model: Domain, attributes: ['name'] },
      { model: Vintage, attributes: ['year'] }],
  },
}));

bottleAuthRouter.patch(`${table}/:id`, updateOne.bind(null, Bottle));

bottleAuthRouter.post(`${table}`, create.bind(null, Bottle));

bottleAdminRouter.delete(`${table}/:id`, deleteOne.bind(null, Bottle));

export { bottleRouter, bottleAuthRouter, bottleAdminRouter };
