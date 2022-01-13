import { RootState, ApiStore } from '@/types'
import { Module } from "vuex"
import * as urlTemplate from 'url-template'
import * as qs from 'qs'
import axios from '@/api'

export function createModule(module: Module<any, RootState>, apiStore?: ApiStore[]) {
  const statePro = Object.assign({
    pending: {},
  }, module.state)
  const actionsPro = module.actions || {}
  const mutationsPro = module.mutations || {}

  mutationsPro['SET__PENDING__STATUS'] = (state, { propertyName, status }) => {
    state.pending[propertyName] = status
  }

  if (apiStore) {
    apiStore.forEach(api => {
      let propertyName = ''
      let mutationName = ''
      if (api.property) {
        propertyName = api.property
        if (!statePro[propertyName]) {
          statePro[propertyName] = null
        }
        statePro.pending[propertyName] = false

        mutationName = 'SET__' + propertyName.toUpperCase() + '__MUTATION'

        mutationsPro[mutationName] = (state, payload) => {
          state[propertyName] = payload
        }
      }

      actionsPro[api.action] = async ({ commit }, { params, data }) => {
        if (propertyName) {
          commit('SET__PENDING__STATUS', { propertyName, status: true })
        }

        let url = api.path
        if (api.pathParams) {
          url = urlTemplate.parse(api.path).expand(params)
          api.pathParams.forEach(key => delete params[key])
        }

        let paramsSerializer = undefined
        if (api.paramsSerializer) {
          paramsSerializer = (params: any) => qs.stringify(params, { arrayFormat: 'repeat' })
        }
        const method = api.method || 'GET'

        return axios.request({
          url,
          method,
          params,
          data,
          paramsSerializer
        }).then(response => {
          if (mutationName) {
            commit(mutationName, response.data)
          }
          if (propertyName) {
            commit('SET__PENDING__STATUS', { propertyName, status: false })
          }
          return Promise.resolve(response)
        }).catch(err => {
          if (propertyName) {
            commit('SET__PENDING__STATUS', { propertyName, status: false })
          }
          return Promise.reject(err)
        })
      }
    })
  }

  return {
    namespaced: module.namespaced,
    state: statePro,
    actions: actionsPro,
    mutations: mutationsPro,
    getters: module.getters
  }
}