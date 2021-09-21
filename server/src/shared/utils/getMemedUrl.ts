import { MEMED_AMBIENT } from '@shared/utils/environment';

export const getMemedURL = () => {
  const base = `api.memed.com.br`;
  const AMBIENT = MEMED_AMBIENT;

  if (AMBIENT === 'sandbox') return `sandbox.${base}`;
  if (AMBIENT === 'beta') return `beta.${base}`;

  return base;
};
