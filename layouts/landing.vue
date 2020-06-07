<template>
  <v-app class="landing" light>
    <navbar-landing />
    <div class="dark">
      <nuxt />
    </div>
  </v-app>
</template>

<script>
import NavbarLanding from "~/components/NavbarLanding.vue";

export default {
  components: {
    NavbarLanding
  }
};
</script>

<style lang="css">
.h-100 {
  height: 100%;
}
.w-100 {
  width: 100%;
}
.landing .v-toolbar__content {
  padding: 0px !important;
}
a {
  text-decoration: none;
}
.tollbar-option {
  height: 100% !important;
  border-radius: 0px;
}
</style>
