import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Header from '@/components/header'
import AboutUs from '@/components/about_us'
import CustomerCase from '@/components/customer_case'
import DeveloperCommunity from '@/components/developer_community'
import DeveloperPlatform from '@/components/development_platform'
import File from '@/components/file'
import Footer from '@/components/footer'
import Login from '@/components/login'
import Register from '@/components/register'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      meta: { title: '云易联CloudEasyLinker' },
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      meta: { title: '云易联CloudEasyLinker' },
      component: Home // 主页，产品服务
    },
    {
      path: '/header',
      name: 'header',
      component: Header // 头部
    },
    {
      path: '/about_us',
      name: 'about_us',
      meta: { title: '关于我们 - 云易联CloudEasyLinker' },
      component: AboutUs // 关于我们
    },
    {
      path: '/customer_case',
      name: 'customer_case',
      meta: { title: '客户案例 - 云易联CloudEasyLinker' },
      component: CustomerCase // 客户案例
    },
    {
      path: '/developer_community',
      name: 'developer_community',
      meta: { title: '开发者社区 - 云易联CloudEasyLinker' },
      component: DeveloperCommunity // 开发者社区
    },
    {
      path: '/development_platform',
      name: 'development_platform',
      meta: { title: '开发平台- 云易联CloudEasyLinker' },
      component: DeveloperPlatform // 开发平台
    },
    {
      path: '/file',
      name: 'file',
      meta: { title: '文档 - 云易联CloudEasyLinker' },
      component: File // 文档
    },
    {
      path: '/footer',
      name: 'footer',
      component: Footer // 文档
    },
    {
      path: '/login',
      name: 'login',
      meta: { title: '登录 - 云易联CloudEasyLinker' },
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      meta: { title: '注册 - 云易联CloudEasyLinker' },
      component: Register
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
