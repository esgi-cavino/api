import { Router } from 'express';

import create from '../middleware/CRUD/create';
import getAll from '../middleware/CRUDWithOptions/getAll';
import findOrDeleteOne from '../middleware/CRUD/findOrDeleteOne';
import updateOne from '../middleware/CRUD/updateOne';
import { Region } from '../../models';

const regionRouter = Router();
const regionAuthRouter = Router();
const regionAdminRouter = Router();

const table = '/region';

regionAuthRouter.get(table, getAll.bind(null, {
  model: Region,
  options: {},
}));

regionAuthRouter.get(`${table}/:id`,
  findOrDeleteOne.bind(null, {
    model: Region,
    isToDelete: false,
  }));

regionAdminRouter.patch(`${table}/:id`, updateOne.bind(null, Region));

regionAuthRouter.post(`${table}`, create.bind(null, Region));

regionAdminRouter.delete(`${table}/:id`,
  findOrDeleteOne.bind(null, {
    model: Region,
    isToDelete: true,
  }));

export { regionRouter, regionAuthRouter, regionAdminRouter };
