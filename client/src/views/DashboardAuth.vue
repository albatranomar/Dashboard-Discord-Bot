<template>
  <div></div>
</template>

<script>
export default {
  name: "DashboardAuth",
  data() {
    return {

    }
  },
  beforeMount() {
    let code = this.$route.query.code;
    if (code) {
      this.$store.dispatch('newAccessCode', code);
    } else {
      this.$router.push({ name: "Home" });
    }
  }
}
</script>

<style>

</style>