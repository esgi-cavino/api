import { Router } from 'express';

import create from '../middleware/CRUD/create';
import getAll from '../middleware/CRUDWithOptions/getAll';
import findOrDeleteOne from '../middleware/CRUD/findOrDeleteOne';
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

wineTypeAuthRouter.get(`${table}/:id`,
  findOrDeleteOne.bind(null, {
    model: WineType,
    isToDelete: false,
  }));

wineTypeAdminRouter.patch(`${table}/:id`, updateOne.bind(null, WineType));

wineTypeAuthRouter.post(`${table}`, create.bind(null, WineType));

wineTypeAdminRouter.delete(`${table}/:id`,
  findOrDeleteOne.bind(null, {
    model: WineType,
    isToDelete: true,
  }));

export { wineTypeRouter, wineTypeAuthRouter, wineTypeAdminRouter };
