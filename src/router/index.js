import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"",
      component:()=>import("@/views/index.vue"),
      children:[
        {
          path:'',
          component:()=>import("@/views/Home/home.vue")
        },
        {
          path:'/home',
          component:()=>import("@/views/Home/home.vue")
        },
        {
          path:"/market",
          component:()=>import("@/views/Market/market.vue")
        },
        {
          path:"/mine",
          component:()=>import("@/views/Mine/mine.vue")
        },
        {
          path:"/wallet",
          component:()=>import("@/views/Wallet/wallet.vue")
        }
      ]
    },
    
  ]
})

export default router
