import axios from 'axios';

const state = {
  isLogedIn: false,
  acat: null
};

const getters = {
  isLogedIn: state => state.isLogedIn,
  acat: state => state.acat,
};

const actions = {
  checkCurrentACAT() {
    if (this.acat) {
      axios.get(`http://localhost:9090/api/v1/users/${this.acat}`, {}).then((response) => {
        console.log(response);
      }).catch((err) => {
        console.error(err);
      })
    } else {
      location.href = `https://discord.com/api/oauth2/authorize?client_id=637579891000213525&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fdashboard%2Fauth&response_type=code&scope=identify%20guilds`;
    }
  },
  newAccessCode(context, code) {
    axios.post(`http://localhost:9090/api/v1/users`, { code }).then((response) => {
        console.log(response);
      }).catch((err) => {
        console.error(err);
      })
  }
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