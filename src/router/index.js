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

export default new Router({
  routes: [
	  {
  	 	path: '/',
      redirect: '/home',
      component: Home
	  },
    {
      path: '/home',
      name: 'home',
      component: Home//主页，产品服务
    },
    {
      path: '/header',
      name: 'header',
      component: Header//头部
    },
    {
      path: '/about_us',
      name: 'about_us',
      component: AboutUs//关于我们
    },
    {
      path: '/customer_case',
      name: 'customer_case',
      component: CustomerCase//客户案例
    },
    {
      path: '/developer_community',
      name: 'developer_community',
      component: DeveloperCommunity//开发者社区
    },
    {
      path: '/development_platform',
      name: 'development_platform',
      component: DeveloperPlatform//开发平台
    },
    {
      path: '/file',
      name: 'file',
      component: File//文档
    },
    {
      path: '/footer',
      name: 'footer',
      component: Footer//文档
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
