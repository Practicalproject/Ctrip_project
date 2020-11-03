import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import { Carousel, Card, Option, CarouselItem } from 'element-ui';


import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Card);
Vue.use(Option);
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
