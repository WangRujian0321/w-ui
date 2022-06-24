import Vue from 'vue'
import App from './App.vue'
import '../components/css/demo.scss'
import Demo from '../components/lib/demo/index'
import Card from "../components/lib/card/index";
import Icon from "../components/lib/icon/index";
import Button from "../components/lib/button/index";
import CheckBox from "../components/lib/checkbox/index";
import CheckBoxGroup from "../components/lib/checkbox-group/index";

import router from './router'

// Vue.component('name', Demo);
Vue.use(Demo); // Demo.install -> Vue.component();
Vue.use(Card);
Vue.use(Icon);
Vue.use(Button);
Vue.use(CheckBox);
Vue.use(CheckBoxGroup);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
