<script>
import ProductCard from "../components/ProductCard.vue";
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
<<<<<<< HEAD
  <div>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          lg="4"
          md="6"
          xs="12"
          v-for="product in products"
          :key="product.id"
         
        >
          <product-card :product="product"/>
        </v-col>
      </v-row>
    </v-container>
  </div>
=======

    <div>
        <v-row>
            <v-col cols="12" lg="4" md="6" xs="12"></v-col>
            sdklfjsd
        </v-row>
    </div>
  
>>>>>>> df84f2db0c7abe23cc97761c3ec7dd794a030f9f
</template>

<style></style>
