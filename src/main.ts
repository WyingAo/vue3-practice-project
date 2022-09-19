import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router'
import { globalRegister } from '@/global/index'
import '@/assets/css/index.scss'
const app = createApp(App)
app.use(router)
app.use(globalRegister)
app.mount('#app')
