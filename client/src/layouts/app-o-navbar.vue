<template>
  <div>
    <v-app-bar app center-active>
      <v-app-bar-nav-icon
        v-if="$store.getters.navigationDrawerisDash"
        @click="toggleDashNavOpen"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>
        <span>{{ $vuetify.lang.t("$vuetify.App.Navbar.Logo.name") }}</span>
        <span>{{ $vuetify.lang.t("$vuetify.App.Navbar.Logo.bot") }}</span>
      </v-toolbar-title>
      <v-spacer />
      <v-tab to="/" exact link>{{
        $vuetify.lang.t("$vuetify.App.Navbar.Pages.Home.name")
      }}</v-tab>
      <v-tab to="/about" exact link>{{
        $vuetify.lang.t("$vuetify.App.Navbar.Pages.About.name")
      }}</v-tab>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on">
            <v-icon center>
              mdi-chevron-down
            </v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item @click="toggleTheme">
            Theme
            <v-icon v-if="!$vuetify.theme.dark" right>mdi-brightness-3</v-icon>
            <v-icon v-if="$vuetify.theme.dark" right>mdi-brightness-7</v-icon>
          </v-list-item>
          <v-list-item>
            <v-menu offset-y open-on-hover>
              <template v-slot:activator="{ on, attrs }">
                <span v-bind="attrs" v-on="on">
                  Languages
                  <v-icon right>
                    mdi-earth
                  </v-icon>
                  <v-icon right small>
                    mdi-chevron-down
                  </v-icon>
                </span>
              </template>
              <v-list>
                <v-list-item
                  v-for="(lang, index) in $store.getters.allLanguages"
                  :key="lang.key"
                  @click="changeLang(index)"
                >
                  <v-list-item-avatar class="rounded"
                    ><v-img :src="`/assets/images/${lang.flag_name}`"></v-img
                  ></v-list-item-avatar>
                  <v-list-item-title>{{ lang.lang_name }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "app-o-navbar",
  data() {
    return {};
  },
  methods: {
    changeLang(i) {
      this.$store.dispatch("setCurrentLanguage", i);
      location.reload();
    },
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      this.$store.dispatch("toggleTheme", this.$vuetify.theme.dark);
    },
    toggleDashNavOpen() {
      this.$store.dispatch('toggleNavigationDrawerisOpen')
    }
  },
};
</script>

<style>
</style>