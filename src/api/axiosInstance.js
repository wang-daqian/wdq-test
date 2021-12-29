import axios from 'axios'

import { applyUrlTemplate, applyDefaultParams } from './requestUse'

// 30s
const API_TIMEOUT = 30000

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: API_TIMEOUT,
  // TODO
  // headers: {}
})

axiosInstance.interceptors.request.use(applyUrlTemplate)
axiosInstance.interceptors.request.use(applyDefaultParams)
axiosInstance.interceptors.response.use((response) => {
  // TODO
  if (response.data.header.isSuccessful) {
    response.data = response.data.result
  }
  return response
})


export default axiosInstance