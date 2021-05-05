<template>
  <div>
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      offset-y
      :left="lg"
      :min-width="sm?'100vw':''"
      tile
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          icon
          v-bind="attrs"
          v-on="on"
        >
          <v-icon size="30" :color="drk?'white':'black'">mdi-email-outline</v-icon>
        </v-btn>
      </template>

      <v-card
        :width="sm?'100vw':'600px'"
        :min-height="sm?'70vh':'50vh'"
        :max-height="sm?'85vh':'80vh'"
        class="overflow-hidden"
        style="z-index: 2;"
        tile
      >
        <v-card-title>
          <v-row>
            <v-col class="pb-1pt-2">
              <div v-if="sm" style="word-break: kepp-all !important;">Connect with me!</div>
              <div v-else>Need help with a project? Get in touch with me and tell me about it.</div>
            </v-col>

            <v-col cols="2" sm="2" md="2" lg="1" xl="1" class="text-end pb-1 pt-2">
              <v-btn
                icon
                @click="menu=false"
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-card-title>

        <v-form
          ref="form"
          v-model="form"
          @submit.prevent="sendEmail"
        >
          <v-card-text class="overflow-y-auto" style="max-height: 50vh;">
            <v-row>
              <v-col cols="12" sm="12" md="12" lg="6" xl="6">
                <div class="mb-1">Name</div>
                <v-text-field
                  v-model="name"
                  name="name"
                  :rules="[rules.required]"
                  hide-details
                  autofocus
                  dense
                  tile
                  outlined
                  placeholder="What should I call you?"
                  class="rounded-0"
                  :disabled="sending"
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="12" md="12" lg="6" xl="6">
                <div class="mb-1">Email</div>
                <v-text-field
                  v-model="email"
                  name="email"
                  :rules="[rules.required, rules.email]"
                  hide-details
                  dense
                  tile
                  outlined
                  placeholder="What's your email address?"
                  class="rounded-0"
                  :disabled="sending"
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="12" md="12" lg="6" xl="6">
                <div class="mb-1">Subject</div>
                <v-autocomplete
                  v-model="subject"
                  name="subject"
                  :rules="[rules.required]"
                  hide-details
                  dense
                  tile
                  outlined
                  placeholder="How can I help you?"
                  class="rounded-0"
                  :items="subjects"
                  :disabled="sending"
                ></v-autocomplete>
              </v-col>

              <v-col cols="12" sm="12" md="12" lg="6" xl="6">
                <div class="mb-1">Country</div>
                <v-autocomplete
                  v-model="country"
                  name="country"
                  :rules="[rules.required]"
                  hide-details
                  dense
                  tile
                  outlined
                  placeholder="Where are you from?"
                  class="rounded-0"
                  :items="countries"
                  item-text="name"
                  item-value="name"
                  :disabled="sending"
                ></v-autocomplete>
              </v-col>

              <v-col cols="12">
                <div class="mb-1">Message</div>
                <v-textarea
                  v-model="message"
                  name="message"
                  :rules="[rules.required]"
                  hide-details
                  dense
                  tile
                  outlined
                  placeholder="Tell me about it."
                  class="rounded-0"
                  rows="3"
                  :disabled="sending"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-card-text>

          <v-card-actions>
            <v-row align="center" class="pa-2">
              <v-col
                order="2" order-sm="2" order-md="1" order-lg="1" order-xl="1"
                cols="12" sm="12" md="6" lg="6" xl="6"
                class="pt-0 pt-sm-0 pt-md-3 pt-lg-3 pt-xl-3"
              >
                <v-btn
                  tile
                  outlined
                  large
                  type="submit"
                  :loading="sending"
                  :disabled="sending"
                >
                  Next
                  <v-icon right>mdi-arrow-right</v-icon>
                </v-btn>
              </v-col>

              <v-col
                order="1" order-sm="1" order-md="2" order-lg="2" order-xl="2"
                cols="12" sm="12" md="6" lg="6" xl="6"
                class="text-start text-sm-start text-md-end text-lg-end text-xl-end pb-1 pb-sm-1 pb-md-3 pb-lg-3 pb-xl-3"
              >
                <span class="error--text">{{ error }}</span>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-menu>

    <v-alert-message
      v-model="alert.show"
      :text="alert.text"
    ></v-alert-message>
  </div>
</template>

<script>
  import countries from '@/assets/countries.js';
  import emailjs from 'emailjs-com';

  export default {
    name: 'Contact',

    data: () => ({
      alert: {
        show: false,
        text: ''
      },
      sending: false,
      error: '',
      rules: {
        required: v => !!v || 'This field is required',
        email: v => /.+@.+\..+/.test(v) || 'Email must be valid'
      },
      form: false,
      // form fields
      name: '',
      email: '',
      subject: '',
      country: '',
      message: '',
      countries: countries,
      subjects: [
        'Hello, just dropping by!',
        'Join my team full-time!',
        'Need help with a project.',
        `Let's do a collaboration.`,
        'Want to ask you questions.',
        'Just visiting your site!'
      ]
    }),

    watch: {
      async menu(val) {
        if (!val) {
          this.error = '';
          await this.$refs.form.resetValidation();
          this.menu = false;
        }
      }
    },

    computed: {
      menu: {
        get() { return this.$store.getters['main/contact'] },
        set(val) { this.$store.commit('main/setContact', val) }
      }
    },

    methods: {
      async sendEmail(e) {
        await this.$refs.form.validate();

        if (!this.form) {
          this.error = 'Looks like some fields are missing!';
        }
        else {
          this.error = '';

          this.sending = true;
          await emailjs.sendForm('gmail', 'template_kvb2r4v', e.target, 'user_kfibvKGXp7ufBj1KAI7lC')
            .then((result) => {
              console.log('[success]', result, result.text);
              this.$refs.form.reset();
              this.alert.show = true;
              this.alert.text = "Thank you for dropping by, I'll keep in touch with you soon!";
              this.menu = false;
            }, (error) => {
              console.log('[failed]', error, error.text);
              this.alert.show = true;
              this.alert.text = "Seems like your message has not been sent, sorry for the inconvenience.";
            })
          this.sending = false;
        }
      }
    }
  }
</script>