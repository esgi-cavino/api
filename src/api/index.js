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
import { positionInCellarRouter, positionInCellarAuthRouter, positionInCellarAdminRouter } from './positionInCellar';
import { countryRouter, countryAuthRouter, countryAdminRouter } from './country';
import { domainRouter, domainAuthRouter, domainAdminRouter } from './domain';
import { vintageRouter, vintageAuthRouter, vintageAdminRouter } from './vintage';
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
router.use(positionInCellarRouter);
router.use(countryRouter);
router.use(domainRouter);
router.use(vintageRouter);

// Authenticated request
router.use(passport.authorize('auth-rule', { session: false }));
router.use(userAuthRouter);
router.use(cellarAuthRouter);
router.use(wineTypeAuthRouter);
router.use(regionAuthRouter);
router.use(favouriteRegionAuthRouter);
router.use(favouriteWineAuthRouter);
router.use(bottleAuthRouter);
router.use(positionInCellarAuthRouter);
router.use(countryAuthRouter);
router.use(domainAuthRouter);
router.use(vintageAuthRouter);

// Admin request
router.use(passport.authorize('admin-rule', { session: false }));
router.use(userAdminRouter);
router.use(cellarAdminRouter);
router.use(wineTypeAdminRouter);
router.use(regionAdminRouter);
router.use(favouriteRegionAdminRouter);
router.use(favouriteWineAdminRouter);
router.use(bottleAdminRouter);
router.use(positionInCellarAdminRouter);
router.use(countryAdminRouter);
router.use(domainAdminRouter);
router.use(vintageAdminRouter);

export default router;
