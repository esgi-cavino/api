import { Router } from 'express';

import create from './middlewares/create';
import getAll from './middlewares/getAll';
import findOne from './middlewares/findOne';
import deleteOne from './middlewares/deleteOne';
import updateOne from './middlewares/updateOne';
import getCellars from '../cellar/middlewares/getByUserUUID';
import createCellar from '../cellar/middlewares/create';
import deleteCellar from '../cellar/middlewares/deleteOne';
import getFavouriteRegions from './middlewares/getFavouriteRegions';
import createFavouriteRegion from '../favouriteRegion/middlewares/create';
import removeFavouriteRegion from '../favouriteRegion/middlewares/removeFavouriteRegion';
import getFavouriteWines from './middlewares/getFavouriteWines';
import createFavouriteWine from '../favouriteWine/middlewares/create';
import removeFavouriteWine from '../favouriteWine/middlewares/removeFavouriteWine';

const userRouter = Router();
const userAuthRouter = Router();
const userAdminRouter = Router();

userRouter.get('/user', getAll);
userAuthRouter.get('/user/:uuid', findOne);
userAuthRouter.patch('/user/:uuid', updateOne);
userAuthRouter.post('/user', create);
userAuthRouter.delete('/user/:uuid', deleteOne);

userAuthRouter.get('/user/cellars/:uuid', getCellars);
userAuthRouter.post('/user/newCellar', createCellar);
userAuthRouter.delete('/user/removeCellar/:id', deleteCellar);

userAuthRouter.get('/user/favouriteRegions/:uuid', getFavouriteRegions);
userAuthRouter.post('/user/newFavouriteRegion', createFavouriteRegion);
userAuthRouter.delete('/user/removeFavouriteRegion/:uuid/:id', removeFavouriteRegion);

userAuthRouter.get('/user/favouriteWines/:uuid', getFavouriteWines);
userAuthRouter.post('/user/newFavouriteWine', createFavouriteWine);
userAuthRouter.delete('/user/removeFavouriteWine/:uuid/:id', removeFavouriteWine);

export { userRouter, userAuthRouter, userAdminRouter };
