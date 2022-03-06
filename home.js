import PageHeader from './page-header.js'

export default {
    name: 'home',
    template: /*html*/`
    <div>
        <page-header></page-header>
        <b-container class="mt-3" fluid>
            <b-card-group deck>
                <b-card
                    title="New Game - Jan 2022"
                    style="max-width: 20rem;"
                    class="mb-2"
                >
                    <b-card-text>
                    Train to defeat the Ultimate Kung Fruit by battling monsterous plants in Kung Fu Farming! A lite deckbuilding game containing food based economies, and cooperative monster battling.
                    </b-card-text>

                    <b-button to="/game/kung-fu-farming" variant="primary">Check out Kung Fu Farming</b-button>
                </b-card>
                <b-card
                    title="New Game - Aug 2021"
                    style="max-width: 20rem;"
                    class="mb-2"
                >
                    <b-card-text>
                    Compete to ship the most cargo through the canal while trying to avoid getting blocked in this quick family friendlybluffing game! 
                    </b-card-text>

                    <b-button to="/game/big-bad-barge" variant="primary">Check out Big Bad Barge</b-button>
                </b-card>
                <b-card
                    title="New Game - Jan 2020"
                    style="max-width: 20rem;"
                    class="mb-2"
                >
                    <b-card-text>
                    Overthink's new game is a 54 card, 4-player, competitive game that aims to give players agency and identity through unique card combinations.
                    </b-card-text>

                    <b-button to="/game/four-fates" variant="primary">Check out Four Fates</b-button>
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