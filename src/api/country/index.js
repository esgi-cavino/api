import { Router } from 'express';

import create from '../middleware/CRUD/create';
import getAll from '../middleware/CRUDWithOptions/getAll';
import findOrDeleteOne from '../middleware/CRUD/findOrDeleteOne';
import updateOne from '../middleware/CRUD/updateOne';
import { Country } from '../../models';

const countryRouter = Router();
const countryAuthRouter = Router();
const countryAdminRouter = Router();

const table = '/country';

countryAuthRouter.get(table, getAll.bind(null, {
  model: Country,
  options: {},
}));

countryAuthRouter.get(`${table}/:id`,
  findOrDeleteOne.bind(null, {
    model: Country,
    isToDelete: false,
  }));

countryAdminRouter.patch(`${table}/:id`, updateOne.bind(null, Country));

countryAuthRouter.post(`${table}`, create.bind(null, Country));

countryAdminRouter.delete(`${table}/:id`,
  findOrDeleteOne.bind(null, {
    model: Country,
    isToDelete: true,
  }));

export { countryRouter, countryAuthRouter, countryAdminRouter };
