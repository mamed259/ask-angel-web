<template>
  <component 
  :is="props.variant" 
  :class="`${headingVariants[props.variant]} ${$attrs.class}`"
  class="font-larken font-normal text-primary leading-[100%] tracking-tight"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">

const props = defineProps<{
    variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}>();

const headingVariants = {
    "h1": "text-[80px]",
    "h2": "text-[56px]",
    "h3": "text-[40px]",
    "h4": "text-[32px]",
    "h5": "text-lg",
    "h6": "text-base",
}
</script>