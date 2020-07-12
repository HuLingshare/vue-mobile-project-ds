import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showLoading: true
  },
  mutations: {
    endLoading(state) {
      state.showLoading = false;
    }
  },
  actions: {
    changeLoading(context) {
      setTimeout(() => {
        context.commit("endLoading");
      }, 2000);
    }
  }
});
