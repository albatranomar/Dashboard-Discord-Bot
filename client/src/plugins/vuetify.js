import Vue from "vue";
import Vuetify from "vuetify/lib";

import en from "./locales/en";
import ar from "./locales/ar";

Vue.use(Vuetify);

export default new Vuetify({
  lang: {
    locales: { en, ar },
    current: 'en',
  }
});
