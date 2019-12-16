import Vue from 'vue'
import VueRouter from 'vue-router'
import Films from '../views/Films.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:"/films/nowPlaying"
  },
  {
    path: '/films',
    name: 'films',
    component: Films,
    children:[
      {
        path:'nowPlaying',
        component:()=>import('../views/NowPlaying.vue')
      },
      {
        path:'comingSoon',
        component:()=>import('../views/ComingSoon.vue')
      },
    ],
    redirect:"/films/nowPlaying"
  },
  {
    path: '/position',
    name: 'position',
    component: () => import( '../views/Position.vue')
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import( '../views/Detail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
