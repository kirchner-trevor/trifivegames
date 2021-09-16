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
                    description: 'Compete to fulfill your fate through careful planning, luck, and skill. Will you be light or dark?',
                    progress: 50,
                    updates: [{
                        title: '2D Con 2021',
                        message: 'Prophetic was renamed to Four Fates just in time for 2D Con in Minneapolis, MN. The rename from player feedback, the game really isn\'t about telling the future as much as its about your fate as a hero.',
                        date: '2021-08-26'
                    }, {
                        title: 'Shortening Playtimes - Simplifying Cards',
                        message: 'One of the biggest challenges with Prophetic has been the length of the games. While we want it to be a full feeling game, the game is generally reaching the 2 hour mark with 4 players, which is a bit too long. ' + 
                        'With that in mind, we\'ve set a goal to reduce the average game time for 4 players to 1 hour. In order to accomplish that, we took a look at the most time consuming aspect of the game, and determined it to be the time players spend reading through their cards. While it\'s okay for players to take time in order to make a decision, we found that in this case it was simply reading through all the text that was taking up so much time. Where cards previously had 4 abilities, the active one being determined by the current round, they now have 2 abilities that can be used any time.',
                        date: '2021-07-01'
                    }],
                    assets: [],
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
                },
                'big-bad-barge': {
                    title: 'Big Bad Barge',
                    description: 'Family friendly cargo shipping! Ship the most cargo through the canal before it gets blocked.',
                    progress: 75,
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