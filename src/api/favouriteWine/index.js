import { Router } from 'express';

import create from '../middleware/CRUD/create';
import getAll from '../middleware/CRUD/getAll';
import findOne from '../middleware/CRUD/findOne';
import deleteOne from '../middleware/CRUD/deleteOne';
import updateOne from '../middleware/CRUD/updateOne';
import deleteByIdAndUserUUID from './middlewares/deleteByIdAndUserUUID';
import { FavouriteWine } from '../../models';

const favouriteWineRouter = Router();
const favouriteWineAuthRouter = Router();
const favouriteWineAdminRouter = Router();

const table = '/favouriteWine';

favouriteWineAuthRouter.get(table, getAll.bind(null, FavouriteWine));

favouriteWineAuthRouter.get(`${table}/:id`, findOne.bind(null, FavouriteWine));

favouriteWineAuthRouter.patch(`${table}/:id`, updateOne.bind(null, FavouriteWine));

favouriteWineAuthRouter.post(`${table}`, create.bind(null, FavouriteWine));

favouriteWineAuthRouter.delete(`${table}/:id/:userUUID`, deleteByIdAndUserUUID);

favouriteWineAdminRouter.delete(`${table}/:id`, deleteOne.bind(null, FavouriteWine));

export { favouriteWineRouter, favouriteWineAuthRouter, favouriteWineAdminRouter };
