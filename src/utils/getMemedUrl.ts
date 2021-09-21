export const getMemedURL = (api = false) => {
  const base = `${api ? 'api.' : ''}memed.com.br`;
  const AMBIENT = process.env.REACT_APP_MEMED_AMBIENT;

  if (AMBIENT === 'sandbox') return `sandbox.${base}`;
  if (AMBIENT === 'beta') return `beta.${base}`;

  return base;
};
