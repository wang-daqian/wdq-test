import { apiStoreCreator } from '@/api'

const apiStore = apiStoreCreator([
  {
    action: '_getContract',
    property: 'contract',
    path: 'esign/contracts/{contractId}',
    pathParams: ['contractId'],
    onSuccess (state, payload) {
      state.contract = payload.data.content
    }
  },
])
export default {
  namespaced: true,
  mixins: [apiStore],
  state: {
  },
  actions: {
    fetchContract ({ dispatch }) {
      dispatch('_getContract', { params: { contractId: '114902a6-28df-4722-b2fc-e52fda6a1c28' } })
    }
  },
  mutations: {
  },
  getters: {
  },
}
