<template>
  <div>
    <app-o-draver-nav />
  </div>
</template>

<script>
import appodravernav from "../layouts/app-o-draver-nav"

export default {
  name: "Dashboard",
  props: {
  },
  components: {
    'app-o-draver-nav': appodravernav
  },
  data() {
    return {
    };
  },
  beforeMount() {
    this.$store.dispatch("checkCurrentACAT").then(({ isIT, err }) => {
      if (!isIT) {
        console.log({ isIT, err });
        location.href = "https://discord.com/api/oauth2/authorize?client_id=637579891000213525&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fdashboard%2Fauth&response_type=code&scope=identify%20guilds";
      }
    });
  }
};
</script>

<style>
</style>