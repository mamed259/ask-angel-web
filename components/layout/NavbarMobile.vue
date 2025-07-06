<template>
    <div v-if="mobileMenuOpen" class="lg:hidden bg-white rounded-xl">
        <div class="p-6 space-y-20">
            <div class="flex flex-col gap-y-8">
                <NuxtLink 
                v-for="link in navigationLinks" 
                :key="link.label"
                :to="`/${slugify(link.label)}`"
                class="flex items-center justify-start gap-x-1 text-gray-700 hover:text-gray-900 text-base font-sans font-medium"
                @click="closeMobileMenu"
            >
                <NuxtIcon  
                v-if="link.icon"
                :name="link.icon" filled />
                <p class="mb-0.5">{{ link.label }}</p>
            </NuxtLink>
            </div>
            <div>
                <NuxtLink to="/contact" @click="mobileMenuOpen = false">
                <button class="w-[160px] mt-2 font-sans bg-secondary hover:bg-secondary/90 cursor-pointer text-primary rounded-full px-6 py-4 text-base font-bold transition-colors duration-200">
                    CONTACT US
                </button>
            </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { slugify } from '~/utils/slugify';

type NavLinks = {
    label: string,
    icon?: string
    link?: string
}

const mobileMenuOpen = defineModel('mobileMenuOpen')

const emit = defineEmits(['close'])

const { t: $t } = useI18n()

const navigationLinks: NavLinks[] = [
    {
        label: $t('navbar.how-it-works'),
        icon: 'flower'
    },
    {
        label: $t('navbar.health-made-fun'),
        icon: 'health'
    },
    {
        label: $t('navbar.your-personal-couch'),
        icon: 'sun'
    }
]

const closeMobileMenu = () => {
    mobileMenuOpen.value = false
    emit('close')
}
</script>