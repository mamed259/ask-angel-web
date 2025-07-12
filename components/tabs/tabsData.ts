export type TabUnionsEn = "weight loss" | "stress & anxiety" | "immunity improvement" | "alcohol & smoking" | "longeavity"
export type TabUnionsCs = "zhubnout" | "Zvládat stres a úzkost" | "Posílit imunitu" | "Omezit alkohol a kouření" | "Prodloužit si život"

export type TabSchema<T extends TabUnionsEn | TabUnionsCs> = Record<T, {
  title: string;
  description: string;
  perex: string;
  image: string;
}>

export type TabSchemaEn = TabSchema<TabUnionsEn>
export type TabSchemaCs = TabSchema<TabUnionsCs>

export enum TabUnionsByLocale {
  EN = 'en',
  CS = 'cs'
}

export const tabs: {
  [TabUnionsByLocale.EN]: TabSchemaEn;
  [TabUnionsByLocale.CS]: TabSchemaCs;
} = {
  [TabUnionsByLocale.EN]: {
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
    perex: 'Forget counting candles. Longevity is a sum of daily choices—nutrient-dense meals, movement variety, restorative sleep, purpose-driven living, and meaningful relationships. Our app synthesizes the latest longevity research into doable micro-goals, tracks your biological-age markers, and celebrates every healthy year you add. It’s not about extending time. It’s about enriching it.',
    image: '/images/tab-5.png'
  }
  },
  [TabUnionsByLocale.CS]: {
    "zhubnout": {
      title: 'Zhubni zdravě díky medicíně životního stylu',
      description: 'Žádné drastické diety. Žádné výčitky. Jen trvalá změna podložená vědou.',
      perex: 'Zapomeň na rychlá řešení. Naše metoda hubnutí staví na návycích, které s tělem spolupracují – místo aby s ním bojovaly. Zlepšíš spánek, snížíš stres, budeš jíst vědomě, pravidelně se hýbat a pečovat o psychickou pohodu. Výsledek? Nejen že zhubneš – budeš silnější, lépe spát a žít déle. <br/><br/> Pomůžeme ti pochopit, proč si tělo drží váhu. Dáme ti úkoly na míru tvému tělu, citlivé vedení i nástroje, které opravdu fungují. Nejde o to jíst míň. Jde o to žít líp.',
      image: 'images/tab-1-cs.png'
    },
    "Zvládat stres a úzkost": {
      title: 'Zvládni stres',
      description: '– najdi klid v každodenním chaosu',
      perex: 'Žádné vyhoření. Žádné zahlcení. Jen praktické nástroje pro vnitřní rovnováhu a jasnou mysl. <br/><br/> Zapomeň na to, že stres neexistuje. Učíme techniky podložené vědou – vědomé dýchání, změnu úhlu pohledu, plánování času i mikropauzy – které ti pomůžou proměnit stres z nepřítele na spojence. <br/><br/> Chytré notifikace tě upozorní na napětí dřív, než přeroste v problém. Průvodcovaná cvičení ti pomůžou uvolnit tělo i mysl. A opakované návyky ti vytvoří vnitřní odolnost, kterou budeš opravdu cítit. <br/><br/> Nejde o to žít bez stresu. Jde o to ovládnout ho tak, aby tě posunul dál.',
      image: 'images/tab-3.png'
    },
    "Posílit imunitu": {
      title: 'Posiluj imunitu',
      description: '– obranyschopnost se buduje každý den',
      perex: 'Žádné zázračné pilulky. Jen životní styl, který tě skutečně posílí. <br/><br/> Zapomeň na rychlá řešení. Skutečně silná imunita vychází z vyvážené stravy, pravidelného pohybu, kvalitního spánku, zvládnutého stresu a zdravých vztahů. <br/><br/> Náš AI kouč odhalí slabá místa v tvém denním režimu, navrhne drobné, ale účinné kroky (například jídla bohatá na vlákninu nebo krátký pobyt na denním světle) a bude sledovat tvé biomarkery, abys viděl/a reálné zlepšení. <br/><br/> Nejde o to vyhnout se každému viru. Jde o to mít tělo, které je připravené na všechno.',
      image: 'images/tab-3.png'
    },
    "Omezit alkohol a kouření": {
      title: 'Zbav se závislostí',
      description: '– s péčí a porozuměním',
      perex: 'Žádná stud. Žádné ultimáta. Jen osvědčené strategie a opravdová podpora. <br/><br/> Zapomeň na boj o přežití bez pomoci. Ať už chceš omezit nikotin, alkohol, cukr nebo čas u obrazovky, náš přístup kombinuje behaviorální techniky, sledování chutí, podporu komunity a copingové plány šité na míru. <br/><br/> Tím, že se zaměříš na kořeny problému – stres, návyky, společenské spouštěče – získáš zpět kontrolu, sebevědomí a zdravější způsoby, jak se odměnit. <br/><br/> Nejde jen o silnou vůli. Jde o laskavou, udržitelnou změnu.',
      image: 'images/tab-4-cs.png'
    },
    "Prodloužit si život": {
      title: 'Žij déle, žij kvalitněji',
      description: '– přidej roky, které stojí za to',
      perex: 'Žádné zázračné fontány mládí. Žádné trendy bez výsledků. Jen návyky, které zpomalují stárnutí na buněčné úrovni. <br/><br/> Zapomeň na počet svíček na dortu. Dlouhověkost je výsledkem každodenních rozhodnutí – plnohodnotná strava, různorodý pohyb, regenerační spánek, smysluplný život a vztahy, na kterých záleží. <br/><br/> Naše aplikace převádí nejnovější poznatky o dlouhověkosti do konkrétních mikro-cílů, sleduje ukazatele biologického stáří a slaví s tebou každý rok zdraví navíc. <br/><br/> Nejde jen o to prodloužit čas. Jde o to, co s tím časem dokážeš.',
      image: 'images/tab-5-cs.png'
    }
  }
}