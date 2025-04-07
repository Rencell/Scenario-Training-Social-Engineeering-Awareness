import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Category from '../views/Category.vue'

import Phishing from '@/views/Phishing/level_One/index.vue'
import PhishingTwo from '@/views/Phishing/level_two/index.vue'
import PhishingThree from '@/views/Phishing/level_three/index.vue'
import level_overview from '@/views/Phishing/level/level-overview.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/categories',
      name: 'category',
      component: Category,
    },
    {
      path: '/phishing',
      name: 'phishing',
      component: Phishing
    },
    {
      path: '/phishing/two',
      name: 'PhishingTwo',
      component: PhishingTwo
    },
    {
      path: '/phishing/three',
      name: 'PhishingThree',
      component: PhishingThree
    },
    {
      path: '/phishing/levels',
      name: 'phishingLevel',
      component: level_overview
    },

    
  ],
})

export default router
