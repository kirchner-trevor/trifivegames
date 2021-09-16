export default {
  name: 'page-header',
  template: /*html*/`
  <b-navbar toggleable="lg" type="dark" variant="primary" style="padding-left: 1rem;">
    <b-navbar-brand to="/">Overthink</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/game/big-bad-barge" exact exact-active-class="active">Big Bad Barge</b-nav-item>
        <b-nav-item to="/game/four-fates" exact exact-active-class="active">Four Fates</b-nav-item>
        <b-nav-item to="/game/guilded" exact exact-active-class="active">Guilded</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  `
}