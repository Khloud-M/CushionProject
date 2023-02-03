<template>

 <div>
  <elementPage />
    <product-section/>
    <!-- <contact-section/> -->
    <newsletters-section/>
 </div>
</template>
<script>
// import ContactSection from '@/components/home/ContactSection.vue';
import ProductSection from '@/components/home/ProductSection.vue';
import elementPage from "@/components/home/elementPage.vue";
import NewslettersSection from '@/components/home/NewslettersSection.vue';
export default {
  components: { ProductSection , elementPage, NewslettersSection,},
 



};
</script>
<style>
</style>
