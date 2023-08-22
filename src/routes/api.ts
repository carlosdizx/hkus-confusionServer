import { Router } from 'express';
import jetValidator from 'jet-validator';

import Paths from './constants/Paths';
import User from '@src/models/User';
import UserRoutes from './UserRoutes';
import dishRouter from '@src/routes/dish.router';
import promotionRouter from '@src/routes/promotion.router';
import leaderRouter from '@src/routes/leader.router';

// **** Variables **** //

const apiRouter = Router(),
  validate = jetValidator();

// ** Add UserRouter ** //

const userRouter = Router();

// Get all users
userRouter.get(Paths.Users.Get, UserRoutes.getAll);

// Add one user
userRouter.post(
  Paths.Users.Add,
  validate(['user', User.isUser]),
  UserRoutes.add
);

// Update one user
userRouter.put(
  Paths.Users.Update,
  validate(['user', User.isUser]),
  UserRoutes.update
);

// Delete one user
userRouter.delete(
  Paths.Users.Delete,
  validate(['id', 'number', 'params']),
  UserRoutes.delete
);

// Add UserRouter
apiRouter.use(Paths.Users.Base, userRouter);

//Add paths
apiRouter.use('/dishes', dishRouter);
apiRouter.use('/promotions', promotionRouter);
apiRouter.use('/leaders', leaderRouter);

// **** Export default **** //

export default apiRouter;
