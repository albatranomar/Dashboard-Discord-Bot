<template>
  <div v-if="navigationDrawerisDash">
    <v-navigation-drawer
      v-if="navigationDrawerisOpen"
      absolute
      permanent
      :right="$vuetify.rtl"
      width="100"
    >
      <v-list-item class="text-center rounded-circle my-4">
        <v-img
          class="rounded-circle"
          :src="
            `https://cdn.discordapp.com/avatars/${
              $store.getters.OAuthUser.id
            }/${$store.getters.OAuthUser.avatar}.${
              $store.getters.OAuthUser.avatar.startsWith('a_') ? 'gif' : 'webp'
            }`
          "
        ></v-img>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="guild in guilds"
          :key="guild.id"
          link
          class="text-center rounded-circle my-1"
        >
          <v-tooltip right>
            <template v-slot:activator="{ on, attrs }">
              <v-img
                v-if="!guild.icon"
                class="rounded-circle"
                src="https://cdn.discordapp.com/embed/avatars/0.png"
                v-bind="attrs"
                v-on="on"
              ></v-img>
              <v-img
                v-else
                class="rounded-circle"
                :src="
                  `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.${
                    guild.icon.startsWith('a_') ? 'gif' : 'webp'
                  }`
                "
                v-bind="attrs"
                v-on="on"
              ></v-img>
            </template>
            <span>{{ guild.name }}</span>
          </v-tooltip>
        </v-list-item>
        <v-list-item class="text-center rounded-circle my-1">
          <v-img class="rounded-circle"></v-img>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      guilds: []
    };
  },
  computed: {
    ...mapGetters(["navigationDrawerisDash", "navigationDrawerisOpen"])
  },
  mounted() {
    this.$store.dispatch("getUserGuild").then(gs => {
      this.guilds = gs;
    });
  }
};
</script>

<style>
</style>