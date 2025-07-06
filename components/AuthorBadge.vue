<template>
  <div 
  class="flex items-center justify-start gap-x-4 rounded-full  lg:my-0 max-w-[332px]" 
  :class="[
    type === 'author' ? 'bg-white pl-2 pr-8 w-full' : 'text-primary',
    type === 'author' ? 'py-2 mt-4 mb-8 lg:mt-0 lg:mb-0' : 'py-2'
    ]"
  >
    <img :src="author.image" width="64" height="64" alt="Author Badge" class="w-[64px] h-[64px]" />
    <div class="flex flex-col items-start justify-center max-w-[212px] gap-y-0.5">
      <p class="text-sm lg:text-base font-primary font-sans uppercase font-semibold">
        {{ author.name }}
      </p>
      <span v-if="type === 'author'" 
      class="text-sm lg:text-base text-primary font-sans font-light leading-4.5 tracking-tight text-start" 
      v-html="author.text"/>
    </div>
  </div>
</template>

<script setup lang="ts">
type BadgeType = "author" | "quote";

defineProps<{
  author: {
    name: string;
    text?: string;
    image: string;
  };
  type: BadgeType;
}>();
</script>