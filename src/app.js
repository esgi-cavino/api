import config from 'config';
import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import morgan from 'morgan';
import fs from 'fs';
import passport from 'passport';
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';
import apiRouter from './api';
import db from './db';
import User from './models';

const PORT = process.env.PORT || config.get('port') || 8080;

// Database connection
db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

const app = express();

// General middlewares configuration
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('combined', { stream: fs.createWriteStream('./logs/access.log', { flags: 'a' }) }));

// Passport JWT configuration
passport.use('auth-rule', new JWTStrategy(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.get('jwt_secret'),
  },
  ((jwtPayload, done) => {
    User.findOne({ where: { uuid: jwtPayload.userUUID } }).then((user, err) => {
      if (err) {
        return done(err, false);
      }
      return done(null, user);
    });
  }),
));
app.use(passport.initialize());

app.use('/api', apiRouter);

app.listen(PORT);
console.log(`app listen on port :${PORT}`);

export default app;
