<template>
  <v-content>
    <v-container
      class="tinted-bg"
      style="padding-top: 150px; position: sticky; width: 100vw; height: 100vh"
      fluid
    >
      <v-container>
        <div class="text-uppercase cheese--text font-weight-black">
          Contact us
        </div>
        <div>
          If you’re looking for a design partnership or need help telling your product’s story through a digital experience, we’d love to hear from you.
        </div>
      </v-container>
      <v-form dark>
        <v-container>
          <v-row>
            <v-col>
              <v-text-field
                v-model="name"
                label="Name"
                outlined
                dark
              />
            </v-col>

            <v-col>
              <v-text-field
                v-model="email"
                label="Email"
                outlined
                dark
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                v-model="company"
                label="Company"
                outlined
                dark
              />
            </v-col>

            <v-col>
              <v-text-field
                v-model="phone"
                label="Phone"
                outlined
                dark
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                v-model="message"
                label="Message"
                outlined
                dark
              />
            </v-col>
          </v-row>
          <v-btn
            color="cheese"
            class="text-uppercase font-weight-black"
          >
            Submit
          </v-btn>
        </v-container>
      </v-form>
    </v-container>
  </v-content>
</template>
