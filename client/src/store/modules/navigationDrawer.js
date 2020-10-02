// import axios from 'axios';

const state = {
  isDash: false,
  isOpen: false
};

const getters = {
  navigationDrawerisDash: state => state.isDash,
  navigationDrawerisOpen: state => state.isOpen,
};

const actions = {
  toggleNavigationDrawerisOpen({ commit }, t) {
    return commit('toggleNavigationDrawerisOpen', t);
  },
  toggleNavigationDrawerisDash({ commit }, t) {
    commit('toggleNavigationDrawerisDash', t);
  }
  // async fetchThemes({ commit }) {
  //   // const response = await axios.get('https://jsonplaceholder.typicode.com/todos');

  //   commit('setThemes', ['dark', 'light']);
  // },
};

const mutations = {
  toggleNavigationDrawerisDash: (state, t) => state.isDash = typeof t == 'boolean' ? t : !state.isDash,
  toggleNavigationDrawerisOpen: (state, t) => state.isOpen = typeof t == 'boolean' ? t : !state.isOpen,
};

export default {
  state,
  getters,
  actions,
  mutations
};