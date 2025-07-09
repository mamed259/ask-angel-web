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

export type TabUnions = "weight loss" | "stress & anxiety" | "immunity improvement" | "alcohol & smoking" | "longeavity"

export type TabSchema = Record<TabUnions, {
  title: string;
  description: string;
  perex: string;
  image: string;
}>

const tabs: TabSchema = {
  "weight loss": {
    title: 'Move with Purpose — Build a Fit, Resilient Body',
    description: 'No extreme workouts. No gym intimidation. Just joyful movement that lasts.',
    perex: `Forget cookie-cutter exercise plans. Our physical-activity program helps you discover movement that fits your lifestyle—whether that’s strength training, dance, hiking, or five-minute stretch breaks between meetings.<br><br>By combining personalized activity goals, gentle coaching, and smart tracking that celebrates progress (not perfection), you’ll boost energy, sharpen focus, and protect your heart for the long haul. It’s not about burning calories. It’s about celebrating what your body can do.`,
    image: 'images/tab-1.png'
  },
  "stress & anxiety": {
    title: 'Master Stress — Find Clarity in Chaos',
    description: 'No burnout. No overwhelm. Just practical tools for calm and clarity.',
    perex: 'Forget pretending stress doesn’t exist. We teach evidence-based techniques—mindful breathing, cognitive reframing, time-blocking, and micro-recovery—to transform stress from enemy to ally.<br><br>Smart prompts help you notice tension early, guided exercises release it, and habit loops build resilience you can feel. It’s not about becoming stress-free. It’s about mastering stress so it fuels growth.',
    image: '/images/tab-2.png'
  },
  "immunity improvement": {
    title: 'Strengthen Your Immunity — Defenses Built Daily.',
    description: 'No miracle pills. Lifestyle medicine for a resilient you.',
    perex: 'Forget quick-fix supplements. Real immune strength comes from balanced nutrition, consistent movement, restorative sleep, stress mastery, and positive social connections.<br><br>Our AI coach pinpoints gaps in your routine, suggests micro-actions (from fiber-rich meals to outdoor daylight breaks), and tracks biomarkers so you see tangible gains. It’s not about dodging every germ. It’s about building a body that’s ready for anything.',
    image: '/images/tab-3.png'
  },
  "alcohol & smoking": {
    title: 'Break Free from Addictions — with Compassionate Care',
    description: 'No shame. No cold-turkey pressure. Just proven strategies and support.',
    perex: 'Forget white-knuckling it alone. Whether you’re cutting back on nicotine, alcohol, sugar, or screen time, our approach blends cognitive-behavioral techniques, craving-tracking tools, community encouragement, and personalized coping plans.<br><br>By addressing root triggers—stress, habits, social cues—you’ll regain control, rebuild confidence, and discover healthier rewards. It’s not about willpower alone. It’s about compassionate change that lasts.',
    image: '/images/tab-4.png'
  },
  "longeavity": {
    title: 'Live Longer, Live Better — Add Quality Years',
    description: 'No secret fountain. No fads. Just habits that slow aging at the cellular level.',
    perex: 'Forget counting candles. Longevity is a sum of daily choices—nutrient-dense meals, movement variety, restorative sleep, purpose-driven living, and meaningful relationships.<br><br>Our app synthesizes the latest longevity research into doable micro-goals, tracks your biological-age markers, and celebrates every healthy year you add. It’s not about extending time. It’s about enriching it.',
    image: '/images/tab-5.png'
  }
}



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
