import Cookies from 'js-cookie';

export class SessionService {

  getLocalStorageItem(key: string): string | null | undefined  {
    const sessionStorage = localStorage.getItem(key);

    return JSON.parse(sessionStorage as any);
  }

  getCookieItem(key: string): string | null | undefined  {
    const session = Cookies.get(key);

    return session;
  }
}
