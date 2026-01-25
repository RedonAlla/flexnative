import { jwtDecode, JwtPayload } from "jwt-decode";

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