import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:1,

  },
  mutations: {
    increment(state){
      state.count = state.count + 1;
    }
  },
  actions: {
  },
  modules: {
  }
})
