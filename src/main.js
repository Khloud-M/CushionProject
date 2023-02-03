import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/assets/style/main.css";
import "@/assets/style/color.css";
//bootstrap
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";
// import bootstrap from 'bootstrap';
// import lang file
import i18n from "./i18n";
// import VueCookies from 'vue3-cookies'
import Vuex from "vuex";

//axios
import axios from "axios";
import VueAxios from "vue-axios";
axios.defaults.baseURL = "https://webflow.com/api/v1/";

// install primevue
import PrimeVue from "primevue/config";
import InputText from "primevue/InputText";
import Textarea from "primevue/textarea";
import ToastService from "primevue/toastservice";
// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

// import page
import labHeader from "@/components/layout/labHeader.vue";

const app = createApp(App);
app.component("labHeader", labHeader);

app.use(createPinia());
app.use(router);
app.use(i18n);
// app.use(VueCookies);

app.use(store);
app.use(PrimeVue);
app.component("InputText", InputText);
app.component("Textarea", Textarea);
app.use(ToastService);
app.use(Vuex);
app.use(VueAxios, axios);
app.use(vuetify);
// app.use(bootstrap)
app.mount("#app");
