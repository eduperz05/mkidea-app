import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/SearchIdeasView.vue'),
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/views/ProfileView.vue'),
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('@/views/ProjectsView.vue'),    
},
    {
      path: '/password',
      name: 'password',
      component: () => import('@/views/PasswordView.vue'),    // component: () => import('')
    },
    {
      path: '/project/:id_project',
      name: 'project',
      component: () => import('@/views/ProjectPageView.vue'),      // component: () => import('')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue'),      // component: () => import('')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('@/views/SignUpView.vue'),      // component: () => import('')
    },
  ],
  history: createWebHistory()
});

export default router;
