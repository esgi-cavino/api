import { Router } from 'express';

import signup from './middlewares/signup';
import signin from './middlewares/signin';
import { User } from '../../models';

const router = Router();

router.post('/signup', signup.bind(null, {
  model: User,
  options: {},
}));

router.post('/signin', signin);

export default router;
