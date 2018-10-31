import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/views/layout'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: ()=>import ('@/views/login')
    },
    {
      path:'/layout',
      component:layout,
      redirect:'/layout/home',
      children:[
        {
          path:'home',
          meta:{
            title:'首页'
          },
          name:'home',
          component:()=>import('@/views/home/home')
        },
        {
          path:'admin',
          meta:{
            title:'管理员列表'
          },
          name:'admin',
          component:()=>import('@/views/admin/admin')
        },
        {
          path:'addAdmin',
          meta:{
            title:'添加管理员'
          },
          name:'addAdmin',
          component:()=>import('@/views/admin/add')
        },
        {
          path:'news',
          meta:{
            title:'新闻管理'
          },
          name:'news',
          component:()=>import('@/views/news/news')
        },
        {
          path:'addNews',
          meta:{
            title:'添加新闻'
          },
          name:'addNews',
          component:()=>import('@/views/news/add')
        },
        {
          path:'addSwiper',
          meta:{
            title:'添加轮播图'
          },
          name:'addSwiper',
          component:()=>import('@/views/swiper/add')
        },
        {
          path:'swiper',
          meta:{
            title:'轮播图列表'
          },
          name:'swiper',
          component:()=>import('@/views/swiper/swiper')
        },
        {
          path:'editSwiper',
          meta:{
            title:'编辑轮播图'
          },
          name:'editSwiper',
          component:()=>import('@/views/swiper/add')
        }

      ]
    }
  ]
})
