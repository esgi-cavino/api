import { Router } from 'express';

import create from '../middleware/CRUD/create';
import getAll from '../middleware/CRUD/getAll';
import findOne from '../middleware/CRUD/findOne';
import deleteOne from '../middleware/CRUD/deleteOne';
import updateOne from '../middleware/CRUD/updateOne';
import { Domain } from '../../models';

const domainRouter = Router();
const domainAuthRouter = Router();
const domainAdminRouter = Router();

const table = '/domain';

domainAuthRouter.get(table, getAll.bind(null, Domain));

domainAuthRouter.get(`${table}/:id`, findOne.bind(null, Domain));

domainAdminRouter.patch(`${table}/:id`, updateOne.bind(null, Domain));

domainAuthRouter.post(`${table}`, create.bind(null, Domain));

domainAdminRouter.delete(`${table}/:id`, deleteOne.bind(null, Domain));

export { domainRouter, domainAuthRouter, domainAdminRouter };
