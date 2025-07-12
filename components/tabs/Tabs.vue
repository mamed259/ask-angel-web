<template>
<div class="min-w-[320px] max-w-[361px] sm:max-w-[624px] xl:max-w-[1352px] mx-auto xl:mx-20 py-16 lg:py-30 2xl:mx-auto">
  <SectionHeader align="center" class="mb-10">
    <template #title>
      {{ locale === 'cs' ? 'Udržitelná změna.' : 'Sustainable Change' }} <br> {{ locale === 'cs' ? 'Krok za krokem.' : 'One Goal at a Time' }}
    </template>
    <template #subtitle>
      {{ locale === 'cs' ? 'Žádný stres. Jen výsledky. Co chceš změnit ty?' : 'No pressure. Just progress. What can you achieve?' }}
    </template>
  </SectionHeader>

  <div class="tabs-container">
    <ul class="flex flex-wrap gap-3 xl:gap-4 justify-center mt-10 mb-8">
      <li
          v-for="tabKey in Object.keys(tabs[locale as TabUnionsByLocale])"
          :key="tabKey"
          :class="['tab-item border-2 border-primary px-4 xl:px-6 py-2 xl:py-3 font-founders text-sm font-semibold uppercase rounded-3xl transition-all cursor-pointer', { 'bg-primary text-white': selectedTab === tabKey }]"
          @click="selectTab(tabKey as TabUnionsEn | TabUnionsCs)">
        {{ tabKey }}
      </li>
    </ul>
    <TabsContent :tab="currentTab" />
  </div>
</div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import TabsContent from './TabsContent.vue';
import { tabs, type TabUnionsEn, type TabUnionsCs, TabUnionsByLocale } from './tabsData';
import SectionHeader from '../SectionHeader.vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n()

const getInitialTabKey = () => {
  const localeTabs = tabs[locale.value as TabUnionsByLocale];
  return Object.keys(localeTabs)[0];
};

const selectedTab = ref<string>(getInitialTabKey());

watch(locale, () => {
  selectedTab.value = getInitialTabKey();
});

const currentTab = computed(() => {
  const localeTabs = tabs[locale.value as TabUnionsByLocale] as Record<string, any>
  // If the selected tab doesn't exist in current locale, use the first one
  const tabKey = localeTabs[selectedTab.value] ? selectedTab.value : Object.keys(localeTabs)[0];
  return localeTabs[tabKey];
});

function selectTab(tabKey: string) {
  selectedTab.value = tabKey;
}
</script>
<style scoped>

</style>
