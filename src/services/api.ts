import axios from 'axios';

import { getMemedURL } from '../utils/getMemedUrl';

export const apiMemed = axios.create({
  baseURL: `https://${getMemedURL(true)}`,
  params: {
    'api-key': process.env.REACT_APP_MEMED_API_KEY,
    'secret-key': process.env.REACT_APP_MEMED_SECRET_KEY,
  },
});
