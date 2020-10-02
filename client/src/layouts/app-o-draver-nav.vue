<template>
  <div v-if="navigationDrawerisDash">
    <v-navigation-drawer v-if="navigationDrawerisOpen"
      absolute
      permanent
      :right="$vuetify.rtl"
      width="80"
    >
      <v-list-item class="text-center rounded-circle my-4">
        <v-img class="rounded-circle" :src="`https://cdn.discordapp.com/avatars/${$store.getters.OAuthUser.id}/${$store.getters.OAuthUser.avatar}.${($store.getters.OAuthUser.avatar.startsWith('a_')) ? 'gif' : 'webp'}`"></v-img>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
<!-- 
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content> -->
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "Account", icon: "mdi-account-box" },
        { title: "Admin", icon: "mdi-gavel" }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'navigationDrawerisDash',
      'navigationDrawerisOpen'
    ]),
  }
};
</script>

<style>
</style>