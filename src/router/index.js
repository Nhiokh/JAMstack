import Vue from 'vue'
import Router from 'vue-router'
import Slide1 from '@/components/Slide1'
import Slide2 from '@/components/Slide2'
import Slide3 from '@/components/Slide3'
import Slide4 from '@/components/Slide4'
import Slide5 from '@/components/Slide5'
import Slide6 from '@/components/Slide6'
import Slide7 from '@/components/Slide7'
import Slide8 from '@/components/Slide8'
import Slide9 from '@/components/Slide9'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/1'
    },
    {
      path: '/1',
      component: Slide1
    },
    {
      path: '/2',
      component: Slide2
    },
    {
      path: '/3',
      component: Slide3
    },
    {
      path: '/4',
      component: Slide4
    },
    {
      path: '/5',
      component: Slide5
    },
    {
      path: '/6',
      component: Slide6
    },
    {
      path: '/7',
      component: Slide7
    },
    {
      path: '/8',
      component: Slide8
    },
    {
      path: '/9',
      component: Slide9
    }
  ]
})
