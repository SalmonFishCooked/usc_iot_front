import { createApp } from 'vue'
import App from './App.vue'

import TDesign from 'tdesign-vue-next';
import 'tdesign-vue-next/es/style/index.css';
import './index.css'

import { createPinia } from 'pinia'

import router from "./router/index.js";

const pinia = createPinia()

const app = createApp(App)
app.use(TDesign)
app.use(pinia)
app.use(router)

app.config.warnHandler = () => null

app.mount('#app')
