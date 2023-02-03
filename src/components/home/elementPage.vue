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
      <v-row>
        <v-col
          cols="12"
          lg="3"
          md="6"
          xs="12"
          v-for="element in elementPage"
          :key="element.id"
        >
          <div class="product_card">
            <div class="image_wrapper">
              <img :src="element.image" :alt="element.title" />
            </div>
            <div class="info_wrapper">
              <div class="product_name">
                <h1>{{ element.title }}</h1>
              </div>
              <div class="product_price"></div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<style  lang="scss">
.elementPage {
  margin: var(--marginTopbotton) 0;
  .v-row.content {
    width: 42%;
    flex-direction: column;
    align-content: center;
    margin: var(--marginTopbotton) auto;
    text-align: center;
    h3{
        color: var( --main-color);
        font-weight: 700;
        padding: 10px 0;
    }
    p{
        font-size: 26px;
        font-family: normal;
        line-height: 38px;
        padding: 10px 0 ;
        color: var(--second-color);
    }
    button{
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
        &:hover{
            background-color: var(--main-color);
            color: #fff;

        }

    }
  }
  .v-row {
    justify-content: center;
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