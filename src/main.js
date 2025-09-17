import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import { loadPlugins } from './assets/js/plugins-loader.js'
import { nextTick } from 'vue'

// Toastify
import Vue3Toastify from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

// CSS imports
import './assets/css/style.css'
import './assets/css/libraries.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'
import 'magnific-popup/dist/magnific-popup.css'

//Jquery imports
import './assets/js/jquery-3.5.1.min'

// jQuery import
import $ from 'jquery'
window.$ = $
window.jQuery = $

// Bootstrap + plugins
import 'popper.js'
import 'bootstrap'
import 'slick-carousel'
import 'magnific-popup'
import 'jquery-validation'

// Axios setup
axios.defaults.baseURL = "http://127.0.0.1:8000/api"
axios.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if(token) config.headers.Authorization = `Bearer ${token}`
  return config
})

// Vue app
const app = createApp(App)
app.use(router)
app.use(Vue3Toastify, {
  autoClose: 3000,   
  position: "top-right", 
})
app.config.globalProperties.$axios = axios

app.mount('#app')

// ------------------------------
// Route change  plugins re-init
// ------------------------------
router.afterEach(() => {
  nextTick(() => {
    setTimeout(() => {
      loadPlugins()
    }, 100) // DOM ready 
  })
})

// Initial load
loadPlugins()
