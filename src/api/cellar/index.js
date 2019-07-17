import { Router } from 'express';

import create from '../middleware/CRUD/create';
import getAll from '../middleware/CRUDWithOptions/getAll';
import findOrDeleteOne from '../middleware/CRUD/findOrDeleteOne';
import updateOne from '../middleware/CRUD/updateOne';
import deleteByIdAndUserUUID from './middlewares/deleteByIdAndUserUUID';
import { Cellar } from '../../models';

const cellarRouter = Router();
const cellarAuthRouter = Router();
const cellarAdminRouter = Router();

const table = '/cellar';

cellarAdminRouter.get(table, getAll.bind(null, {
  model: Cellar,
  options: {},
}));

cellarAuthRouter.get(`${table}/:id`,
  findOrDeleteOne.bind(null, {
    model: Cellar,
    isToDelete: false,
  }));

cellarAuthRouter.patch(`${table}/:id`, updateOne.bind(null, Cellar));

cellarAuthRouter.post(`${table}`, create.bind(null, Cellar));

cellarAuthRouter.delete(`${table}/:id/:userUUID`, deleteByIdAndUserUUID);

cellarAdminRouter.delete(`${table}/:id`,
  findOrDeleteOne.bind(null, {
    model: Cellar,
    isToDelete: true,
  }));

export { cellarRouter, cellarAuthRouter, cellarAdminRouter };
