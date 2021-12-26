import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      meta: {layout: 'main'},
      component: () => import('./views/Login.vue')
    },
    {
      path: '/',
      name: 'home',
      meta: {layout: 'empty'},
      component: () => import('./views/Home.vue')
    },
    {
      path: '/Chat',
      name: 'chat',
      meta: {layout: 'empty'},
      component: () => import('./views/Chat.vue')
    },
    {
      path: '/New-order',
      name: 'new-order',
      meta: {layout: 'main'},
      component: () => import('./views/New-order.vue')
    },
    {
      path: '/Order',
      name: 'order',
      meta: {layout: 'empty'},
      component: () => import('./views/Order.vue')
    },
    {
      path: '/Shipping-current-task',
      name: 'shipping-current-task',
      meta: {layout: 'empty'},
      component: () => import('./views/Shipping-current-task.vue')
    },
    {
      path: '/Unloading-current-task',
      name: 'unloading-current-task',
      meta: {layout: 'empty'},
      component: () => import('./views/Unloading-current-task.vue')
    },
    {
      path: '/Queue-shipping',
      name: 'queue-shipping',
      meta: {layout: 'main'},
      component: () => import('./views/Queue-shipping.vue')
    },
    {
      path: '/Process-shipping',
      name: 'process-shipping',
      meta: {layout: 'main'},
      component: () => import('./views/Process-shipping.vue')
    },
    {
      path: '/Process-unloading',
      name: 'process-unloading',
      meta: {layout: 'main'},
      component: () => import('./views/Process-unloading.vue')
    },
    {
      path: '/Queue-unloading',
      name: 'queue-unloading',
      meta: {layout: 'main'},
      component: () => import('./views/Queue-unloading.vue')
    },
    {
      path: '/Comment-shipping',
      name: 'comment-shipping',
      meta: {layout: 'main'},
      component: () => import('./views/Comment-shipping.vue')
    },
    {
      path: '/Comment-unloading',
      name: 'comment-unloading',
      meta: {layout: 'main'},
      component: () => import('./views/Comment-unloading.vue')
    },
    {
      path: '/Unloading-photo-send',
      name: 'unloading-photo-send',
      meta: {layout: 'main'},
      component: () => import('./views/Unloading-photo-send.vue')
    }
    ,
    {
      path: '/Sended',
      name: 'sended',
      meta: {layout: 'main'},
      component: () => import('./views/Sended.vue')
    }
  ]
})
