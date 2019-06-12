import { Router } from 'express';

import create from './middlewares/create';
import getAll from './middlewares/getAll';
import findOne from './middlewares/findOne';
import deleteOne from './middlewares/deleteOne';
import updateOne from './middlewares/updateOne';

const wineTypeRouter = Router();
const wineTypeAuthRouter = Router();
const wineTypeAdminRouter = Router();

const table = '/wineType';

wineTypeRouter.get(table, getAll);

wineTypeAuthRouter.get(`${table}/:id`, findOne);

wineTypeAuthRouter.patch(`${table}/:id`, updateOne);

wineTypeAuthRouter.post(`${table}`, create);

wineTypeAuthRouter.delete(`${table}/:id`, deleteOne);

export { wineTypeRouter, wineTypeAuthRouter, wineTypeAdminRouter };