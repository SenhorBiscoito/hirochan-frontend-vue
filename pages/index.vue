<template>
  <div light>
    <v-content>
      <section>
        <v-parallax
          :src="imageLink.sub_main"
          height="600"
          color="rgb(255, 0, 0, 0.2)"
          style="background-color: rgba(0, 0, 0, 0.9)"
        >
          <v-overlay :absolute="true" :value="true">
            <v-layout column align-center justify-center class="white--text">
              <h1 class="white--text mb-2 display-2 text-center">O bot do discord que você precisa</h1>
              <div
                class="white--text subheading mb-3 text-xs-center"
              >Com grandes poderes vem grandes responsabilidades</div>
              <v-btn class="blue lighten-2 mt-5" dark large href="http://localhost:8080/auth">Logar</v-btn>
            </v-layout>
          </v-overlay>
        </v-parallax>
      </section>

      <section class="features">
        <v-layout column wrap class="my-5" align-center>
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">Transforme seu servidor em algo incrível</h2>
              <span class="subheading">Sem mais restrições, é você no poder!</span>
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
                      <div class="headline text-xs-center">{{feature.title}}</div>
                    </v-card-title>
                    <v-card-text>{{feature.text}}</v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>
      <!-- 
      <section>
        <v-parallax :src="imageLink.main" height="380">
          <v-layout column align-center justify-center>
            <div
              class="headline white--text mb-3 text-xs-center"
            >Endorfine is a social network that allows everyone to reach a huge audience with a tap</div>
            <em>With the power of Endorfine you don't need to be famous or post pics of cute cats in order to get visibility</em>
            <v-btn class="blue lighten-2 mt-5" dark large href="/pre-made-themes">Get more info</v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-parallax :src="imageLink.social_cover" height="380">
          <v-layout column align-center justify-center>
            <div
              class="headline white--text mb-3 text-xs-center"
            >We are dropping cool news and opportunities on socials</div>
          </v-layout>
          <v-layout justify-space-around justify-center>
            <v-icon x-large dark>fab fa-facebook-f</v-icon>

            <v-icon x-large dark>fab fa-twitter</v-icon>

            <v-icon x-large dark>fab fa-reddit-alien</v-icon>

            <v-icon x-large dark>fab fa-instagram</v-icon>

            <v-icon x-large dark>fab fa-discord</v-icon>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12 sm4>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Company info</div>
                </v-card-title>
                <v-card-text>We are not a company. We hate companies. Just imagine us like the guys from the Silicon Valley series.</v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">We are hiring</div>
                </v-card-title>
                <v-card-text>Are you a creative person? Do you like techy stuff? Complete the email form by writing your skills and interests</v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>

      <section>
        <v-container>
          <v-layout>
            <v-flex xs12 class="text-xs-center">
              <img height="200px" :src="imageLink.logo" />
            </v-flex>
          </v-layout>
        </v-container>
      </section>-->

      <v-footer class="blue darken-2">
        <v-layout row wrap align-center>
          <v-flex xs12 class="text-xs-center">
            <div class="white--text ml-3">
              Feito com
              <i class="fas fa-heart"></i>
              pelo Senhor Biscoito © {{new Date().getFullYear()}}
            </div>
          </v-flex>
        </v-layout>
      </v-footer>
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
      email: "",
      emailRules: [
        v => {
          return !!v || "E-mail is required";
        },
        v =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid"
      ],
      subscribed: false,
      baseUrl: process.env.baseUrl,
      features: [
        {
          icon: "fas fa-comment-dots",
          title: "Ações",
          text:
            "Você poderá interagir com outros membros do servidor através de ações, deixando seu servidor bombando e dando o poder das pessoas interagir como querem no discord"
        },
        {
          icon: "fas fa-dice",
          title: "RPG",
          text:
            "Comandos exclusivos de um sistema incrível de ficha de RPG, você vai poder criar suas fichas, mostrar para as pessoas, rodar dados e muito mais"
        },
        {
          icon: "fas fa-balance-scale",
          title: "Moderação",
          text:
            "Seja um deus todo poderoso ou um admin benevolente tendo poderes de moderação para botar ordem no seu servidor com comandos de banir, reportar e até quem não é admin poder denunciar alguém"
        }
      ]
    };
  },
  methods: {
    subscribe: function() {
      this.subscribed = !this.subscribed;
    }
  },

  computed: {
    imgHeight: function() {
      var offset = 320;
      console.log("new image height is " + (this.pageHeight - offset));
      return this.pageHeight - offset;
    }
  },

  mounted: function() {
    // this.calculateHeight();
  }
};
</script>

<style scoped>
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


