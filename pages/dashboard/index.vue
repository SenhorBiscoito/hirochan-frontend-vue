<template>
  <v-card class="mx-auto" elevation="10" v-if="guilds">
    <v-card-title>
      <h2 class="display-1">{{$t("dashboard.servers.title")}}</h2>
    </v-card-title>
    <!-- GRID -->
    <v-flex xs12>
      <v-container grid-list-xl>
        <v-layout row wrap align-center>
          <v-flex xs12 md4 v-for="(guild, index) of guilds" :key="index">
            <!-- CARD COMPONENT -->
            <v-card class="mx-auto" max-width="400">
              <v-img
                class="white--text align-end"
                height="200px"
                :src="`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png?size=512`"
              >
                <v-card-title>{{guild.name}}</v-card-title>
              </v-img>

              <v-card-subtitle class="pb-0" v-if="guild.owner">{{$t("dashboard.servers.owner")}}</v-card-subtitle>
              <v-card-subtitle v-else>{{$t("dashboard.servers.adm")}}</v-card-subtitle>

              <v-card-actions>
                <v-btn color="orange" text>{{$t("dashboard.servers.config")}}</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  middleware: "authenticated",
  computed: {
    ...mapGetters({
      session: "session/get",
      guilds: "discord/guilds/get"
    })
  }
};
</script>
