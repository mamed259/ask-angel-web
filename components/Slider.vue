<template>
  <div class="max-w-[304px] lg:max-w-[1352px] flex flex-col lg:flex-row items-center justify-start lg:px-20 mx-auto gap-x-4 my-10 lg:my-30">
    <!-- Mobile Layout (< 640px) -->
        <div class="lg:hidden w-full flex flex-col items-center h-[700px]">
       <div class="w-full flex flex-col items-center text-center h-[320px]">
         <SliderTextContent :author="props.content[current].author">
           <template #title>
             {{ props.content[current].title }}
           </template>
           <template #perex>
             <p v-html="props.content[current].perex" />
           </template>
         </SliderTextContent>
       </div>
             <div 
         class="overflow-hidden w-[304px] h-full lg:mb-8"
         @touchstart="handleTouchStart"
         @touchmove="handleTouchMove"
         @touchend="handleTouchEnd"
       >
         <div 
           class="transition-transform duration-500 ease-in-out flex"
           :style="{ transform: `translateX(-${current * 100}%)` }"
         >
           <div v-for="(item, index) in props.content" :key="index" class="w-[304px] h-full flex items-center justify-center flex-shrink-0">
             <img :src="item.image" alt="Slider Image" class="max-h-full max-w-full w-auto h-auto object-contain" />
           </div>
         </div>
       </div>
      <div class="mt-6 lg:mt-0">
        <PaginationDots 
          :current="current" 
          :total="props.content.length" 
          :select="select" 
          orientation="horizontal" />
      </div>
    </div>

    <!-- Desktop Layout (>= 640px) -->
    <div class="hidden lg:flex w-full items-center justify-start">
      <PaginationDots 
        :current="current" 
        :total="props.content.length" 
        :select="select" 
        :orientation="setOrientationByBreakpoint" />
      <div class="ml-16 mr-10 overflow-hidden h-[440px]">
        <div 
          class="transition-transform duration-500 ease-in-out"
          :style="{ transform: `translateY(-${current * 440}px)` }"
        >
          <div v-for="(item, index) in props.content" :key="index" class="h-[440px] flex items-center justify-center">
            <img :src="item.image" alt="Slider Image" class="max-h-full max-w-full w-auto h-auto object-contain" />
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
  </div>
</template>

<script setup lang="ts">
import { useBreakpoints } from '@vueuse/core'
import { computed } from 'vue'

const breakpoints = useBreakpoints({
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
  '3xl': 1920,
  '4xl': 2560,
})


export interface SliderContentProps {
  title: string
  perex: string
  image: string
  author: {
    name: string
    text: string
    image: string
  }
}



const props = defineProps<{
    content: Array<SliderContentProps>
}>()
const current = ref<number>(0)

const touchStartX = ref<number>(0)
const touchStartY = ref<number>(0)
const touchEndX = ref<number>(0)
const touchEndY = ref<number>(0)
const minSwipeDistance = 50

const handleTouchStart = (e: TouchEvent) => {
  touchStartX.value = e.changedTouches[0].screenX
  touchStartY.value = e.changedTouches[0].screenY
}

const handleTouchMove = (e: TouchEvent) => {
  e.preventDefault()
}

const handleTouchEnd = (e: TouchEvent) => {
  touchEndX.value = e.changedTouches[0].screenX
  touchEndY.value = e.changedTouches[0].screenY
  handleSwipe()
}

const handleSwipe = () => {
  const deltaX = touchEndX.value - touchStartX.value
  const deltaY = touchEndY.value - touchStartY.value
  
  if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
    if (deltaX > 0) {
      if (current.value > 0) {
        current.value--
      }
    } else {
      if (current.value < props.content.length - 1) {
        current.value++
      }
    }
  }
}

const select = (index: number) => {
  current.value = index
}

const setOrientationByBreakpoint = computed(() => {
  if (breakpoints.greater('md')) {
    return 'vertical'
  }
  return 'horizontal'
})
</script>