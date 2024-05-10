import { createRouter, createWebHistory } from 'vue-router'
import AsgyView from '@/views/AsgyView.vue'

import NewsView from '@/views/NewsView.vue'
import memorandumNewsView from '@/views/NewsPages/memorandumNews.vue'


import ActionsView from '@/views/ActionsView.vue'
import FiliiView from '@/views/FiliiView.vue'
import DocumentsView from '@/views/DocumentsView.vue'

const routes = [

  {
    path: '/',
    name: 'asgy',
    component: AsgyView
  },
  {
    path: '/news',
    name: 'news',
    component: NewsView
  },
  {
    path: '/news/memorandum',
    name: 'memorandumNewsView',
    component: memorandumNewsView
  },
  {
    path: '/actions',
    name: 'actions',
    component: ActionsView
  },
  {
    path: '/filii',
    name: 'filii',
    component: FiliiView
  },
  {
    path: '/documents',
    name: 'documents',
    component: DocumentsView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
