export default {
  name: 'page-header',
  template: /*html*/`
  <b-navbar toggleable="lg" sticky type="dark" variant="danger">
    <b-navbar-brand to="/">Tri Five Games</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/game/prophetic" exact exact-active-class="active">Prophetic</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  `
}