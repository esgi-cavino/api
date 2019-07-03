import { Router } from 'express';

import create from '../middleware/CRUD/create';
import getAll from '../middleware/CRUD/getAll';
import findOne from '../middleware/CRUD/findOne';
import deleteOne from '../middleware/CRUD/deleteOne';
import updateOne from '../middleware/CRUD/updateOne';
import { Region } from '../../models';

const regionRouter = Router();
const regionAuthRouter = Router();
const regionAdminRouter = Router();

const table = '/region';

regionAuthRouter.get(table, getAll.bind(null, Region));

regionAuthRouter.get(`${table}/:id`, findOne.bind(null, Region));

regionAdminRouter.patch(`${table}/:id`, updateOne.bind(null, Region));

regionAuthRouter.post(`${table}`, create.bind(null, Region));

regionAdminRouter.delete(`${table}/:id`, deleteOne.bind(null, Region));

export { regionRouter, regionAuthRouter, regionAdminRouter };
