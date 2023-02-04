<template>
  <section class="elementPage">
    <v-container>
      <v-row class="content">
        <h3>I'M A CUSHION DESIGNER</h3>
        <p>
          Based in San Francisco, California I design trendy and fashion
          Cushions, since I have memory I always had a tendency to design and
          illustration.
        </p>
        <button>learn more</button>
      </v-row>
      <v-row class="image">
        <v-col
          cols="12"
          lg="3"
          md="6"
          xs="12"
          data-aos="fade-up"
          data-aos-duration="1500"
          v-for="element in elementPage"
          :key="element.id"
        >
          <div class="element_card">
            <div class="image_wrapper">
              <img :src="element.image" :alt="element.title" />
            </div>
            <div class="info_wrapper">
              <h5>{{ element.title }}</h5>
              <span>{{ element.link }} </span>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<style  lang="scss">
.elementPage {
  margin: var(--margin-topbotton) 0;
  .v-row.content {
    width: 42%;
    flex-direction: column;
    align-content: center;
    margin: var(--margin-topbotton) auto;
    text-align: center;
    h3 {
      color: var(--main-color);
      font-weight: 700;
      padding: 10px 0;
    }
    p {
      font-size: 26px;
      font-family: normal;
      line-height: 38px;
      padding: 10px 0;
      color: var(--second-color);
    }
    button {
      border: 1px solid var(--main-color);
      border-radius: 20px;
      padding: 10px 20px;
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
  }
  .v-row.image {
    justify-content: center;
    .element_card {
      height: 520px;
      background-color: #fff;
      .image_wrapper {
        height: 400px;
        transition: all 0.4s ease;
        overflow: hidden;
        &:hover img {
          transform: scale(1.1);
        }
        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          transform: scale(1);
          transition: all 0.4s ease;
        }
      }
      .info_wrapper {
        background-color: var(--backgrond);
        height: 120px;
        color: #fff;
        padding: 20px;
        text-transform: capitalize;
        line-height: 30px;
        h5 {
          font-size: 20px;
        }
        span {
          font-family: Italic;
          font-size: 18px;
        }
      }
    }
  }
}
</style>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      elementPage: "elementPage",
    }),
  },
};
</script>