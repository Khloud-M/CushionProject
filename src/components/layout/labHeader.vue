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
      <ul>
        <!-- <router-link to="/"> {{ $t("nav.home") }} </router-link>
        <router-link to="/"> {{ $t("nav.about") }} </router-link>
        <router-link to="/product"> {{ $t("nav.products") }}</router-link>
        <router-link to="/"> {{ $t("nav.contact") }}</router-link> -->
        <router-link to="/"> home </router-link>
        <router-link to="/"> about me </router-link>
        <router-link to="/product"> product </router-link>
        <router-link to="/"> contact</router-link>
      </ul>
    </div>
    <!-- container-->
  </header>
</template>
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
    width: 160px;
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
        height: 2px;
        left: 0;
        bottom: -10px;
        background-color: var(--main-color);
        transition: all 0.3s linear;
      }
      &:hover::before {
        width: 100%;
      }
      
    }
  }
}
</style>