<template>
  <div>
    <labHeader />

    <router-view />
  </div>
</template>

<script>
import labHeader from "@/components/layout/labHeader.vue"

export default {
  components:{
    labHeader,
    
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
