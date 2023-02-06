

<template>
  <div>
    <div class="product_card">
      <router-link
        :to="{
          name: 'ProductDetails',
          params: { id: product.id },
        }"
      >
        <div class="image_wrapper">
          <img :src="product.image" :alt="product.title" />
        </div>
        <div class="info_wrapper">
          <div class="product_name">
            <h1>{{ product.title }}</h1>
          </div>
          <div class="product_price">
            <span class="price">$ {{ product.price }}</span>
            <span class="currency">{{ $t("misc.USD") }}</span>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  props: ["product"],
};
</script>
<style lang="scss">
.product_card {
  font-family: "SemiBold";
  .image_wrapper {
    object-fit: cover;
    width: 100%;
    height: 400px;
    img {
      width: 100%;
      height: 100%;
      transition: 0.3s all ease-in-out;
      &:hover {
        transform: scale(1.03);
        transition: 0.3s all ease-in-out;
      }
    }
  }
  .info_wrapper {
    text-align: center;
    .product_name {
      h1 {
        color: #5f4d5d;
        font-weight: 500;
        font-size: 24px;
      }
    }
    .product_price {
      font-family: Roboto, sans-serif;
      color: #b0b0b0;
      font-size: 14px;
      line-height: 17.5px;
      font-weight: 400;
      .price {
        margin: 0 5px;
      }
    }
  }
}
</style>
