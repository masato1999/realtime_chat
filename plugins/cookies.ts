import jwtDecode from 'jwt-decode';

const cookieparser = require('cookieparser');

export const getUserFromCookie = (req: any): any | null => {
  if (process.server && process.static) return null;
  if (!req.headers.cookie) return null;
  const parsed = cookieparser.parse(req.headers.cookie);
  const accessTokenCookie = parsed.access_token;
  if (!accessTokenCookie) return null;

  const decodedToken = jwtDecode(accessTokenCookie);
  if (!decodedToken) return null;

  return decodedToken;
}
