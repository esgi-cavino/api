import { Router } from 'express';

import create from '../middleware/CRUD/create';
import getAll from '../middleware/CRUD/getAll';
import findOne from '../middleware/CRUD/findOne';
import deleteOne from '../middleware/CRUD/deleteOne';
import updateOne from '../middleware/CRUD/updateOne';
import deleteByIdAndUserUUID from './middlewares/deleteByIdAndUserUUID';
import { Cellar } from '../../models';

const cellarRouter = Router();
const cellarAuthRouter = Router();
const cellarAdminRouter = Router();

const table = '/cellar';

cellarAdminRouter.get(table, getAll.bind(null, Cellar));

cellarAuthRouter.get(`${table}/:id`, findOne.bind(null, Cellar));

cellarAuthRouter.patch(`${table}/:id`, updateOne.bind(null, Cellar));

cellarAuthRouter.post(`${table}`, create.bind(null, Cellar));

cellarAuthRouter.delete(`${table}/:id/:userUUID`, deleteByIdAndUserUUID);

cellarAdminRouter.delete(`${table}/:id`, deleteOne.bind(null, Cellar));

export { cellarRouter, cellarAuthRouter, cellarAdminRouter };
