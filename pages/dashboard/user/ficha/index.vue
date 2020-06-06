<template>
  <div>
    <div class="d-flex justify-end">
    <v-btn class="ma-2 mr-0" color="primary" @click="back">Voltar</v-btn>

    </div>

    <v-card class="mx-auto" elevation="10">
      <v-snackbar v-model="snackbar" absolute top right color="success">
        <span>{{sucessMessage}}</span>
        <v-icon dark>mdi-checkbox-marked-circle</v-icon>
      </v-snackbar>

      <v-form ref="form" @submit.prevent="submit">
        <v-container fluid>
          <v-row>
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
            <v-col cols="12" sm="4">
              <p class="display-1 text--primary text-center">{{session.username}}</p>
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
                v-model="form.id_genero"
                :items="generos"
                :rules="rules.id_genero"
                label="Genero"
                placeholder="Qual é o seu genero? 😮"
                item-text="nome"
                item-value="id_genero"
                required
              ></v-select>
            </v-col>
            <!-- Sexo -->
            <v-col cols="12" sm="4">
              <v-select
                v-model="form.id_sexo"
                :items="sexos"
                :rules="rules.id_sexo"
                outlined
                placeholder="Qual é o seu sexo? 😏"
                label="Sexo"
                item-text="nome"
                item-value="id_sexo"
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
                label="Poderes"
                outlined
              ></v-textarea>
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
                :rules="rules.historia"
                label="História"
                placeholder="Manda aí a história do seu personagem😎"
                outlined
              ></v-textarea>
            </v-col>
            <v-col cols="12" sm="12">
              <v-file-input
                v-model="form.image"
                :rules="rules.image"
                accept="image/png, image/jpeg, image/gif"
                placeholder="Foto do seu personagem 📸"
                outlined
                append-icon="mdi-camera"
                label="Avatar"
              ></v-file-input>
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions class="d-flex justify-end">
          <v-btn @click="resetForm" class="warning">Resetar</v-btn>
          <v-btn class="mr-4 primary" @click="submit">Enviar</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  middleware: "authenticated",
  created() {
    if (this.ficha) {
      const { id_genero } = this.ficha.genero[0];
      const { id_sexo } = this.ficha.sexo[0];

      this.form = Object.assign(
        {},
        { ...this.ficha, id_genero, id_sexo, image: null }
      );
    }
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
    },
    ...mapGetters({
      ficha: "ficha/get",
      session: "session/get"
    })
  },
  data() {
    const defaultForm = Object.freeze({
      ficha: "",
      nome: "",
      idade: 18,
      id_genero: "",
      id_sexo: "",
      historia: "",
      poderes: "",
      personalidade: "",
      gosta_de: "",
      nao_gosta_de: "",
      thumbnail: null,
      image: null,
      id_user: null
    });

    return {
      form: Object.assign({}, defaultForm),
      rules: {
        ficha: [val => (val || "").length > 0 || "Esse campo é obrigatório"],
        nome: [val => (val || "").length > 0 || "Esse campo é obrigatório"],
        idade: [val => val < 40 || `Mentiroso!`],
        id_genero: [val => (val || "") > 0 || "Esse campo é obrigatório"],
        id_sexo: [val => (val || "") > 0 || "Esse campo é obrigatório"],
        personalidade: [
          val => (val || "").length > 0 || "Esse campo é obrigatório"
        ],
        poderes: [val => (val || "").length > 0 || "Esse campo é obrigatório"],
        gosta_de: [val => (val || "").length > 0 || "Esse campo é obrigatório"],
        nao_gosta_de: [
          val => (val || "").length > 0 || "Esse campo é obrigatório"
        ],
        historia: [val => (val || "").length > 0 || "Esse campo é obrigatório"],
        image: [
          value =>
            !value ||
            (value.size < 1000000 && value != null) ||
            "Esse campo é obrigatório" ||
            "Foto deve ser menor que 1 MB!"
        ]
        // thumbnail: [
        //   value =>
        //     !value || value.size < 1000000 || "Foto deve ser menor que 1 MB!"
        // ]
      },
      generos: [],
      sexos: [],
      snackbar: false,
      sucessMessage: "Personagem registrado com sucesso!",
      defaultForm
    };
  },

  mounted() {
    (async () => {
      await this.getSexo();
      await this.getGenero();

      const urlParams = new URLSearchParams(window.location.search);
      const id_user = urlParams.get("id_user");
      const ficha = urlParams.get("ficha");
      this.form.id_user = id_user;

      // EDITAR FICHA
      if (ficha) {
        const result = await this.axiosGet(
          `/api/v1/caracteristicas/315901168679124992?ficha=Vitrex`
        );

        if (result) {
          const data = result.data[0];

          this.form = {
            ...data,
            id_genero: data.genero[0].id_genero,
            id_sexo: data.sexo[0].id_sexo
          };
          console.log(this.form);
        }
      }
    })();
  },
  methods: {
    resetForm() {
      this.form = Object.assign({}, this.defaultForm);
      this.$refs.form.reset();
    },
    async submit() {
      // Quando o formulário for válido, faça a requisição
      if (this.$refs.form.validate()) {
        if (this.form.image != null) {
          if (this.session.id_user != null) {
            let formData = new FormData();
            formData.append("image", this.form.image, this.form.image.name);
            formData.append("ficha", this.form.ficha);
            formData.append("id_user", this.session.id_user);
            formData.append("id_genero", this.form.id_genero);
            formData.append("id_sexo", this.form.id_sexo);
            formData.append("nome", this.form.nome);
            formData.append("gosta_de", this.form.gosta_de);
            formData.append("historia", this.form.historia);
            formData.append("idade", this.form.idade);
            formData.append("nao_gosta_de", this.form.nao_gosta_de);
            formData.append("personalidade", this.form.personalidade);
            formData.append("poderes", this.form.poderes);

            console.log(formData);

            try {
              const data = await this.axiosPost(`/api/v1/fichas`, formData);
              console.log(data);
              this.snackbar = true;
              this.scrollTop();
            } catch (e) {
              console.log(e);
            }
          } else {
            alert("Você precisa estar logado ;w;");
          }
        } else {
          alert("Você precisa escolher uma imagem para enviar");
        }
      }
    },
    scrollTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    async getSexo() {
      const res = await this.axiosGet(`/api/v1/sexo/`);

      if (res) this.sexos = res.data;
    },
    async getGenero() {
      const res = await this.axiosGet(`/api/v1/genero/`);

      if (res) this.generos = res.data;
    },
    back(){
      this.$router.push("/dashboard/user");
    }
  }
};
</script>