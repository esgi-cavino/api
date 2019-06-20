import { Router } from 'express';

import create from './middlewares/create';
import getAll from './middlewares/getAll';
import findOne from './middlewares/findOne';
import deleteOne from './middlewares/deleteOne';
import updateOne from './middlewares/updateOne';

const bottleRouter = Router();
const bottleAuthRouter = Router();
const bottleAdminRouter = Router();

const table = '/bottle';

bottleAuthRouter.get(table, getAll);

bottleAuthRouter.get(`${table}/:id`, findOne);

bottleAuthRouter.patch(`${table}/:id`, updateOne);

bottleAuthRouter.post(`${table}`, create);

bottleAdminRouter.delete(`${table}/:id`, deleteOne);

export { bottleRouter, bottleAuthRouter, bottleAdminRouter };
