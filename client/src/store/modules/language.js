// import axios from 'axios';

const state = {
  languages: [
    {
      key: "en",
      lang_name: "English",
      flag_name: "us.png",
      rtl: false
    },
    {
      key: "ar",
      lang_name: "Arabic",
      flag_name: "sa.png",
      rtl: true
    },
  ],
  current: 0
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
  async setCurrentLanguage({ commit }, i) {
    commit('setCurrentLanguage', i)
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