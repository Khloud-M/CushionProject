<script>
export default {
  props: ["product"],
};
</script>

<template>
  <div>
    <div class="product_card">
      <router-link to="/">
        <div class="image_wrapper">
          <img :src="product.image" :alt="product.title" />
        </div>
        <div class="info_wrapper">
          <div class="product_name">
            <h1>{{ product.title }}</h1>
          </div>
          <div class="product_price">
            <span class="price">{{ product.price }}</span>
            <span class="currency">{{ $t("misc.USD") }}</span>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss">
.product_card{
  .image_wrapper{
    object-fit: cover;
    width: 100%;
    height: 400px;
    img{
      width: 100%;
      height: 100%;
    }

  }
  .info_wrapper{
    text-align: center;
    .product_name{
      h1{

      }
    }
    .product_price{
      .price{

      }
    }
  }

}

</style>
