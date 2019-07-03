import { Router } from 'express';

import create from './middlewares/create';
import getAll from './middlewares/getAll';
import findAllSeller from './middlewares/findAllSeller';
import findAllAdmin from './middlewares/findAllAdmin';
import findOne from './middlewares/findOne';
import deleteOne from './middlewares/deleteOne';
import updateOne from './middlewares/updateOne';
import getCellars from '../cellar/middlewares/getByUserUUID';
import getFavourites from './middlewares/getFavourites';
import removeFavouriteRegion from '../favouriteRegion/middlewares/removeFavouriteRegion';
import removeFavouriteWine from '../favouriteWine/middlewares/removeFavouriteWine';
import { Region, WineType } from '../../models';

const userRouter = Router();
const userAuthRouter = Router();
const userAdminRouter = Router();

userAdminRouter.get('/user', getAll);
userAuthRouter.get('/user/:uuid', findOne);
userAuthRouter.get('/sellers', findAllSeller);
userAdminRouter.get('/admins', findAllAdmin);
userAuthRouter.patch('/user/:uuid', updateOne);
userAdminRouter.post('/user', create);
userAuthRouter.delete('/user/:uuid', deleteOne);

userAuthRouter.get('/user/cellars/:uuid', getCellars);

userAuthRouter.get('/user/favouriteRegions/:uuid', getFavourites.bind(null, Region, 'regions'));
userAuthRouter.delete('/user/removeFavouriteRegion/:uuid/:id', removeFavouriteRegion);

userAuthRouter.get('/user/favouriteWines/:uuid', getFavourites.bind(null, WineType, 'wineTypes'));
userAuthRouter.delete('/user/removeFavouriteWine/:uuid/:id', removeFavouriteWine);

export { userRouter, userAuthRouter, userAdminRouter };
