<template>
  <div class="footer">
    <v-container>
      <v-row>
        <v-col cols="12" lg="2" md="2" xs="12">
          <div class="logo">
            <router-link to="/">
              <img
                src="https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd8ee3cd39e269b7bb8c128_Logo-w.png"
              />
            </router-link>
          </div>
        </v-col>
        <v-col cols="12" lg="6" md="6" xs="12">
          <div class="links">
            <ul>
              <li>
                <router-link to="/">{{ $t("nav.home") }}</router-link>
              </li>
              <li>
                <router-link to="/">{{ $t("nav.about") }}</router-link>
              </li>
              <li>
                <router-link to="/">{{ $t("nav.products") }}</router-link>
              </li>
              <li>
                <router-link to="/">{{ $t("nav.contact") }}</router-link>
              </li>
            </ul>
          </div>
        </v-col>
        <v-col cols="12" lg="4" md="4" xs="12">
          <div class="social_links">
            <ul>
              <li class="list_item"><a href="#" /></li>
              <li class="list_item"><a href="#" /></li>
              <li class="list_item"><a href="#" /></li>
            </ul>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" lg="11" md="11" xs="12">
          <div class="hash">
            <p>
              Version 1.2 | Image Licensing | Made By Pablo Ramos | Visit My
              Templates | Powered By Webflow
            </p>
          </div>
        </v-col>
        <v-col cols="12" lg="1" md="1" xs="12">
          <div class="top_button">
            <button @click="toTop">
              <img
                src="https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd8f49cb519295d9cf00000_flecha-hacia-arriba.svg"
                alt=""
              />
            </button>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scTimer: 0,
      scY: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll: function () {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 5000);
    },
    toTop: function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss">
.footer {
  color: white;
  background-color: #c9adc6;
  font-family: "normal", sans-serif;

  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    height: 100%;
    align-items: center;
    justify-items: center;
    li {
      margin: 0px 5px;
      font-size: 24px;
      font-weight: 500;
    }
  }
  a {
    color: white !important;
  }
  .logo {
    img {
      width: 70%;
      height: 100%;
      object-fit: cover;
    }
  }
  .links {
    height: 100%;
  }
  .social_links {
    height: 100%;
    .list_item {
      width: 36px;
      height: 36px;
      margin-right: 10px;
      border-radius: 50%;
      background-color: #d6bbd3;
      background-position: 50% 50%;
      background-size: 125px;
      background-repeat: no-repeat;
      transition: 0.3s all ease-in-out;
      &:first-of-type {
        background-image: url("https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd8f38d6fd44c03d19a6ba4_facebook-logo.svg");
        background-size: 15px;
      }
      &:nth-of-type(2) {
        background-image: url("https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd8f38db51929a902efffce_instagram%20(2).svg");
        background-size: 15px;
      }
      &:last-child {
        background-image: url("https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd8f3eb6fd44cc7b19a6bc8_gorjeo%20(1).svg");
        background-size: 15px;
      }
      &:hover {
        background: #ba9fb7;
        transition: 0.3s all ease-in-out;
        background-size: 0;
      }
    }
  }
  .top_button {
    width: 35px;
    height: 35px;
    background-color: #ba9fb7;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-items: center;
    img {
      width: 60%;
      height: 60%;
    }
  }
}

@media (max-width: 957px) {
  .logo,
  .links,
  .social_links {
    display: flex;
    justify-content: center;
    justify-items: center;
    align-items: center;
    margin-bottom: 10px;
  }
}
</style>
