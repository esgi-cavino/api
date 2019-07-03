import { Router } from 'express';

import create from '../middleware/CRUD/create';
import getAll from './middlewares/getAll';
import findOne from './middlewares/findOne';
import deleteOne from '../middleware/CRUD/deleteOne';
import updateOne from '../middleware/CRUD/updateOne';
import { Bottle } from '../../models';

const bottleRouter = Router();
const bottleAuthRouter = Router();
const bottleAdminRouter = Router();

const table = '/bottle';

bottleAuthRouter.get(table, getAll);

bottleAuthRouter.get(`${table}/:id`, findOne);

bottleAuthRouter.patch(`${table}/:id`, updateOne.bind(null, Bottle));

bottleAuthRouter.post(`${table}`, create.bind(null, Bottle));

bottleAdminRouter.delete(`${table}/:id`, deleteOne.bind(null, Bottle));

export { bottleRouter, bottleAuthRouter, bottleAdminRouter };
