import express from 'express';

import userRouter from '@modules/user/infra/http/routes/user.routes';

const routes = express.Router();

const Development = [
  'Seeker',
  {
    'Made by': 'Leonardo Ronne',
    GitHub: 'https://github.com/leoronne',
  },
];

routes
  // Copyright
  .get('/', (req, res) => {
    res.status(200).send({
      Development,
    });
  })
  .use('/user', userRouter);

export default routes;
