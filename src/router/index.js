import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/index.vue'),
      meta: {
        layout: 'BaseLayout',
      },
    },
    {
      path: '/example',
      name: 'example',
      component: () => import('../views/example/example.vue'),
      meta: {
        layout: 'ExampleLayout',
      },
    },
    {
      path: '/:catchAll(.*)',
      redirect: { name: 'index' },
    },
    // {
    //   path: '/styleGuideMenu',
    //   name:'styleGuideMenu',
    //   component:()=> import('../views/example/styleGuideMenu.vue'),
    //   meta: {
    //     // 每支路由都要加這段meta，表示套用example layout
    //     layout: 'ExampleLayout', 
    //   },
    // },
  ],
})

export default router
