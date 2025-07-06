<template>
  <div class="flex flex-col items-center lg:items-start justify-center">
    <AuthorBadge :author="author" type="author" class="order-2 lg:order-none" />
    <Heading variant="h3" class="max-w-[330px] my-4 lg:my-8">
      <slot name="title" />
    </Heading>
    <p class="text-base lg:text-lg font-sans font-light lg:font-normal text-primary leading-6 tracking-tight max-w-[500px]">
      <slot name="perex" />
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  author: {
    name: string;
    text: string;
    image: string;
  };
}>();
</script>