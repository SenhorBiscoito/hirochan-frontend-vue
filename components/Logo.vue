<template>
  <div
    class="d-flex justify-center align-center"
    style="height: inherit; cursor: pointer"
    @click="changeRoute"
  >
    <img :src="imageLink.logo" alt="Vuetify.js" height="100%" />
    <!-- </v-toolbar-side-icon> -->
    <v-toolbar-title class="mx-0" v-text="title"></v-toolbar-title>
    <p>Beta</p>
  </div>
</template>

<script>
export default {
  props: {
    changeRoute: {
      type: Function
    },
    title: {
      type: String
    }
  },
  data() {
    return {
      imageLink: {
        logo: "/logo.png"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
</style>