import { Router } from 'express';

import create from './middlewares/create';
import getAll from './middlewares/getAll';
import findOne from './middlewares/findOne';
import deleteOne from './middlewares/deleteOne';
import updateOne from './middlewares/updateOne';

const countryRouter = Router();
const countryAuthRouter = Router();
const countryAdminRouter = Router();

const table = '/country';

countryAuthRouter.get(table, getAll);

countryAuthRouter.get(`${table}/:id`, findOne);

countryAdminRouter.patch(`${table}/:id`, updateOne);

countryAuthRouter.post(`${table}`, create);

countryAdminRouter.delete(`${table}/:id`, deleteOne);

export { countryRouter, countryAuthRouter, countryAdminRouter };
