import { Router } from 'express';

import create from '../middleware/CRUD/create';
import getAll from '../middleware/CRUDWithOptions/getAll';
import findOrDeleteOne from '../middleware/CRUD/findOrDeleteOne';
import updateOne from '../middleware/CRUD/updateOne';
import getAllByCellarId from './middlewares/getAllByCellarId';
import getAllByCellarAndBottleId from './middlewares/getAllByCellarAndBottleId';
import findOrDeleteByCellarIdAndPosition from './middlewares/findOrDeleteByCellarIdAndPosition';
import { PositionInCellar } from '../../models';

const positionInCellarRouter = Router();
const positionInCellarAuthRouter = Router();
const positionInCellarAdminRouter = Router();

const table = '/positionInCellar';

positionInCellarAdminRouter.get(table, getAll.bind(null, {
  model: PositionInCellar,
  options: {},
}));

positionInCellarAuthRouter.get(`${table}/byCellarId/:cellarId`, getAllByCellarId);

positionInCellarAuthRouter.get(`${table}/byCellarAndBottleId/:cellarId/:bottleId`, getAllByCellarAndBottleId);

positionInCellarAuthRouter.get(`${table}/byCellarIdAndPosition/:cellarId/:positionX/:positionY`,
  findOrDeleteByCellarIdAndPosition.bind(null, false));

positionInCellarAuthRouter.get(`${table}/:id`,
  findOrDeleteOne.bind(null, {
    model: PositionInCellar,
    isToDelete: false,
  }));

positionInCellarAuthRouter.patch(`${table}/:id`, updateOne.bind(null, PositionInCellar));

positionInCellarAuthRouter.post(`${table}`, create.bind(null, PositionInCellar));

positionInCellarAdminRouter.delete(`${table}/:id`,
  findOrDeleteOne.bind(null, {
    model: PositionInCellar,
    isToDelete: true,
  }));

positionInCellarAuthRouter.delete(`${table}/byCellarIdAndPosition/:cellarId/:positionX/:positionY`,
  findOrDeleteByCellarIdAndPosition.bind(null, true));

export { positionInCellarRouter, positionInCellarAuthRouter, positionInCellarAdminRouter };
