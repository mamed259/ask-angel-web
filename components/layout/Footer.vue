<template>
  <footer class="w-full lg:pt-56 pt-32 pb-6 footer">
    <div class="max-w-[1352px] mx-auto">
      <div class="flex lg:items-end lg:h-16 justify-between flex-col lg:flex-row p-5">
        <div class="flex-shrink-0">
          <NuxtLink to="/">
            <img src="~/assets/icons/logo.svg" alt="Logo" class="h-23 w-auto" />
          </NuxtLink>
        </div>
        
        <ul class="flex justify-between flex-col lg:flex-row items-baseline">
          <li class="flex items-center justify-center lg:mr-18 text-gray-700 hover:text-gray-900 py-2 text-sm font-sans font-light transition-colors duration-200">
              © Ask Angel {{ new Date().getFullYear() }}
          </li>
          <li class="lg:mr-10">
            <ul class="flex gap-x-6 flex-col lg:flex-row items-baseline">
              <li v-for="link in footerLinks.slice(0, 3)" :key="link.label">
                <NuxtLink :to="`/${slugify(link.label)}`" class="flex items-center justify-center gap-x-1 text-gray-700 hover:text-gray-900 py-2 text-sm font-sans font-medium transition-colors duration-200 cursor-pointer">
                  <p class="mb-0.5">{{ link.label }}</p>
                </NuxtLink>
              </li>
            </ul>
          </li>
          <li class="lg:ml-24">
              <ul class="flex gap-x-6 flex-col lg:flex-row items-baseline">
              <li v-for="link in footerLinks.slice(3, 6)" :key="link.label">
                <NuxtLink :to="`/${slugify(link.label)}`" class="flex items-center justify-center gap-x-1 text-gray-700 hover:text-gray-900 py-2 text-sm font-sans font-medium transition-colors duration-200 cursor-pointer">
                  <p class="mb-0.5">{{ link.label }}</p>
                </NuxtLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { slugify } from '~/utils/slugify'

const { t: $t } = useI18n()

type NavLinks = {
    label: string,
    icon?: string
    link?: string
}

const footerLinks: NavLinks[] = [
    {   
        label: $t('footer.terms'),
    },
    {
        label: $t('footer.privacy'),
    },
    {
        label: 'Link Goes Here', // TODO: Add link
    },
    {
        label: 'Link Goes Here',
    },
    {
        label: 'Link Goes Here',
    },
    {
        label: 'Link Goes Here',
    }
]
</script>

<style lang="scss">
.footer{
  background: linear-gradient(180deg, rgba(255, 213, 166, 0.00) 0%, #FFD5A6 100%);
}
</style>