<template>
  <div class="contact_section">
    <v-container>
      <div class="custom_container">
        <v-row>
          <!-- Start:: contact methods -->
          <v-col cols="12" lg="4" md="4" xs="12">
            <div class="contact_methods">
              <!-- email Method -->
              <div class="contact_method">
                <h2>{{ $t("misc.email") }}</h2>
                <h5>support@website.com</h5>
              </div>
              <!--  -->

              <!-- phone method -->
              <div class="contact_method">
                <h2>{{ $t("misc.phone") }}</h2>
                <h5>800-123-456</h5>
              </div>

              <!--  -->

              <!-- address method -->
              <div class="contact_method">
                <h2>{{ $t("misc.address") }}</h2>
                <h5>
                  23 Evergreen Street,<br />
                  San Francisco, <br />
                  California USA
                </h5>
              </div>

              <!--  -->
            </div>
          </v-col>
          <!-- End:: contact methods -->

          <!-- Start:: contact form -->
          <v-col cols="12" lg="8" md="8" xs="12">
            <div class="contact_form">
              <h2>{{ $t("misc.address") }}</h2>
              <p>{{ $t("misc.drop") }}</p>

              <form @submit.prevent="contactForm">
                <v-row>
                  <v-col cols="12" lg="6">
                    <InputText
                      type="text"
                      v-model="name"
                      :placeholder="$t('placeholder.name')"
                    />
                  </v-col>
                  <v-col cols="12" lg="6">
                    <InputText
                      type="text"
                      v-model="company"
                      :placeholder="$t('placeholder.company')"
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" lg="6">
                    <InputText
                      type="text"
                      v-model="phone"
                      :placeholder="$t('placeholder.phone')"
                  /></v-col>
                  <v-col cols="12" lg="6">
                    <InputText
                      type="text"
                      v-model="email"
                      :placeholder="$t('placeholder.email')"
                  /></v-col>
                </v-row>

                <Textarea
                  v-model="message"
                  rows="5"
                  cols="30"
                  :placeholder="$t('placeholder.maessage')"
                />

                <button type="submit">{{ $t("buttons.letTalk") }}</button>
              </form>
            </div>
          </v-col>

          <!-- End:: contact form -->
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
    data() {
        return {
            form:{
                name:null,
                email:null,
                phone:null,
                company:null,
                message:null,
            }
        }
    },
  methods: {
    contactForm() {
      const form = new FormData();
      form.append("fields[Name]", this.form.name);
      form.append("fields[Company]", this.form.company);
      form.append("fields[Phone]", this.form.phone);
      form.append("fields[Email]", this.form.email);
      form.append("fields[Message]", this.form.message);
      this.axios({
        method: "POST",
        url: "https://webflow.com/api/v1/form/5bd86c52b7abc5114b2ed43c",
        data: form,
      })
        .then(() => {
 
          this.$toast.add({severity:'success', summary: 'Sent Successfully', detail:'Order submitted', life: 3000});
        })
        .catch(() => {});
    },
  },
};
</script>

<style lang="scss">
.contact_section {
  background-color: #ceb3cb;
  color: white;
  font-family: "normal", sans-serif;
  padding: 20px 0;
  margin: 30px 0;

  .custom_container {
    width: 80%;
    margin: auto;
  }
  h2 {
    font-family: Roboto, sans-serif;

    font-size: 15px;
    font-weight: 700;
    margin: 7px 0;
  }
  h5 {
    font-size: 20px;
    font-weight: 500;
  }
  p {
    font-size: 25px;
  }

  .contact_form {
    p {
      margin-bottom: 20px;
      font-size: 24px;
    }
    input,
    textarea,
    button {
      border: 1px solid #fff;
      font-family: Roboto, sans-serif;
      padding: 5px;
      width: 100%;
      height: 55px;
      &::placeholder {
        color: white;
        padding: 0 5px;
        font-size: 16px;
      }
    }
    textarea {
      margin: 25px 0;
      height: 150px;
      padding: 10px 5px;
    }
    button {
      width: 230px;
      transition: 0.3s all ease-in-out;

      &:hover {
        background: white;
        color: #ceb3cb;
      }
    }
  }
}
</style>
