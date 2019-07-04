import { Router } from 'express';

import create from './middlewares/create';
import getAll from '../middleware/CRUDWithOptions/getAll';
import findAllSellerOrAdmin from './middlewares/findAllSellerOrAdmin';
import findOne from '../middleware/CRUDWithOptions/findOne';
import deleteOne from './middlewares/deleteOne';
import updateOne from './middlewares/updateOne';
import getCellars from '../cellar/middlewares/getByUserUUID';
import getFavourites from './middlewares/getFavourites';
import removeFavourite from '../middleware/DeleteLinkTables/removeFavourite';
import {
  Region, WineType, FavouriteRegion, FavouriteWine, User,
} from '../../models';

const userRouter = Router();
const userAuthRouter = Router();
const userAdminRouter = Router();

userAdminRouter.get('/user', getAll.bind(null, {
  model: User,
  options: { attributes: { exclude: ['id', 'password', 'salt'] } },
}));
userAuthRouter.get('/user/:id', findOne.bind(null, {
  model: User,
  options: {
    attributes: { exclude: ['id', 'password', 'salt'] },
    where: { uuid: '' },
  },
}));
userAuthRouter.get('/sellers', findAllSellerOrAdmin.bind(null, { isSeller: true }));
userAdminRouter.get('/admins', findAllSellerOrAdmin.bind(null, { isAdmin: true }));
userAuthRouter.patch('/user/:uuid', updateOne);
userAdminRouter.post('/user', create);
userAuthRouter.delete('/user/:uuid', deleteOne);

userAuthRouter.get('/user/cellars/:uuid', getCellars);

userAuthRouter.get('/user/favouriteRegions/:uuid', getFavourites.bind(null, { model: Region, param: 'regions' }));
userAuthRouter.delete('/user/removeFavouriteRegion/:uuid/:id', removeFavourite.bind(null, {
  Model: FavouriteRegion, param: { userUUID: '', regionId: 0 },
}));

userAuthRouter.get('/user/favouriteWines/:uuid', getFavourites.bind(null, { model: WineType, param: 'wineTypes' }));
userAuthRouter.delete('/user/removeFavouriteWine/:uuid/:id', removeFavourite.bind(null, {
  Model: FavouriteWine, param: { userUUID: '', wineTypeId: 0 },
}));

export { userRouter, userAuthRouter, userAdminRouter };
