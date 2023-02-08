<template>
  <section class="sliderSectoin">
    <div class="bg_top"></div>
    <div class="bg_bottom"></div>
    <v-container>
        <v-card
    elevation="24"
    max-width="444"
    class="mx-auto"
  >
    <v-carousel
      :continuous="false"
      :show-arrows="false"
      hide-delimiter-background
      delimiter-icon="mdi-square"
      height="300"
    >
      <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
      >
        <v-sheet
          :color="colors[i]"
          height="100%"
          tile
        >
          <div class="d-flex fill-height justify-center align-center">
            <div class="text-h2">
              {{ slide }} Slide
            </div>
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-card>
    </v-container>
  </section>
</template>
<script>
  export default {
    data () {
      return {
        colors: [
          'green',
          'secondary',
          'yellow darken-4',
          'red lighten-2',
          'orange darken-1',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
      }
    },
  }
</script>
<style  lang="scss">
.sliderSectoin {
  position: relative;
  height: 87vh;
  .bg_top {
    position: absolute;
    left: 0px;
    top: 0px;
    right: 0px;
    height: 56%;
    background-color: #c9adc6;
  }
  .bg_bottom {
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    height: 44%;
    background-color: #d6bbd3;
  }
  .v-container{
    background-color: red;
    position: relative;
  }
}
</style>