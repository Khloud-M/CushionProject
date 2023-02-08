<template>
  <header>
    <div class="container">
      <div class="logo">
        <router-link to="/">
          <img
            src="https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd8aad816e1ead4175ca869_Logo.png"
            alt="logo"
          />
        </router-link>
      </div>
      <!-- logo -->

      <ul class="large_screen">
        <router-link to="/"> {{ $t("nav.home") }} </router-link>
        <router-link to="/"> {{ $t("nav.about") }} </router-link>
        <router-link to="/products"> {{ $t("nav.products") }}</router-link>
        <router-link to="/"> {{ $t("nav.contact") }}</router-link>
     
      </ul>
      <!-- mobilescreen -->
      <div class="mobile">
        <div class="bar" @click="toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <transition name="mobile-nav" appear>
          <div class="container_dropdowm" v-if="mobileNav">
            <div class="content_dropdown">
              <div class="close-nav" @click="toggle">X</div>
              <ul>
                <router-link to="/"> home </router-link>
                <router-link to="/"> about me </router-link>
                <router-link to="/products"> product </router-link>
                <router-link to="/"> contact</router-link>
              </ul>
            </div>
            <!-- content_dropdown-->
          </div>
          <!-- container_dropdowm-->
        </transition>
      </div>
    </div>
    <!-- container-->
  </header>
</template>
<script>
export default {
  data() {
    return {
      mobileNav: false,
    };
  },
  methods: {
    toggle() {
      this.mobileNav = !this.mobileNav;
  },
}
}
</script>
<style lang="scss" scoped>
header {
  border-top: 4px solid var(--main-color);
}
.container {
  padding: 20px 0;
  max-width: 1024px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-transform: capitalize;
  .logo {
    width: 120px;
    img {
      width: 100%;
    }
  }
  ul {
    display: flex;
    flex-direction: row;
    column-gap: 30px;
    a {
      color: var(--main-color);
      font-family: SemiBold;
      font-size: 22px;
      position: relative;
      cursor: pointer;
      &::before {
        content: "";
        position: absolute;
        width: 0;
        height: 4px;
        left: 0;
        bottom: -38px;
        background-color: var(--main-color);
        transition: all 0.3s linear;
      }
      &:hover::before {
        width: 100%;
      } 
    }
  }
}
.mobile{
  .bar {
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;
  span {
    width: 50px;
    height: 2px;
    background-color: var(--main-color);
  }
}
.container_dropdowm {
  background-color: rgba(176, 142, 173,0.7);
  // opacity: 0.2;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 9999999;
  .content_dropdown {
    height: 100%;
    .close-nav {
      width: 40px;
      height: 40px;
      line-height: 40px;
      color: white;
      cursor: pointer;
      font-size: 20px;
      margin: 50px;
      border-radius: 50%;
      border: 2px solid #ffff;
      text-align: center;
      transition: all 0.3s ease;
      &:hover{
        transform: rotate(180deg);
        color: var(--main-color);
        background-color: #ffff;      
      }
    }
    ul {
      display: flex;
      flex-direction: column;
      gap: 20px;
      justify-content: space-between;
      align-items: center;
      margin: 50px 0;
      height: 50%;
      // height: 600px;
      a {
        color: white;
        font-size: 25px;
        box-shadow: 2px 2px 2px 2px var( --second-color);
        width: 150px;
        text-align: center;
        &::before {
          display: none;
        }
      }
    }
  }
}
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: all 0.7s ease;
}
.mobile-nav-enter-from,
.mobile-nav-leave-to {
  transform: translateX(-100%);
}
.mobile-nav-enter-to {
  transform: translateX(0px);
}
@media (min-width: 1025px) {
  .mobile {
    display: none !important;
  }
}
@media (max-width: 1024px) {
  .large_screen {
    display: none !important;
  }
  .search_Cart_register {
    display: none !important;
  }
}
</style>