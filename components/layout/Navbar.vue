<template>
  <nav class="w-full px-5 xl:px-20">
    <div class="max-w-[1352px] mx-auto py-4">
      <div class="relative flex justify-between items-center h-16 mb-3 lg:mb-0">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <NuxtLink to="/">
            <img src="~/assets/icons/logo.svg" alt="Logo" class="h-14 w-auto" />
          </NuxtLink>
        </div>
        
        <!-- Navigation Links -->
        <ul class="hidden lg:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
          <li v-for="link in navigationLinks" :key="link.label">
            <NuxtLink :to="`/${slugify(link.label)}`" class="flex items-center justify-center gap-x-1 text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-sans font-medium transition-colors duration-200 cursor-pointer">
              <NuxtIcon v-if="link.icon" :name="link.icon" filled />
              <p class="mb-0.5">{{ link.label }}</p>
            </NuxtLink>
          </li>
        </ul>
        
        <!-- Contact Button -->
        <div class="relative flex-shrink-0 ms-auto">
            <!-- Desktop Contact Button -->
            <a href="#contact" class="hidden lg:inline-block bg-secondary cursor-pointer font-sans font-bold uppercase text-primary px-8 py-4 rounded-full text-base transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              {{ $t('navbar.contact').toUpperCase() }}
            </a>
            
            <!-- Mobile Menu Button -->
            <button @click="mobileMenuOpen = !mobileMenuOpen" class="lg:hidden bg-secondary cursor-pointer font-sans font-bold uppercase text-primary px-8 py-3 rounded-full text-base transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              {{ $t('navbar.menu').toUpperCase() }}
            </button>
        </div>
        <NavbarMobile 
          v-model:mobile-menu-open="mobileMenuOpen" 
          @close="closeMobileMenu" 
          class="lg:hidden absolute top-19 left-0 w-full z-10" 
          :navigation-links="navigationLinks"
          />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import NavbarMobile from './NavbarMobile.vue'
import { slugify } from '~/utils/slugify'

const mobileMenuOpen = ref(false)

const { t: $t } = useI18n()

type NavLinks = {
    label: string,
    icon?: string
    link?: string
}

const navigationLinks: NavLinks[] = [
    {
        label: $t('navbar.how-it-works'),
        icon: 'flower'
    },
    {
        label: $t('navbar.health'),
        icon: 'health'
    },
    {
        label: $t('navbar.couch'),
        icon: 'sun'
    }
]

const closeMobileMenu = () => {
    mobileMenuOpen.value = false
}
</script>