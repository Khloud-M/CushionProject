import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'
// import lang file 
import i18n from './i18n'
// import VueCookies from 'vue3-cookies'




// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})




const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
// app.use(VueCookies);

// app.use(store)
app.use(vuetify)
app.mount('#app')
