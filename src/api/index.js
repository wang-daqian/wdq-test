import apiStoreCreator from './apiStoreCreator'
import axiosInstance from './axiosInstance'

const apiStore = apiStoreCreator(axiosInstance)

export {
  axiosInstance as default,
  axiosInstance,
  apiStore as apiStoreCreator
}