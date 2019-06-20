import { Router } from 'express';

import create from './middlewares/create';
import getAll from './middlewares/getAll';
import findOne from './middlewares/findOne';
import deleteOne from './middlewares/deleteOne';
import updateOne from './middlewares/updateOne';

const cellarRouter = Router();
const cellarAuthRouter = Router();
const cellarAdminRouter = Router();

const table = '/cellar';

cellarAdminRouter.get(table, getAll);

cellarAuthRouter.get(`${table}/:id`, findOne);

cellarAuthRouter.patch(`${table}/:id`, updateOne);

cellarAuthRouter.post(`${table}`, create);

cellarAdminRouter.delete(`${table}/:id`, deleteOne);

export { cellarRouter, cellarAuthRouter, cellarAdminRouter };
