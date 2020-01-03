export const AUTH0_CLIENT_ID = process.env.AUTH0_CLIENT_ID || 's3bqL2UzI1hPyGCNOl7L5ESB1nm3ZJhV';
export const AUTH0_CLIENT_SECRET =
  process.env.AUTH0_CLIENT_SECRET ||
  'TxnDTOe8XJIaWR7kv_TRx7yWQxVxenMKP95IwohfIuQJOQ6qk7YZPkRnGf4PwKdf';
export const AUDIENCE = process.env.AUDIENCE || 'https://api.safetyassist.com';
export const SCOPE = process.env.SCOPE || 'openid';
export const AUTH0_GRANT_TYPE = process.env.AUTH0_GRANT_TYPE || 'password';

export const BASE_URL = process.env.API_BASE_URL || 'https://api.safetyassist.com';
export const BEARER_KEY = process.env.SAF_APP_BEARER_KEY || '';

export const HEADERS = {};

export const getAuthorizationHeader = (bearerKey: string): object => ({
  Authorization: `Bearer ${localStorage.getItem(bearerKey)}`,
});
