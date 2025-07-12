<template>
  <div class="flex items-center justify-center gap-x-48 py-20 md:py-40 overflow-hidden 3xl:overflow-visible relative left-0 3xl:left-0">
        <img 
          width="327" 
          height="709"
          :src="`/images/hero-angel-sad-${locale}.png`" 
          alt="Hero Image" 
          class="hidden lg:block rotate-10 w-[327px] h-full"
        />
        <img 
          width="393" 
          height="852" 
          :src="`/images/hero-sun-happy-${locale}.png`" 
          alt="Hero Image" 
          class="w-[261px] md:w-[393px] h-full"
        />
        <img 
          width="360" 
          height="782" 
          :src="`/images/hero-angel-happy-${locale}.png`" 
          alt="Hero Image"
          class="hidden lg:block -rotate-8 relative top-[120px] w-[360px] h-full"
        />
      </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()


</script>