import { Router } from 'express';

import create from './middlewares/create';
import getAll from './middlewares/getAll';
import findOne from './middlewares/findOne';
import deleteOne from './middlewares/deleteOne';
import updateOne from './middlewares/updateOne';

const domainRouter = Router();
const domainAuthRouter = Router();
const domainAdminRouter = Router();

const table = '/domain';

domainRouter.get(table, getAll);

domainAuthRouter.get(`${table}/:id`, findOne);

domainAuthRouter.patch(`${table}/:id`, updateOne);

domainAuthRouter.post(`${table}`, create);

domainAuthRouter.delete(`${table}/:id`, deleteOne);

export { domainRouter, domainAuthRouter, domainAdminRouter };
