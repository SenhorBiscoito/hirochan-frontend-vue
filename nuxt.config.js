
export default {
  mode: "spa",
  /*
   ** Headers of the page
   */
  // router: {
  //   // Run the middleware/user-agent.js on every page
  // middleware: 'i18n',
  // },
  head: {
    titleTemplate: "%s - " + process.env.npm_package_name,
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["sweetalert2/dist/sweetalert2.min.css", "@fortawesome/fontawesome-free/css/all.css", "~/css/main.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/helpers' },
    { src: '~/plugins/i18n.js' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/vuetify"],
  /*
   ** Nuxt.js modules
   */
  modules: ['vue-sweetalert2/nuxt'],

  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    optionsPath: './vuetify.options.js'
  },
  env: {
    baseUrl: 'http://localhost:8080',
    baseUrlFront: 'http://localhost:3000',

    // baseUrl: 'https://hirochan.herokuapp.com',
    // baseUrlFront: 'http://hirochan-website.s3-website-sa-east-1.amazonaws.com',
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) { }
  }
};
