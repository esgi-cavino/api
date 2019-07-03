import { Router } from 'express';

import create from '../middleware/CRUD/create';
import getAll from '../middleware/CRUD/getAll';
import findOne from '../middleware/CRUD/findOne';
import deleteOne from '../middleware/CRUD/deleteOne';
import updateOne from '../middleware/CRUD/updateOne';
import deleteByIdAndUserUUID from './middlewares/deleteByIdAndUserUUID';
import { FavouriteRegion } from '../../models';

const favouriteRegionRouter = Router();
const favouriteRegionAuthRouter = Router();
const favouriteRegionAdminRouter = Router();

const table = '/favouriteRegion';

favouriteRegionAuthRouter.get(table, getAll.bind(null, FavouriteRegion));

favouriteRegionAuthRouter.get(`${table}/:id`, findOne.bind(null, FavouriteRegion));

favouriteRegionAuthRouter.patch(`${table}/:id`, updateOne.bind(null, FavouriteRegion));

favouriteRegionAuthRouter.post(`${table}`, create.bind(null, FavouriteRegion));

favouriteRegionAuthRouter.delete(`${table}/:id/:userUUID`, deleteByIdAndUserUUID);

favouriteRegionAdminRouter.delete(`${table}/:id`, deleteOne.bind(null, FavouriteRegion));

export { favouriteRegionRouter, favouriteRegionAuthRouter, favouriteRegionAdminRouter };
