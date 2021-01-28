import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Add from './views/Add.vue'

Vue.config.productionTip = false
const routes = [
  {
    path: '',
    name: 'HomePage',
    component: Home,
    props: true
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: About
  },
  {
    path: '/add',
    name: 'AddPage',
    component: Add
  }
]
Vue.use(VueRouter)


const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
