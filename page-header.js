export default {
  name: 'page-header',
  template: /*html*/`
  <b-navbar toggleable="lg" type="dark" variant="primary" style="padding-left: 1rem;">
    <b-navbar-brand to="/">Overthink</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item v-for="game in games" :key="game.id" :to="'/game/' + game.id" exact exact-active-class="active">{{ game.name }}</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  `,
  data() {
    return {
      games: []
    }
  },
  mounted() {
    this.loadGames();
  },
  methods: {
    async loadGames() {
      if (!this.games.length) {
        var response = await fetch("/games.json");
        var data = await response.json();
        this.games = data;
      }
    }
  }
}