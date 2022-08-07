import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue3 from 'bootstrap-vue-3'
import '@popperjs/core' // Edit here
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import VCalendar from 'v-calendar'

const app = createApp(App)
app.use(BootstrapVue3)
app.use(router)
app.mount('#app')
app.use(store)
app.use(VCalendar, {}) // Use plugin with defaults
