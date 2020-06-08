<template>
  <v-app>
    <!-- SIDEBAR ITEMS -->
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- HEADER -->
    <v-app-bar class="blue darken-1" :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <logo :changeRoute="goDashboard" :title="title" />
      <v-spacer />

      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list v-if="user">
        <v-list-item class="justify-center d-flex">
          <!-- AVATAR -->
          <div>
            <v-avatar size="128">
              <img
                :src="`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`"
                alt="John"
              />
            </v-avatar>
          </div>
        </v-list-item>
        <v-list-item class="justify-center d-flex">{{user.username}}</v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- <v-footer :fixed="fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>-->
  </v-app>
</template>

<script>
import Logo from "../components/Logo";
import { mapGetters } from "vuex";
export default {
  components: {
    Logo
  },
  data() {
    return {
      clipped: true,
      drawer: true,
      fixed: true,
      items: [
        {
          icon: "fas fa-cogs",
          title: "Seus servidores",
          to: "/dashboard"
        },
        {
          icon: "mdi-chart-bubble",
          title: "User",
          to: "/dashboard/user"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Hirochan ●ω●"
    };
  },
  computed: {
    ...mapGetters({
      session: "session/get",
      user: "discord/user/get"
    })
  },
  mounted() {
    this.initialize();
  },
  methods: {
    initialize() {
      this.getUser();
      this.getGuild();
    },
    goDashboard() {
      this.$router.push("/");
    },
    async getUser() {
      try {
        const response = await this.discordGet(
          `/api/users/@me`,
          this.session.accessToken
        );

        this.$store.commit("discord/user/update", response.data);
      } catch (e) {
        return console.log(e);
      }
    },
    async getGuild() {
      try {
        const response = await this.discordGet(
          `/api/users/@me/guilds`,
          this.session.accessToken
        );

        const data = response.data.filter(item => {
          return item.owner || item.permissions == 2147483647;
        });

        this.$store.commit("discord/guilds/update", data);
      } catch (e) {
        return console.log(e);
      }
    }
  }
};
</script>
