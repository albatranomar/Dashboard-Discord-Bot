// import axios from 'axios';

const state = {
  isLogedIn: false,
  acat: null
};

const getters = {
  isLogedIn: state => state.isLogedIn,
  acat: state => state.acat,
};

const actions = {
  
};

const mutations = {
  setIsLogedIn: (state, isIt) => state.isLogedIn = isIt,
  setAcat: (state, acat) => state.acat = acat,
};

export default {
  state,
  getters,
  actions,
  mutations
};