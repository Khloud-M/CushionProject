<template>
  <div>
    <v-container>
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
              <h5>23 Evergreen Street, San Francisco, California USA</h5>
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
          </div>
        </v-col>

        <!-- End:: contact form -->
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
