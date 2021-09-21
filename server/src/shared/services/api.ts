import axios from 'axios';

import { MEMED_API_KEY, MEMED_SECRET_KEY } from '@shared/utils/environment';

import { getMemedURL } from '@shared/utils/getMemedUrl';

export const apiMemed = axios.create({
  baseURL: `https://${getMemedURL()}`,
  params: {
    'api-key': MEMED_API_KEY,
    'secret-key': MEMED_SECRET_KEY,
  },
});
