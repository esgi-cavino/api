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

countryRouter.get(table, getAll);

countryAuthRouter.get(`${table}/:id`, findOne);

countryAuthRouter.patch(`${table}/:id`, updateOne);

countryAuthRouter.post(`${table}`, create);

countryAuthRouter.delete(`${table}/:id`, deleteOne);

export { countryRouter, countryAuthRouter, countryAdminRouter };
