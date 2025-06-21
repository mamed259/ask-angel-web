<template>
  <nav class="w-full">
    <div class="max-w-[1352px] mx-auto">
      <div class="flex items-end h-16 justify-between">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <NuxtLink to="/">
            <img src="~/assets/icons/logo.svg" alt="Logo" class="h-23 w-auto" />
          </NuxtLink>
        </div>
        
        <!-- Navigation Links -->
        <ul class="hidden md:flex justify-between">
          <li class="flex items-center justify-center mr-18 text-gray-700 hover:text-gray-900 py-2 text-sm font-sans font-light transition-colors duration-200">
              © Ask Angel {{ new Date().getFullYear() }}
          </li>
          <li class="mr-10">
            <ul class="flex gap-x-6">
              <li v-for="link in footerLinks.slice(0, 3)" :key="link.label">
                <NuxtLink :to="`/${slugify(link.label)}`" class="flex items-center justify-center gap-x-1 text-gray-700 hover:text-gray-900 py-2 text-sm font-sans font-medium transition-colors duration-200 cursor-pointer">
                  <p class="mb-0.5">{{ link.label }}</p>
                </NuxtLink>
              </li>
            </ul>
          </li>
          <li class="ml-24">
              <ul class="flex gap-x-6">
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
  </nav>
</template>

<script setup lang="ts">
import { footerLinks } from './properties'
import { slugify } from '~/utils/slugify'


</script>