<template>
  <div>
    <labHeader />

    <router-view
      data-aos="fade-in"
      data-aos-offset="200"
      data-aos-delay="100"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="true"
      data-aos-anchor-placement="top-center"
    />
    <benifits-section />
    <footer-section />
  </div>
</template>

<script>
import labHeader from "@/components/layout/labHeader.vue";
import BenifitsSection from "./components/home/BenifitsSection.vue";
import FooterSection from "./components/home/FooterSection.vue";

export default {
  components: {
    labHeader,
    BenifitsSection,
    FooterSection,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
