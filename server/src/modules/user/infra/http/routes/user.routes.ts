import express from 'express';

import UserController from '@modules/user/controllers/UserController';

const userRouter = express.Router();

userRouter.get('/search/:query', UserController.search).get('/:token', UserController.getByToken);

export default userRouter;
