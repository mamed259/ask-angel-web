<template>
  <div class="flex items-center justify-center gap-y-4  bg-secondary rounded-full" 
  :class="[
    orientation === 'vertical' ? 'flex-col' : 'flex-row',
    orientation === 'vertical' ? 'gap-y-4' : 'gap-x-2 xl:gap-x-3',
    orientation === 'vertical' ? 'px-[21px] py-[32px]' : 'px-[24px] py-[16px]'
  ]">
        <button 
          v-for="i in total" 
          :key="i"
          @click="select(i - 1)"
          :class="[
            'rounded-full cursor-pointer transition-colors duration-200',
            (i - 1) === props.current ? 'bg-primary' : 'bg-primary/40 hover:bg-primary/60',
            orientation === 'vertical' ? 'size-[14px]' : 'size-[8px] xl:size-[12px]'
          ]"
          :aria-label="`Go to slide ${i}`"
        ></button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface PaginationDotsProps {
  current: number;
  total: number;
  select: (index: number) => void;
  orientation: 'horizontal' | 'vertical';
}

const props = defineProps<PaginationDotsProps>();

const select = (index: number) => {
  props.select(index);
}
</script>