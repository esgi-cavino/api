import { Router } from 'express';
import passport from 'passport';
import setHeaders from './middleware/setHeaders';
import authRouter from './auth';
import { userRouter, userAuthRouter } from './user';
import { cellarRouter, cellarAuthRouter } from './cellar';
import { regionRouter, regionAuthRouter } from './region';
import { wineTypeRouter, wineTypeAuthRouter } from './wineType';
import { favouriteRegionRouter, favouriteRegionAuthRouter } from './favouriteRegion';
import { favouriteWineRouter, favouriteWineAuthRouter } from './favouriteWine';
import setCORSHeaders from './middleware/setCORSHeaders';

const router = Router();

router.use(setHeaders);
router.use(setCORSHeaders);

router.use(authRouter);

// Not authenticated request
router.use(userRouter);
router.use(cellarRouter);
router.use(wineTypeRouter);
router.use(regionRouter);
router.use(favouriteRegionRouter);
router.use(favouriteWineRouter);

// Authenticated request
router.use(passport.authorize('auth-rule', { session: false }));
router.use(userAuthRouter);
router.use(cellarAuthRouter);
router.use(wineTypeAuthRouter);
router.use(regionAuthRouter);
router.use(favouriteRegionAuthRouter);
router.use(favouriteWineAuthRouter);

export default router;
