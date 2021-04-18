import { createWebHistory, createRouter } from "vue-router";
import Root from './components/Root.vue'
import About from './components/About.vue'
import Premium from './components/Premium.vue'
const routes=[
  {
    path:'/',
    name:'root',
    component:Root
  },
  {
    path:'/about',
    name:'about',
    component:About
  },
  {
    path:'/premium',
    name:'premium',
    component:Premium
  }
]
const router=createRouter({
  history:createWebHistory(),
  routes
})
export default router;
