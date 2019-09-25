import PageHeader from './page-header.js'

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

new Vue({
  el: '#app',
  components: {
    PageHeader
  },
  router: new VueRouter({
    routes: [
      { path: '/', component: this },
      { path: '/foo', component: Foo },
      { path: '/bar', component: Bar }
    ]
  })
})