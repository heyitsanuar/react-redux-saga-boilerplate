import Cookies from 'js-cookie';

export function getSessionStorage() {
  const sessionStorage = localStorage.getItem('session');

  return JSON.parse(sessionStorage as any);
}

export function getSessionCookie(key: string): string | null | undefined {
  const session = Cookies.get('sessionKey');

  return session;
}
