import tailwindcss from '@tailwindcss/vite'

type Locale = 'en' | 'cs' | 'de'

const defaultLocale: Locale = (process.env.LOCALE as Locale) || 'en'

// Debug of the locale being used
console.log('🌍 Default locale from .env:', process.env.LOCALE)
console.log('🌍 Resolved default locale:', defaultLocale)

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      locale: defaultLocale
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
      tailwindcss()
    ]
  },
  modules: ['nuxt-icons', '@nuxt/image', '@nuxtjs/i18n'],
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.json'
      },
      {
        code: 'cs',
        name: 'Czech',
        file: 'cs.json'
      },
      {
        code: 'de',
        name: 'German',
        file: 'de.json'
      }
    ],
    defaultLocale,
    lazy: true,
    langDir: 'locales',
    strategy: 'prefix',
    vueI18n: './i18n.config.ts',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      fallbackLocale: defaultLocale
    }
  }
})