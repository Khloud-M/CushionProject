<template>
  <section class="aboutCollection">
    <v-container>
      <v-row
        class="row1"
        data-aos="fade-left"
        data-aos-delay="50"
        data-aos-duration="1500"
      >
        <v-col cols="12" lg="3" class="content">
          <h3>{{ $t('misc.beginings') }}</h3>
          <p>
         {{ $t('misc.Credibly') }}
          </p>
          
        </v-col>
        <v-col cols="12" lg="4" class="image">
          <img
            src="https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd8dbafef82dc4bd8245d41_nathan-fertig-249917-unsplash-p-1080.jpeg"
            alt="image"
          />
        </v-col>
      </v-row>
      <hr />
      <!-- end row1 -->
      <v-row
        class="row2"
        data-aos="fade-right"
        data-aos-delay="100"
        data-aos-duration="1500"
      >
        <v-col cols="12" lg="4" class="image">
          <img
            src="https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd8dbaf49a14257198e81cb_6.jpg"
            alt="iamge"
          />
        </v-col>
        <v-col cols="12" lg="3" class="content">
          <h3>{{ $t('misc.carrer') }}</h3>
          <p>
            Collaboratively administrate turnkey channels whereas virtual
            e-tailers.
          </p>
          <p>
            Objectively seize scalable metrics whereas proactive e-services
            seamlessly empower fully researched growth strategies.
          </p>
          <p>And interoperable internal or “organic” sources.</p>
          <button>{{ $t('buttons.learnMore') }}</button>
        </v-col>
      </v-row>
      <hr />

      <!-- end row2 -->

      <v-row
        class="row3"
        data-aos="fade-left"
        data-aos-delay="150"
        data-aos-duration="1500"
      >
        <v-col cols="12" lg="3" class="content">
          <h3>{{ $t('nav.products') }}</h3>
          <p>
            Seamlessly empower fully researched growth strategies and
            interoperable internal or “organic” sources.
          </p>
          <p>
            Credibly innovate granular internal or “organic” sources whereas
            high standards in web-readiness.
          </p>
          <p>Energistically scale future-proof core competence</p>
        </v-col>
        <v-col cols="12" lg="4" class="image">
          <img
            src="https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd8dbafcf26d38b797ab7a8_julian-hochgesang-795082-unsplash.jpg"
            alt="image"
          />
        </v-col>
      </v-row>
      <!-- end row1 -->
    </v-container>
  </section>
</template>
<style lang="scss" scoped>
.aboutCollection {
  margin: var(--margin-topbotton) 0;
  overflow: hidden;
  hr {
    width: 65%;
    margin: auto;
    border: 0.5px solid var(--main-color);
  }
  .v-row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    column-gap: 50px;
    flex-wrap: wrap;
    // height: 55vh;
    overflow: hidden;
    margin: var(--margin-topbotton) 0;
    @media (min-width: 481px) and (max-width: 768px) {
      & {
        width: 95%;
        margin: auto;
        overflow: hidden;
        margin: 20px auto;
      }
    }
  }
  .content {
    // height: 35vh;
    margin: auto 0;
    line-height: 40px;
    button {
      border: 1px solid var(--main-color);
      border-radius: 20px;
      padding: 5px 20px;
      width: 180px;
      margin: 10px auto;
      text-transform: uppercase;
      color: var(--main-color);
      font-weight: 700;
      font-size: 13px;
      letter-spacing: 2px;
      transition: all 0.3s ease;
      &:hover {
        background-color: var(--main-color);
        color: #fff;
      }
    }

    h3 {
      color: var(--main-color);
    }
    p {
      color: var(--second-color);
      font-size: 20px;
    }
  }
  .image {
    // height: 55vh;
    border: 17px solid var(--main-color);
    margin: 0 !important;
    padding: 0 !important;
    cursor: pointer;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      vertical-align: middle;
      display: inline-block;
      margin: 0 !important;
      padding: 0 !important;
    }
  }
}
</style>