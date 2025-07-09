<template>
  <div class="p-6 xl:p-10 bg-white rounded-[32px]">
      <div class="flex flex-col xl:flex-row gap-x-[75px]">
            <img
                :src="tab[tabKey].image" 
                alt="tab image" 
            class="max-w-[569px] w-full h-full rounded-[24px]"
            />
        <div class="flex flex-col justify-center">
          <Heading variant="h4" class="max-w-[260px] xl:max-w-[355px] w-full z-10 mb-4 mt-8 xl:mt-0">{{ tab[tabKey].title }}</Heading>
          <p class="max-w-[330px] w-full font-bold mb-6 text-xs xl:text-base uppercase font-founders">{{ tab[tabKey].description }}</p>
          <p class="max-w-[500px] w-full text-base xl:text-lg font-light font-founders" v-html="tab[tabKey].perex"></p>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import Heading from '../Heading.vue'
import type { TabSchema, TabUnions } from './tabsData'

const props = defineProps<{
    tab: TabSchema,
    tabKey: TabUnions
}>()
</script>