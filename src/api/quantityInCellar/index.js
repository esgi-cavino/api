import { Router } from 'express';

import create from './middlewares/create';
import getAll from './middlewares/getAll';
import findOne from './middlewares/findOne';
import deleteOne from './middlewares/deleteOne';
import updateOne from './middlewares/updateOne';

const quantityInCellarRouter = Router();
const quantityInCellarAuthRouter = Router();
const quantityInCellarAdminRouter = Router();

const table = '/quantityInCellar';

quantityInCellarAdminRouter.get(table, getAll);

quantityInCellarAdminRouter.get(`${table}/:id`, findOne);

quantityInCellarAdminRouter.patch(`${table}/:id`, updateOne);

quantityInCellarAdminRouter.post(`${table}`, create);

quantityInCellarAdminRouter.delete(`${table}/:id`, deleteOne);

export { quantityInCellarRouter, quantityInCellarAuthRouter, quantityInCellarAdminRouter };
