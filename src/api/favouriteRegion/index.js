import { Router } from 'express';

import create from './middlewares/create';
import getAll from './middlewares/getAll';
import findOne from './middlewares/findOne';
import deleteOne from './middlewares/deleteOne';
import updateOne from './middlewares/updateOne';

const favouriteRegionRouter = Router();
const favouriteRegionAuthRouter = Router();
const favouriteRegionAdminRouter = Router();

const table = '/favouriteRegion';

favouriteRegionRouter.get(table, getAll);

favouriteRegionAuthRouter.get(`${table}/:id`, findOne);

favouriteRegionAuthRouter.patch(`${table}/:id`, updateOne);

favouriteRegionAuthRouter.post(`${table}`, create);

favouriteRegionAuthRouter.delete(`${table}/:id`, deleteOne);

export { favouriteRegionRouter, favouriteRegionAuthRouter, favouriteRegionAdminRouter };
