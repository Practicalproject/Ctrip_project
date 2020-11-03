import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import { Carousel, CarouselItem } from 'element-ui';
Vue.use(Carousel);
Vue.use(CarouselItem);
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
