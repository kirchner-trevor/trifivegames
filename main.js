import App from './app.js'
import Home from './home.js'
import Game from './game.js'
import NotFound from './not-found.js'

const routes = [
  { path: '/', component: Home },
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