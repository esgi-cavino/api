import { Router } from 'express';

import create from '../middleware/CRUD/create';
import getAll from '../middleware/CRUD/getAll';
import findOne from '../middleware/CRUD/findOne';
import deleteOne from '../middleware/CRUD/deleteOne';
import updateOne from '../middleware/CRUD/updateOne';
import getAllByCellarId from './middlewares/getAllByCellarId';
import getAllByCellarAndBottleId from './middlewares/getAllByCellarAndBottleId';
import findByCellarIdAndPosition from './middlewares/findByCellarIdAndPosition';
import deleteOneByCellarIdAndPosition from './middlewares/deleteOneByCellarIdAndPosition';
import { PositionInCellar } from '../../models';

const positionInCellarRouter = Router();
const positionInCellarAuthRouter = Router();
const positionInCellarAdminRouter = Router();

const table = '/positionInCellar';

positionInCellarAdminRouter.get(table, getAll.bind(null, PositionInCellar));

positionInCellarAuthRouter.get(`${table}/byCellarId/:cellarId`, getAllByCellarId);

positionInCellarAuthRouter.get(`${table}/byCellarAndBottleId/:cellarId/:bottleId`, getAllByCellarAndBottleId);

positionInCellarAuthRouter.get(`${table}/byCellarIdAndPosition/:cellarId/:positionX/:positionY`, findByCellarIdAndPosition);

positionInCellarAuthRouter.get(`${table}/:id`, findOne.bind(null, PositionInCellar));

positionInCellarAuthRouter.patch(`${table}/:id`, updateOne.bind(null, PositionInCellar));

positionInCellarAuthRouter.post(`${table}`, create.bind(null, PositionInCellar));

positionInCellarAdminRouter.delete(`${table}/:id`, deleteOne.bind(null, PositionInCellar));

positionInCellarAuthRouter.delete(`${table}/byCellarIdAndPosition/:cellarId/:positionX/:positionY`, deleteOneByCellarIdAndPosition);

export { positionInCellarRouter, positionInCellarAuthRouter, positionInCellarAdminRouter };
