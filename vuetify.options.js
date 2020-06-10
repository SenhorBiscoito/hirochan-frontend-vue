import colors from "vuetify/es5/util/colors";

// Translation provided by Vuetify (javascript)
import pt from 'vuetify/es5/locale/pt'

// Translation provided by Vuetify (typescript)
import en from 'vuetify/es5/locale/en'

import es from 'vuetify/es5/locale/es'

// Your own translation file
// import sv from './i18n/vuetify/sv'

export default {
    customVariables: ["~/assets/variables.scss"],
    theme: {
        dark: false,
        themes: {
            dark: {
                primary: colors.blue.darken2,
                accent: colors.grey.darken3,
                secondary: colors.amber.darken3,
                info: colors.teal.lighten1,
                warning: colors.amber.base,
                error: colors.deepOrange.accent4,
                success: colors.green.accent3
            }
        }
    },
    icons: {
        iconfont: 'fa'
    },
    lang: {
        locales: { pt, en, es },
        current: 'pt',
    }
}
