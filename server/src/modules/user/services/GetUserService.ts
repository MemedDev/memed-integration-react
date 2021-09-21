import AppError from '@shared/errors/AppError';

import { apiMemed } from '@shared/services/api';

import { SearchUserInterface, GetUserInterface } from '../../../@types';

class GetUserService {
  public async search(token: string): Promise<SearchUserInterface> {
    try {
      const { data }: GetUserInterface = await apiMemed.get(`/v1/sinapse-prescricao/usuarios/${token}`);

      return {
        userToken: data?.data?.attributes?.token,
        user: data?.data?.attributes,
      };
    } catch (err: any) {
      const error = err?.response?.data?.errors.length > 0 ? err?.response?.data?.errors[0]?.detail : err.message;
      throw new AppError(error, 500);
    }
  }

  public async getByToken(token: string): Promise<SearchUserInterface> {
    try {
      const { data }: GetUserInterface = await apiMemed.get(`/v1/usuarios?token=${token}`);

      return {
        userToken: data?.data?.attributes?.token,
        user: data?.data?.attributes,
      };
    } catch (err: any) {
      const error = err?.response?.data?.errors.length > 0 ? err?.response?.data?.errors[0]?.detail : err.message;
      throw new AppError(error, 500);
    }
  }
}

export default new GetUserService();
