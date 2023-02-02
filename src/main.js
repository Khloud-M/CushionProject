import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import store from "./stores";

import '@/assets/style/main.css'
import '@/assets/style/color.css'
//bootstrap
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";
// import bootstrap from 'bootstrap';
// import lang file 
import i18n from './i18n'
// import VueCookies from 'vue3-cookies'
import store from "@/stores/index.js"
// import Vue from 'vue'
import Vuex from 'vuex'



// install primevue
import PrimeVue from 'primevue/config';
import InputText  from 'primevue/InputText';
import Textarea from "primevue/textarea";
import ToastService from 'primevue/toastservice';
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

// import page 
import labHeader from "@/components/layout/labHeader.vue";



const app = createApp(App)
app.component("labHeader", labHeader)


app.use(createPinia())
app.use(router)
app.use(i18n)
// app.use(VueCookies);

<<<<<<< HEAD
app.use(store)
app.use(PrimeVue);
app.component('InputText', InputText );
app.component('Textarea', Textarea );
app.use(ToastService);

=======
app.use(Vuex)
app.use(store)
>>>>>>> df84f2db0c7abe23cc97761c3ec7dd794a030f9f
app.use(vuetify)
// app.use(bootstrap)
app.mount('#app')
