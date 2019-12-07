import Home from './home.js'
import Foo from './foo.js'
import Bar from './bar.js'

const routes = [
  { path: '/', component: Home },
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  template: /*html*/`
  <router-view></router-view>
  `
}).$mount('#app')