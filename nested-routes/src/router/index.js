import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Users from '../views/Users.vue'
import UserLists from '../views/Users/UserLists.vue'
import User from '../views/Users/User.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/users',
    // importing the parent route 
    component: Users,
    children: [
      {
        // UserLists will be rendered inside Users's <router-view>
        // when you go to the /users
        path: '',
        name: 'UserLists',
        component: UserLists
      },
      {
        // User will be rendered inside Users's <router-view>
        // when /user/:id is matched
        path: ':id',
        name: 'User',
        component: User
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
