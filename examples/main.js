import Vue from 'vue'
import App from './App.vue'
import '../components/css/demo.scss'
import Demo from '../components/lib/demo/index'
import Card from "../components/lib/card/index";
import Icon from "../components/lib/icon/index";
import Button from "../components/lib/button/index";
import CheckBox from "../components/lib/checkbox/index";
import CheckBoxGroup from "../components/lib/checkbox-group/index";
import Input from "../components/lib/input/index";
import InputNumber from "../components/lib/input-number/index";
import Radio from "../components/lib/radio/index";
import RadioGroup from "../components/lib/radio-group/index";
import Message from "../components/lib/message/index";
import MessageBox from "../components/lib/message-box/index";
import Modal from "../components/lib/modal/index"
import Toast from "../components/lib/toast/index";
import Form from "../components/lib/form/index";
import FormItem from "../components/lib/form-item/index";
import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';


import router from './router'

// Vue.component('name', Demo);
Vue.use(Demo); // Demo.install -> Vue.component();
Vue.use(Card);
Vue.use(Icon);
Vue.use(Input);
Vue.use(InputNumber)
Vue.use(Button);
Vue.use(CheckBox);
Vue.use(CheckBoxGroup);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(MessageBox);
Vue.use(Message);
Vue.use(Modal);
Vue.use(Toast);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(ElementUI);


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
