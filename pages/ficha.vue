<template>
  <v-card class="mx-auto" elevation="10">
    <v-card-text>
      <ValidationObserver ref="observer">
        <form>
          <ValidationProvider v-slot="{ errors }" name="Nome" rules="required|max:10">
            <v-text-field
              v-model="nome"
              :counter="10"
              :error-messages="errors"
              label="Nome"
              required
            ></v-text-field>
          </ValidationProvider>
          <ValidationProvider v-slot="{ errors }" name="Idade" rules="required|max:10">
            <v-text-field
              v-model="name"
              :counter="10"
              :error-messages="errors"
              label="Idade"
              required
            ></v-text-field>
          </ValidationProvider>

          <ValidationProvider v-slot="{ errors }" name="Gênero" rules="required|max:10">
            <v-text-field
              v-model="name"
              :counter="10"
              :error-messages="errors"
              label="Gênero"
              required
            ></v-text-field>
          </ValidationProvider>
          <v-btn class="mr-4" @click="submit">submit</v-btn>
          <v-btn @click="clear">clear</v-btn>
        </form>
      </ValidationObserver>
    </v-card-text>
  </v-card>
</template>

<script>
import { required, email, max } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode
} from "vee-validate";

export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data: () => ({
    nome: "",
    idade: "",
    genero: "",
    select: null
  }),

  methods: {
    submit() {
      this.$refs.observer.validate();
    },
    clear() {
      this.nome = "";
      this.idade = "";
      this.genero = "";
      this.$refs.observer.reset();
    }
  }
};
</script>