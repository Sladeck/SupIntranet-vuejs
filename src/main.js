import Vue from 'vue'
import App from './App.vue'

import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon.vue'
import AgeFilter from './filters/AgeFilter'

Vue.component('icon', Icon)
Vue.filter('age', AgeFilter);

new Vue({
  el: '#app',
  render: h => h(App)
})
