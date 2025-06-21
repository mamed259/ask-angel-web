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
  </div>
</template>

<script setup lang="ts">
import Hero from '../components/Hero.vue';
import Slider from '../components/Slider.vue';
import QuoteBlock from '../components/QuoteBlock.vue';
import Card from '../components/Card.vue';

const quoteContent = {
  quote: "Health is outcome of many factors. We're the first app to unify all its drivers into one intelligent system—for lasting, evidence-based change.",
  author: {
    name: "Dr. Eric Placeholder",
    image: "/images/quote-person.png",
  },
}

</script> 