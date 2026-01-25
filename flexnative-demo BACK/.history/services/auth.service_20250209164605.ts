export async function login() {
  return await fetch('/account/login')
    .then(response => response.json());
}