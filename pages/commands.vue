<template>
  <div>
    <!-- Ações -->
    <v-card class="mx-auto mt-5" max-width="75%">
      <v-card-title>
        <h2 class="display-1">Ações</h2>
      </v-card-title>
      <v-simple-table fixed-header height="300px">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-center">Comando</th>
              <th class="text-center">Descrição</th>
              <th class="text-center">Aliases</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in commands" :key="item.comando">
              <td>{{ item.comando }}</td>
              <td>{{ item.descricao }}</td>
              <td>{{ item.aliases }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>

    <!-- Fun -->
    <v-card class="mx-auto mt-5" max-width="75%">
      <v-card-title>
        <h2 class="display-1">Fun</h2>
      </v-card-title>
      <v-simple-table fixed-header height="300px">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-center">Comando</th>
              <th class="text-center">Descrição</th>
              <th class="text-center">Aliases</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in fun" :key="item.comando">
              <td>{{ item.comando }}</td>
              <td>{{ item.descricao }}</td>
              <td>{{ item.aliases }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>

    <!-- Info -->
    <v-card class="mx-auto mt-5" max-width="75%">
      <v-card-title>
        <h2 class="display-1">Info</h2>
      </v-card-title>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-center">Comando</th>
              <th class="text-center">Descrição</th>
              <th class="text-center">Aliases</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in info" :key="item.comando">
              <td>{{ item.comando }}</td>
              <td>{{ item.descricao }}</td>
              <td>{{ item.aliases }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>

    <!-- Moderação -->
    <v-card class="mx-auto mt-5" max-width="75%">
      <v-card-title>
        <h2 class="display-1">Moderação</h2>
      </v-card-title>
      <v-simple-table fixed-header height="300px">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-center">Comando</th>
              <th class="text-center">Descrição</th>
              <th class="text-center">Aliases</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in moderation" :key="item.comando">
              <td>{{ item.comando }}</td>
              <td>{{ item.descricao }}</td>
              <td>{{ item.aliases }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>

    <!-- Ficha -->
    <v-card class="mx-auto mt-5" max-width="75%">
      <v-card-title>
        <h2 class="display-1">Ficha</h2>
      </v-card-title>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-center">Comando</th>
              <th class="text-center">Descrição</th>
              <th class="text-center">Aliases</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in ficha" :key="item.comando">
              <td>{{ item.comando }}</td>
              <td>{{ item.descricao }}</td>
              <td>{{ item.aliases }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
  </div>
</template>

<script>
export default {
  layout: "landing",
  data() {
    return {
      commands: [
        {
          comando: "boop",
          descricao:
            "Cutuca alguma pessoa que você gosta (que não gosta tbm 😮)",
          aliases: "cutucar"
        },
        {
          comando: "cry",
          descricao:
            "Caso você esteja se sentindo triste, você pode usar esse comando 😢",
          aliases: "chorar, triste"
        },
        {
          comando: "cuddle",
          descricao: "Use esse comando para abraçar bem apertadinho alguém 🤗",
          aliases: "apertar"
        },
        {
          comando: "happy",
          descricao:
            "Está feliz? eu também fico por você, mostre para todo mundo esse seu sorriso lindo 😁",
          aliases: "feliz"
        },
        {
          comando: "hug",
          descricao:
            "Sai por aí abraçando seus amiguinhos, eu também adoro abraço e adoro quando usam em mim 🤗",
          aliases: "abraçar"
        },
        {
          comando: "kiss",
          descricao:
            "Parece que está esquentando do nada né? Você pode esquentar o chat usando usando esse comando e quem sabe esquente mais coisas 😏",
          aliases: "beijar"
        },
        {
          comando: "lick",
          descricao:
            "Você pode sair por aí lambendo as pessoas também, quem sabe elas te lambem de volta 🤷‍♀️",
          aliases: "lamber"
        },
        {
          comando: "sleep",
          descricao:
            "Use esse comando quando for nanar, você pode marcar uma pessoa para dormir juntinho dela também 😴",
          aliases: "dormir, soneca, cochilo"
        }
      ],
      fun: [
        {
          comando: "cat",
          descricao:
            "Manda uma foto bonitinha de um gatinho fofo (se você não gosta de gatinhos não fale comigo 😤)",
          aliases: "gato, gatinho, hirochan"
        },
        {
          comando: "chucknorris",
          descricao: "Manda uma curiosidade do Chucknorris a lenda",
          aliases: ""
        },
        {
          comando: "dog",
          descricao:
            "Para não deixar quem gosta de cachorro triste você pode chamar uma foto até que legalzinha de um dog 🤭",
          aliases: "cachorro"
        },
        {
          comando: "love",
          descricao:
            "Sabe se alguém te ama ou não? Veja o quanto a pessoa te ama marcando ela 🥰",
          aliases: "amor, ship"
        },
        {
          comando: "meme",
          descricao:
            "Quer ver algum meme e dar algumas risadas? Manda esse comando e vamos rir juntos 😄",
          aliases: ""
        },
        {
          comando: "rps",
          descricao:
            "Bora jogar pedra papel e tesoura, quem perder lava a louça 😂",
          aliases: ""
        }
      ],
      info: [
        {
          comando: "help",
          descricao:
            "Tem alguma dúvida sobre algum comando? É só usar help que eu te ajudo a usar 😊",
          aliases: "ajuda"
        },
        {
          comando: "instagram",
          descricao:
            "Está afim de ver o perfil de alguma pessoa? Use esse comando para mostrar para todo mundo essa pessoa que você quer ver 😉",
          aliases: ""
        },
        {
          comando: "ping",
          descricao:
            "Estou online ou é sua internet que está lenta? Use esse comando para descobrir 🤔",
          aliases: ""
        },
        {
          comando: "whois",
          descricao:
            "Você é stalker ou quer saber mais sobre alguém? Consigo saber tudo sobre ela! Use esse comando e marca ela para vermos quem é 😎",
          aliases: ""
        }
      ],
      moderation: [
        {
          comando: "ban",
          descricao:
            "Alguém no seu servidor aprontou feio? Não vai com a cara de alguém? Bata o martelo da justiça 😎",
          aliases: "banir"
        },
        {
          comando: "kick",
          descricao:
            "Use para aplicar uma punição mais leve é só expulsar a pessoa levada do seu servidor 😆",
          aliases: "banir"
        },
        {
          comando: "clear",
          descricao:
            "Muita sujeira no chat? Você pode apagar várias mensagens de mua vez digitando quantas mensagens você quer apagar 😮",
          aliases: "limpar, clean"
        },
        {
          comando: "prefix",
          descricao: `Por padrão meu prefix é "!", mas você pode trocar se quiser para qualquer outro usando esse comando`,
          aliases: ""
        },
        {
          comando: "report",
          descricao:
            "Deixe seus membro te ajudarem, caso alguém apronte é só eles usarem esse comando para denunciar quem andou aprontando 😱",
          aliases: "reportar, denunciar"
        }
      ],
      ficha: [
        {
          comando: "ficha",
          descricao:
            "Quer criar suas próprias fichas? É só usar esse comando para criar e depois usar quando for jogar RPG 😏",
          aliases: ""
        }
      ]
    };
  }
};
</script>
