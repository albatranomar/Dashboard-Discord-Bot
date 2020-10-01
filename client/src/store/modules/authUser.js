import axios from 'axios';

const state = {
  isLogedIn: false,
  acat: null,
  user: {}
};

const getters = {
  isLogedIn: state => state.isLogedIn,
  acat: state => state.acat,
};

const actions = {
  checkCurrentACAT({ state }) {
    return new Promise((res, rej) => {
      if (state.acat) {
        axios.get(`http://localhost:9090/api/v1/users/${state.acat}`).then((response) => {
          res(response.data.isTruth || false);
        }).catch((err) => {
          console.error(err);
          rej(err);
        })
      } else {
        res(false);
      }
    });
  },
  newAccessCode(context, code) {
    return new Promise((res, rej) => {
      axios.post(`http://localhost:9090/api/v1/users`, { code }).then((response) => {
        if (response.statusText == "OK") {
          context.commit("setIsLogedIn", true);
          context.commit("setAcat", response.data.acat);
          context.commit("setAuthUser", response.data);
          res("OK")
        };
      }).catch((err) => {
        console.error(err);
        rej("NOT OK")
      })
    })
  }
};

const mutations = {
  setIsLogedIn: (state, isIt) => state.isLogedIn = isIt,
  setAcat: (state, acat) => state.acat = acat,
  setAuthUser: (state, userData) => state.user = userData,
};

export default {
  state,
  getters,
  actions,
  mutations
};