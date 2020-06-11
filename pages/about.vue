<template>
  <v-container grid-list-xl class="about">
    <v-layout row justify-center class="my-6">
      <v-flex xs12 md6>
        <v-card class="elevation-0 transparent">
          <v-card-title primary-title class="layout">
            <h1 class="mb-2 display-2">
              {{ $t('landing.navbar.about') }}
              📝
            </h1>
          </v-card-title>
          <p class="display-1">
            {{ $t('landing.aboutme.p1') }}
            <a
              class="blue--text text--lighten-2"
              href="https://github.com/SenhorBiscoito"
            >Senhor Biscoito ●ω●</a>
          </p>
          <p class="display-1">{{ $t('landing.aboutme.p2') }}</p>
          <v-flex justify-center>
            <a href="https://discord.com/api/oauth2/authorize?client_id=719946098780798986&permissions=8&redirect_uri=http%3A%2F%2Fhirochan.herokuapp.com%2Fauth%2Fredirect&scope=bot">
              <v-btn rounded color="primary" x-large dark>{{$t("landing.home.invite")}}</v-btn>
            </a>
          </v-flex>
        </v-card>
      </v-flex>
      <v-flex xs12 md6>
        <v-img src="/chubby.png"></v-img>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  layout: "landing",
  data() {
    return {
      backgroundUrl: "/aquario.png"
    };
  }
};
</script>

<style lang="css" scoped>
.about {
  text-align: justify;
}
</style>