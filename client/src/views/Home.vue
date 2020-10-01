<template>
  <v-container class="text-center">
    <h1 class="mt-4">Make A Professional Discord Server!</h1>
    <v-divider />
    <div class="text-center mt-4">
      <v-btn class="mx-2" color="light-green accent-4">
        <span>Add to Discord</span>
        <v-icon rigth>
          mdi-plus
        </v-icon>
      </v-btn>

      <v-btn to="/dashboard" exact link class="mx-2" color="purple darken-3">
        <span>Dashboard</span>
        <v-icon rigth>
          mdi-format-list-bulleted-square
        </v-icon>
      </v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {}
};
</script>
