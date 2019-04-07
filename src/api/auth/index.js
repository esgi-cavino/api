import { Router } from 'express';

import signup from './middlewares/signup';
import signin from './middlewares/signin';

const router = Router();

router.post('/signup', signup);

router.post('/signin', signin);

export default router;
