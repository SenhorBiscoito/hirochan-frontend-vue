<template>
  <v-container fluid>
    <v-row v-for="(table, index) of tables" :key="index">

      <v-col cols="12">
        <v-row align="center" justify="center">
          <!-- Ações -->
          <v-card class="mt-5" max-width="75%">
            <v-card-title>
              <h2 class="display-1">{{table.title}}</h2>
            </v-card-title>
            <v-simple-table fixed-header>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-center" v-for="header in table.header" :key="header">{{header}}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in table.row" :key="item.comando">
                    <td>{{ item.comando }}</td>
                    <td>{{ item.descricao }}</td>
                    <td>{{ item.usage }}</td>
                    <td>{{ item.aliases }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: "landing",
  data() {
    return {
      tables: [
        {
          title: "Ações",
          header: ["Comando", "Descrição", "Usage", "Aliases"],
          row: [
            {
              comando: "boop",
              descricao:
                "Cutuca alguma pessoa que você gosta (que não gosta tbm 😮)",
              usage: "[command | mention]",
              aliases: "cutucar"
            },
            {
              comando: "cry",
              descricao:
                "Caso você esteja se sentindo triste, você pode usar esse comando 😢",
              usage: "[command]",
              aliases: "chorar, triste"
            },
            {
              comando: "cuddle",
              descricao:
                "Use esse comando para abraçar bem apertadinho alguém 🤗",
              usage: "[command | mention]",
              aliases: "apertar"
            },
            {
              comando: "happy",
              descricao:
                "Está feliz? eu também fico por você, mostre para todo mundo esse seu sorriso lindo 😁",
              usage: "[command]",
              aliases: "feliz"
            },
            {
              comando: "hug",
              descricao:
                "Sai por aí abraçando seus amiguinhos, eu também adoro abraço e adoro quando usam em mim 🤗",
              usage: "[command | mention]",
              aliases: "abraçar"
            },
            {
              comando: "kiss",
              descricao:
                "Parece que está esquentando do nada né? Você pode esquentar o chat usando usando esse comando e quem sabe esquente mais coisas 😏",
              usage: "[command | mention]",
              aliases: "beijar"
            },
            {
              comando: "lick",
              descricao:
                "Você pode sair por aí lambendo as pessoas também, quem sabe elas te lambem de volta 🤷‍♀️",
              usage: "[command | mention]",
              aliases: "lamber"
            },
            {
              comando: "sleep",
              descricao:
                "Use esse comando quando for nanar, você pode marcar uma pessoa para dormir juntinho dela também 😴",
              usage: "[command && command | mention]",
              aliases: "dormir, soneca, cochilo"
            }
          ]
        },
        {
          title: "Fun",
          header: ["Comando", "Descrição", "Usage", "Aliases"],
          row: [
            {
              comando: "cat",
              descricao:
                "Manda uma foto bonitinha de um gatinho fofo (se você não gosta de gatinhos não fale comigo 😤)",
              usage: "[command]",
              aliases: "gato, gatinho, hirochan"
            },
            {
              comando: "chucknorris",
              descricao: "Manda uma curiosidade do Chucknorris a lenda",
              usage: "[command]",
              aliases: ""
            },
            {
              comando: "dog",
              descricao:
                "Para não deixar quem gosta de cachorro triste você pode chamar uma foto até que legalzinha de um dog 🤭",
              usage: "[command]",
              aliases: "cachorro"
            },
            {
              comando: "love",
              descricao:
                "Sabe se alguém te ama ou não? Veja o quanto a pessoa te ama marcando ela 🥰",
              usage: "[command && command | mention]",
              aliases: "amor, ship"
            },
            {
              comando: "meme",
              descricao:
                "Quer ver algum meme e dar algumas risadas? Manda esse comando e vamos rir juntos 😄",
              usage: "[command]",
              aliases: ""
            },
            {
              comando: "rps",
              descricao:
                "Bora jogar pedra papel e tesoura, quem perder lava a louça 😂",
              usage: "command",
              aliases: ""
            }
          ]
        },
        {
          title: "Info",
          header: ["Comando", "Descrição", "Usage", "Aliases"],
          row: [
            {
              comando: "help",
              descricao:
                "Tem alguma dúvida sobre algum comando? É só usar help que eu te ajudo a usar 😊",
              usage: "[command | alias]",
              aliases: "ajuda"
            },
            {
              comando: "instagram",
              descricao:
                "Está afim de ver o perfil de alguma pessoa? Use esse comando para mostrar para todo mundo essa pessoa que você quer ver 😉",
              usage: "[command | account_name]",
              aliases: ""
            },
            {
              comando: "ping",
              descricao:
                "Estou online ou é sua internet que está lenta? Use esse comando para descobrir 🤔",
              usage: "[command]",
              aliases: ""
            },
            {
              comando: "whois",
              descricao:
                "Você é stalker ou quer saber mais sobre alguém? Consigo saber tudo sobre ela! Use esse comando e marca ela para vermos quem é 😎",
              usage: "[command | mention]",
              aliases: ""
            }
          ]
        },
        {
          title: "Moderação",
          header: ["Comando", "Descrição", "Usage", "Aliases"],
          row: [
            {
              comando: "ban",
              descricao:
                "Alguém no seu servidor aprontou feio? Não vai com a cara de alguém? Bata o martelo da justiça 😎",
              usage: "[command | mention | reason]",
              aliases: "banir"
            },
            {
              comando: "clear",
              descricao:
                "Muita sujeira no chat? Você pode apagar várias mensagens de mua vez digitando quantas mensagens você quer apagar 😮",
              usage: "[command | number_of_messages]",
              aliases: "limpar, clean"
            },
            {
              comando: "kick",
              descricao:
                "Use para aplicar uma punição mais leve é só expulsar a pessoa levada do seu servidor 😆",
              usage: "command | mention | reason",
              aliases: "banir"
            },
            {
              comando: "prefix",
              descricao: `Por padrão meu prefix é "!", mas você pode trocar se quiser para qualquer outro usando esse comando`,
              usage: "[command | new_prefix]",
              aliases: ""
            },
            {
              comando: "report",
              descricao:
                "Deixe seus membro te ajudarem, caso alguém apronte é só eles usarem esse comando para denunciar quem andou aprontando 😱",
              usage: "[command | mention | report]",
              aliases: "reportar, denunciar"
            },
            {
              comando: "say",
              descricao:
                "Eu consigo mandar qualquer mensagem por você, usa esse comando para se passar por mim 🤩",
              usage: "[command | mention | report]",
              aliases: "reportar, denunciar"
            }
          ]
        },
        {
          title: "RPG",
          header: ["Comando", "Descrição", "Usage", "Aliases"],
          row: [
            {
              comando: "ficha",
              descricao:
                "Quer criar suas próprias fichas? É só usar esse comando para criar e depois usar quando for jogar RPG 😏",
              usage: "[command || command ficha_name]",
              aliases: ""
            }
          ]
        }
      ]
    };
  }
};
</script>
