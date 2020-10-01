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
    this.$store.dispatch('checkCurrentACAT');
    console.log(this);
  }
}
</script>

<style>

</style>