// import axios from 'axios';

const state = {
  languages: [],
  current: "en"
};

const getters = {
  allLanguages: state => state.languages,
  currentLang: state => state.current,
};

const actions = {
  async fetchLanguages({ commit }) {
    // const response = await axios.get('https://jsonplaceholder.typicode.com/todos');

    commit('setLanguages', ['en']);
  },
  async fetchCurrentLanguage({ commit }) {
    console.log(1);
    commit('setCurrentLanguage', "en")
  }
};

const mutations = {
  setLanguages: (state, languages) => state.languages = languages,
  setCurrentLanguage: (state, current) => state.current = current,
};

export default {
  state,
  getters,
  actions,
  mutations
};