<template>
  <div class="p-10 bg-white rounded-[32px]">
      <div class="flex gap-x-[75px]">
            <img
                :src="tab[tabKey].image" 
                alt="tab image" 
            class="w-[569px] h-[506px] object-contain rounded-[24px]"
            />
        <div class="flex flex-col justify-center">
          <Heading variant="h4" class="max-w-[355px] w-full z-10 mb-4">{{ tab[tabKey].title }}</Heading>
          <p class="max-w-[330px] w-full font-bold mb-6 text-base uppercase font-founders">{{ tab[tabKey].description }}</p>
          <p class="max-w-[500px] w-full text-lg font-medium font-founders" v-html="tab[tabKey].perex"></p>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import Heading from './Heading.vue';
import type { TabSchema, TabUnions } from './Tabs.vue';

const props = defineProps<{
    tab: TabSchema,
    tabKey: TabUnions
}>()
</script>