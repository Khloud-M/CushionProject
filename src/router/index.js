import { createRouter, createWebHistory } from 'vue-router'




import Home from '../views/mainIndex.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
 
    {

      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/products',
      name: 'product',
      component: () => import('@/views/AllProducts.vue')

    },
    {
      path:'/product-details/:id',
      name:"ProductDetails",
      component:()=>import('@/views/ProductDetails.vue'),
      props:true
    }
  ],
  linkActiveClass:"active",

})

export default router
