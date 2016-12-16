import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(BootstrapVue);
Vue.use(VueRouter);

const router = new VueRouter({ routes, linkActiveClass: 'active' })
const app = new Vue({ router }).$mount('#app')
