<template>
  <div class="flex flex-col md:flex-row items-center justify-start px-20 mx-auto gap-x-4 my-30">
    <PaginationDots :current="current" :total="props.content.length" :select="select" />
    <div class="ml-16 mr-10 overflow-hidden h-[440px]">
      <div 
        class="transition-transform duration-500 ease-in-out"
        :style="{ transform: `translateY(-${current * 440}px)` }"
      >
        <div v-for="(item, index) in props.content" :key="index" class="h-[440px] flex items-center justify-center">
          <NuxtImg :src="item.image" width="422" alt="Slider Image" class="h-[422px]" />
        </div>
      </div>
    </div>
    <SliderTextContent :author="props.content[current].author">
      <template #title>
        {{ props.content[current].title }}
      </template>
      <template #perex>
        <p v-html="props.content[current].perex" />
      </template>
    </SliderTextContent>
  </div>
</template>

<script setup lang="ts">


export interface SliderContentProps {
  title: string;
  perex: string;
  image: string;
  author: {
    name: string;
    text: string;
    image: string;
  };
}



const props = defineProps<{
    content: Array<SliderContentProps>;
}>();
const current = ref<number>(0);

const select = (index: number) => {
  current.value = index;
};
</script>