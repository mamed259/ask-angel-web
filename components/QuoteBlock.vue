<template>
  <div class="max-w-[1352px] mx-auto py-20 flex flex-col items-center justify-center">
    <Heading variant="h3" class="max-w-[1016px] mx-auto text-center">
      {{ quote }}
    </Heading>
    <NuxtIcon name="hr" filled class="text-[60px] mx-auto"  />
    <AuthorBadge :author="author" type="quote" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  quote: string;
  author: {
    name: string;
    image: string;
  };
}>();
</script>