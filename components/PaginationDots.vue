<template>
  <div class="flex flex-col items-center justify-center gap-y-4 px-[21px] py-[32px] bg-secondary rounded-full">
        <button 
          v-for="i in total" 
          :key="i"
          @click="select(i - 1)"
          :class="[
            'size-[14px] rounded-full cursor-pointer transition-colors duration-200',
            (i - 1) === props.current ? 'bg-primary' : 'bg-primary/40 hover:bg-primary/60'
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
}

const props = defineProps<PaginationDotsProps>();

const select = (index: number) => {
  props.select(index);
}
</script>