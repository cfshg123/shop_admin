import Vue from 'vue'
import Router from 'vue-router'

// 导入login
import Login from '@/components/login.vue'

// 导入home
import Home from '@/components/home.vue'
// 引入elementui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 使用elementui
Vue.use(ElementUI)

Vue.use(Router)
// 使用导航守卫
const router = new Router({
  routes: [{
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home
  }
  ]
})

// 导航守卫
// to: Route: 即将要进入的目标 路由对象   from: Route: 当前导航正要离开的路由  next() 指定路由跳转到哪里
router.beforeEach((to, from, next) => {
  // 判断是否有token  如果有token 或者 是登录页 就去往想去的页面 如果没有 就去登录页 实现登录拦截
  const token = localStorage.getItem('token')
  if (to.path === '/login' || token) {
    next()
  } else {
    next('/login')
  }
})
export default router
