import axios from 'axios'

// 30s
const API_TIMEOUT = 30000

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL as string,
  timeout: API_TIMEOUT,
  // TODO
  // headers: {}
})

// TODO
// axiosInstance.interceptors.request.use(() => { })
// axiosInstance.interceptors.response.use(() => { }, () => { })


export default axiosInstance