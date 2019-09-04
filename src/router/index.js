import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/login'
    },
    {
      path: '/index',
      name: 'Layout',
      component: () => import('../layout/index.vue'),
    },
    {
      path: '/login',
      // props:true,
      name: ' ',
      meta:{
        title: '登录页面',
        requireAuth: true, 
      },
      component: () => import('../login/login.vue'),
    }
  ]
})
