import { Router } from 'express';

import create from '../middleware/CRUD/create';
import getAll from '../middleware/CRUD/getAll';
import findOne from '../middleware/CRUD/findOne';
import deleteOne from '../middleware/CRUD/deleteOne';
import updateOne from '../middleware/CRUD/updateOne';
import { Country } from '../../models';

const countryRouter = Router();
const countryAuthRouter = Router();
const countryAdminRouter = Router();

const table = '/country';

countryAuthRouter.get(table, getAll.bind(null, Country));

countryAuthRouter.get(`${table}/:id`, findOne.bind(null, Country));

countryAdminRouter.patch(`${table}/:id`, updateOne.bind(null, Country));

countryAuthRouter.post(`${table}`, create.bind(null, Country));

countryAdminRouter.delete(`${table}/:id`, deleteOne.bind(null, Country));

export { countryRouter, countryAuthRouter, countryAdminRouter };
