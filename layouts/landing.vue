<template>
  <v-app class="landing" light>
    <navbar-landing />
    <div class="dark h-100">
      <nuxt style="height: ineirit"/>
    </div>
    <Footer />
  </v-app>
</template>

<script>
import NavbarLanding from "~/components/NavbarLanding.vue";
import Footer from "~/components/Footer.vue";
export default {
  components: {
    NavbarLanding,
    Footer
  }
};
</script>

<style lang="css">

.w-100 {
  width: 100%;
}
.landing .v-toolbar__content {
  padding: 0px !important;
}

.landing .container {
  padding-bottom: 3rem;
}
a {
  text-decoration: none;
}
.tollbar-option {
  height: 100% !important;
  border-radius: 0px;
}
</style>
