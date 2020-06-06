<template>
  <v-card class="mx-auto" elevation="10">
    <v-card-title>
      <h2 class="display-1">Fichas de {{session.username}}</h2>
      <v-spacer></v-spacer>
      <v-btn class="ma-2" tile color="indigo" outlined dark @click="newFicha">Nova Ficha</v-btn>
      <v-btn class="ma-2" tile outlined color="success" @click="editFicha">
        <v-icon left>mdi-pencil</v-icon>Edit
      </v-btn>
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
      :single-select="singleSelect"
      loading="true"
      loading-text="Loading... Please wait"
      item-key="name"
      show-select
      class="elevation-1"
    ></v-data-table>
    {{session}}
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  middleware: "authenticated",
  computed: {
    ...mapGetters({
      session: "session/get"
    })
  },
  async mounted() {
    try {
      const res = await this.axiosGet(`/api/v1/fichas/${this.session.id_user}`);
      let data = res.data[0].ficha;

      this.data = data;

      console.log(this.data);
    } catch (e) {
      this.loading = true;
      console.log(e);
    }
  },
  data() {
    return {
      singleSelect: true,
      loading: true,
      selected: [],
      search: "",
      headers: [
        {
          text: "Ficha",
          align: "start",
          sortable: true,
          value: "ficha"
        },
        { text: "Nome", value: "nome" },
        { text: "Idade", value: "idade" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
        { text: "Iron (%)", value: "iron" }
      ],
      data: []
    };
  },
  methods: {
    newFicha() {
      this.$router.push("/dashboard/ficha");
    },
    editFicha() {
      this.$router.push("/dashboard/ficha");
    }
  }
};
</script>