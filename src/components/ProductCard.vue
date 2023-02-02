<script>
export default {};
</script>


<template>
  <div>
    <router-link to="/">
    <div class="image_wrapper">
        <img src="" alt="">
    </div>
    <div class="info_wrapper">
        <div class="product_name">
            <h1></h1>
        </div>
        <div class="product_price">
            <span class="price"></span>
            <span class="currency">{{ $t('misc.USD') }}</span>
        </div>
    </div>
    </router-link>
  </div>
</template>

<style></style>
