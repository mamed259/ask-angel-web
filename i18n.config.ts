type Locale = 'en' | 'cs' | 'de'

export default defineI18nConfig(() => {
  const locale = (process.env.LOCALE as Locale) || 'en'
  
  // Debug: log the locale being used in i18n config
  console.log('🌍 i18n.config.ts - Using locale:', locale)
  
  return {
    legacy: false,
    locale,
  }
}) 