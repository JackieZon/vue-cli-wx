import Vue from 'vue'
import YDUI from 'vue-ydui'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './pages/Home.vue'
import News from './pages/News.vue'
import My from './pages/My.vue'
import routes from './routerConfig.js'
// import { AlertPlugin, ToastPlugin } from 'vux'
// import oAuth from './../utils/weixin.js'

// oAuth();

Vue.use(YDUI)
Vue.use(VueRouter)

// Vue.use(AlertPlugin)
// Vue.use(ToastPlugin)

const router = new VueRouter({
  routes
})

router.push({ path: '/app/home' })

const app = new Vue({
  router
}).$mount('#app')

// new Vue({
//   el: '#app',
//   render: h => h(App)
// })

