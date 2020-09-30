<template>
  <v-app>
    <v-app-bar app center-active dark>
      <v-tabs>
        <v-tab v-for="route in routes" :key="route.path" :to="route.path">{{ route.name }}</v-tab>
      </v-tabs>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      routes: [],
    }
  },
  methods: {},
  beforeMount() {
    this.routes = this.$router.options.routes.map(r => {
      r.isActive = this.$router.history.current.name == r.name;
      return r;
    });
  }
};
</script>

<style>
a {
  text-decoration: none;
}
</style>