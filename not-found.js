import PageHeader from './page-header.js'

export default {
    name: 'not-found',
    template: /*html*/`
    <div>
        <page-header></page-header>
        <p>Sorry! The page you were looking for couldn't be found. Weird!</p>
    </div>
    `,
    components: {
        PageHeader
    }
}