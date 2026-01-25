import { UserRole } from '@/core/models/LoginUser';

export async function login() {
  return await fetch('/account/login')
    .then(response => response.json());
}