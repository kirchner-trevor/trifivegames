export default {
  name: 'page-header',
  template: /*html*/`
  <b-navbar toggleable="lg" type="dark" variant="primary">
    <b-navbar-brand href="#">Tri Five Games</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/foo">Foo</b-nav-item>
        <b-nav-item to="/bar">Bar</b-nav-item>
        <b-nav-item to="/game/prophetic">Prophetic</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  `
}