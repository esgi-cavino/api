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
import { quantityInCellarRouter, quantityInCellarAuthRouter, quantityInCellarAdminRouter } from './quantityInCellar';
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
router.use(quantityInCellarRouter);

// Authenticated request
router.use(passport.authorize('auth-rule', { session: false }));
router.use(userAuthRouter);
router.use(cellarAuthRouter);
router.use(wineTypeAuthRouter);
router.use(regionAuthRouter);
router.use(favouriteRegionAuthRouter);
router.use(favouriteWineAuthRouter);
router.use(bottleAuthRouter);
router.use(quantityInCellarAuthRouter);

// Admin request
router.use(passport.authorize('admin-rule', { session: false }));
router.use(userAdminRouter);
router.use(cellarAdminRouter);
router.use(wineTypeAdminRouter);
router.use(regionAdminRouter);
router.use(favouriteRegionAdminRouter);
router.use(favouriteWineAdminRouter);
router.use(bottleAdminRouter);
router.use(quantityInCellarAdminRouter);

export default router;
