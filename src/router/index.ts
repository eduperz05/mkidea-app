import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  //   {
  //     path: '/',
  //     name: 'home',
  //     component: () => import("@/views/SearchIdeasView.vue")
  //   },
  //   {
  //     path: '/profile',
  //     name: 'profile',
  //     component: () => import("@/views/ProfileView.vue")      // component: () => import('')
  //   }
  ]
})

export default router;
