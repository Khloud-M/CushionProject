<template>
  <div class="spring">
    <div class="container">
      <div class="contain">
        <div
          class="photo"
          data-aos="fade-right"
          data-aos-delay="40"
          data-aos-duration="1500"
          data-aos-easing="ease-out-in"
        ></div>
        <div
          class="info_card"
          data-aos="fade-left"
          data-aos-delay="40"
          data-aos-duration="1500"
          data-aos-easing="ease-out-in"
        >
          <div class="info">
            <h4>{{ $t("misc.now") }}</h4>
            <h1>{{ $t("misc.springCushion") }}</h1>
            <button>{{ $t("buttons.buyNow") }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.container {
  margin: auto;
  width: 70%;
}
.spring {
  background: #ceb3cb;
  overflow: hidden;
  padding: 20px 0;
  .contain {
    position: relative;
    .photo {
      background-image: url("https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd8e067cf26d350857abf3a_7.jpg");
      height: 675px;
      width: 540px;
      background-position: 50% 50%;
      background-size: cover;
      background-repeat: no-repeat;
    }
    .info_card {
      background-color: #b08ead;
      color: white;
      width: 40%;
      height: 400px;
      padding: 100px 25px;
      position: absolute;
      top: 25%;
      left: 40%;
      z-index: 50;
      .info {
        display: flex;
        align-items: flex-start;
        justify-content: start;
        justify-items: start;
        flex-direction: column;

        button {
          margin: 10px 0;
          width: 70px;
          border-bottom: 2px solid white;
        }
      }
    }
  }
}

@media (max-width: 1270px) {
  .photo {
    width: 500px !important;
  }
  .info_card {
    left: 40% !important;
    width: 50% !important;
  }
}
@media (max-width: 970px) {
  .photo {
    width: 500px !important;
  }
  .info_card {
    left: 60% !important;
    width: 50% !important;
  }
}
@media (max-width: 750px) {
  .photo {
    width: 400px !important;
  }
  .info_card {
    left: 60% !important;
    width: 50% !important;
  }
}
@media (max-width: 600px) {
  .photo {
    width: 300px !important;
  }
  .info_card {
    left: 70% !important;
    width: 50% !important;
  }
}
</style>
