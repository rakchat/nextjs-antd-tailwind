// import axios, { AxiosError, AxiosRequestHeaders } from 'axios'
// import { getCookie } from 'cookies-next'
// import { COOKIE_KEYS } from './utils'

// const api = axios.create({
//   baseURL: '/api'
// })

// api.interceptors.request.use(async (config) => {
//   const token = await getCookie(COOKIE_KEYS.auth)
//   if (token) {
//     ;(config.headers as AxiosRequestHeaders).Authorization = `Bearer ${token}`
//   }
//   return config
// })

// api.interceptors.response.use(
//   (res) => {
//     return res
//   },
//   async (err: AxiosError<any, any>) => {
//     const { response } = err
//     if (response?.status === 401) {
//       if (window.location.pathname !== '/login') {
//         return
//       }
//     } else {
//       console.debug('error: ', response?.status, response?.statusText)
//     }
//     return Promise.reject(err)
//   }
// )

// export default api
