<template>
  <div class="flex flex-col items-center justify-center py-[80px] overflow-hidden 3xl:overflow-visible">
    <div class="relative max-w-[1352px] mx-20 text-center">
      <div class="max-w-4xl mx-auto">
        <Heading variant="h1" class="mb-8">
          Get Your Lifetime<br>
          Health<NuxtIcon name="heart" filled class="inline-block w-16 h-16 mx-4" /> Companion
        </Heading>
        
        <p class="text-xl font-sans text-primary max-w-3xl mx-auto leading-relaxed mb-12 px-12">
          From sleep to stress, movement to mindset—our app puts every 
          piece&nbsp;of&nbsp;your health puzzle into context to help you achieve your 
          goals&nbsp;and&nbsp;live a healthier life.
        </p>
        
        <button class="bg-primary cursor-pointer text-background font-sans font-semibold text-lg px-12 py-5 rounded-full transition-colors duration-300 uppercase tracking-wide">
          I WANT THE APP
        </button>
      </div>
    <NuxtImg src="/images/hero-icon-research.svg" alt="Hero Icon" class="absolute bottom-9 -left-[30%] w-[125px]" />
    <NuxtImg src="/images/hero-icon-availability.svg" alt="Hero Icon" class="absolute top-[30%] -right-[35%] w-[184px]" />
    </div>
    <HeroCollage />
  </div>
</template>

<script setup lang="ts">

</script>