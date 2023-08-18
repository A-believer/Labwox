import Cookies from 'js-cookie';

const SESSION_COOKIE_NAME = 'my_session_cookie';
const SESSION_EXPIRATION = 30; // in minutes

export const setSession = (user) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + SESSION_EXPIRATION * 60 * 1000); // Convert minutes to milliseconds
  Cookies.set(SESSION_COOKIE_NAME, JSON.stringify(user), { expires });
};

export const getSession = () => {
  const sessionData = Cookies.get(SESSION_COOKIE_NAME);
  return sessionData ? JSON.parse(sessionData) : null;
};

export const clearSession = () => {
  Cookies.remove(SESSION_COOKIE_NAME);
};