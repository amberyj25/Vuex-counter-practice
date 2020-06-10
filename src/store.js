import Vue from "vue"
import Vuex from "Vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    counter(state) {
      state.count += 1
    }
  }
})