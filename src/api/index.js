import { Router } from 'express';
import passport from 'passport';
import setHeaders from './middleware/setHeaders';
import authRouter from './auth';
import { userRouter, userAuthRouter } from './user';
import { cellarRouter, cellarAuthRouter } from './cellar';
import setCORSHeaders from './middleware/setCORSHeaders';

const router = Router();

router.use(setHeaders);
router.use(setCORSHeaders);

router.use(authRouter);

// Not authenticated request
router.use(userRouter);
router.use(cellarRouter);

// Authenticated request
router.use(passport.authorize('auth-rule', { session: false }));
router.use(userAuthRouter);
router.use(cellarAuthRouter);

export default router;
