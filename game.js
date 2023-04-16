import PageHeader from './page-header.js'

export default {
    name: 'game',
    template: /*html*/`
    <div>
        <page-header></page-header>
        <b-container class="mt-3" fluid>
            <b-jumbotron :header="game.name">
                <p>{{ game.description }}</p>
            </b-jumbotron>
            <b-card no-body>
                <b-tabs card lazy>
                    <b-tab>
                        <template v-slot:title>
                            Overview
                        </template>
                        <b-card-text>
                            <h4>Progress</h4>
                            <p>
                                <b-progress height="2rem" class="mt-2" :max="100" show-value>
                                    <b-progress-bar :value="progress">{{ stage }}</b-progress-bar>
                                </b-progress>
                            </p>

                            <div v-if="latestUpdate">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1"><b-badge variant="success">Update</b-badge> {{ latestUpdate.title }}</h5>
                                    <small>{{ moment(latestUpdate.date).fromNow() }}</small>
                                </div>
                            
                                <p class="mb-1" v-html="latestUpdate.message">
                                </p>
                            </div>

                            <div v-if="latestPlayable" class="mt-2">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1"><b-badge variant="warning">Playable</b-badge> {{ latestPlayable.title }}</h5>
                                    <small>{{ moment(latestPlayable.date).fromNow() }}</small>
                                </div>
                            
                                <p class="mb-1" v-html="latestPlayable.description">
                                </p>
                            </div>
                        </b-card-text>
                    </b-tab>
                    <b-tab v-if="game.updates && game.updates.length">
                        <template v-slot:title>
                            Updates <b-badge variant="info">{{ game.updates.length }}</b-badge>
                        </template>
                        <b-card-text>
                            <b-list-group flush>
                                <b-list-group-item class="flex-column align-items-start" v-for="(update, index) in game.updates" :key="index">
                                    <div class="d-flex w-100 justify-content-between">
                                        <h5 class="mb-1"><b-badge v-if="index === 0" variant="success">Latest</b-badge> {{ update.title }}</h5>
                                        <small>{{ moment(update.date).fromNow() }}</small>
                                    </div>
                                
                                    <p class="mb-1" v-html="update.message">
                                    </p>
                                </b-list-group-item>
                            </b-list-group>
                        </b-card-text>
                    </b-tab>
                    <b-tab v-if="game.assets && game.assets.length">
                        <template v-slot:title>
                            Assets <b-badge variant="info">{{ game.assets.length }}</b-badge>
                        </template>
                        <b-card-text>
                            All of the assets currently available for the game.

                            <b-container fluid class="p-4">
                                <b-img-lazy thumbnail fluid :src="asset.url" :alt="asset.title" v-for="(asset, index) in game.assets" :key="index"></b-img-lazy>
                            </b-container>
                        </b-card-text>
                    </b-tab>
                    <b-tab v-if="game.playables && game.playables.length">
                        <template v-slot:title>
                            Play <b-badge variant="info">{{ game.playables.length }}</b-badge>
                        </template>
                        <b-card-text>
                            <b-list-group flush>
                                <b-list-group-item class="flex-column align-items-start" v-for="(playable, index) in game.playables" :key="index">
                                    <b-card-text>
                                        <div class="d-flex w-100 justify-content-between">
                                            <h5 class="mb-1"><b-badge variant="success">{{ playable.version }}</b-badge> {{ playable.title }}</h5>
                                            <small>{{ moment(playable.date).fromNow() }}</small>
                                        </div>
                                        <p v-html="playable.description">
                                        </p>
                                    </b-card-text>
                                </b-list-group-item>
                            </b-list-group>
                        </b-card-text>
                    </b-tab>
                </b-tabs>
            </b-card>
        </b-container>
    </div>
    `,
    props: ['gameId'],
    components: {
        PageHeader
    },
    data() {
        return {
            games: []
        }
    },
    mounted() {
        this.loadGames();
    },
    computed: {
        game() {
            return this.games.find(game => game.id === this.gameId) || {};
        },
        stage() {
            let stage = 'Ideation';
            if (this.game.progress >= 75) {
                stage = 'Polishing';
            }
            else if (this.game.progress >= 50) {
                stage = 'Playtesting';
            }
            else if (this.game.progress >= 25) {
                stage = 'Work In Progress';
            }
            else if (this.game.progress < 0) {
                stage = 'Shelved';
            }
            return stage;
        },
        progress() {
            return Math.abs(this.game.progress);
        },
        latestUpdate() {
            return this.game.updates && this.game.updates.length && this.game.updates[0];
        },
        latestPlayable() {
            return this.game.playables && this.game.playables.length && this.game.playables[0];
        }
    },
    methods: {
        moment,
        async loadGames() {
            if (!this.games.length) {
                var response = await fetch("/games.json");
                var data = await response.json();
                this.games = data;
            }
        }
    }
}