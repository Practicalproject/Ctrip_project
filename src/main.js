import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
<<<<<<< HEAD
import { Carousel,Card,Option } from 'element-ui';
Vue.use(Carousel);
Vue.use(Card);
Vue.use(Option);
=======
import { Carousel, CarouselItem, Card } from 'element-ui';
>>>>>>> d73d8c289dc8a284676feafe9ff7705f8eb8e04f

import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Card);
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
