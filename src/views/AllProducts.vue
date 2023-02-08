<template>
  <section class="all_product">
    <div class="getPath">
      <h2>{{ mypath }}</h2>
    </div>
    <product-section />
  </section>
</template>
<script>
import ProductSection from "@/components/home/ProductSection.vue";

export default {
  components: {
    ProductSection,
  },
  computed: {
    mypath() {
      return this.$route.path.replace("/", "");
    },
  },
};
</script>
<style lang="scss">
.getPath {
  background-color: var(--main-color);
  margin-bottom: var(--margin-topbotton);

  height: 30vh;
  h2 {
    color: #fff;
    line-height: 30vh;
    padding: 0 250px;
    text-transform: capitalize;
    font-size: 50px;
    font-family: normal;
  }
}
</style>