import { jwtDecode, JwtPayload } from "jwt-decode";

/**
 * Checks if a given JWT token is expired.
 * 
 * @param {string} token - The JWT token to check.
 * @returns {boolean} - Returns true if the token is expired or invalid, otherwise false.
 */
export function isTokenExpired(token: string): boolean {
  try {
    if(token === '' || token === undefined)
      return true;
    
    const decoded = jwtDecode<JwtPayload>(token);
    const date = new Date(decoded.exp!);
    
    return date.valueOf() < new Date().valueOf();
  } catch (err) {
    return true;
  }
};