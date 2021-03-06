<template>
  <v-card class="mx-auto" elevation="10">
    <v-card-title>
      <h2 class="display-1">{{$t("dashboard.table.title")}} {{user.username}}</h2>
      <v-spacer></v-spacer>
      <v-btn
        class="ma-2"
        tile
        color="indigo"
        outlined
        dark
        @click="newFicha"
      >{{$t("dashboard.table.new")}}</v-btn>
    </v-card-title>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Pesquisar"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="data"
      :search="search"
      loading="true"
      :loading-text="loadingText"
      item-key="_id"
      class="elevation-1"
    >
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
        <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  middleware: "authenticated",
  computed: {
    ...mapGetters({
      session: "session/get",
      user: "discord/user/get"
    }),
    headers() {
      return [
        {
          text: this.$i18n.t("dashboard.table.ficha"),
          align: "start",
          sortable: true,
          value: "ficha"
        },
        { text: this.$i18n.t("dashboard.table.nome"), value: "nome" },
        { text: this.$i18n.t("dashboard.table.idade"), value: "idade" },
        { text: this.$i18n.t("dashboard.table.sexo"), value: "nome_sexo" },
        { text: this.$i18n.t("dashboard.table.genero"), value: "nome_genero" },
        {
          text: this.$i18n.t("dashboard.table.opcoes"),
          value: "actions",
          sortable: false
        }
      ];
    }
  },
  async mounted() {
    this.initialize();
  },
  data() {
    return {
      loading: true,
      selected: [],
      search: "",
      loadingText: "Carregando suas fichas... Aguarde",

      data: [],
      editedIndex: -1,
      editedItem: {
        ficha: "",
        nome: "",
        idade: "",
        nome_sexo: "",
        nome_genero: ""
      }
    };
  },
  methods: {
    async initialize() {
      try {
        this.loading = true;
        const res = await this.get(
          `/api/v1/caracteristicas/${this.session.id_user}`
        );
        this.loading = false;

        if (res.data.length === 0) {
          this.loadingText = "Nenhuma ficha encontrada";
        }

        this.data = res.data;
      } catch (e) {
        this.loading = false;
        console.log(e);
      }
    },
    newFicha() {
      this.$store.commit("ficha/update", null);
      this.$router.push("/dashboard/fichas/ficha");
    },
    editItem(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editedItem = Object.assign({}, item);

      this.$store.commit("ficha/update", this.editedItem);
      this.$router.push("/dashboard/fichas/ficha");
    },
    async deleteItem(item) {
      const { ficha } = item;
      const { id_user } = this.session;
      const modal = await this.$swal({
        title: `Deletar ficha`,
        html: `Você tem certeza que quer me deletar? <br>Ficha: <b>${item.ficha}</b>`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "Deixa pra lá",
        confirmButtonText: "Sim, quero deletar"
      });

      if (modal.value) {
        const data = await this.delete(`/api/v1/fichas`, {
          id_user,
          ficha
        });

        if (data.status === 202) {
          this.initialize();
          this.$swal({
            title: `Deletada!`,
            html: `A ficha <b>${ficha}</b> foi deletada com sucesso`,
            icon: "success"
          });
        }
      }
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    }
  }
};
</script>