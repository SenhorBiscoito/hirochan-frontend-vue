

<template>
  <v-app>
    <v-content class="notfound h-100">
      <section class="h-100">
        <v-parallax
          src="/notfound.png"
          color="rgb(255, 0, 0, 0.2)"
          style="background-color: rgba(0, 0, 0, 0.9)"
        >
          <v-overlay :absolute="true" :value="true">
            <v-layout column align-center justify-center class="white--text">
              <h1
                class="white--text mb-2 display-2 text-center"
                v-if="error.statusCode === 404"
              >{{pageNotFound}}</h1>
              <h1 v-else class="white--text mb-2 display-2 text-center">{{otherError}}</h1>
              <div
                class="white--text subheading mb-3 text-xs-center"
              >A página não foi encontrada ou houve um erro no erro</div>
              <NuxtLink to="/">
                <v-btn class="blue lighten-2 mt-5" dark large>Voltar para HOME</v-btn>
              </NuxtLink>
            </v-layout>
          </v-overlay>
        </v-parallax>
      </section>
    </v-content>
  </v-app>
</template>


<script>
export default {
  layout: "empty",
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      pageNotFound: "404 Not Found",
      otherError: "Houve algum erro"
    };
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title
    };
  },
  beforeMount() {
    let html = document.querySelector("html");

    html.style.overflow = "hidden";
  },
  beforeDestroy(){
     let html = document.querySelector("html");

    html.style.overflow = "auto";
  }
  
};
</script>

<style scoped>
.h-100 {
  height: 100%;
}
h1 {
  font-size: 20px;
}
.v-parallax {
  height: 100% !important;
}
</style>

<style lang="css">
</style>
