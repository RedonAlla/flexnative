import { jwtDecode, JwtPayload } from "jwt-decode";

export function isTokenExpired(token: string): boolean {
  try {
    debugger
    if(token === '' || token === undefined)
      return true;

    debugger
    const decoded = jwtDecode<JwtPayload>(token);
    const date = new Date(decoded.exp!);
    const currentDate = new Date();

    console.log('date: ', date);
    console.log('currentDate: ', currentDate);

    console.log('date valueOf: ', date.valueOf());
    console.log('currentDate valueOf: ', currentDate.valueOf());


    console.log('results: ', date.valueOf() < currentDate.valueOf());

    return date.valueOf() < new Date().valueOf();
  } catch (err) {
    return true;
  }
};