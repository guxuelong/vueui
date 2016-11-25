import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import News from './components/MNews.vue'
import Zone from './components/MZone.vue'
import DemoList from './demos/demoList.vue'
import Donate from './demos/donate.vue'
import Button from './demos/button.vue'
import Index from './demos/index.vue'
import Input from './demos/input.vue'
import Alert from './demos/alert.vue'
import Switch from './demos/switch.vue'
import Card from './demos/card.vue'
import Tab from './demos/tab.vue'

const routes = [
  { path: '/', component: Index, name: 'index' },
  { path: '/news', component: News, name: 'news' },
  { path: '/zone', component: Zone, name: 'zone' },
  { path: '/demolist', component: DemoList, name: 'demolist' },
  { path: '/donate', component: Donate, name: 'donate' },
  { path: '/demo/button', component: Button, name: 'button' },
  { path: '/demo/input', component: Input, name: 'input' },
  { path: '/demo/alert', component: Alert, name: 'alert' },
  { path: '/demo/switch', component: Switch, name: 'switch' },
  { path: '/demo/card', component: Card, name: 'card' },
  { path: '/demo/tab', component: Tab, name: 'tab' }
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
