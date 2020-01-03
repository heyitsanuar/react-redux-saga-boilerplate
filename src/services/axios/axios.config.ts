export const BASE_URL = process.env.PORTFOLIO_APP_API_URL || 'http://localhost:5000/api';
export const BEARER_KEY = process.env.PORTFOLIO_APP_BEARER_KEY || '';

export const HEADERS = {};

export const getAuthorizationHeader = (bearerKey: string): object => ({
  Authorization: `Bearer ${localStorage.getItem(bearerKey)}`,
});
