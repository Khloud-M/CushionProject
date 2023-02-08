<script>
import ProductCard from "@/components/ProductCard.vue";
import { mapGetters } from "vuex";
export default {
  components: { ProductCard },
  computed: {
    ...mapGetters({
      products: "products",
    }),
  },
};
</script>
<template>

<div class="productSection">
  
  <div>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          lg="3"
          md="6"
          sm="6"
          v-for="product in products"
          :key="product.id"
         
        >
          <product-card :product="product"/>

        
        </v-col>
      </v-row>
    </v-container>
  </div>
</div>



</template>

<style  lang="scss" scoped>
.productSection{
  margin:var(--margin-topbotton) auto;
  .v-row{
   display: flex;
   justify-content: center;
   column-gap: 10px;
  
}
}

</style>
