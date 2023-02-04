<template>
  <div class="benfits_section">
    <v-container>
      <v-row>
        <v-col cols="12" lg="4" md="4" xs="12">
          <div class="benfit shop"></div>
          <div class="info">
            <h4>{{ $t("misc.safeShopping") }}</h4>
            <p>{{ $t("misc.buyWithConfidence") }}</p>
          </div>
        </v-col>
        <v-col cols="12" lg="4" md="4" xs="12">
          <div class="benfit ship"></div>
          <div class="info">
            <h4>{{ $t("misc.fastShipping") }}</h4>
            <p>{{ $t("misc.getYourProductFast") }}</p>
          </div>
        </v-col>
        <v-col cols="12" lg="4" md="4" xs="12">
          <div class="benfit sat"></div>
          <div class="info">
            <h4>{{ $t("misc.satisfactionGuarantee") }}</h4>
            <p>{{ $t("misc.getMoney") }}</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.benfits_section {
  background-color: #d6bbd3;
  color: white;
  text-align: center;
  margin-top: 100px;
  .benfit {
    background-image: url("https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd8ebd4ef82dc17a92468cd_entrega.svg");
    background-position: 50% 50%;
    background-size: 35px;
    background-repeat: no-repeat;
    width: 95px;
    height: 95px;
    margin: auto;
    margin-bottom: 20px;
    margin-top: 20px;
    border-radius: 50%;
    background-color: #ba9fb7;
  }
  .shop {
    background-image: url("https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd8ebd4557fae86ba4aebb2_compras.svg");
  }
  .sat {
    background-image: url("https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd8ebd4380421b04e500298_como.svg");
  }
  .info {
    h4 {
      font-size: 22px;
      font-weight: 700;
      font-family: "normal", sans-serif;
    }
    p {
      font-family: Roboto, sans-serif;

      font-size: 17px;
    }
  }
}
</style>
