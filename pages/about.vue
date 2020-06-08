<template>
  <v-container grid-list-xl class="about">
    <v-layout row justify-center class="my-6">
      <v-flex xs12 sm6>
        <v-card class="elevation-0 transparent">
          <v-card-title primary-title class="layout">
            <h1 class="mb-2 display-2">Sobre mim 📝</h1>
          </v-card-title>
          <p class="display-1">
            Olá meu nome é Hirochan e eu sou apenas um bot para o discord feito pelo
            <a
              class="blue--text text--lighten-2"
              href="https://github.com/SenhorBiscoito"
            >Senhor Biscoito ●ω●</a>
          </p>
          <p
            class="display-1"
          >Gosto de lámen e assistir animes no meu tempo livre, para saber mais sobre mim você vai ter que descobrir</p>
          <v-flex justify-center>
            <div>
              <v-btn rounded color="primary" x-large dark>Me convide </v-btn>
            </div>
          </v-flex>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6>
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