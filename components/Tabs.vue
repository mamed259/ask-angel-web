<template>
<div class="max-w-[1352px] px-20 py-20 mx-auto">
  <Heading variant="h2" class="text-center z-10">
    Sustainable Change <br>One Goal at a Time
  </Heading>
  <p class="text-center text-primary text-xl">
    No pressure. Just progress. What can you achieve?
  </p>

  <div class="tabs-container">
    <ul class="flex flex-wrap gap-4 justify-center mt-10 mb-8">
      <li
          v-for="(tab, index) in tabs"
          :key="index"
          :class="['tab-item border-2 border-primary px-6 py-3 font-founders text-sm font-semibold uppercase rounded-3xl transition-all cursor-pointer', { 'bg-primary text-white': selected === index }]"
          @click="selectTab(index)">
        {{ tab.label }}
      </li>
    </ul>
    <div class="p-10 bg-white rounded-[32px]">
      <div class="grid grid-cols-6 gap-20">
        <div class="col-span-3">
          <div class="bg-[#E3D899] p-12 rounded-[24px]"></div>
        </div>
        <div class="col-span-3">
          <Heading variant="h4" class="z-10">{{ currentTab.content.title }}</Heading>
          <p class="font-bold">{{ currentTab.content.description }}</p>
          <p class="">{{ currentTab.content.perex }}</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
import { ref, computed } from 'vue';

const tabs = [
  {
    label: 'weight loss',
    content: {
      title: 'Lose Weight the Healthy Way with Lifestyle Medicine',
      description: 'No crash diets. No guilt. Just science-backed, lasting change.',
      perex: 'Forget quick fixes. Our approach to weight loss is rooted in lifestyle medicine—focusing on habits that work with your\n' +
          'body, not against it. '
    },

  },
  { label: 'stress & anxiety', content: '<ul><li>Report A</li><li>Report B</li><li>Report C</li></ul>' },
  { label: 'Immunity improvement', content: '<p>Users: <strong>1,234</strong> | Sales: <strong>$56,789</strong></p>' },
  { label: 'alcohol & smoking', content: '<p>Admin panel settings and controls.</p>' },
  { label: 'Longeavity', content: '<p>Admin panel settings and controls.</p>' }
];

// Local state for selected tab index
const selected = ref(0);
// Computed current tab object
const currentTab = computed(() => tabs[selected.value]);

// Method to change selected tab
function selectTab(index) {
  selected.value = index;
}
</script>
<style scoped>

</style>
