import Vue from 'vue'
import VueRouter from 'vue-router'
import Pets from '../views/Pets.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Pets',
    component: Pets,
    props: true 
    // routes can have props when this is set to true
    // a prop will be passed into the Pets component
    // read more about route's props here
    // https://router.vuejs.org/guide/essentials/passing-props.html
  },
  {
    path: '/addapet',
    name: 'AddPets',
    // lazy loading
    component: () => import('../views/PetsCreate.vue')
  },
  {
    path: '/about',
    name: 'About',
    // lazy loading
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
