<template>
  <div>
    <div class="d-flex justify-end">
      <v-btn class="ma-2 mr-0" color="primary" @click="back">{{$t("dashboard.buttons.back")}}</v-btn>
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
                :disabled="isEdit"
                outlined
                :label="$t('dashboard.table.ficha')"
                :placeholder="$t('dashboard.input.ficha')"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <p class="display-1 text--primary text-center" v-if="user">{{user.username}}</p>
            </v-col>
            <!-- Idade -->
            <v-col cols="12" sm="4">
              <v-card elevation="0" class="d-flex justify-end">
                <v-slider
                  v-model="form.idade"
                  :rules="rules.idade"
                  :label="$t('dashboard.table.idade')"
                  :hint="$t('dashboard.input.idade')"
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
                :label="$t('dashboard.table.nome')"
                :placeholder="$t('dashboard.input.nome')"
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
                :label="$t('dashboard.table.genero')"
                :placeholder="$t('dashboard.input.genero')"
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
                :label="$t('dashboard.table.sexo')"
                :placeholder="$t('dashboard.input.sexo')"
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
                :placeholder="$t('dashboard.input.personalidade')"
                :label="$t('dashboard.table.personalidade')"
                outlined
              ></v-textarea>
            </v-col>
            <!-- Poderes -->
            <v-col cols="12" sm="6">
              <v-textarea
                v-model="form.poderes"
                :placeholder="$t('dashboard.input.poderes')"
                :rules="rules.poderes"
                :label="$t('dashboard.table.poderes')"
                outlined
              ></v-textarea>
            </v-col>
            <!-- Gosta  -->
            <v-col cols="12" sm="6">
              <v-textarea
                v-model="form.gosta_de"
                :rules="rules.gosta_de"
                :label="$t('dashboard.table.gosta_de')"
                :placeholder="$t('dashboard.input.gosta_de')"
                outlined
              ></v-textarea>
            </v-col>
            <!-- Não Gosta -->
            <v-col cols="12" sm="6">
              <v-textarea
                v-model="form.nao_gosta_de"
                :rules="rules.nao_gosta_de"
                :label="$t('dashboard.table.nao_gosta_de')"
                :placeholder="$t('dashboard.input.nao_gosta_de')"
                outlined
              ></v-textarea>
            </v-col>
            <!-- História -->
            <v-col cols="12">
              <v-textarea
                v-model="form.historia"
                :rules="rules.historia"
                :label="$t('dashboard.table.historia')"
                :placeholder="$t('dashboard.input.historia')"
                outlined
              ></v-textarea>
            </v-col>
            <v-col cols="12" sm="12">
              <v-file-input
                v-model="form.image"
                :rules="rules.image"
                accept="image/png, image/jpeg, image/gif"
                :placeholder="$t('dashboard.input.image')"
                outlined
                append-icon="mdi-camera"
                :label="$t('dashboard.table.image')"
              ></v-file-input>
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions class="d-flex justify-end">
          <v-btn @click="resetForm" class="warning">{{$t("dashboard.buttons.reset")}}</v-btn>
          <v-btn class="mr-4 primary" @click="submit">{{$t("dashboard.buttons.send")}}</v-btn>
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
        this.form.id_genero &&
        this.form.id_sexo &&
        this.form.personalidade &&
        this.form.gosta_de &&
        this.form.nao_gosta_de &&
        this.form.historia
      );
    },
    isEdit() {
      if (this.ficha) {
        return true;
      }
      return false;
    },
    ...mapGetters({
      user: "discord/user/get",
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
    this.initialize();
  },
  methods: {
    resetForm() {
      this.form = Object.assign({}, this.defaultForm);
      this.$refs.form.reset();
    },
    async submit() {
      // Quando o formulário for válido, faça a requisição
      console.log(this.form);
      if (this.$refs.form.validate()) {
        let formData = new FormData();
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
        if (this.form.image)
          formData.append("image", this.form.image, this.form.image.name);

        if (this.ficha) {
          try {
            const data = await this.post(`/api/v1/fichas`, formData);
            console.log(data);
            this.snackbar = true;
            this.sucessMessage = "Ficha editada com sucesso";
            this.scrollTop();
          } catch (e) {
            console.log(e);
          }
        } else {
          if (this.form.image) {
            try {
              const data = await this.post(`/api/v1/fichas`, formData);
              console.log(data);
              this.snackbar = true;
              this.sucessMessage = "Ficha criada com sucesso";

              this.scrollTop();
            } catch (e) {
              console.log(e);
            }
          } else {
            alert("Selecione uma imagem");
          }
        }
      }
    },
    scrollTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    async getSexo() {
      const res = await this.get(`/api/v1/sexo/`);

      if (res) this.sexos = res.data;
    },
    async getGenero() {
      const res = await this.get(`/api/v1/genero/`);

      if (res) this.generos = res.data;
    },
    initialize() {
      this.getSexo();
      this.getGenero();
      console.log(this.ficha);
    },
    back() {
      this.$router.push("/dashboard/fichas");
    }
  }
};
</script>