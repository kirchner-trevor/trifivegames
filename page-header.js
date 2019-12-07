export default {
  name: 'page-header',
  template: /*html*/`
  <div>
    <h1>Tri Five Games</h1>
    <p>
      <router-link to="/">Go to Home</router-link>
      <router-link to="/foo">Go to Foo</router-link>
      <router-link to="/bar">Go to Bar</router-link>
    </p>
  </div>
  `
}