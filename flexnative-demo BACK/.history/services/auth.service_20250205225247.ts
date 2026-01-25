import HttpRequestMock from 'http-request-mock';
const mocker = HttpRequestMock.setup();

export const login = mocker.get('www.api.com/some-api', 'some response data');