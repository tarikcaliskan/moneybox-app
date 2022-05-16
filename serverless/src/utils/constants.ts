export const HASURA_GRAPHQL_API_URL = process.env.HASURA_GRAPHQL_API_URL;
export const HASURA_GRAHQL_API_ADMIN_SECRET = process.env.HASURA_GRAHQL_API_ADMIN_SECRET;
export const JWT_SECRET = process.env.JWT_SECRET;
export const JWT_MAX_AGE = 1000 * 60 * 60 * 24 * 365 * 10; // 10 years
export const __prod__ = process.env.NODE_ENV === 'production';
