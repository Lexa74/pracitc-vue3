import MainPage from '@/pages/MainPage/MainPage.vue'
import { createRouter, createWebHistory } from 'vue-router'
import AboutPage from '@/pages/AboutPage/AboutPage.vue'
import ContactsPage from '@/pages/ContactsPage/ContactsPage.vue'
import ModalTaskPage from '@/pages/ModalTaskPage/ModalTaskPage.vue'

const routes = [
  {
    path: '/',
    children: [
      {
        path: '/home',
        component: MainPage,
        children: [
          {
            path: 'task/:id',
            component: ModalTaskPage
          }
        ]
      },
      {
        path: '/about',
        component: AboutPage
      }
    ],
    beforeEnter: () => false
  },
  {
    path: '/contacts',
    component: ContactsPage
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
