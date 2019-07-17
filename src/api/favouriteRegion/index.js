import { Router } from 'express';

import create from '../middleware/CRUD/create';
import getAll from '../middleware/CRUDWithOptions/getAll';
import findOrDeleteOne from '../middleware/CRUD/findOrDeleteOne';
import updateOne from '../middleware/CRUD/updateOne';
import deleteByIdAndUserUUID from '../middleware/DeleteLinkTables/deleteByIdAndUserUUID';
import { FavouriteRegion } from '../../models';

const favouriteRegionRouter = Router();
const favouriteRegionAuthRouter = Router();
const favouriteRegionAdminRouter = Router();

const table = '/favouriteRegion';

favouriteRegionAuthRouter.get(table, getAll.bind(null, {
  model: FavouriteRegion,
  options: {},
}));

favouriteRegionAuthRouter.get(`${table}/:id`,
  findOrDeleteOne.bind(null, {
    model: FavouriteRegion,
    isToDelete: false,
  }));

favouriteRegionAuthRouter.patch(`${table}/:id`, updateOne.bind(null, FavouriteRegion));

favouriteRegionAuthRouter.post(`${table}`, create.bind(null, FavouriteRegion));

favouriteRegionAuthRouter.delete(`${table}/:id/:userUUID`, deleteByIdAndUserUUID.bind(null, FavouriteRegion));

favouriteRegionAdminRouter.delete(`${table}/:id`,
  findOrDeleteOne.bind(null, {
    model: FavouriteRegion,
    isToDelete: true,
  }));

export { favouriteRegionRouter, favouriteRegionAuthRouter, favouriteRegionAdminRouter };
