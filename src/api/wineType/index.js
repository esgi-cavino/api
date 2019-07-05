import { Router } from 'express';

import create from '../middleware/CRUD/create';
import getAll from '../middleware/CRUDWithOptions/getAll';
import findOne from '../middleware/CRUD/findOne';
import deleteOne from '../middleware/CRUD/deleteOne';
import updateOne from '../middleware/CRUD/updateOne';
import { WineType } from '../../models';

const wineTypeRouter = Router();
const wineTypeAuthRouter = Router();
const wineTypeAdminRouter = Router();

const table = '/wineType';

wineTypeAuthRouter.get(table, getAll.bind(null, {
  model: WineType,
  options: {},
}));

wineTypeAuthRouter.get(`${table}/:id`, findOne.bind(null, WineType));

wineTypeAdminRouter.patch(`${table}/:id`, updateOne.bind(null, WineType));

wineTypeAuthRouter.post(`${table}`, create.bind(null, WineType));

wineTypeAdminRouter.delete(`${table}/:id`, deleteOne.bind(null, WineType));

export { wineTypeRouter, wineTypeAuthRouter, wineTypeAdminRouter };
