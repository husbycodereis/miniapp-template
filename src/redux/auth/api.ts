export {};
// import { CALLBACK_URL } from '../../constants/configuration'
// import httpclient from '../../plugins/http-client'

// const urls = {
//   get: {
//     getCreateUrl: 'auth/create-url/'
//   },
//   post: {
//     login: 'auth/login/'
//   }
// }

// class AuthManager {
//   public static getCreateUrl = async () => {
//     const response: any = await httpclient.fetch({
//       method: 'POST',
//       path: urls.get.getCreateUrl,
//       body: { redirectUrl: CALLBACK_URL }
//     })
//     window.location.replace(response.data.url)
//     return
//   }

//   public static login = async ({ code }: { code: string }) => {
//     const response: any = await httpclient.fetch({
//       method: 'POST',
//       path: urls.post.login,
//       body: { redirectUrl: CALLBACK_URL, code }
//     })
//     localStorage.setItem('user_email', response.data.email)
//     localStorage.setItem('user_name', response.data.name)
//     localStorage.setItem('user_surname', response.data.surname)
//     localStorage.setItem('token', response.data.token)
//     localStorage.setItem('dateTime', JSON.stringify(new Date()))
//     return response
//   }
// }

// export interface IGetAppVerionsRequest {
//   page?: number | undefined
//   pageSize?: number | undefined
//   appName?: string
// }

// export default AuthManager
