import { UserRole } from '@/core/models/LoginUser';
import HttpRequestMock from 'http-request-mock';
const mocker = HttpRequestMock.setup();

export const login = mocker.get('www.api.com/some-api',  {
  name: 'Redon',
  lastName: 'Alla',
  email: 'redon.alla@gmail.com',
  username: 'RedonAlla',
  role: UserRole.SuperAdmin
});