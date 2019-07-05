import { Router } from 'express';

import create from '../middleware/CRUD/create';
import getAll from '../middleware/CRUDWithOptions/getAll';
import findOrDeleteOne from '../middleware/CRUD/findOrDeleteOne';
import updateOne from '../middleware/CRUD/updateOne';
import { Vintage } from '../../models';

const vintageRouter = Router();
const vintageAuthRouter = Router();
const vintageAdminRouter = Router();

const table = '/vintage';

vintageAuthRouter.get(table, getAll.bind(null, {
  model: Vintage,
  options: {},
}));

vintageAuthRouter.get(`${table}/:id`,
  findOrDeleteOne.bind(null, {
    model: Vintage,
    isToDelete: false,
  }));

vintageAdminRouter.patch(`${table}/:id`, updateOne.bind(null, Vintage));

vintageAuthRouter.post(`${table}`, create.bind(null, Vintage));

vintageAdminRouter.delete(`${table}/:id`,
  findOrDeleteOne.bind(null, {
    model: Vintage,
    isToDelete: true,
  }));

export { vintageRouter, vintageAuthRouter, vintageAdminRouter };
