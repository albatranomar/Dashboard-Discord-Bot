import axios from 'axios';

const state = {
  isLogedIn: false,
  acat: null,
  user: {}
};

const getters = {
  isLogedIn: state => state.isLogedIn,
  acat: state => state.acat,
  OAuthUser: state => state.user,
};

const actions = {
  checkCurrentACAT({ state }) {
    return new Promise((res) => {
      if (state.acat) {
        axios.get(`http://localhost:9090/api/v1/users/${state.acat}`).then((response) => {
          res({
            isIT: response.data.isTruth || false
          });
        }).catch((err) => {
          console.error(err);
          res({
            isIT: false,
            err: err
          });
        })
      } else {
        res({
          isIT: false,
        });
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
  },
  getUserGuild({ state }) {
    return new Promise((res) => {
      axios.get(`http://localhost:9090/api/v1/users/${state.acat}/guilds`).then((guildsResponse) => {
        res(guildsResponse.data.guilds);
      }).catch(err => {
        console.error(err);
        res([]);
      });
    });
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