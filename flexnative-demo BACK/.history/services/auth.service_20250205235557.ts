import { UserRole } from '@/core/models/LoginUser';
import HttpRequestMock from 'http-request-mock';
const mocker = HttpRequestMock.setupForFetch();

mocker.mock({
  url: 'https://jsonplaceholder.typicode.com/todos/1',
  method: 'GET',
  body: {mock: 
    {
      name: 'Redon',
      lastName: 'Alla',
      email: 'redon.alla@gmail.com',
      username: 'RedonAlla',
      role: UserRole.SuperAdmin
    }
  },
  delay: 300000,
});

export async function login() {
  return await fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json()).then(data => data);
}