import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import { gsap } from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from 'gsap/ScrollSmoother'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

const app = createApp(App)

app.use(router)

app.mount('#app')
