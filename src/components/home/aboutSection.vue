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
          <h5>{{ $t("nav.about") }}</h5>
          <p>
            {{ $t("misc.cushionDesigner") }}
          </p>
          <a>{{ $t("buttons.learnMore") }}</a>
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
  @media (max-width: 480px) {
    & {
      height: 145vh;
    }
  }
  .v-row {
    justify-content: center;

    .image {
      height: 60vh;
      position: absolute;
      top: 10%;
      @media (min-width: 481px) and (max-width: 768px) {
        & {
          right: 15%;
        }
      }
      @media (min-width:  769px) and (max-width: 1024px) {
        & {
          right: 20%;
         
        }
      }
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
      @media (max-width: 480px) {
        & {
          width: 70%;
          height: 55vh;
          top: 55%;
          left: 15%;
        }
      }
      @media (min-width: 481px) and (max-width: 768px) {
        & {
          width: 35%;
          height: 45vh;
          top: 17%;
          left: 10%;
        }
      }
      @media (min-width:  769px) and (max-width: 1024px) {
        & {
          width: 30%;
          height: 40vh;
          top: 20%;
          left: 15%;
        }
      }
      h5 {
        font-size: 18px;
      }
      p {
        font-family: normal;
        font-weight: 700;
        font-size: 40px;
        @media (max-width: 1024px) {
          & {
            font-size: 30px;
          }
        }
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