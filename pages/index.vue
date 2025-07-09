<template>
  <div class="">
    <Hero />
    <Slider :content="[
  {
    title: 'Personalized Health, Rooted in Science',
    perex: 'Because your body—and your journey—are uniquely yours. Health is never one-size-fits-all. It’s deeply personal, shaped by how you eat, move, sleep, manage stress, and connect with others.',
    image: '/images/circle-chart.png',
    author: {
      name: 'Jacob Smith',
      text: 'Works a demanding job and wants to manage stress better',
      image: '/images/author-badge.png',
    }
  },
  {
    title: 'Stress Health, Natural Growth',
    perex: 'Because your body—and your journey—are uniquely yours. Health is never one-size-fits-all. It’s deeply personal, shaped by how you eat, move, sleep, manage stress, and connect with others.',
    image: '/images/circle-chart-2.png',
    author: {
      name: 'Sarah Johanson',
      text: 'Works a demanding job and wants to manage stress better',
      image: '/images/author-badge.png',
    }
  },
  {
    title: 'Inner Peace, Meditation and Mindfulness Satisfactory',
    perex: 'Because your body—and your journey—are uniquely yours. Health is never one-size-fits-all. It’s deeply personal, shaped by how you eat, move, sleep, manage stress, and connect with others.',
    image: '/images/circle-chart-3.png',
    author: {
      name: 'Megan Porter',
      text: 'Works a demanding job and wants to manage stress better',
      image: '/images/author-badge.png',
    }
  }
    ]" />
    <QuoteBlock
    :quote="quoteContent.quote"
    :author="quoteContent.author"
    />
    <Card :cardContent="[
      {
        title: 'Achieve healthier lifestyle in a fun way',
        perex: 'Our interactive quests are designed to fit your lifestyle and help you create lasting, meaningful change — one step at a time.',
        image: '/images/card-1.png',
        bgColor: '#FFD5A6',
    },
    {
        title: 'Smart Predictions for Better Choices',
        perex: 'With help of AI, we predict short-term recovery tips and long-term health risks based on your data.',
        image: '/images/card-2.png',
        bgColor: '#E3D899',
    },
    {
        title: 'Your Coach at Your Disposal 24/7',
        perex: 'Your AI Angel is your personal guide—ready 24/7 to support your health journey and help you navigate your quests.',
        image: '/images/card-3.png',
        bgColor: '#99BFE3',
    },
    ]" />


    <Tabs/>

    <div class="max-w-[1352px] mx-auto my-30">
      <SectionHeader align="center">
        <template #title>
          Meet Your Angel: Coach <br>That trully Understands You
        </template>
        <template #subtitle>
          Real-time guidance. Emotional support. <br>Smarter decisions.
        </template>
      </SectionHeader>
      <div class="flex justify-center gap-x-4 mt-12">
        <span class="relative">
          <NuxtIcon name="angel" filled class="absolute -top-24 left-14 text-[270px]" />
          <img
          class="rounded-[32px] w-[668px] h-full" 
          src="/images/chat.png" 
          alt="chat" />
        </span>
        <div class="bg-white w-[668px] h-[485px] p-10 rounded-[32px] flex flex-col justify-between">
          <button class="bg-primary text-white uppercase font-founders font-semibold text-base px-6 py-3 rounded-full cursor-pointer self-start">
            start chatting &#8594;
          </button>
          <p>
            Health isn’t static—it’s a dynamic interplay of sleep, stress, nutrition, activity, and mental state. Our predictive engine continuously analyzes your biometric trends, behavior patterns, and contextual data to anticipate shifts in your physical and mental well-being—before symptoms manifest.
            <br>
            <br>
            It’s there to coach, comfort, and clarify—turning information into action, and motivation into momentum. No judgment. Just gentle, informed support that evolves with you.
          </p>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import Hero from '../components/Hero.vue';
import Slider from '../components/Slider.vue';
import QuoteBlock from '../components/QuoteBlock.vue';
import Card from '../components/Card.vue';
import Tabs from '../components/tabs/Tabs.vue';
import SectionHeader from '../components/SectionHeader.vue';

const quoteContent = {
  quote: "Health is outcome of many factors. We're the first app to unify all its drivers into one intelligent system—for lasting, evidence-based change.",
  author: {
    name: "Dr. Eric Placeholder",
    image: "/images/quote-person.png",
  },
}

</script> 
