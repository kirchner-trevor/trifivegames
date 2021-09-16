import PageHeader from './page-header.js'

export default {
    name: 'game',
    template: /*html*/`
    <div>
        <page-header></page-header>
        <b-container class="mt-3" fluid>
            <b-jumbotron :header="game.title">
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
                                    <b-progress-bar :value="game.progress">{{ stage }}</b-progress-bar>
                                </b-progress>
                            </p>

                            <div v-if="latestUpdate">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1"><b-badge variant="success">Latest</b-badge> {{ latestUpdate.title }}</h5>
                                    <small>{{ moment(latestUpdate.date).fromNow() }}</small>
                                </div>
                            
                                <p class="mb-1">
                                    {{ latestUpdate.message }}
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
                                
                                    <p class="mb-1">
                                        {{ update.message }}
                                    </p>
                                </b-list-group-item>
                            </b-list-group>
                        </b-card-text>
                    </b-tab>
                    <b-tab>
                        <template v-slot:title>
                            Rules
                        </template>
                        <b-card-text>
                            A detailed breakdown of how to play the game.
                        </b-card-text>
                    
                        <b-button href="#" variant="primary">Go somewhere</b-button>
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
                                            <h5 class="mb-1"><b-badge variant="success">0.0.1</b-badge> {{ playable.title }}</h5>
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
            games: {
                'four-fates': {
                    title: 'Four Fates',
                    description: 'Compete to prove yourself the prophesied one through careful planning, luck, and skill. Will you be light or dark?',
                    progress: 50,
                    updates: [{
                        title: 'Crazy Stuff',
                        message: 'Sample update',
                        date: '2019-12-20'
                    }, {
                        title: 'Crazy Stuff 2',
                        message: 'Got some new art',
                        date: '2019-12-15'
                    }],
                    assets: [{
                        title: 'Thing',
                        url: 'https://cdn4.buysellads.net/uu/1/58011/1576093266-B432_TA_Online_Ads_.png'
                    }],
                    playables: [{
                        title: 'Tabletop Simulator',
                        date: '2020-01-12T23:00:00Z',
                        description: 'The first playable demo of Prophetic is now available on Tabletop Simulator! Head on over to the <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=1967682063" target="_blank">Steam Workshop Page</a> and give it a try.'
                    }]
                },
                'guilded': {
                    title: 'Guilded',
                    description: 'A bluffing and deduction game focused on simple mechanics and deep strategy.',
                    progress: 80,
                    updates: [],
                    assets: []
                }
            }
        }
    },
    computed: {
        game() {
            return this.games[this.gameId];
        },
        stage() {
            let stage = 'Ideation';
            if (this.game.progress >= 75) {
                stage = 'Polishing';
            }
            else if (this.game.progress >= 50) {
                stage = 'Work In Progress';
            }
            return stage;
        },
        latestUpdate() {
            return this.game.updates && this.game.updates.length && this.game.updates[0];
        }
    },
    methods: {
        moment
    }
}