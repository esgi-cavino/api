import { Router } from 'express';

import create from '../middleware/CRUD/create';
import getAll from '../middleware/CRUDWithOptions/getAll';
import findOrDeleteOne from '../middleware/CRUD/findOrDeleteOne';
import updateOne from '../middleware/CRUD/updateOne';
import { Domain } from '../../models';

const domainRouter = Router();
const domainAuthRouter = Router();
const domainAdminRouter = Router();

const table = '/domain';

domainAuthRouter.get(table, getAll.bind(null, {
  model: Domain,
  options: {},
}));

domainAuthRouter.get(`${table}/:id`,
  findOrDeleteOne.bind(null, {
    model: Domain,
    isToDelete: false,
  }));

domainAdminRouter.patch(`${table}/:id`, updateOne.bind(null, Domain));

domainAuthRouter.post(`${table}`, create.bind(null, Domain));

domainAdminRouter.delete(`${table}/:id`,
  findOrDeleteOne.bind(null, {
    model: Domain,
    isToDelete: true,
  }));

export { domainRouter, domainAuthRouter, domainAdminRouter };
