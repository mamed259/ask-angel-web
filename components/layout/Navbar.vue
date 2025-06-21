<template>
  <nav class="w-full">
    <div class="max-w-[1352px] mx-auto py-4">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <NuxtLink to="/">
            <img src="~/assets/icons/logo.svg" alt="Logo" class="h-14 w-auto" />
          </NuxtLink>
        </div>
        
        <!-- Navigation Links -->
        <ul class="hidden md:flex space-x-8">
          <li v-for="link in navigationLinks" :key="link.label">
            <NuxtLink :to="`/${slugify(link.label)}`" class="flex items-center justify-center gap-x-1 text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-sans font-medium transition-colors duration-200 cursor-pointer">
              <NuxtIcon :name="link.icon" filled />
              <p class="mb-0.5">{{ link.label }}</p>
            </NuxtLink>
          </li>
        </ul>
        
        <!-- Contact Button -->
        <div class="flex-shrink-0">
          <NuxtLink to="/contact">
            <button class="bg-secondary cursor-pointer font-sans font-bold uppercase text-primary px-8 py-5 rounded-full text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Contact us
            </button>
          </NuxtLink>
        </div>
        
        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 p-2">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      <NavbarMobile v-model:mobile-menu-open="mobileMenuOpen" @close="closeMobileMenu" />
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { navigationLinks } from './properties'
import NavbarMobile from './NavbarMobile.vue'
import { slugify } from '~/utils/slugify'

const mobileMenuOpen = ref(false)



const closeMobileMenu = () => {
    mobileMenuOpen.value = false
}
</script>