import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    towns: []
   },
  actions: {
    GET_TOWNS_FROM_API({commit}) {
      return axios('http://localhost:3000/towns', {
        method: 'GET'
      })
        .then((response) => {
          commit('SET_TOWNS_TO_VUEX', response.data)
        })
    }
  },
  mutations: {
    SET_TOWNS_TO_VUEX: (state, towns) => {
      state.towns = towns
    }
  },
  getters: {
    TOWNS(state) {
      return state.towns;
    }
  }
})

export default store;