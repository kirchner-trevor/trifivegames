import PageHeader from './page-header.js'

export default {
    name: 'bar',
    template: /*html*/`
    <div>
        <page-header></page-header>
        <p>bar</p>
    </div>
    `,
    components: {
        PageHeader
    }
}