// import axios from 'axios';

const state = {
  dark: true,
};

const getters = {
  allThemes: state => state.themes,
  currentTheme: state => state.current,
};

const actions = {
  toggleTheme({ commit }, t) {
    commit('toggleTheme', t);
  }
  // async fetchThemes({ commit }) {
  //   // const response = await axios.get('https://jsonplaceholder.typicode.com/todos');

  //   commit('setThemes', ['dark', 'light']);
  // },
};

const mutations = {
  toggleTheme: (state, t) => state.dark = t ? t : !state.dark,
};

export default {
  state,
  getters,
  actions,
  mutations
};