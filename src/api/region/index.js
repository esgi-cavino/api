import { Router } from 'express';

import create from './middlewares/create';
import getAll from './middlewares/getAll';
import findOne from './middlewares/findOne';
import deleteOne from './middlewares/deleteOne';
import updateOne from './middlewares/updateOne';

const regionRouter = Router();
const regionAuthRouter = Router();
const regionAdminRouter = Router();

const table = '/region';

regionRouter.get(table, getAll);

regionAuthRouter.get(`${table}/:id`, findOne);

regionAuthRouter.patch(`${table}/:id`, updateOne);

regionAuthRouter.post(`${table}`, create);

regionAuthRouter.delete(`${table}/:id`, deleteOne);

export { regionRouter, regionAuthRouter, regionAdminRouter };
