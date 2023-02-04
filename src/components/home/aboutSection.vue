<template>
  <section class="aboutsection">
    <v-container>
      <v-row>
        <div
          class="content"
          data-aos="fade-right"
          data-aos-delay="40"
          data-aos-duration="1500"
          data-aos-easing="ease-out-in"
        >
          <h5>ABOUT ME</h5>
          <p>
            I'm a trendy <br />
            Cushion Designer
          </p>
          <a> learn more</a>
        </div>
        <div
          class="image"
          data-aos="fade-left"
          data-aos-delay="400"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <img
            src="https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd8dbaf557faed0e04aded5_4.png"
            alt="about_image"
          />
        </div>
      </v-row>
    </v-container>
  </section>
</template>
<style lang="scss" scoped>
.aboutsection {
  margin: var(--margin-topbotton) 0;
  background-color: var(--backgrond);
  height: 80vh;
  overflow: hidden;
  position: relative;
  .v-row {
    justify-content: center;

    .image {
      height: 60vh;
      position: absolute;
      top: 10%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .content {
      background-color: var(--main-color);
      height: 40vh;
      width: 22%;
      padding: 50px 25px;
      color: #fff;
      text-align: justify;
      line-height: 60px;
      position: absolute;
      top: 20%;
      left: 20%;
      z-index: 9999;
      h5 {
        font-size: 18px;
      }
      p {
        font-family: normal;
        font-weight: 700;
        font-size: 40px;
      }
      a {
        display: block;
        text-transform: uppercase;
        color: #fff;
        font-weight: 600;
        font-size: 14px;
        letter-spacing: 3px;

        transition: all 0.3s ease;
        cursor: pointer;
        &:hover {
          color: var(--backgrond);
          background-color: transparent;
        }
      }
    }
  }
}
</style>