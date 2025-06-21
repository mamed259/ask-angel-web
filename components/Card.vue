<template>
  <div class="flex flex-col md:flex-row items-center justify-center gap-4 my-30 mx-5 xl:mx-20">
    <div
    v-for="(card, index) in cardContent"
    :key="index"
    class="max-w-[440px] max-h-[620px] pt-12 w-full h-full flex flex-col items-center justify-start overflow-y-hidden rounded-4xl relative"
    :style="{ backgroundColor: card.bgColor }"
  >
    <NuxtImg :src="card.image" alt="Card Image" />
    <div class="flex flex-col items-center justify-start">
        <Heading variant="h5" class="text-center z-10">{{ card.title }}</Heading>
        <p class="text-center">{{ card.perex }}</p>
    </div>
    
    <!-- Absolute gradient layer at bottom -->
    <span class="absolute bottom-0 left-0 right-0 h-52 z-10"
         :style="{ backgroundColor: card.bgColor }">
    </span>
    <span class="absolute bottom-50 left-0 right-0 h-32 z-10"
         :style="{ background: `linear-gradient(180deg, transparent 0%, ${card.bgColor} 100%)` }">
    </span>
    <div class="absolute bottom-4 left-0 right-0 h-52 z-10 px-8 flex flex-col gap-y-3 items-start justify-center">
        <Heading variant="h4" class="max-w-[300px] font-light">{{ card.title }}</Heading>
        <p class="font-sans text-xl font-light text-primary">{{ card.perex }}</p>
    </div>
  </div>
  </div>
</template>

<script setup lang="ts">
interface CardContent {
  title: string;
  perex: string;
  image: string;
  bgColor: string;
}

defineProps<{
  cardContent: CardContent[];
}>();
</script>