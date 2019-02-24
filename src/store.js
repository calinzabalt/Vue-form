import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadedIntegrations: [
      {
        Name: 'Master Calin',
        Customer: 'Customer A',
        Url: 'MasterCalin.me'
      }
    ]

  },
  mutations: {
    createIntegration (state, payload) {
      state.loadedIntegrations.push(payload)
    }
  },
  actions: {
    createIntegration ({ commit }, payload) {
      const integration = {
        Name: payload.Name,
        Customer: payload.Customer,
        Description: payload.Description,
        Url: payload.Url,
        ProductNumber: payload.ProductNumber,
        name: payload.name,
        date: payload.date,
        id: 'asfsfeafsdefasdfsd'
      }
      commit('createIntegration', integration)
    }
  }
})
