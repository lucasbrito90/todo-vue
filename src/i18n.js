import en from './locales/en.json'
import pt from './locales/pt.json'
import fr from './locales/fr.json'
import {createI18n} from "vue-i18n";

const i18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        en: en,
        pt: pt,
        fr: fr
    }
})

export default i18n;
