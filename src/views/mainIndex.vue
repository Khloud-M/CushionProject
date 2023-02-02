<template>
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
 
};
</script>
<style>
</style>