<template>
  <div class="elevation-6">
    <v-toolbar dense>
      <nav-flags />
    </v-toolbar>
    <v-toolbar>
      <logo :changeRoute="goHome" :title="title" />

      <v-spacer></v-spacer>
      <v-toolbar-items class="d-none d-md-inline-flex navbar">
        <nuxt-link to="/about">
          <v-btn class="green lighten-3 tollbar-option">
            <v-icon class="mr-2">fas fa-clipboard</v-icon>
            {{$t("landing.navbar.about")}}
          </v-btn>
        </nuxt-link>
        <nuxt-link to="/commands">
          <v-btn class="red lighten-3 tollbar-option">
            <v-icon class="mr-2">fas fa-terminal</v-icon>
            {{$t("landing.navbar.commands")}}
          </v-btn>
        </nuxt-link>
        <nuxt-link to="/dashboard">
          <v-btn class="blue lighten-3">
            <v-icon class="mr-2">fas fa-cogs</v-icon>
            {{$t("landing.navbar.control")}}
          </v-btn>
        </nuxt-link>
      </v-toolbar-items>
      <v-toolbar-items>
        <v-btn class="d-md-none" icon @click.stop="rightDrawer = !rightDrawer">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <!--  -->
    <v-navigation-drawer
      class="d-flex flex-reverse"
      v-model="rightDrawer"
      :right="true"
      temporary
      fixed
    >
      <div class="d-flex flex-column-reverse">
        <div class="list-item">
          <nuxt-link to="/about">
            <v-btn class="green lighten-3 tollbar-option button-drawer">
              <v-icon class="mr-2">fas fa-clipboard</v-icon>
              {{$t("landing.navbar.about")}}
            </v-btn>
          </nuxt-link>
        </div>
        <div class="list-item">
          <nuxt-link to="/commands">
            <v-btn class="red lighten-3 tollbar-option button-drawer">
              <v-icon class="mr-2">fas fa-terminal</v-icon>
              {{$t("landing.navbar.commands")}}
            </v-btn>
          </nuxt-link>
        </div>
        <div class="list-item">
          <nuxt-link to="/dashboard">
            <v-btn class="blue lighten-3 button-drawer">
              <v-icon class="mr-2">fas fa-cogs</v-icon>
              {{$t("landing.navbar.control")}}
            </v-btn>
          </nuxt-link>
        </div>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
import i18n from "@/plugins/i18n";
import Logo from "~/components/Logo";
import NavFlags from "~/components/NavFlags";

export default {
  components: {
    Logo,
    NavFlags
  },
  data() {
    return {
      title: "Hirochan ●ω●",
      rightDrawer: false,
      baseUrlFront: process.env.baseUrlFront,
      imageLink: {
        logo: "/logo.png"
      }
    };
  },
  methods: {
    goHome() {
      this.$router.push("/");
    }
  }
};
</script>


<style lang="css">
.button-drawer {
  width: 100%;
}
.list-item {
  height: 50px;
}
div.navbar button {
  height: 100% !important;
  border-radius: 0px !important;
}
</style>