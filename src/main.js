import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import { Carousel, CarouselItem, Card } from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Card);
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
