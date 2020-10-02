import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import config from "../config";

Vue.config.productionTip = false;

store.subscribe((_, state) => {
  let tosave = { ...state };
  delete tosave['navigationDrawer'];
	localStorage.setItem('store', JSON.stringify(tosave));
});

router.afterEach((to) => {
    Vue.nextTick(() => {
        document.title = `${config.WEBSITE_NAME}${(to.meta.title) ? ` - ${to.meta.title}`: ''}`;
        if (to.path.startsWith('/dashboard')) {
          store.dispatch('toggleNavigationDrawerisDash', true);
        } else {
          store.dispatch('toggleNavigationDrawerisDash', false);
        }
    });
});

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App),
  beforeCreate() { 
    store.commit('init', store)
  }
}).$mount("#app");
