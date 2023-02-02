<template>
<<<<<<< HEAD
 <div>
    
    <product-section/>
    <contact-section/>
 </div>
</template>
<script>
import ContactSection from './ContactSection.vue';
import ProductSection from './ProductSection.vue';
export default {
  components: { ProductSection, ContactSection },
 
=======
  <elementPage />
  <ProductSection />
</template>
<script>
import ProductSection from "@/views/ProductSection.vue";
import elementPage from "@/components/home/elementPage.vue";
export default {
  components: {
    elementPage,
    ProductSection,
  },
>>>>>>> df84f2db0c7abe23cc97761c3ec7dd794a030f9f
};
</script>
<style>
</style>
