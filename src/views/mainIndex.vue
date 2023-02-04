<template>
  <div>
    <elementPage />
    <AboutSection />
    <abouutCollection />
    <product-section />
    <contact-section />
    <newsletters-section />
    <benifits-section />
    <footer-section/>
  </div>
</template>
<script>
import ContactSection from "@/components/home/ContactSection.vue";
import ProductSection from "@/components/home/ProductSection.vue";
import elementPage from "@/components/home/elementPage.vue";
import NewslettersSection from "@/components/home/NewslettersSection.vue";
import AboutSection from "../components/home/aboutSection.vue";
import abouutCollection from "../components/home/abouutCollection.vue";
import BenifitsSection from "../components/home/BenifitsSection.vue";
import FooterSection from '../components/home/FooterSection.vue';
export default {
  components: {
    ProductSection,
    elementPage,
    AboutSection,
    abouutCollection,
    NewslettersSection,
    ContactSection,
    BenifitsSection,
    FooterSection,
  },
};
</script>
<style></style>
