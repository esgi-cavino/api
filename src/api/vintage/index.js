import { Router } from 'express';

import create from './middlewares/create';
import getAll from './middlewares/getAll';
import findOne from './middlewares/findOne';
import deleteOne from './middlewares/deleteOne';
import updateOne from './middlewares/updateOne';

const vintageRouter = Router();
const vintageAuthRouter = Router();
const vintageAdminRouter = Router();

const table = '/vintage';

vintageAuthRouter.get(table, getAll);

vintageAuthRouter.get(`${table}/:id`, findOne);

vintageAdminRouter.patch(`${table}/:id`, updateOne);

vintageAuthRouter.post(`${table}`, create);

vintageAdminRouter.delete(`${table}/:id`, deleteOne);

export { vintageRouter, vintageAuthRouter, vintageAdminRouter };
