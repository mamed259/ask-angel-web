import tailwindcss from '@tailwindcss/vite'

type Locale = 'en' | 'cs' | 'de'

const defaultLocale: Locale = (process.env.DEFAULT_LOCALE as Locale) || (process.env.LOCALE as Locale) || 'en'
const enableDifferentDomains = process.env.ENABLE_DIFFERENT_DOMAINS === 'true'

// Debug of the locale being used
console.log('🌍 Default locale from .env:', process.env.DEFAULT_LOCALE || process.env.LOCALE)
console.log('🌍 Resolved default locale:', defaultLocale)
console.log('🌍 Enable different domains:', enableDifferentDomains)

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      locale: defaultLocale,
      enableDifferentDomains: enableDifferentDomains
    }
  },
  imports: {
    autoImport: true,
    dirs: [
      'components/**',
      'composables/**',
      'layouts/**',
      'pages/**',
      'utils/**',
      'types/**',
    ]
  },
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss() as any
    ]
  },
  modules: ['@nuxt/image','nuxt-icons', '@nuxtjs/i18n'],
  image: {
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
    densities: [1, 2, 3],
  },
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.json',
        domain: process.env.NUXT_PUBLIC_I18N_LOCALES_EN_DOMAIN
      },
      {
        code: 'cs',
        name: 'Czech',
        file: 'cs.json',
        domain: process.env.NUXT_PUBLIC_I18N_LOCALES_CS_DOMAIN
      },
      {
        code: 'de',
        name: 'German',
        file: 'de.json',
        domain: process.env.NUXT_PUBLIC_I18N_LOCALES_DE_DOMAIN
      }
    ],
    defaultLocale,
    lazy: true,
    langDir: 'locales',
    strategy: enableDifferentDomains ? 'no_prefix' : 'prefix',
    vueI18n: './i18n.config.ts',
    detectBrowserLanguage: enableDifferentDomains ? false : {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      alwaysRedirect: false,
      fallbackLocale: defaultLocale,
      cookieCrossOrigin: false,
      cookieDomain: null,
      cookieSecure: false
    },
    differentDomains: enableDifferentDomains
  }
})
