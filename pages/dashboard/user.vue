<template>
  <v-card class="mx-auto" elevation="10">
    <v-card-title>
      <h2 class="display-1">Fichas da usuário {{session.username}}</h2>
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
      item-key="name"
      show-select
      class="elevation-1"
    >
      <v-toolbar flat color="white">
        <v-toolbar-title>My CRUD</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark class="mb-2" v-on="on">New Item</v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">Teste</span>
          </v-card-title>
        </v-card>
      </v-toolbar>
    </v-data-table>
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
  watch: {
    session(newValue, oldValue) {
      (async () => {
        const res = await this.axiosGet(
          `/api/v1/fichas/${this.session.id_user}`
        );

        let data = res.data[0].ficha;
        for (let [index, item] of data.entries()) {
          // console.log(data[index].genero)
          data[index].genero = item.genero[index].nome;
          data[index].sexo = item.sexo[index].nome;

          console.log(data);
        }
        console.log(data);

        this.data = data;

        console.log(this.data);
      })();
    }
  },
  data() {
    return {
      singleSelect: true,
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
      data: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%"
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%"
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%"
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%"
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%"
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0%"
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2%"
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45%"
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "22%"
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%"
        }
      ]
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