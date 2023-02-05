<template>
  <div class="details_section">
    <!-- Start:: head Section -->
    <div class="head_section">
        <div class="bg-top"></div>
        <div class="bg-botttom"></div>
      <v-container>
        <v-row class="details_product">
          <v-col
            cols="12"
            lg="8"
            md="8"
            xs="12"
            class="images_details"
            style="padding: 0 12px"
          >
            <carousel
              :items-to-show="1"
              :wrap-around="false"
              :transition="1000"
              :autoplay="false"
              class="image_carousal"
            >
              <slide v-for="slide in product.images_details" :key="slide">
                <img :src="slide" alt="" />
              </slide>

              <template #addons>
                <navigation />
                <pagination />
              </template>
            </carousel>
          </v-col>
          <v-col cols="12" lg="4" md="4" xs="12" class="info_wrapper">
            <div class="product_info">
              <h2>{{ product.title }}</h2>
              <h2>${{ product.price }} {{ $t("misc.USD") }}</h2>
              <form>
                <label>{{ $t("misc.quantity") }}</label>
                <input type="number" placeholder="1" required />
                <button type="submit">{{ $t("buttons.addToCart") }}</button>
              </form>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!-- End:: head Section -->

    <!-- Start:: Description section -->
    <div class="des_wrapper">
      <v-container>
        <h3>{{ $t("misc.des") }}</h3>
        <p>{{ product.des }}</p>
        <h3>{{ $t("misc.shipping") }}</h3>
        <p>{{ product.shipping }}</p>
      </v-container>
    </div>

    <!-- End::Description Section  -->

    <!-- Start:: images -->
    <div class="images_wrapper">
      <v-container>
        <h3>{{ $t("misc.images") }}</h3>
        <v-row>
          <v-col
            cols="12"
            lg="12"
            v-for="image in product.images_details"
            :key="image"
            class="image_container"
          >
            <img :src="image" />
          </v-col>
        </v-row>
      </v-container>
    </div>
<!-- End:: Images -->
    <!-- Start:: related products -->
    <div class="related_wrapper">
      <v-container>
        <h3>{{ $t("misc.relatedProducts") }}</h3>
        <v-row>
          <v-col
            cols="12"
            lg="4"
            md="6"
            xs="12"
            v-for="product in product.related_products"
            :key="product.id"
          >
            <product-card :product="product" v-if="product.id" />
          </v-col>
        </v-row>
        <!-- router link to all products section -->
        <div class="text_right">
          <router-link to="/" class="back_products">{{
            $t("buttons.backToProducts")
          }}</router-link>
        </div>
      </v-container>
    </div>

    <!-- End:: related products -->
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";
// import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default {
  components: { ProductCard, Carousel, Slide, Navigation },
  props: ["id"],
  data() {
    return {
      product: {
        required: true,
        type: Object,
      },
    };
  },
  computed: {
    products() {
      return this.$store.getters.products;
    },
  },
  mounted() {
    this.product = this.products.find((product) => product.id == this.id);
  },
};
</script>

<style lang="scss">
.details_section {
  font-family: "normal", sans-serif;
  h3 {
    font-size: 24px;
    line-height: 30px;
    margin: 20px 0;
    color: #5f4d5d;
  }
  p {
    font-size: 23px;
  }
  .details_product {
    .carousel__slide {
      width: 100%;
      height: 500px;
      margin: 20px 0;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .carousel__prev,
    .carousel__next {
      color: white;
    }
  }
  .head_section {
position: relative;
    padding: 50px 0;
    .info_wrapper {
      height: 500px;
margin: 20px 0;
      background-color: #b08ead;
      color: white;

      .product_info {
        display: flex;
        justify-content: center;
        justify-items: center;
        align-items: flex-start;
        flex-direction: column;
        row-gap: 15px;
        margin: 20px;

        h2 {
          font-weight: 100;
          font-size: 38px;
          font-family: sans-serif;
        }
        h2:last-of-type {
          font-size: 26px;
        }
        form {
          width: 100%;
          display: block;
          label {
            margin: 10px 0;
            font-family: Roboto, sans-serif;
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            display: block;
          }
          input {
            display: block;
            background: white;
            width: 50px;
            height: 35px;
            outline: none;
            border: none;
            font-size: 20px;
            padding: 5px;
            text-align: center;
          }
          button {
            background: #ceb3cb;
            font-family: Roboto, sans-serif;
            display: block;
            width: 100%;
            text-align: center;
            font-size: 15px;
            height: 45px;
            margin: 20px 0;
            transition: 0.3s all ease-in-out;
            &:hover {
              opacity: 0.8;
              transition: 0.3s all ease-in-out;
            }
          }
        }
      }
    }
  }
  .image_container {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .related_wrapper {
    background-color: #f3f3f3;
    font-family: "normal", sans-serif;
    padding-bottom: 50px;
    .text_right {
      text-align: right;
      margin-top:50px;
      .back_products {
        transition: opacity 200ms ease;
        font-family: Roboto, sans-serif;
        color: #b99bb6;
        font-size: 13.5px;
        font-weight: 700;
        letter-spacing: 1.5px;
        text-transform: uppercase;

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
}

.bg-top {
    position: absolute;
    left: 0px;
    top: 0px;
    right: 0px;
    height: 56%;
    background-color: #c9adc6;
    z-index: -20;
}
.bg-botttom {
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    height: 44%;
    background-color: #d6bbd3;
    z-index: -20;
}

</style>
