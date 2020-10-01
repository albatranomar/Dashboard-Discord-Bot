<template>
  <v-footer padless absolute>
    <v-card class="flex" flat tile>
      <v-card-text class="py-2 text-center">
        <span>
          © {{ new Date().getFullYear() }} {{$vuetify.lang.t("$vuetify.App.Footer.AllRightsReserved")}}.
        <strong>
          <span>{{ $vuetify.lang.t("$vuetify.App.Navbar.Logo.name") }}</span>
          <span>{{ $vuetify.lang.t("$vuetify.App.Navbar.Logo.bot") }}</span>
        </strong>
        </span>
        <v-spacer />
        <span>
          <router-link to="/about">{{$vuetify.lang.t("$vuetify.App.Footer.TermsOfUse")}}</router-link> - <router-link to="/about">{{$vuetify.lang.t("$vuetify.App.Footer.PrivacyPolicy")}}</router-link> - <router-link to="/about">{{$vuetify.lang.t("$vuetify.App.Footer.RefundPolicy")}}</router-link>
        </span>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "app-o-footer"
};
</script>
