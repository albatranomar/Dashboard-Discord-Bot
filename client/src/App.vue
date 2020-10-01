<template>
  <v-app>
      <app-o-navbar />

    <v-main>
      <transition>
        <router-view></router-view>
      </transition>
    </v-main>

    <app-o-footer />
  </v-app>
</template>

<script>
import AppONavbar from "./layouts/app-o-navbar";
import AppOFooter from "./layouts/app-o-footer";

export default {
  name: "App",
  components: {
    AppONavbar,
    AppOFooter
  },
  data() {
    return {
    };
  },
  methods: {},
  beforeMount() {
    let currentLang = this.$store.state.language.languages[this.$store.state.language.current];
    this.$vuetify.theme.dark = this.$store.state.theme.dark;
    this.$vuetify.lang.current = currentLang.key;
    this.$vuetify.rtl = currentLang.rtl;
  }
};
</script>

<style>
a {
  text-decoration: none;
}
</style>