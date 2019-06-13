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

vintageRouter.get(table, getAll);

vintageAuthRouter.get(`${table}/:id`, findOne);

vintageAuthRouter.patch(`${table}/:id`, updateOne);

vintageAuthRouter.post(`${table}`, create);

vintageAuthRouter.delete(`${table}/:id`, deleteOne);

export { vintageRouter, vintageAuthRouter, vintageAdminRouter };
