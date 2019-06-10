import { Router } from 'express';

import create from './middlewares/create';
import getAll from './middlewares/getAll';
import findOne from './middlewares/findOne';
import deleteOne from './middlewares/deleteOne';
import updateOne from './middlewares/updateOne';

const favouriteWineRouter = Router();
const favouriteWineAuthRouter = Router();
const favouriteWineAdminRouter = Router();

const table = '/favouriteWine';

favouriteWineRouter.get(table, getAll);

favouriteWineAuthRouter.get(`${table}/:id`, findOne);

favouriteWineAuthRouter.patch(`${table}/:id`, updateOne);

favouriteWineAuthRouter.post(`${table}`, create);

favouriteWineAuthRouter.delete(`${table}/:id`, deleteOne);

export { favouriteWineRouter, favouriteWineAuthRouter, favouriteWineAdminRouter };
