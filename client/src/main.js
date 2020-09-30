import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import config from "../config";

Vue.config.productionTip = false;

router.afterEach((to) => {
    Vue.nextTick(() => {
        document.title = `${config.WEBSITE_NAME}${(to.meta.title) ? ` - ${to.meta.title}`: ''}`;
    });
});

store.subscribe((_, state) => {
	localStorage.setItem('store', JSON.stringify(state));
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created: () => store.commit('init', store)
}).$mount("#app");
