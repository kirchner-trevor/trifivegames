import App from './app.js'
import Home from './home.js'
import Foo from './foo.js'
import Bar from './bar.js'
import Game from './game.js'
import NotFound from './not-found.js'

const routes = [
  { path: '/', component: Home },
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
  { path: '/game/:gameId', component: Game, props: true },
  { path: '*', component: NotFound }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')