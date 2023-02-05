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
      path: '/all-product',
      name: 'product',
      component: () => import('@/views/AllProducts.vue')

    }
  ],
  linkActiveClass:"active",

})

export default router
