<template>
  <div class="elevation-6">
    <v-toolbar dense>
      <logo :changeRoute="goHome" :title="title" />

      <v-spacer></v-spacer>
      <v-toolbar-items>
        <nuxt-link to="/donate">
          <v-btn class="yellow lighten-3 tollbar-option">
            <i class="fas fa-piggy-bank"></i>Donate
          </v-btn>
        </nuxt-link>
        <nuxt-link to="/about">
          <v-btn class="green lighten-3 tollbar-option">
            <i class="far fa-newspaper"></i>Sobre
          </v-btn>
        </nuxt-link>
        <nuxt-link to="/commands">
          <v-btn class="red lighten-3 tollbar-option">
            <i class="fas fa-terminal"></i>Comandos
          </v-btn>
        </nuxt-link>
        <v-btn class="blue lighten-3" :href="`${baseUrl}/auth`">
          <i class="fas fa-sign-in-alt"></i>Painel de Controle
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
import Logo from "./Logo";
export default {
  components: {
    Logo
  },
  data() {
    return {
      title: "Hirochan ●ω●",
      baseUrl: process.env.baseUrl,
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
