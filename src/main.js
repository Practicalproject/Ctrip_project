import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import { Carousel, Card, Option, CarouselItem, Form, FormItem, Input, Select, Col, DatePicker, TimePicker, Switch, CheckboxGroup, Checkbox, Radio, RadioGroup, Button, Tabs, TabPane } from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Card);
Vue.use(Option);

// 引入API
import { default as API } from "@/utils/api"

Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Select)
Vue.use(Col)
Vue.use(DatePicker)
Vue.use(TimePicker)
Vue.use(Switch)
Vue.use(CheckboxGroup)
Vue.use(Checkbox)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Button)
Vue.use(Tabs)
Vue.use(TabPane)
new Vue({
  beforeCreate() {
    Vue.prototype.$API = API
  },
  render: h => h(App),
  router
}).$mount('#app')
