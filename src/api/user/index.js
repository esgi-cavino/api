import { Router } from 'express';

import create from './middlewares/create';
import getAll from './middlewares/getAll';
import findOne from './middlewares/findOne';
import deleteOne from './middlewares/deleteOne';
import updateOne from './middlewares/updateOne';

const userRouter = Router();
const userAuthRouter = Router();

userRouter.get('/user', getAll);

userAuthRouter.get('/user/:uuid', findOne);

userAuthRouter.patch('/user/:uuid', updateOne);

userAuthRouter.post('/user', create);

userAuthRouter.delete('/user/:uuid', deleteOne);

export { userRouter, userAuthRouter };
