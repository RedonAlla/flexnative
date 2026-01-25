import { jwtDecode, JwtPayload } from "jwt-decode";

export function isTokenExpired(token: string): boolean {
  try {
    debugger
    if(token === '' || token === undefined)
      return true;

    const date = new Date(0);
    const decoded = jwtDecode<JwtPayload>(token);
    date.setUTCSeconds(decoded.exp!);
    return date.valueOf() > new Date().valueOf();
  } catch (err) {
    return true;
  }
};