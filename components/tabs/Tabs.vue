<template>
<div class="max-w-[1352px] mx-auto py-30">
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
          :class="['tab-item border-2 border-primary px-6 py-3 font-founders text-sm font-semibold uppercase rounded-3xl transition-all cursor-pointer', { 'bg-primary text-white': selectedTab === index }]"
          @click="selectTab(index as TabUnions)">
        {{ index }}
      </li>
    </ul>
    <TabsContent :tab="tabs" :tabKey="selectedTab" />
  </div>
</div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import TabsContent from './TabsContent.vue';
import { tabs, type TabUnions } from './tabsData';





// Local state for selected tab index
const selectedTab = ref<TabUnions>("weight loss");
// Computed current tab object
const currentTab = computed(() => tabs[selectedTab.value]);

// Method to change selected tab
function selectTab(tabKey: TabUnions) {
  selectedTab.value = tabKey;
}
</script>
<style scoped>

</style>
