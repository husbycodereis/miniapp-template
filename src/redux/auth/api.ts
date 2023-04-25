import { url } from '../../constants/apiUrls';
import { HttpRequest, RequestType } from '../../helpers/httpRequest';
import { GetComposedUrlType, User } from '../../types';

class AuthManager {
  public static getComposedUrl = async () => {
    const CALLBACK_URL = `${window.location.protocol}//${window.location.host}`;

    const response = await HttpRequest<any, GetComposedUrlType>({
      url: url.GET_COMPOSED_URL,
      body: {
        redirect_uri: CALLBACK_URL,
      },
      method: RequestType.POST,
    });

    window.location.assign(response.composed_url);
  };

  public static login = async ({ code }: { code: string }) => {
    const CALLBACK_URL = `${window.location.protocol}//${window.location.host}`;
    console.log('CALLBACK_URL', CALLBACK_URL);
    const response = await HttpRequest<null, User | any>({
      url: url.LOGIN + `?code=${code}&redirect_uri=${CALLBACK_URL}`,
      method: RequestType.GET,
    });
    if (!response.token) window.location.replace('/');
    localStorage.setItem('token', response.token);
  };
}

export interface IGetAppVerionsRequest {
  page?: number | undefined;
  pageSize?: number | undefined;
  appName?: string;
}

export default AuthManager;
