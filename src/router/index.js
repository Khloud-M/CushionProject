import { createRouter, createWebHistory } from 'vue-router'
<<<<<<< HEAD

=======
import Home from '../views/mainIndex.vue'
>>>>>>> 315675c3292df79bc7755068e80eb03f7f20893d

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
 
    {
<<<<<<< HEAD
      // path: '/about',
      // name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
=======
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('../views/theProduct.vue')
>>>>>>> 315675c3292df79bc7755068e80eb03f7f20893d
    }
  ],
  linkActiveClass:"active",

})

export default router
