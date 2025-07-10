<template>
      <div class="max-w-[1352px] mx-auto py-30 flex items-center justify-between">
      <div class="max-w-[500px] flex flex-col items-start gap-y-12">
        <SectionHeader align="left">
          <template #title>
            {{ predictionCards[currentCardIndex].title }}
          </template>
          <template #subtitle>
            {{ predictionCards[currentCardIndex].subtitle }}
          </template>
        </SectionHeader>

        <PaginationDots 
        :current="currentCardIndex"
        :total="3"
        :select="selectCard"
        orientation="horizontal"
        />
      </div>
      <div class="flex flex-col items-start gap-y-12 relative">
        <div class="relative w-[668px] h-[668px] pt-4">
          <div 
            v-for="(card, index) in predictionCards" 
            :key="index"
            class="absolute w-full h-[668px] rounded-[32px] transition-all duration-700 ease-out origin-top cursor-pointer"
            :class="{
              'z-30 translate-y-0 scale-100 opacity-100 shadow-2xl': index === currentCardIndex,
              'z-20 -translate-y-4 scale-95 opacity-100 shadow-lg': index === (currentCardIndex + 1) % 3,
              'z-10 -translate-y-8 scale-90 opacity-100 shadow-md': index === (currentCardIndex + 2) % 3
            }"
            :style="{ backgroundColor: card.bgColor }"
            @click="selectCard(index)"
          >
            <div class="p-10 flex flex-col justify-between h-full">
              <button class="bg-secondary text-primary uppercase font-founders font-semibold text-base px-6 py-3 rounded-full cursor-pointer self-start transition-all hover:scale-105 hover:shadow-md">
                {{ card.buttonText }}
              </button>
              <p class="text-lg leading-relaxed">
                {{ card.content }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  predictionCards: {
    title: string;
    subtitle: string;
    content: string;
    bgColor: string;
    buttonText: string;
  }[];
}>();

const currentCardIndex = ref(0);

const selectCard = (index: number) => {
  currentCardIndex.value = index;
};
</script>