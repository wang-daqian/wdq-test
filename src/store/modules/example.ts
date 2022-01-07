import { ExampleState } from '@/types/example'

export default {
  namespaced: true,
  state: {
    list: [
      {
        id: 1,
        name: 'A'
      },
      {
        id: 2,
        name: 'B'
      },
      {
        id: 3,
        name: 'C'
      },
      {
        id: 4,
        name: 'D'
      },
      {
        id: 5,
        name: 'E'
      }
    ]
  },
  actions: {

  },
  mutations: {
    ADD_ITEM(state: ExampleState, payload: string) {
      let newId = 0
      state.list.forEach(item => {
        if (item.id > newId) {
          newId = item.id
        }
      })
      newId++
      state.list.push({
        id: newId,
        name: payload
      })
    },
    DEL_ITEM(state: ExampleState, payload: number) {
      state.list = state.list.filter(item => item.id !== payload)
    }
  },
  getters: {
    getOddList(state: ExampleState) {
      return state.list.filter(item => item.id % 2 === 1)
    },
    getEvenList(state: ExampleState) {
      return state.list.filter(item => item.id % 2 === 0)
    },
    getItemById: (state: ExampleState) => (id: number) => {
      return state.list.find(item => item.id === id)
    }
  },
}