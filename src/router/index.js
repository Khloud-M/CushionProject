import { createRouter, createWebHistory } from 'vue-router'
<<<<<<< HEAD



import Home from '../views/mainIndex.vue'


=======
import Home from '../views/mainIndex.vue'
>>>>>>> df84f2db0c7abe23cc97761c3ec7dd794a030f9f
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
 
    {
<<<<<<< HEAD

=======
      // path: '/about',
      // name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
>>>>>>> df84f2db0c7abe23cc97761c3ec7dd794a030f9f
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('../views/theProduct.vue')
<<<<<<< HEAD

=======
>>>>>>> df84f2db0c7abe23cc97761c3ec7dd794a030f9f
    }
  ],
  linkActiveClass:"active",

})

export default router
