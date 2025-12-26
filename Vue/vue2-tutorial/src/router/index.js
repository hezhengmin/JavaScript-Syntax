import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/basic',
    name: 'Basic',
    component: () => import('../views/01-Basic/Index.vue'),
    children: [
      {
        path: 'intro',
        name: 'Intro',
        component: () => import('../views/01-Basic/Intro.vue')
      },
      {
        path: 'data-binding',
        name: 'DataBinding',
        component: () => import('../views/01-Basic/DataBinding.vue')
      }
    ]
  },
  {
    path: '/events',
    name: 'Events',
    component: () => import('../views/02-Events/Index.vue'),
    children: [
      {
        path: 'basic',
        name: 'EventBasic',
        component: () => import('../views/02-Events/Basic.vue')
      },
      {
        path: 'modifiers',
        name: 'EventModifiers',
        component: () => import('../views/02-Events/Modifiers.vue')
      },
      {
        path: 'keyboard',
        name: 'KeyboardEvents',
        component: () => import('../views/02-Events/Keyboard.vue')
      }
    ]
  },
  {
    path: '/computed',
    name: 'Computed',
    component: () => import('../views/03-Computed/Index.vue'),
    children: [
      {
        path: 'name-demo',
        name: 'ComputedNameDemo',
        component: () => import('../views/03-Computed/NameDemo.vue')
      },
      {
        path: 'weather-demo',
        name: 'ComputedWeatherDemo',
        component: () => import('../views/03-Computed/WeatherDemo.vue')
      }
    ]
  },
  {
    path: '/watch',
    name: 'Watch',
    component: () => import('../views/04-Watch/Index.vue'),
    children: [
      {
        path: 'weather',
        name: 'WatchWeather',
        component: () => import('../views/04-Watch/Weather.vue')
      },
      {
        path: 'deep',
        name: 'WatchDeep',
        component: () => import('../views/04-Watch/Deep.vue')
      }
    ]
  },
  {
    path: '/class-style',
    name: 'ClassStyle',
    component: () => import('../views/05-ClassStyle/Index.vue')
  },
  {
    path: '/conditional',
    name: 'Conditional',
    component: () => import('../views/06-Conditional/Index.vue')
  },
  {
    path: '/list',
    name: 'List',
    component: () => import('../views/07-List/Index.vue'),
    children: [
      {
        path: 'basic',
        name: 'ListBasic',
        component: () => import('../views/07-List/Basic.vue')
      },
      {
        path: 'key',
        name: 'ListKey',
        component: () => import('../views/07-List/Key.vue')
      },
      {
        path: 'filter',
        name: 'ListFilter',
        component: () => import('../views/07-List/Filter.vue')
      },
      {
        path: 'sort',
        name: 'ListSort',
        component: () => import('../views/07-List/Sort.vue')
      }
    ]
  },
  {
    path: '/form',
    name: 'Form',
    component: () => import('../views/08-Form/Index.vue')
  },
  {
    path: '/directives',
    name: 'Directives',
    component: () => import('../views/09-Directives/Index.vue')
  },
  {
    path: '/lifecycle',
    name: 'Lifecycle',
    component: () => import('../views/10-Lifecycle/Index.vue')
  },
  {
    path: '/component',
    name: 'Component',
    component: () => import('../views/11-Component/Index.vue'),
    children: [
      {
        path: 'basic',
        name: 'ComponentBasic',
        component: () => import('../views/11-Component/Basic.vue')
      },
      {
        path: 'props',
        name: 'ComponentProps',
        component: () => import('../views/11-Component/Props.vue')
      },
      {
        path: 'emit',
        name: 'ComponentEmit',
        component: () => import('../views/11-Component/Emit.vue')
      },
      {
        path: 'slot',
        name: 'ComponentSlot',
        component: () => import('../views/11-Component/Slot.vue')
      }
    ]
  },
  {
    path: '/filters',
    name: 'Filters',
    component: () => import('../views/12-Filters/Index.vue')
  },
  {
    path: '/storage',
    name: 'Storage',
    component: () => import('../views/13-Storage/Index.vue')
  },
  {
    path: '/transition',
    name: 'Transition',
    component: () => import('../views/14-Transition/Index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
