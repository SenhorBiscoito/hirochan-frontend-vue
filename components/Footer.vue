<template>
  <v-footer class="blue darken-2 bottom footer">
    <v-layout row wrap align-center>
      <v-flex xs12 class="text-xs-center">
        <div class="white--text ml-3">
          Feito com
          <i class="fas fa-heart"></i>
          pelo <a class="blue--text text--lighten-2" href="https://github.com/SenhorBiscoito">Senhor Biscoito</a> © {{new Date().getFullYear()}}
        </div>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.footer{
  text-decoration: #64B5F6;
}

.bottom {
   position: absolute;
   left: 0;
   bottom: 0;
   width: 100%;
   z-index: 1;
}
</style>