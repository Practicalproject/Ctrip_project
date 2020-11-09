import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
//  引入store
import store from "@/store"
import {
  Carousel,
  Card,
  Option,
  CarouselItem,
  Form,
  FormItem,
  Input,
  Select,
  Col,
  DatePicker,
  TimePicker,
  Switch,
  CheckboxGroup,
  Checkbox,
  Radio,
  RadioGroup,
  Button,
  Tabs,
  TabPane,
  Message,
  Steps,
  Step,
  TimeSelect,
  Cascader,
  Backtop
} from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Card);
Vue.use(Option);

// 高德地图
// import AmapVue from "@amap/amap-vue";
import AmapVueConfig from '@amap/amap-vue/lib/config';

AmapVueConfig.key = '01f74d729627b2a02e27c22d4546c4e5';
// Vue.use(AmapVue);
//图片懒加载
import VueLazyload from 'vue-lazyload'
import loading from '@/assets/images/loading.gif'
// 在图片界面没有进入到可视范围前不加载, 在没有得到图片前先显示loading图片
Vue.use(VueLazyload, { // 内部自定义了一个指令lazy
    loading,  // 指定未加载得到图片之前的loading图片
})


// 引入API
import * as API from "@/utils/api"
Vue.use(Backtop);
Vue.use(Cascader);
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
Vue.use(Steps)
Vue.use(Step)
Vue.use(TimeSelect)
Vue.prototype.$message = Message;


new Vue({
    beforeCreate() {
        Vue.prototype.$API = API
    },
    render: h => h(App),
    router,
    store
}).$mount('#app')
