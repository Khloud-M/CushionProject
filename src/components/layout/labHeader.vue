<template>
    <header>
    <div class="container">
      <router-link to="/">
        <div class="logo">
          <img src="https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd8aad816e1ead4175ca869_Logo.png" alt="logo" />
        </div>
      </router-link>

      <ul>
        <!-- <router-link to="/"> {{ $t("navs.home") }} </router-link>
        <router-link to="/"> {{ $t("navs.about") }} </router-link>
        <router-link to="/product"> {{ $t("navs.products") }}</router-link>
        <router-link to="/"> {{ $t("navs.contact") }}</router-link> -->
        <router-link to="/"> home </router-link>
        <router-link to="/"> about me  </router-link>
        <router-link to="/product"> product </router-link>
        <router-link to="/"> contact</router-link>
      </ul>
  
    

     
    </div>
    <!-- container-->
  </header>
</template>