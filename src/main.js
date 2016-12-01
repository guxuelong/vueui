import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import DemoList from './demos/demoList.vue'
import About from './demos/about.vue'
import Button from './demos/button.vue'
import Index from './demos/index.vue'
import Input from './demos/input.vue'
import Alert from './demos/alert.vue'
import Switch from './demos/switch.vue'
import Card from './demos/card.vue'
import Tab from './demos/tab.vue'
import Cell from './demos/cell.vue'

const routes = [
  { path: '/', component: Index, name: 'index' },
  { path: '/demolist', component: DemoList, name: 'demolist' },
  { path: '/about', component: About, name: 'donate' },
  { path: '/demo/button', component: Button, name: 'button' },
  { path: '/demo/input', component: Input, name: 'input' },
  { path: '/demo/alert', component: Alert, name: 'alert' },
  { path: '/demo/switch', component: Switch, name: 'switch' },
  { path: '/demo/card', component: Card, name: 'card' },
  { path: '/demo/tab', component: Tab, name: 'tab' },
  { path: '/demo/cell', component: Cell, name: 'cell' }
]
Vue.use(Router)

const router = new Router({
  routes
})

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
