<template>
      <div class="min-w-[320px] max-w-[361px] sm:max-w-[624px] xl:max-w-[1352px] mx-auto xl:mx-20 py-16 lg:py-30 2xl:mx-auto flex items-center justify-between flex-col xl:flex-row">
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
        class="hidden lg:block"
        />
      </div>
      <div class="flex-col items-start gap-y-12 relative hidden lg:flex">
        <div class="relative w-[668px] h-[668px] pt-4">
          <div 
            v-for="(card, index) in predictionCards" 
            :key="index"
            class="absolute w-[668px] h-[668px] rounded-[32px] transition-all duration-700 ease-out origin-top cursor-pointer"
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
              <img :src="card.image" alt="" class="w-full py-5 max-w-[420px] mx-auto">
              <p class="text-lg leading-relaxed">
                {{ card.content }}
              </p>
            </div>
          </div>
        </div>
      </div>

        <div class="flex flex-col items-start gap-y-12 relative lg:hidden">
          <div class="relative w-full pt-4">
            <div
                v-for="(card, index) in predictionCards"
                :key="index"
                class=" w-full mt-10 rounded-[32px] transition-all duration-700 ease-out origin-top cursor-pointer"

                :style="{ backgroundColor: card.bgColor }"
            >
              <div class="p-10 flex flex-col justify-between h-full">
                <button class="bg-secondary text-primary uppercase font-founders font-semibold text-base px-6 py-3 rounded-full cursor-pointer self-start transition-all hover:scale-105 hover:shadow-md">
                  {{ card.buttonText }}
                </button>
                <img :src="card.image" alt="" class="w-full py-5">
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
    image: string
  }[];
}>();

const currentCardIndex = ref(0);

const selectCard = (index: number) => {
  currentCardIndex.value = index;
};
</script>