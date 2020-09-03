import Vue from 'vue'
import App from './App.vue'

import img from './assets/test.jpg';

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')