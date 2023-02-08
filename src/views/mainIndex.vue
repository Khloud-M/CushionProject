<template>
  <div>
    <SliderSection/>
    <elementPage />
    <AboutSection />
    <abouutCollection />
    <spring-collection/>
    <product-section />
    <contact-section />
    <newsletters-section />
  
  </div>
</template>
<script>
import ContactSection from "@/components/home/ContactSection.vue";
import ProductSection from "@/components/home/ProductSection.vue";
import elementPage from "@/components/home/elementPage.vue";
import NewslettersSection from "@/components/home/NewslettersSection.vue";
import AboutSection from "../components/home/aboutSection.vue";
import abouutCollection from "../components/home/abouutCollection.vue";

import SpringCollection from '../components/home/SpringCollection.vue';
import SliderSection from "../components/home/SliderSection.vue";
export default {
  components: {
    ProductSection,
    elementPage,
    AboutSection,
    abouutCollection,
    NewslettersSection,
    ContactSection,
    SpringCollection,
    SliderSection
},
};
</script>
<style></style>
