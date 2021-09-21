import { Request, Response } from 'express';

import AppError from '@shared/errors/AppError';

import GetUserService from '../services/GetUserService';

class UserController {
  async search(req: Request, res: Response) {
    try {
      const { query } = req.params;
      const user = await GetUserService.search(query);
      return res.status(200).json(user);
    } catch (err: any) {
      throw new AppError(err?.message, 500);
    }
  }

  async getByToken(req: Request, res: Response) {
    try {
      const { token } = req.params;
      const user = await GetUserService.getByToken(token);
      return res.status(200).json(user);
    } catch (err: any) {
      throw new AppError(err?.message, 500);
    }
  }
}

export default new UserController();
