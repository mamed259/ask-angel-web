export default defineNuxtPlugin(async () => {
  const { $i18n } = useNuxtApp()
  const localePath = useLocalePath()
  
  // Only run on CLIENT and if no language cookie exists
  if (import.meta.client && !useCookie('i18n_redirected').value) {
    try {
      // Get user's country from IP (FREE SERVICE API)
      const response = await fetch('https://ipapi.co/json/')
      const data = await response.json()
      
      // Map countries to languages
      const countryToLanguage: Record<string, string> = {
        'CZ': 'cs', // Czech Republic
        'SK': 'cs', // Slovakia (also use Czech)
        'DE': 'de', // Germany
        'AT': 'de', // Austria
        'CH': 'de', // Switzerland (German part)
        'US': 'en', // United States
        'GB': 'en', // United Kingdom
        'CA': 'en', // Canada
        'AU': 'en', // Australia
      }
      
      const detectedLanguage = countryToLanguage[data.country_code] || 'en'
      
      if (detectedLanguage !== $i18n.locale.value) {
        await navigateTo(localePath('/', detectedLanguage as 'en' | 'cs' | 'de'))
      }
    } catch (error) {
      console.log('Could not detect location, using browser language detection')
    }
  }
}) 