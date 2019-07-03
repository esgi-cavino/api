import { Router } from 'express';

import create from '../middleware/CRUD/create';
import getAll from '../middleware/CRUD/getAll';
import findOne from '../middleware/CRUD/findOne';
import deleteOne from '../middleware/CRUD/deleteOne';
import updateOne from '../middleware/CRUD/updateOne';
import { Vintage } from '../../models';

const vintageRouter = Router();
const vintageAuthRouter = Router();
const vintageAdminRouter = Router();

const table = '/vintage';

vintageAuthRouter.get(table, getAll.bind(null, Vintage));

vintageAuthRouter.get(`${table}/:id`, findOne.bind(null, Vintage));

vintageAdminRouter.patch(`${table}/:id`, updateOne.bind(null, Vintage));

vintageAuthRouter.post(`${table}`, create.bind(null, Vintage));

vintageAdminRouter.delete(`${table}/:id`, deleteOne.bind(null, Vintage));

export { vintageRouter, vintageAuthRouter, vintageAdminRouter };
