import PageHeader from './page-header.js'

export default {
    name: 'home',
    template: /*html*/`
    <div>
        <page-header></page-header>
        <b-container class="mt-3" fluid>
            <b-card-group deck>
                <b-card
                    title="Latest Game"
                    style="max-width: 20rem;"
                    class="mb-2"
                >
                    <b-card-text>
                    Overthink's latest game is a 54 card, 4-player, competitive game that aims to give players agency and identity through unique card combinations.
                    </b-card-text>

                    <b-button to="/game/four-fates" variant="primary">Check it out!</b-button>
                </b-card>
                <b-card
                    title="News"
                    style="max-width: 20rem;"
                    class="mb-2"
                >
                    <b-card-text>
                    The site is finally up and running! It's even starting to look half-way decent too!
                    </b-card-text>
                </b-card>
            </b-card-group>
        </b-container>
    </div>
    `,
    components: {
        PageHeader
    }
}