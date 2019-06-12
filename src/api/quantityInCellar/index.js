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

quantityInCellarRouter.get(table, getAll);

quantityInCellarAuthRouter.get(`${table}/:id`, findOne);

quantityInCellarAuthRouter.patch(`${table}/:id`, updateOne);

quantityInCellarAuthRouter.post(`${table}`, create);

quantityInCellarAuthRouter.delete(`${table}/:id`, deleteOne);

export { quantityInCellarRouter, quantityInCellarAuthRouter, quantityInCellarAdminRouter };
