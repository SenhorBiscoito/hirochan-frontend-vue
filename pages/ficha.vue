<template>
  <v-card class="mx-auto" elevation="10">
    <v-snackbar v-model="snackbar" absolute top right color="success">
      <span>Personagem registrado com sucesso!</span>
      <v-icon dark>mdi-checkbox-marked-circle</v-icon>
    </v-snackbar>

    <v-form ref="form" @submit.prevent="submit">
      <v-container fluid>
        <v-row>
          <v-col cols="12" sm="4">
            <p class="display-1 text--primary text-center">Ficha de RP</p>
          </v-col>
          <!-- Ficha -->
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="form.ficha"
              :rules="rules.ficha"
              outlined
              label="Ficha"
              placeholder="Digite o nome da sua ficha do discord 😉"
              required
            ></v-text-field>
          </v-col>
          <!-- Idade -->
          <v-col cols="12" sm="4">
            <v-card elevation="0" class="d-flex justify-end">
              <v-slider
                v-model="form.idade"
                :rules="rules.idade"
                label="Idade"
                hint="Seja honesto"
                min="10"
                max="50"
                :thumb-size="24"
                thumb-label="always"
              ></v-slider>
            </v-card>
          </v-col>
          <!-- Nome -->
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="form.nome"
              :rules="rules.nome"
              label="Nome"
              placeholder="Digite o nome do seu personagem 😀"
              outlined
              required
            ></v-text-field>
          </v-col>
          <!-- Genero -->
          <v-col cols="12" sm="4">
            <v-select
              outlined
              v-model="form.genero"
              :items="generos"
              :rules="rules.genero"
              label="Genero"
              placeholder="Qual é o seu genero? 😮"
              required
            ></v-select>
          </v-col>
          <!-- Sexo -->
          <v-col cols="12" sm="4">
            <v-select
              v-model="form.sexo"
              :items="sexos"
              :rules="rules.sexo"
              outlined
              placeholder="Qual é o seu sexo? 😏"
              label="Sexo"
              required
            ></v-select>
          </v-col>
          <!-- Personalidade -->
          <v-col cols="12" sm="6">
            <v-textarea
              v-model="form.personalidade"
              :rules="rules.personalidade"
              placeholder="Como seu personagem é? 🤔"
              label="Personalidade"
              outlined
            ></v-textarea>
          </v-col>
          <!-- Poderes -->
          <v-col cols="12" sm="6">
            <v-textarea
              v-model="form.poderes"
              placeholder="Você tem poderes? 😮"
              :rules="rules.poderes"
              outlined
            >
              <template v-slot:label>
                <div>
                  Poderes
                  <!-- <small>(optional)</small> -->
                </div>
              </template>
            </v-textarea>
          </v-col>
          <!-- Gosta  -->
          <v-col cols="12" sm="6">
            <v-textarea
              v-model="form.gosta_de"
              :rules="rules.gosta_de"
              label="Gostos"
              placeholder="Do que seu personagem gosta? 🤔"
              outlined
            ></v-textarea>
          </v-col>
          <!-- Não Gosta -->
          <v-col cols="12" sm="6">
            <v-textarea
              v-model="form.nao_gosta_de"
              :rules="rules.nao_gosta_de"
              label="Não gosta"
              placeholder="Do que seu personagem não gosta? 😱"
              outlined
            ></v-textarea>
          </v-col>
          <!-- História -->
          <v-col cols="12">
            <v-textarea
              v-model="form.historia"
              label="História"
              placeholder="Manda aí a história do seu personagem😎"
              outlined
            ></v-textarea>
          </v-col>
        </v-row>
      </v-container>
      <v-card-actions class="d-flex justify-end">
        <v-btn @click="resetForm" class="warning">Resetar</v-btn>
        <v-btn :disabled="!formIsValid" class="mr-4 primary" @click="submit">Enviar</v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
export default {
  data() {
    const defaultForm = Object.freeze({
      ficha: "",
      nome: "",
      idade: 18,
      genero: "",
      sexo: "",
      historia: "",
      poderes: "",
      personalidade: "",
      gosta_de: "",
      nao_gosta_de: "",
      thumbnail: "",
      image: ""
    });

    return {
      form: Object.assign({}, defaultForm),
      rules: {
        nome: [val => (val || "").length > 0 || "Esse campo é obrigatório"],
        idade: [val => val < 40 || `Mentiroso!`],
        genero: [val => (val || "").length > 0 || "Esse campo é obrigatório"],
        sexo: [val => (val || "").length > 0 || "Esse campo é obrigatório"],
        personalidade: [
          val => (val || "").length > 0 || "Esse campo é obrigatório"
        ],
        gosta_de: [val => (val || "").length > 0 || "Esse campo é obrigatório"],
        nao_gosta_de: [
          val => (val || "").length > 0 || "Esse campo é obrigatório"
        ],
        historia: [val => (val || "").length > 0 || "Esse campo é obrigatório"]
      },
      generos: [
        "Masculino",
        "Feminino",
        "Transgênero (Futa)",
        "Não binário",
        "Assexuado"
      ],
      sexos: [
        "Masculino",
        "Feminino",
        "Transgênero (Futa)",
        "Não binário",
        "Assexuado"
      ],
      defaultForm
    };
  },

  computed: {
    formIsValid() {
      return (
        this.form.nome &&
        this.form.idade &&
        this.form.genero &&
        this.form.sexo &&
        this.form.personalidade &&
        this.form.gosta_de &&
        this.form.nao_gosta_de &&
        this.form.historia
      );
    }
  },

  methods: {
    resetForm() {
      this.form = Object.assign({}, this.defaultForm);
      this.$refs.form.reset();
    },
    submit() {
      this.snackbar = true;
      this.resetForm();
    }
  }
};
</script>