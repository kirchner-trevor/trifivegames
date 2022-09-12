export default {
  name: 'subscribe-modal',
  template: /*html*/`
  <b-modal id="subscribe"
    title="Subscribe"
    hide-footer
    hide-header
    hide-header-close
    @ok="handleOk">
      <!-- Begin Mailchimp Signup Form -->
      <b-form action="https://gmail.us5.list-manage.com/subscribe/post?u=dae205e3ed135cf4f663f4d1d&amp;id=b15a37fcd8&amp;f_id=0096f4e9f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_self">
          <b-form-group label="Email" description="We'll never share your email with anyone else." label-for="mce-EMAIL">
              <b-input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" required />
          </b-form-group>
          <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
          <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_dae205e3ed135cf4f663f4d1d_b15a37fcd8" tabindex="-1" value=""></div>
          <b-button variant="primary" type="submit" name="subscribe" id="mc-embedded-subscribe" class="button">Subscribe <b-icon icon="bell"/></b-button>
      </b-form>
      <!--End mc_embed_signup-->
  </b-modal>
  `,
  methods: {
    handleOk(bvModalEvent) {
      bvModalEvent.preventDefault()
      this.handleSubmit()
    },
    handleSubmit() {
      this.$nextTick(() => {
        this.$bvModal.hide('modal-prevent-closing')
      })
    }
  }
}