<template>
  <section>
    <Hero />
    <Slider :content="sliderContent" />
    <QuoteBlock
    :quote="quoteContent.quote"
    :author="quoteContent.author"
    />
    <Card :cardContent="[
      {
        title: locale === 'cs' ? 'Začni žít zdravěji – a s radostí' : 'Achieve healthier lifestyle in a fun way',
        perex: locale === 'cs' ? 'Interaktivní a zábavné výzvy tě provedou malými změnami životního stylu s velkým dopadem. Krok za krokem, bez tlaku. Tak, aby to fungovalo dlouhodobě.' : 'Our interactive quests are designed to fit your lifestyle and help you create lasting, meaningful change — one step at a time.',
        image: '/images/card-1.png',
        bgColor: '#FFD5A6',
    },
    {
        title: locale === 'cs' ? 'Chytré předpovědi, lepší rozhodnutí' : 'Smart Predictions for Better Choices',
        perex: locale === 'cs' ? 'Díky AI umíme předpovídat krátkodobé tipy na regeneraci i dlouhodobá zdravotní rizika – podle tvých dat.' : 'With help of AI, we predict short-term recovery tips and long-term health risks based on your data.',
        image: '/images/card-2.png',
        bgColor: '#E3D899',
    },
    {
        title: locale === 'cs' ? 'Kouč, který je tu pro tebe 24/7' : 'Your Coach at Your Disposal 24/7',
        perex: locale === 'cs' ? 'Tvůj osobní průvodce – připravený tě podpořit kdykoli budeš potřebovat. Pomůže ti na tvé cestě ke zdraví a nasměruje tě v každé výzvě. Zajímá tě cokoliv o tvém zdraví? Zeptej se. ' : 'Your AI Angel is your personal guide—ready 24/7 to support your health journey and help you navigate your quests.',
        image: '/images/card-3.png',
        bgColor: '#99BFE3',
    },
    ]" />

     <Tabs/>
    <CardCarousel :predictionCards="predictionCards" />
      <div class="min-w-[320px] max-w-[361px] sm:max-w-[624px] xl:max-w-[1352px] mx-auto py-16 lg:py-30">

      <SectionHeader align="center">
        <template #title>
          Meet Your Angel: Coach <br>That trully Understands You
        </template>
        <template #subtitle>
          Real-time guidance. Emotional support. <br>Smarter decisions.
        </template>
      </SectionHeader>
      <div class="flex justify-center gap-4 mt-12 flex-col lg:flex-row">
        <span class="relative">
          <NuxtIcon name="angel" filled class="absolute -top-24 left-14 text-[270px]" />
          <img
          class="rounded-[32px] w-[668px] h-full" 
          src="/images/chat.png" 
          alt="chat" />
        </span>
        <div class="bg-white lg:w-[668px] lg:h-[485px] p-10 rounded-[32px] flex flex-col justify-between gap-5 lg:gap-0">
          <button class="bg-primary text-white uppercase font-founders font-semibold text-base px-6 py-3 rounded-full cursor-pointer self-start">
            start chatting &#8594
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

    <div
        :style="`background-image: url(${motivationImg})`"
    >
      <div
          class="min-w-[320px] max-w-[361px] sm:max-w-[624px] xl:max-w-[1352px] mx-auto py-16 lg:py-30 flex flex-col items-center">

        <Heading variant="h1" class="lg:text-[64px]! text-[32px]! font-light z-20">
          Motivation That Works:
        </Heading>
        <span class="flex items-center lg:space-x-20 space-x-10 relative">
        <NuxtIcon name="angel-award" filled class="absolute -top-5 lg:left-30 left-16 lg:text-[130px] text-[55px] z-10" />
        <p class="font-larken font-normal text-primary leading-[100%] tracking-tight text-center text-[40px] lg:text-[80px] z-30">Real</p>
        <p class="font-larken font-normal text-primary leading-[100%] tracking-tight text-center text-[40px] lg:text-[80px]">Rewards</p>
      </span>
        <p class="font-founders text-center text-base lg:text-[22px] font-light leading-[140%] mt-12 max-w-[770px] mx-auto">
          We take the mission fro your healthier lifestyle seriously. For the points you earn for your progress you can get health-boosting rewards—like discounts on fitness gear, healthy food, and more.
        </p>

        <div class="flex justify-center flex-wrap lg:gap-8 mt-12">
          <!-- First row: 2 blocks -->
          <div class="lg:flex gap-x-8">
            <div
                v-for="reward in rewards.slice(0, 2)" :key="reward.title"
                 class="lg:flex flex-col items-center flex-1 w-80 lg:w-auto mb-8 lg:mb-0">
              <div class="p-6 bg-white rounded-[32px] max-w-[424px] relative">
                <div class="absolute w-11 h-11 rounded-full flex items-center justify-center"
                     :class="reward.icon.class" :style="{ backgroundColor: reward.icon.bgColor }">
                  <NuxtIcon :name="reward.icon.name" filled class="text-[28px]" />
                </div>
                <Heading variant="h5" class="text-[24px]! font-light">
                  {{ reward.title }}
                </Heading>
                <p class="text-sm font-founders mt-2 font-light leading-[130%]">
                  {{ reward.description }}
                </p>
              </div>
            </div>
          </div>

          <!-- Second row: 3 blocks -->
          <div class="flex w-full lg:gap-8 flex-col lg:flex-row items-center">
            <div v-for="reward in rewards.slice(2)" :key="reward.title"
                 class="lg:flex flex-col items-center flex-1 w-80 lg:w-auto mb-8 lg:mb-0">
              <div class="p-6 bg-white rounded-[32px] max-w-[424px] relative">
                <div class="absolute w-11 h-11 rounded-full flex items-center justify-center"
                     :class="reward.icon.class" :style="{ backgroundColor: reward.icon.bgColor }">
                  <NuxtIcon :name="reward.icon.name" filled class="text-[28px]" />
                </div>
                <Heading variant="h5" class="text-[24px]! font-light">
                  {{ reward.title }}
                </Heading>
                <p class="text-sm font-founders mt-2 font-light leading-[130%]">
                  {{ reward.description }}
                </p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>


    <div
        :style="`background-image: url(${healthDataImg})`"
        class="bg-cover bg-bottom"

    >
      <div class="min-w-[320px] max-w-[361px] sm:max-w-[624px] xl:max-w-[1352px] mx-auto py-16 lg:py-30 pb-56 lg:pb-96 2xl:mx-auto flex items-center flex-col">
        <Heading variant="h1" class="lg:text-[72px]! text-[32px]! font-light z-20">
          Your Health Data
        </Heading>
        <span class="flex items-center lg:space-x-20 space-x-10 relative">
        <NuxtIcon name="lock" filled class="absolute -top-4 lg:left-35 left-17 lg:text-[100px] text-[55px] z-10" />
        <p class="font-larken font-normal text-primary leading-[100%] tracking-tight text-center text-[40px] lg:text-[80px] z-30">Fully</p>
        <p class="font-larken font-normal text-primary leading-[100%] tracking-tight text-center text-[40px] lg:text-[80px]">Protected</p>
      </span>
        <p class="font-founders text-center text-base lg:text-[22px] font-light leading-[140%] mt-6 max-w-[770px] mx-auto">
          We treat your personal health data with the highest level of security. Everything you share is encrypted, stored securely, and never sold. You stay in control of what’s tracked, what’s shared, and when it’s deleted. Because your trust is the foundation of everything we do.
        </p>
      </div>
    </div>

    <div class="min-w-[320px] max-w-[361px] sm:max-w-[624px] xl:max-w-[1010px] bg-white rounded-[32px] p-6 xl:px-10 xl:py-20  mx-auto my-30 relative mt-56">
      <img src="../assets/icons/fall.png" class="absolute top-[-100px] max-w-[365px]" alt="">
      <div class="flex flex-col xl:flex-row gap-x-[75px]">
        <div class="flex flex-col justify-center xl:max-w-[465px]">
          <Heading v-if="locale === 'cs'" variant="h2" class="w-full z-10 mb-4 mt-8 xl:mt-0">
            Zeptej se anděla <br/>
Startujeme letos na podzim.

          </Heading>
          <p v-if="locale === 'cs'" class="w-full text-xs xl:text-base font-founders">
            Chceš být mezi prvními a získat 3 měsíce Premium zdarma? Zanech svůj e-mail a dáme ti vědět, až bude aplikace připravená. Žádný spam. Žádné triky.
          </p>
          <Heading v-if="locale !== 'cs'" variant="h2" class="w-full z-10 mb-4 mt-8 xl:mt-0">
            Ask Angel <br> Lands this Fall
          </Heading>
          <p v-if="locale !== 'cs'" class="w-full text-xs xl:text-base font-founders">
            Want to be the first to know when we launch—and get 3 months of Premium for free? Leave your email, and we’ll send you one message when the app is ready. That’s it. No spam. No strings.
          </p>
        </div>
        <form
            @submit.prevent="submitFormSub"
            class="max-w-[372px] relative w-full mt-4 lg:mt-0">
          <input
              v-model="formSub.email"
              type="email" :placeholder="locale === 'cs' ? 'Zadej svůj e-mail' : 'Enter your email'" class="h-14 rounded-4xl bg-[#FAF3EB] border-0 outline-0 w-full px-6 font-founders">
          <div class="flex items-center mt-4">
            <input
              id="privacy-policy"
              type="checkbox"
              v-model="formSub.privacy"
              class="mr-2 w-5 h-5 rounded-xl border-gray-300"
              required
            >
            <label for="privacy-policy" class="text-xs xl:text-base font-founders select-none cursor-pointer">
              {{ locale === 'cs' ? 'Odkaz na zásady ochrany osobních údajů' : 'Privacy policy copy goes here' }}
            </label>
          </div>
          <button
              type="submit"
              class="bg-primary text-white uppercase font-founders font-semibold text-base px-4 py-2.5 rounded-full cursor-pointer absolute right-1.5 top-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M24.79 14.4355C22.8517 16.5247 17.74 20.8586 15.79 22.9355" stroke="#FAF3EB" stroke-width="2" stroke-linecap="round"/>
              <path d="M24.79 14.4355C23.832 13.559 16.8003 7.36371 15.7903 6.55683" stroke="#FAF3EB" stroke-width="2" stroke-linecap="round"/>
              <path d="M23.29 13.9355C21.9915 13.945 10.29 14.9355 2.29004 14.4355" stroke="#FAF3EB" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
          <p v-if="statusSub === 'success'" class="text-center text-green-600 mt-4">{{ locale === 'cs' ? 'Zpráva odeslána!' : 'Message sent successfully!' }}</p>
          <p v-else-if="statusSub === 'error'" class="text-center text-red-600 mt-4">{{ locale === 'cs' ? 'Nastala chyba. Zkuste to znovu.' : 'There was an error. Please try again.' }}</p>

        </form>

      </div>
    </div>


    <div class="min-w-[320px] max-w-[361px] sm:max-w-[670px] mx-auto my-30">
      <div class="grid grid-cols-3 pb-14">
        <div class="col-span-1 flex justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="150" height="28" viewBox="0 0 150 28" fill="none">
            <path d="M34.886 22.0289C32.5076 19.2541 28.7356 13.303 26.9264 10.4068C25.1171 7.51068 18.0502 13.9978 18.0502 13.9978C12.6493 17.9534 7.2884 23.2634 4.63951 26.036C3.78715 27.0139 2.29659 27.1197 1.31318 26.2723C0.329763 25.4249 0.223353 23.9431 1.07572 22.9654C3.99807 19.2918 10.4071 11.6884 16.5886 6.95105C20.2385 4.15395 23.9528 2.50088 26.9264 2.38486C28.5328 2.32807 30.1303 2.96415 31.6818 4.23255C34.0139 6.13892 36.3893 10.3064 39.0328 14.1789C39.9688 15.5502 40.9284 16.8899 42.0236 17.9521C42.8603 18.7637 43.7218 19.4676 44.7889 19.645C47.2523 20.063 49.2736 18.8622 51.1952 17.2231C54.6214 14.3009 57.6995 10.0612 60.9733 6.75455C64.0738 3.62231 67.3864 1.27582 71.1259 0.731263C74.6556 0.150362 77.1723 1.40153 79.2545 3.66188C81.1344 5.7023 82.5573 8.91987 84.2387 12.1377C85.7612 15.0519 87.4884 18.1093 91.1865 18.8649C94.12 19.5091 96.5417 18.6054 98.7579 17.1305C102.692 14.513 106.061 10.2873 109.682 6.91229C112.951 3.86538 116.428 1.45995 120.337 0.615513C122.205 0.211736 124.462 0.839744 126.756 2.92323C129.03 4.98761 131.85 9.05392 136.194 11.0273C138.475 12.0637 141.233 12.3988 144.631 11.2952C146.568 10.6534 148.664 11.6954 149.309 13.6204C149.955 15.5456 148.907 17.6296 146.97 18.2714C141.409 20.1508 136.875 19.5144 133.105 17.8576C128.603 15.8788 125.258 12.24 122.656 9.62998C119.715 6.67875 115.641 11.9412 113.313 14.3103C110.038 17.6436 106.801 21.2674 103.16 23.6809C99.1692 26.327 94.7327 27.6619 89.4658 26.4589C86.7709 25.8085 84.6107 24.5843 82.8502 22.9541C79.2114 19.5847 77.4282 14.3698 75.3796 10.4068C74.5497 8.80196 73.947 7.20354 72.1656 7.44985C68.7163 8.01325 66.137 11.2693 63.428 14.5569C60.0689 18.6339 56.7223 22.9705 52.8333 25.3509C50.0585 27.0492 47.0152 27.8336 43.5941 27.3674C40.2674 26.899 37.3426 24.8952 34.886 22.0289Z" fill="#FFD5A6"/>
          </svg>
        </div>
        <div class="col-span-1 flex justify-center">
          <Heading variant="h5" class="text-center z-10">
            {{ locale === 'cs' ? 'Nebo se nám rovnou ozvi' : 'Or just let us know' }} <br>
            {{ locale === 'cs' ? '' : 'if you have any questions' }}
          </Heading>
        </div>
        <div class="col-span-1 flex justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="150" height="28" viewBox="0 0 150 28" fill="none">
            <path d="M34.886 22.0289C32.5076 19.2541 28.7356 13.303 26.9264 10.4068C25.1171 7.51068 18.0502 13.9978 18.0502 13.9978C12.6493 17.9534 7.2884 23.2634 4.63951 26.036C3.78715 27.0139 2.29659 27.1197 1.31318 26.2723C0.329763 25.4249 0.223353 23.9431 1.07572 22.9654C3.99807 19.2918 10.4071 11.6884 16.5886 6.95105C20.2385 4.15395 23.9528 2.50088 26.9264 2.38486C28.5328 2.32807 30.1303 2.96415 31.6818 4.23255C34.0139 6.13892 36.3893 10.3064 39.0328 14.1789C39.9688 15.5502 40.9284 16.8899 42.0236 17.9521C42.8603 18.7637 43.7218 19.4676 44.7889 19.645C47.2523 20.063 49.2736 18.8622 51.1952 17.2231C54.6214 14.3009 57.6995 10.0612 60.9733 6.75455C64.0738 3.62231 67.3864 1.27582 71.1259 0.731263C74.6556 0.150362 77.1723 1.40153 79.2545 3.66188C81.1344 5.7023 82.5573 8.91987 84.2387 12.1377C85.7612 15.0519 87.4884 18.1093 91.1865 18.8649C94.12 19.5091 96.5417 18.6054 98.7579 17.1305C102.692 14.513 106.061 10.2873 109.682 6.91229C112.951 3.86538 116.428 1.45995 120.337 0.615513C122.205 0.211736 124.462 0.839744 126.756 2.92323C129.03 4.98761 131.85 9.05392 136.194 11.0273C138.475 12.0637 141.233 12.3988 144.631 11.2952C146.568 10.6534 148.664 11.6954 149.309 13.6204C149.955 15.5456 148.907 17.6296 146.97 18.2714C141.409 20.1508 136.875 19.5144 133.105 17.8576C128.603 15.8788 125.258 12.24 122.656 9.62998C119.715 6.67875 115.641 11.9412 113.313 14.3103C110.038 17.6436 106.801 21.2674 103.16 23.6809C99.1692 26.327 94.7327 27.6619 89.4658 26.4589C86.7709 25.8085 84.6107 24.5843 82.8502 22.9541C79.2114 19.5847 77.4282 14.3698 75.3796 10.4068C74.5497 8.80196 73.947 7.20354 72.1656 7.44985C68.7163 8.01325 66.137 11.2693 63.428 14.5569C60.0689 18.6339 56.7223 22.9705 52.8333 25.3509C50.0585 27.0492 47.0152 27.8336 43.5941 27.3674C40.2674 26.899 37.3426 24.8952 34.886 22.0289Z" fill="#FFD5A6"/>
          </svg>
        </div>
      </div>
      <form
          @submit.prevent="submitForm"
      class="mt-10">
        <div class="lg:grid lg:grid-cols-2 gap-2">
          <div class="col-span-1 mb-2 lg:mb-0">
            <input
                v-model="form.name"
                type="text" :placeholder="locale === 'cs' ? 'Jméno' : 'Your name'" class="h-14 rounded-3xl bg-white border-0 outline-0 w-full px-6">
          </div>
          <div class="col-span-1 mb-2 lg:mb-0">
            <input
                v-model="form.email"
                type="email" :placeholder="locale === 'cs' ? 'E-mail' : 'Your email'" class="h-14 rounded-3xl bg-white border-0 outline-0 w-full px-6">
          </div>
          <div class="col-span-2">
            <textarea
                v-model="form.message"
                :placeholder="locale === 'cs' ? 'Napiš, co máš na srdci…' : 'Write us whatever you have on your mind...'" class="h-56 rounded-3xl bg-white border-0 outline-0 w-full p-6"></textarea>
          </div>
        </div>
        <p class="text-center font-founders mt-2 flex flex-wrap justify-center items-center">
          {{ locale === 'cs' ? 'Obvykle odpovídáme do 24 hodin' : 'We typically respond within 24hrs' }}
          <img src="../assets/icons/like.png" class="h-4" alt="">
        </p>
        <button
            type="submit"
            class="bg-primary text-white uppercase font-founders font-semibold text-base px-32 py-3 rounded-full cursor-pointer self-start table mx-auto mt-4">
          {{ locale === 'cs' ? 'Odeslat' : 'send' }} &#8594
        </button>

        <p v-if="status === 'success'" class="text-center text-green-600 mt-4">{{ locale === 'cs' ? 'Zpráva odeslána!' : 'Message sent successfully!' }}</p>
        <p v-else-if="status === 'error'" class="text-center text-red-600 mt-4">{{ locale === 'cs' ? 'Nastala chyba. Zkuste to znovu.' : 'There was an error. Please try again.' }}</p>

      </form>
    </div>

  </section>
</template>

<script setup lang="ts">
import Hero from '../components/Hero.vue'
import Slider from '../components/Slider.vue'
import QuoteBlock from '../components/QuoteBlock.vue'
import Card from '../components/Card.vue'
import Tabs from '../components/tabs/Tabs.vue'
import SectionHeader from '../components/SectionHeader.vue'
import Heading from "~/components/Heading.vue"
import { ref } from 'vue'
import motivationImg from '@/assets/icons/motivation.png'
import healthDataImg from '@/assets/icons/health-data.png'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const currentCardIndex = ref(0)

const predictionCards = [
  {
    id: 1,
    title: locale.value === 'cs' ? 'Predikce, které ti pomohou správně se rozhodovat' : 'Smart Predictions for Better Choices',
    subtitle: locale.value === 'cs' ? 'Umělá inteligence, která předvídá změny ve tvém zdraví. Analyzuje tvé tělesné signály i denní rytmus a pomáhá zachytit potíže dřív, než se stanou problémem.' : 'AI-driven predictions for short-term recovery and long-term health resilience.',
    bgColor: '#FFD5A6',
    buttonText: 'tell me more →',
    image: "/images/smart-1.png",
    content: locale.value === 'cs' ? "Zdraví není něco neměnného – je to neustálá souhra spánku, stresu, výživy, pohybu a psychické pohody. Náš prediktivní systém průběžně analyzuje tvé biometrické údaje které budeš chtít poskytnout, vzorce chování a data, aby dokázal včas odhalit změny ve tvé fyzické i duševní kondici – dřív, než se projeví jako příznaky. <br/><br/> " : "Health isn't static—it's a dynamic interplay of sleep, stress, nutrition, activity, and mental state. Our predictive engine continuously analyzes your biometric trends, behavior patterns, and contextual data to anticipate shifts in your physical and mental well-being—before symptoms manifest."
  },
  {
    id: 2,
    title: locale.value === 'cs' ? 'Chytré předpovědi, lepší rozhodnutí' : 'Your Health Data for Better Decisions',
    subtitle: locale.value === 'cs' ? 'Umělá inteligence, která předvídá změny ve tvém zdraví. Analyzuje tvé tělesné signály i denní rytmus a pomáhá zachytit potíže dřív, než se stanou problémem.' : 'We treat your personal health data with the highest level of security.',
    bgColor: '#E3D899',
    buttonText: 'discover insights →',
    image: "/images/smart-2.png",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat."
  },
  {
    id: 3,
    title: 'Real Rewards for Your Health',
    subtitle: 'We take the mission for your healthier lifestyle seriously.',
    bgColor: '#99BFE3',
    buttonText: 'learn more →',
    image: "/images/smart-3.png",
    content: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae Mauris viverra veniam sit amet lacus cursus, in vulputate mauris tempus. Proin congue erat non ex sodales, vel sodales nisl molestie. Integer placerat turpis quis ante venenatis, eu finibus nulla facilisis. Nulla facilisi."
  }
]

const rewards = [
  {
    title: "Healthy Food & Dining",
    description: "Organic grocery stores, natural products, plant-based and vegetarian options – from shopping baskets to restaurant plates, we support nutritious, wholesome eating.",
    icon: {
      name: "rewards/food",
      bgColor: "#FBAD72",
      class: "-top-6 right-20"
    },
  },
  {
    title: "Books & Educational Resources",
    description: "From novels to non-fiction, reading is nourishment for the mind. Enjoy discounts on books of all genres to support your personal growth and relaxation.",
    icon: {
      name: "rewards/brain",
      bgColor: "#72ADFB",
      class: "top-11 -right-6"
    },
  },
  {
    title: "Fitness & Sports Centers",
    description: "Gyms, yoga studios, dance and sports classes – because movement is essential for a healthy life.",
    icon: {
      name: "rewards/sport",
      bgColor: "#FBE072",
      class: "-top-5 right-20"
    },
  },
  {
    title: "Mindfulness & Wellbeing Services",
    description: "Meditation, mindfulness, therapy, coaching, and workshops for inner balance and emotional health.",
    icon: {
      name: "rewards/heart",
      bgColor: "#FFA2A2",
      class: "-bottom-8 right-40"
    },
  },
  {
    title: "Outdoor & Leisure Activities",
    description: "Health isn’t just about the gym – support for active outdoor lifestyles like hiking, cycling, or relaxing in nature.",
    icon: {
      name: "rewards/outdoor",
      bgColor: "#D4D672",
      class: "-top-5 -left-5"
    },
  },
]

const quoteContent = {
  quote: locale.value === 'cs' ? 'Můžete lidem říct, co mají dělat, a dokonce je naučit, jak to dělat – ale bez vedení a podpory si tyto znalosti a postupy nepřenesou do skutečné, trvalé změny.' : "Health is outcome of many factors. We're the first app to unify all its drivers into one intelligent system—for lasting, evidence-based change.",
  author: {
    name: locale.value === 'cs' ? 'Dr. Jessica Matthews, <br/> DBH, NBCHWC, DipACLM, FACLM' : "Dr. Eric Placeholder",
    image: "/images/quote-person.png",
  },
}

const form = ref({
  name: '',
  email: '',
  message: ''
})

const formSub = ref({
  email: '',
  privacy: false,
})

const status = ref('')
const statusSub = ref('')

const submitForm = async () => {
  try {
    const formData = new FormData()
    formData.append('name', form.value.name)
    formData.append('email', form.value.email)
    formData.append('message', form.value.message)
    formData.append('privacy', formSub.value.privacy.toString())

    const res = await fetch('https://formspree.io/f/mblynypl', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: formData
    })


    if (res.ok) {
      status.value = 'success'
      form.value = { name: '', email: '', message: '' }
    } else {
      status.value = 'error'
    }
  } catch (e) {
    status.value = 'error'
  }
}

const submitFormSub = async () => {
  try {
    const formData = new FormData()
    formData.append('email', formSub.value.email)

    const res = await fetch('https://formspree.io/f/xqabryed', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: formData
    })

    if (res.ok) {
      statusSub.value = 'success'
      formSub.value = { email: '', privacy: false }
    } else {
      statusSub.value = 'error'
    }
  } catch (e) {
    statusSub.value = 'error'
  }
}

const sliderContent = [
  {
    title: locale.value === 'cs' ? 'Zdraví na míru. Podložené vědou.' : 'Personalized Health, Rooted in Science',
    perex: locale.value === 'cs' ? 'Tvoje tělo je jedinečné – stejně jako tvoje cesta ke zdraví. Neexistuje univerzální recept, protože zdraví je hluboce osobní. Ovlivňuje ho to, co jíš, jak se hýbeš, spíš, zvládáš stres i jaké máš vztahy. <br/> <br/> Naše aplikace proto staví na principech medicíny životního stylu – vědecky ověřeného přístupu, který chápe zdraví jako propojený systém, ne izolované symptomy.' : 'Because your body—and your journey—are uniquely yours. Health is never one-size-fits-all. It’s deeply personal, shaped by how you eat, move, sleep, manage stress, and connect with others.',
    image: '/images/circle-chart.png',
    author: {
      name: locale.value === 'cs' ? 'Kristýna Dvořáková' : 'Jacob Smith',
      text: locale.value === 'cs' ? 'Má náročnou práci, chce lépe zvládat stres.' : 'Works a demanding job and wants to manage stress better',
      image: '/images/author-badge.png',
    }
  },
  {
    title: 'Stress Health, Natural Growth',
    perex: 'Because your body—and your journey—are uniquely yours. Health is never one-size-fits-all. It’s deeply personal, shaped by how you eat, move, sleep, manage stress, and connect with others.',
    image: '/images/circle-chart-2.png',
    author: {
      name: locale.value === 'cs' ? 'Jana Nováková' : 'Sarah Johanson',
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
    ]

</script> 
