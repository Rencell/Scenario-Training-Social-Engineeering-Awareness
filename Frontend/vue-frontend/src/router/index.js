import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Category from '../views/Category.vue'

import Phishing from '../views/Phishing/index.vue'
import page1 from '../views/Phishing/page1.vue'
import page2 from '../views/Phishing/page2.vue'
import page3 from '../views/Phishing/page3.vue'
import page4 from '../views/Phishing/page4.vue'
import page5 from '../views/Phishing/page5.vue'
import page6 from '../views/Phishing/page6.vue'
import Page7 from '../views/Phishing/page7.vue'
import Page8 from '../views/Phishing/page8.vue'
import Page9 from '../views/Phishing/page9.vue'
import page10 from '../views/Phishing/Page10.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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

    { path: '/phishing/page1', name: 'page1', component: page1},
    { path: '/phishing/page2', name: 'page2', component: page2},
    { path: '/phishing/page3', name: 'page3', component: page3},
    { path: '/phishing/page4', name: 'page4', component: page4},
    { path: '/phishing/page5', name: 'page5', component: page5},
    { path: '/phishing/page6', name: 'page6', component: page6},
    { path: '/phishing/page7', name: 'page7', component: Page7},
    { path: '/phishing/page8', name: 'page8', component: Page8},
    { path: '/phishing/page9', name: 'page9', component: Page9},
    { path: '/phishing/page10', name: 'page10', component: page10},
  ],
})

export default router
