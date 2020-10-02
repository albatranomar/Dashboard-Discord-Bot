import Vue from "vue";
import Vuex from "vuex";

import language from "./modules/language";
import authUser from "./modules/authUser";
import theme from "./modules/theme";
import navigationDrawer from "./modules/navigationDrawer";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    language,
    authUser,
    theme,
    navigationDrawer
  },
  mutations: {
    init: (state, store) => {
      if(localStorage.getItem('store')) {
        store.replaceState(
					Object.assign(state, JSON.parse(localStorage.getItem('store')))
				);
      }
    },
  },
});
