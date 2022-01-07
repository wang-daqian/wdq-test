import { ActionContext } from 'vuex';
import { RootState, ExampleState, ExampleItem } from '@/types'
import axios from '@/api'

export default {
  namespaced: true,
  state: {
    list: [
      {
        id: 1,
        name: 'A',
        contractId: '114902a6-28df-4722-b2fc-e52fda6a1c28'
      },
      {
        id: 2,
        name: 'B',
        contractId: '04e3ae59-4095-4e5f-9bfa-9ec25095447c'
      },
      {
        id: 3,
        name: 'C',
        contractId: '05121a48-6c04-488f-86fa-b52e0bf5ac72'
      },
      {
        id: 4,
        name: 'D',
        contractId: '114902a6-28df-4722-b2fc-e52fda6a1c28'
      },
      {
        id: 5,
        name: 'E',
        contractId: '1fb8cfa6-a69d-4c84-ad15-e4f35e71e24e'
      }
    ]
  },
  actions: {
    fetchTest({ commit }: ActionContext<ExampleState, RootState>, item: ExampleItem) {
      if (item.contractId && !item.contractName) {
        axios.get('/esign/contracts/' + item.contractId).then(res => {
          const { header, result } = res.data;
          if (header.isSuccessful) {
            const resItem = {
              id: item.id,
              contractName: result.content.contractName,
              requestName: result.content.requestName
            }
            commit('SET_ITEM_INFO', resItem)
          }
        })
      }
    }
  },
  mutations: {
    ADD_ITEM(state: ExampleState, itemName: string) {
      let newId = 0
      state.list.forEach(item => {
        if (item.id > newId) {
          newId = item.id
        }
      })
      newId++
      state.list.push({
        id: newId,
        name: itemName
      })
    },
    DEL_ITEM(state: ExampleState, itemId: number) {
      state.list = state.list.filter(item => item.id !== itemId)
    },
    SET_ITEM_INFO(state: ExampleState, { id, contractName, requestName }: { id: number, contractName: string, requestName: string }) {
      state.list.forEach(item => {
        if (item.id === id) {
          item.contractName = contractName
          item.requestName = requestName
        }
      })
    }
  },
  getters: {
    getOddList(state: ExampleState): ExampleItem[] {
      return state.list.filter(item => item.id % 2 === 1)
    },
    getEvenList(state: ExampleState): ExampleItem[] {
      return state.list.filter(item => item.id % 2 === 0)
    },
    getItemById: (state: ExampleState) => (id: number): ExampleItem | undefined => {
      return state.list.find(item => item.id === id)
    }
  },
}