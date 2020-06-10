import Vue from 'vue'
import VueI18n from 'vue-i18n'
import FlagIcon from 'vue-flag-icon';

Vue.use(VueI18n)
Vue.use(FlagIcon);

Vue.config.lang = ''


// Vue.mixin({
//     watch: {
//         '$i18n.locale'(newLocale) {
//             this.$vuetify.lang.current = newLocale
//         }
//     }
// })


export default ({ app, store }) => {
    // Set i18n instance on app
    // This way we can use it in middleware and pages asyncData/fetch
    app.i18n = new VueI18n({
        locale: 'pt',
        fallbackLocale: 'pt',
        messages: {
            pt: require('~/locales/pt.json'),
            en: require('~/locales/en.json'),
            es: require('~/locales/es.json'),
        }
    })

    app.i18n.path = (link) => {
        if (app.i18n.locale === app.i18n.fallbackLocale) {
            return `/${link}`
        }

        return `/${app.i18n.locale}/${link}`
    }
}
