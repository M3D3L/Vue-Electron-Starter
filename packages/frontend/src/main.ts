import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './assets/index.css'

const app = createApp(App)
const pinia = createPinia()

// Install the Pinia plugin
app.use(pinia)

app.mount('#app')