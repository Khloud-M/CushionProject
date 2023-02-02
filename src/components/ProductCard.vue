<script>

export default {
 props:['product']

}
</script>


<template>
<div>
 
    <router-link to="/">
    <div class="image_wrapper">
        <img :src="product.image" :alt="product.title">
    </div>
    <div class="info_wrapper">
        <div class="product_name">
            <h1>{{ product.title }}</h1>
        </div>
        <div class="product_price">
            <span class="price">{{ product.price }}</span>
            <span class="currency">{{ $t('misc.USD') }}</span>
        </div>
    </div>
    </router-link>
  </div>

</template>

<style></style>
