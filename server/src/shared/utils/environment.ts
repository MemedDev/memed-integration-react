import * as dotenv from 'dotenv';

dotenv.config();
const path = `${__dirname}/../../../.env`;

dotenv.config({ path });

export const { MEMED_AMBIENT } = process.env;
export const { MEMED_API_KEY } = process.env;
export const { MEMED_SECRET_KEY } = process.env;
