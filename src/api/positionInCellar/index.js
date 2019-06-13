import { Router } from 'express';

import create from './middlewares/create';
import getAll from './middlewares/getAll';
import findOne from './middlewares/findOne';
import deleteOne from './middlewares/deleteOne';
import updateOne from './middlewares/updateOne';

const positionInCellarRouter = Router();
const positionInCellarAuthRouter = Router();
const positionInCellarAdminRouter = Router();

const table = '/positionInCellar';

positionInCellarRouter.get(table, getAll);

positionInCellarAuthRouter.get(`${table}/:id`, findOne);

positionInCellarAuthRouter.patch(`${table}/:id`, updateOne);

positionInCellarAuthRouter.post(`${table}`, create);

positionInCellarAuthRouter.delete(`${table}/:id`, deleteOne);

export { positionInCellarRouter, positionInCellarAuthRouter, positionInCellarAdminRouter };
