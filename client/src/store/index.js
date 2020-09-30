import Vue from "vue";
import Vuex from "vuex";

import language from "./modules/language";
import authUser from "./modules/authUser";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    language,
    authUser
  },
  mutations: {
    init: (state, stor) => {
      if(localStorage.getItem('store')) {
        stor.replaceState(
					Object.assign(state, JSON.parse(localStorage.getItem('store')))
				);
      }
    },
  },
});
