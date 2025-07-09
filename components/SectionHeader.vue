<template>
  <div :class="['flex flex-col justify-center', { 'items-center': align === 'center', 'items-start': align === 'left', 'items-end': align === 'right' }]">
    <Heading variant="h2" class="z-10" :class="align === 'left' ? 'text-left' : (align === 'right' ? 'text-right' : 'text-center')">
    <slot name="title" />
  </Heading>
  <p class=" text-primary text-base xl:text-[22px] font-founders font-light" :class="align === 'left' ? 'text-left' : (align === 'right' ? 'text-right' : 'text-center')">
    <slot name="subtitle" />
  </p>
  </div>
</template>

<script setup lang="ts">
import Heading from './Heading.vue';

withDefaults(defineProps<{
  align?: 'center' | 'left' | 'right';
}>(), {
  align: 'center',
});
</script>