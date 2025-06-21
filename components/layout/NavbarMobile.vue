<template>
    <div v-if="mobileMenuOpen" class="lg:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 border-t border-gray-200">
            <NuxtLink 
                v-for="link in navigationLinks" 
                :key="link.label"
                :to="`/${slugify(link.label)}`"
                class="flex items-center justify-start gap-x-1 text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-sans font-medium"
                @click="closeMobileMenu"
            >
                <NuxtIcon  :name="link.icon" filled />
                <p class="mb-0.5">{{ link.label }}</p>
            </NuxtLink>
            <NuxtLink to="/contact" @click="mobileMenuOpen = false">
                <button class="w-full mt-2 font-sans bg-primary hover:bg-primary/80 cursor-pointer text-background rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200">
                    CONTACT US
                </button>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import { navigationLinks } from './properties';
import { ref } from 'vue';
import { slugify } from '~/utils/slugify';

const mobileMenuOpen = defineModel('mobileMenuOpen')

const emit = defineEmits(['close'])

const closeMobileMenu = () => {
    mobileMenuOpen.value = false
    emit('close')
}
</script>