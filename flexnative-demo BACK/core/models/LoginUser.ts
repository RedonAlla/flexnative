export type LoginUser = {
  username: string;
  email: string;
  name: string;
  lastName: string;
  role: UserRole
}

export enum UserRole {
  Admin = 'admin',
  SuperAdmin = 'super_admin'
}