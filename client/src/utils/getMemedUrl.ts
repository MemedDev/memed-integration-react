export const getMemedURL = (api = false) => {
  const base = `${api ? 'api.' : ''}memed.com.br`;
  const AMBIENT = process.env.REACT_APP_MEMED_AMBIENT;

  if (AMBIENT === 'integrations') return `integrations.${base}`;
  if (AMBIENT === 'beta') return `beta.${base}`;

  return base;
};
