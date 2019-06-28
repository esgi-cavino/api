import { Router } from 'express';

import create from './middlewares/create';
import getAll from './middlewares/getAll';
import findOne from './middlewares/findOne';
import deleteOne from './middlewares/deleteOne';
import updateOne from './middlewares/updateOne';
import getAllByCellarId from './middlewares/getAllByCellarId';
import getAllByCellarAndBottleId from './middlewares/getAllByCellarAndBottleId';
import findByCellarIdAndPosition from './middlewares/findByCellarIdAndPosition';
import deleteOneByCellarIdAndPosition from './middlewares/deleteOneByCellarIdAndPosition';

const positionInCellarRouter = Router();
const positionInCellarAuthRouter = Router();
const positionInCellarAdminRouter = Router();

const table = '/positionInCellar';

positionInCellarAdminRouter.get(table, getAll);

positionInCellarAuthRouter.get(`${table}/byCellarId/:cellarId`, getAllByCellarId);

positionInCellarAuthRouter.get(`${table}/byCellarAndBottleId/:cellarId/:bottleId`, getAllByCellarAndBottleId);

positionInCellarAuthRouter.get(`${table}/byCellarIdAndPosition/:cellarId/:positionX/:positionY`, findByCellarIdAndPosition);

positionInCellarAuthRouter.get(`${table}/:id`, findOne);

positionInCellarAuthRouter.patch(`${table}/:id`, updateOne);

positionInCellarAuthRouter.post(`${table}`, create);

positionInCellarAdminRouter.delete(`${table}/:id`, deleteOne);

positionInCellarAuthRouter.delete(`${table}/byCellarIdAndPosition/:cellarId/:positionX/:positionY`, deleteOneByCellarIdAndPosition);

export { positionInCellarRouter, positionInCellarAuthRouter, positionInCellarAdminRouter };
