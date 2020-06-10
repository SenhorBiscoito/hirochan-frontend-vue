<template>
  <div class="d-flex flex-row-reverse w-100">
    <div v-for="entry in languages" :key="entry.title" class="mr-2">
      <v-btn class="deep-purple accent-2" @click="changeLocale(entry.language)">
        <flag :iso="entry.flag" v-bind:squared="false" />
        <!-- {{entry.title}} -->
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      languages: [
        { flag: "es", language: "es", title: "Español" },
        { flag: "br", language: "pt", title: "Portuguese" },
        { flag: "us", language: "en", title: "English" }
      ]
    };
  },
  methods: {
    changeLocale(locale) {
      this.$i18n.locale = locale;
      this.$vuetify.lang.current = locale;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>