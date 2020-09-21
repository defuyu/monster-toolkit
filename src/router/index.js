import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import demos from '@/examples'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Basic',
    redirect: '/menu',
    component: Home,
    children: [{
        path: '/menu',
        name: 'Menu',
        component: demos.MenuDemo
      },
      {
        path: '/inputIconEdit',
        name: 'IputIconEdit',
        component: demos.InputIconEditDemo
      },
      {
        path: '/table',
        name: 'Table',
        component: demos.TableDemo
      },
      {
        path: '/groupTabs',
        name: 'GroupTabs',
        component: demos.GroupTabsDemo
      }
    ]
  },
  {
    path: '/form',
    name: 'Form',
    component: Home,
    children: [{
        path: '/regExpInput',
        name: 'RegExpInput',
        component: demos.RegexpInputDemo
      },
      {
        path: '/commonSelect',
        name: 'CommonSelect',
        component: demos.CommonSelectDemo
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router