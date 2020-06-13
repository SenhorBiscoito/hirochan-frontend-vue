<template>
  <div light>
    <v-content>
      <section>
        <v-parallax
          :src="imageLink.sub_main"
          height="600"
          style="background-color: rgba(0, 0, 0, 0.9)"
        >
          <v-overlay class="overlay-main" :absolute="true" :value="true">
            <v-layout column align-center justify-center class="white--text">
              <h1 class="white--text mb-2 display-2 text-center">{{ $t('landing.home.maintitle') }}</h1>
              <div
                class="white--text subheading mb-3 text-xs-center"
              >{{ $t('landing.home.mainsub') }}</div>
            </v-layout>

            <v-layout column align-center justify-center class="my-6">
              <v-flex>
                <nuxt-link to="/dashboard">
                  <v-btn class="blue lighten-2" rounded dark x-large>
                    {{ $t('landing.home.login') }}
                    <v-icon class="ml-2">fas fa-sign-in-alt</v-icon>
                  </v-btn>
                </nuxt-link>

                <a
                  href="https://discord.com/api/oauth2/authorize?client_id=719946098780798986&permissions=8&redirect_uri=http%3A%2F%2Fhirochan.herokuapp.com%2Fauth%2Fredirect&scope=bot"
                >
                  <v-btn rounded color="primary" x-large dark>{{$t("landing.home.invite")}}</v-btn>
                </a>
              </v-flex>
            </v-layout>
          </v-overlay>
        </v-parallax>
      </section>

      <section class="features">
        <v-layout column wrap class="my-5" align-center>
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">{{ $t('landing.home.title') }}</h2>
              <span class="subheading">{{ $t('landing.home.sub') }}</span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4 v-for="(feature, index) of features" :key="index">
                  <v-card class="elevation-0 transparent feature">
                    <v-card-text class="text-xs-center">
                      <i :class="`${feature.icon} blue--text text--lighten-2`"></i>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div
                        class="headline text-xs-center"
                      >{{ $t(`landing.home.rpg.${feature.title}`) }}</div>
                    </v-card-title>
                    <v-card-text>{{$t(`landing.home.rpg.${feature.text}`)}}</v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>
    </v-content>
  </div>
</template>

<script>
export default {
  name: "App",
  layout: "landing",
  data: function() {
    return {
      imageLink: {
        main:
          "https://d.facdn.net/art/ranthfox/1501535705/1501535546.ranthfox_renamon_fanart.png",
        sub_main: "/sub_main.png",
        logo: "/logo.png",
        social_cover:
          "https://firebasestorage.googleapis.com/v0/b/endorfinevue.appspot.com/o/assets%2Fo-NIGHTCLUB-facebook.jpg?alt=media&token=cefc5c4c-9714-41da-9c22-f63caf5e89a4"
      },
      features: [
        {
          icon: "fas fa-comment-dots",
          title: "actions",
          text: "actions_msg"
        },
        {
          icon: "fas fa-dice",
          title: "rpg",
          text: "rpg_msg"
        },
        {
          icon: "fas fa-balance-scale",
          title: "moderation",
          text: "moderation_msg"
        }
      ]
    };
  }
};
</script>

<style scoped>
.overlay-main {
  padding-top: 10rem;
}
.features i {
  font-size: 40px;
}

.features .feature {
  min-height: 300px;
}
.finedTitle {
  font-weight: 900;
  text-shadow: 2px 2px #000000;
}

.social-icon {
  font-size: 21px;
  color: white;
}
</style>


