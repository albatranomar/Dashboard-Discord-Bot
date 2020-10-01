<template>
  <div>
    Dashboard
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {

    }
  },
  beforeMount() {
    this.$store.dispatch('checkCurrentACAT').then((isIT) => {
      if (!isIT) {
        location.href = 'https://discord.com/api/oauth2/authorize?client_id=637579891000213525&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fdashboard%2Fauth&response_type=code&scope=identify%20guilds';
      }
    });
  }
}
</script>

<style>

</style>