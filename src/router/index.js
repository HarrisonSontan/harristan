import { createRouter, createWebHistory } from 'vue-router'

import LayoutIndex from '@/views/layout/index.vue'
import LoginIndex from '@/views/login/index.vue'
import Message from '@/views/layout/message.vue'
import Friends from '@/views/layout/friends.vue'
import Aboutme from '@/views/layout/aboutme.vue'
import Search from '@/views/layout/search.vue'
import Blog from '@/views/layout/blog.vue'

const routes = [
  {
    path: '/',
    name: 'loginIndex',
    component: LoginIndex
  },
  {
    path: '/home',
    name: 'LayoutIndex',
    component: LayoutIndex,
    children: [
      {
        path: '',
        name: 'Blog',
        component: Blog
      },
      {
        path: '/message',
        name: 'Message',
        component: Message
      },
      {
        path: '/friends',
        name: 'Friends',
        component: Friends
      },
      {
        path: '/aboutme',
        name: 'Aboutme',
        component: Aboutme
      },
      {
        path: '/search',
        name: 'Search',
        component: Search
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
