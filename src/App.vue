<template>
  <div>
    <labHeader />

    <router-view />
    <benifits-section/>
    <footer-section/>
  </div>
</template>

<script>
import labHeader from "@/components/layout/labHeader.vue"
import BenifitsSection from './components/home/BenifitsSection.vue'
import FooterSection from './components/home/FooterSection.vue'

export default {
  components:{
    labHeader,
    BenifitsSection,
    FooterSection,
    
  }
}
</script>
<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
