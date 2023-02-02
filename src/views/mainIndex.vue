<template>

 <div>
  <elementPage />
    <product-section/>
    <contact-section/>
 </div>
</template>
<script>
import ContactSection from './ContactSection.vue';
import ProductSection from './ProductSection.vue';
import elementPage from "@/components/home/elementPage.vue";
export default {
  components: { ProductSection, ContactSection , elementPage,},
 



};
</script>
<style>
</style>
