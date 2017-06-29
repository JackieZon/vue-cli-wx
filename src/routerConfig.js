import App from './App.vue'
import Home from './pages/Home.vue'
import News from './pages/News.vue'
import My from './pages/My.vue'
import UpFile from './pages/UpFile.vue'

export default[
  {
    path: '/app', 
    component: App,
    children:[
      {
        path:'home',
        component: Home
      },
      {
        path:'news',
        component: News
      },
      {
        path:'my',
        component: My
      },
      {
        path:'uofile',
        component: UpFile
      }
    ]
  },
  { path: '/news', component: News }
]