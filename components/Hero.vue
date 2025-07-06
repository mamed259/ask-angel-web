<template>
  <div class="flex flex-col items-center justify-center pt-20 lg:py-40 overflow-hidden 3xl:overflow-visible">
    <div class="relative max-w-[1352px] mx-4 lg:mx-20 text-center">
      <div class="max-w-4xl mx-auto">
        <Heading variant="h1" class="mb-8">
          Get Your Lifetime<br>
          Health<NuxtIcon name="heart" filled class="inline-block size-8 lg:size-16 mx-4" /> Companion
        </Heading>
        
        <p class="text-base lg:text-xl font-sans text-primary max-w-3xl mx-auto leading-snug lg:leading-relaxed mb-6 lg:mb-12 lg:px-12">
          From sleep to stress, movement to mindset—our app puts every 
          piece&nbsp;of&nbsp;your health puzzle into context to help you achieve your 
          goals&nbsp;and&nbsp;live a healthier life.
        </p>
        
        <button class="bg-primary cursor-pointer text-background font-sans font-semibold text-base md:text-lg px-6 py-4 md:px-12 md:py-4 rounded-full transition-colors duration-300 uppercase tracking-wide">
          I WANT THE APP
        </button>
      </div>
    <img src="/images/hero-icon-research.svg" alt="Hero Icon" class="absolute bottom-9 -left-[30%] w-[125px] hidden lg:block" />
    <img src="/images/hero-icon-availability.svg" alt="Hero Icon" class="absolute top-[30%] -right-[35%] w-[184px] hidden lg:block" />
    </div>
    <HeroCollage />
  </div>
</template>

<script setup lang="ts">

</script>