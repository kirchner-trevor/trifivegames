import PageHeader from './page-header.js'

export default {
    name: 'game',
    template: /*html*/`
    <div>
        <page-header></page-header>
        <p>Game {{ gameId }}</p>
    </div>
    `,
    props: ['gameId'],
    components: {
        PageHeader
    }
}