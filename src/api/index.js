import { Router } from 'express';
import passport from 'passport';
import setHeaders from './middleware/setHeaders';
import authRouter from './auth';
import { userRouter, userAuthRouter, userAdminRouter } from './user';
import { cellarRouter, cellarAuthRouter, cellarAdminRouter } from './cellar';
import { regionRouter, regionAuthRouter, regionAdminRouter } from './region';
import { wineTypeRouter, wineTypeAuthRouter, wineTypeAdminRouter } from './wineType';
import { favouriteRegionRouter, favouriteRegionAuthRouter, favouriteRegionAdminRouter } from './favouriteRegion';
import { favouriteWineRouter, favouriteWineAuthRouter, favouriteWineAdminRouter } from './favouriteWine';
import { bottleRouter, bottleAuthRouter, bottleAdminRouter } from './bottle';
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
router.use(bottleRouter);

// Authenticated request
router.use(passport.authorize('auth-rule', { session: false }));
router.use(userAuthRouter);
router.use(cellarAuthRouter);
router.use(wineTypeAuthRouter);
router.use(regionAuthRouter);
router.use(favouriteRegionAuthRouter);
router.use(favouriteWineAuthRouter);
router.use(bottleAuthRouter);

// Admin request
router.use(passport.authorize('admin-rule', { session: false }));
router.use(userAdminRouter);
router.use(cellarAdminRouter);
router.use(wineTypeAdminRouter);
router.use(regionAdminRouter);
router.use(favouriteRegionAdminRouter);
router.use(favouriteWineAdminRouter);
router.use(bottleAdminRouter);

export default router;
