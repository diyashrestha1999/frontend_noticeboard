import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    access: "",
  },
  getters: {
    isAuthenticated(state) {
      return Boolean(state.access);
    },
  },
  mutations: {
    initializeStore(state) {
      if (localStorage.getItem("access")) {
        state.access = localStorage.getItem("access");
      } else {
        state.access = "";
      }
    },
    setAccess(state, access) {
      state.acccess = access;
    },
  },
  actions: {},
  modules: {},
});
