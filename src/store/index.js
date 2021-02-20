import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState({
    storage: window.sessionStorage,
  })],
  state: { 
    jwtToken: '',
    contextCustomer: {

    }
  },
  mutations: {
    SET_TOKEN(state, jwtToken){
      state.jwtToken = jwtToken
    },
    SET_CUSTOMER(state, contextCustomer){
      state.contextCustomer = contextCustomer
    }
  },
  actions: {
    setToken({commit}, jwtToken){
      commit('SET_TOKEN', jwtToken)
    },
    setCustomer({commit}, contextCustomer){
      commit('SET_CUSTOMER', contextCustomer)
    }
  },
  modules: {},
  getters:{
    getToken: state => {
      return state.jwtToken
    },
    getCustomer: state => {
      return state.contextCustomer
    }
  }
  
});
