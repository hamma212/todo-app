import Vue from 'vue'
import VueRouter from 'vue-router'
import SplashView from '../views/SplashView.vue'
import TodosView from '../views/TodosView.vue'
import SingleTodo from '../views/SingleTodo.vue'
import DoneView from '../views/DoneView.vue'
import ErrorView from '../views/ErrorView.vue'
import { auth } from '@/firebaseConfig'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'splash',
    component: SplashView
  },
  {
    path: '/todos',
    name: 'todos',
    component: TodosView,
    meta: {
      requiresAuth: true
    },
  },
  {
    path: '/todo/:id',
    name: 'todo',
    component: SingleTodo,
    props: true,
    meta: {
      requiresAuth: true
    },
  },
  {
    path: '/done',
    name: 'done',
    component: DoneView,
    meta: {
      requiresAuth: true
    },
  },
  {
    path: '*',
    name: '404',
    component: ErrorView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  
  if (requiresAuth && !auth.currentUser) {
    next('/')
  } else {
    next()
  }
})
export default router
